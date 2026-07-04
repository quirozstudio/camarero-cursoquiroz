import { buildCertificateDraft } from "../services/certificate-service.js";
import { getCourseStats } from "../services/course-service.js";

export const renderCertificate = ({ state, course, region }) => {
  const stats = getCourseStats(state, course);
  const certificate = buildCertificateDraft({ user: state.user, course, region });
  const unlocked = stats.percent === 100 && stats.averageScore >= course.certificate.finalExamMinScore;

  return `
    <section class="view">
      <div class="section-title">
        <div>
          <h2>Certificado</h2>
          <p>Arquitectura preparada para PDF, codigo unico, QR y verificacion publica futura.</p>
        </div>
      </div>
      <article class="certificate-preview">
        <span class="eyebrow">${unlocked ? "Aprobado" : "Bloqueado"}</span>
        <h3>${certificate.courseName}</h3>
        <p>Alumno: ${certificate.studentName}</p>
        <p>Fecha: ${certificate.date}</p>
        <p>Firma: ${certificate.issuer}</p>
        <p class="certificate-code">${certificate.code}</p>
        <div class="empty-state">
          <h3>Generacion PDF pendiente</h3>
          <p>El certificado se activara cuando todos los modulos y el examen final cumplan la nota minima de ${course.certificate.finalExamMinScore}.</p>
        </div>
      </article>
    </section>
  `;
};
