import { icon } from "../components/icons.js?v=0.2.4";
import { buildCertificateDraft } from "../services/certificate-service.js?v=0.2.4";
import { getCourseStats } from "../services/course-service.js?v=0.2.4";
import { getState, saveState } from "../services/storage-service.js?v=0.2.4";

const escapeHtml = (value = "") =>
  String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);

export const renderCertificate = ({ state, course, region }) => {
  const stats = getCourseStats(state, course);
  const certificate = state.certificates?.[course.id];
  const unlocked = stats.certificateUnlocked;

  if (!unlocked) {
    return `
      <section class="view">
        <div class="section-title">
          <div>
            <h2>Certificado</h2>
            <p>Obtén una acreditación de aprovechamiento al completar el recorrido y superar el examen final.</p>
          </div>
        </div>
        <article class="certificate-preview certificate-locked">
          <span class="eyebrow">Bloqueado</span>
          <h3>Tu certificado todavía no está disponible</h3>
          <div class="certificate-requirements">
            <span class="${stats.allModulesCompleted ? "done" : ""}">${icon(stats.allModulesCompleted ? "check" : "lock")}Completar los ${stats.totalModules} módulos</span>
            <span class="${stats.finalExamPassed ? "done" : ""}">${icon(stats.finalExamPassed ? "check" : "lock")}Superar el examen final con un ${course.certificate.finalExamMinScore}%</span>
          </div>
          <div class="lesson-actions">
            <button class="btn secondary" data-route="course">${icon("book")}Ver recorrido</button>
            ${stats.allModulesCompleted && !stats.finalExamPassed ? `<button class="btn" data-route="exam">${icon("check")}Hacer examen final</button>` : ""}
          </div>
        </article>
      </section>
    `;
  }

  if (!certificate) {
    return `
      <section class="view">
        <div class="section-title">
          <div>
            <h2>Certificado</h2>
            <p>Has completado todos los requisitos. Genera ahora tu certificado.</p>
          </div>
        </div>
        <article class="certificate-preview certificate-ready">
          <span class="eyebrow">Requisitos completados</span>
          <h3>Tu certificado está listo para emitirse</h3>
          <p class="lesson-copy">Se guardará en este dispositivo con un código único y podrás imprimirlo o guardarlo como PDF.</p>
          <button class="btn" data-generate-certificate>${icon("award")}Generar certificado</button>
        </article>
      </section>
    `;
  }

  const modulesCompleted = certificate.modulesCompleted ?? stats.completedModules;
  const finalExamScore = Number.isFinite(certificate.finalExamScore) ? certificate.finalExamScore : stats.finalExam?.score ?? null;

  return `
    <section class="view">
      <div class="section-title certificate-heading">
        <div>
          <h2>Certificado</h2>
          <p>Tu acreditación de aprovechamiento está lista para imprimir o guardar como PDF.</p>
        </div>
        <button class="btn" type="button" data-print-certificate>${icon("award")}Imprimir / Guardar PDF</button>
      </div>
      <article class="certificate-preview certificate-ready" id="certificate-print-area" aria-label="Certificado de ${escapeHtml(certificate.studentName)}">
        <div class="certificate-border" aria-hidden="true"></div>
        <div class="certificate-topline">
          <div class="certificate-brand">
            <img src="./img/logo-quiroz.jpeg" alt="" />
            <span>PRIMER TURNO</span>
          </div>
          <div class="certificate-seal">${icon("award")}<span>APROBADO</span></div>
        </div>
        <p class="certificate-kicker">CERTIFICADO DE APROVECHAMIENTO</p>
        <h1>${escapeHtml(certificate.courseName)}</h1>
        <div class="certificate-divider" aria-hidden="true"><span></span><i></i><span></span></div>
        <p class="certificate-intro">Se reconoce que</p>
        <h2>${escapeHtml(certificate.studentName)}</h2>
        <p class="certificate-description">ha completado la formación práctica y superado el examen final de <strong>Primer Turno</strong>.</p>
        <div class="certificate-summary">
          <span><strong>${escapeHtml(modulesCompleted)}</strong><small>módulos completados</small></span>
          <span><strong>${escapeHtml(finalExamScore ?? "—")}<em>${finalExamScore !== null ? "%" : ""}</em></strong><small>resultado del examen</small></span>
        </div>
        <div class="certificate-details">
          <span><small>Fecha de emisión</small>${escapeHtml(certificate.date)}</span>
          <span><small>Emisor</small>${escapeHtml(certificate.issuer)}</span>
          <span><small>Código de emisión</small>${escapeHtml(certificate.code)}</span>
        </div>
        <div class="certificate-footer">
          <div class="certificate-signature">
            <span class="signature-line">Quiroz Academy</span>
            <small>Dirección académica</small>
          </div>
          <div class="certificate-verification">
            <strong>${escapeHtml(certificate.code)}</strong>
            <small>Conserva este código como referencia de tu certificado.</small>
          </div>
        </div>
        <p class="certificate-note">Acreditación de una formación privada. La verificación pública se activará al conectar la plataforma.</p>
      </article>
    </section>
  `;
};

export const bindCertificate = ({ state, course, region, navigate }) => {
  if (!state.certificates?.[course.id]) {
    document.querySelector("[data-generate-certificate]")?.addEventListener("click", () => {
      const currentState = getState();
      const stats = getCourseStats(currentState, course);
      const certificate = buildCertificateDraft({ user: currentState.user, course, region, stats });
      saveState({
        ...currentState,
        certificates: { ...currentState.certificates, [course.id]: certificate },
      });
      navigate("certificate");
    });
  }

  document.querySelector("[data-print-certificate]")?.addEventListener("click", () => window.print());
};
