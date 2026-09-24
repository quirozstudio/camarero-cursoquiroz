import { icon } from "../components/icons.js?v=0.2.2";
import { buildCertificateDraft } from "../services/certificate-service.js?v=0.2.2";
import { getCourseStats } from "../services/course-service.js?v=0.2.2";
import { getState, saveState } from "../services/storage-service.js?v=0.2.2";

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

  return `
    <section class="view">
      <div class="section-title certificate-heading">
        <div>
          <h2>Certificado</h2>
          <p>Certificado de aprovechamiento listo para imprimir o guardar como PDF.</p>
        </div>
        <button class="btn" data-print-certificate>${icon("award")}Imprimir / Guardar PDF</button>
      </div>
      <article class="certificate-preview certificate-ready" id="certificate-print-area">
        <span class="eyebrow">Aprobado</span>
        <p class="certificate-kicker">PRIMER TURNO</p>
        <h1>${escapeHtml(certificate.courseName)}</h1>
        <p>Se reconoce a</p>
        <h2>${escapeHtml(certificate.studentName)}</h2>
        <p>por haber completado la formación práctica y superado el examen final.</p>
        <div class="certificate-details">
          <span><small>Fecha</small>${escapeHtml(certificate.date)}</span>
          <span><small>Emisor</small>${escapeHtml(certificate.issuer)}</span>
          <span><small>Código</small>${escapeHtml(certificate.code)}</span>
        </div>
        <a class="certificate-code" href="${certificate.verificationUrl}" aria-label="URL de verificación">${certificate.verificationUrl}</a>
        <p class="certificate-note">No es un título oficial. Acredita la finalización de esta formación privada.</p>
      </article>
    </section>
  `;
};

export const bindCertificate = ({ state, course, region }) => {
  if (!state.certificates?.[course.id]) {
    document.querySelector("[data-generate-certificate]")?.addEventListener("click", () => {
      const certificate = buildCertificateDraft({ user: state.user, course, region });
      const currentState = getState();
      saveState({
        ...currentState,
        certificates: { ...currentState.certificates, [course.id]: certificate },
      });
      window.location.reload();
    });
  }

  document.querySelector("[data-print-certificate]")?.addEventListener("click", () => window.print());
};
