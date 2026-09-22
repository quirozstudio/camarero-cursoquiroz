import { icon } from "../components/icons.js";
import { getCourseStats } from "../services/course-service.js";

export const renderDashboard = ({ state, course }) => {
  const stats = getCourseStats(state, course);
  const primaryAction = stats.allModulesCompleted
    ? {
        route: "exam",
        eyebrow: stats.finalExamPassed ? "Preparación completada" : "Siguiente objetivo",
        title: stats.finalExamPassed ? "Certificado listo" : "Hacer examen final",
        description: stats.finalExamPassed ? "Ya puedes consultar tu certificado." : "Demuestra lo aprendido en los siete módulos.",
        button: stats.finalExamPassed ? "Ver certificado" : "Comenzar examen final",
      }
    : {
        route: "lesson",
        moduleId: stats.nextModule.id,
        eyebrow: "Objetivo actual",
        title: "Continuar mi primer turno",
        description: `${stats.nextModule.time} · ${stats.nextModule.title}`,
        button: "Continuar mi primer turno",
      };
  const lastActivity = stats.lastActivity
    ? new Date(stats.lastActivity).toLocaleDateString("es-ES", { day: "2-digit", month: "short" })
    : "Sin actividad";

  return `
    <section class="view dashboard-view">
      <div class="section-title">
        <div>
          <h2>Tu turno de hoy</h2>
          <p>Estoy más cerca de conseguir trabajo.</p>
        </div>
      </div>
      <article class="turn-card">
        <div class="turn-copy">
          <span class="eyebrow">${primaryAction.eyebrow}</span>
          <h3>${primaryAction.title}</h3>
          <p>${primaryAction.description}</p>
        </div>
        <div class="turn-progress" aria-label="Progreso del curso">
          <strong>${stats.percent}%</strong>
          <div class="progress-track"><div class="progress-bar" style="width: ${stats.percent}%"></div></div>
        </div>
        <button
          class="btn turn-btn"
          ${primaryAction.route === "lesson" ? `data-continue-module="${primaryAction.moduleId}"` : `data-route="${primaryAction.route}"`}
        >${icon(primaryAction.route === "lesson" ? "play" : stats.finalExamPassed ? "award" : "check")}${primaryAction.button}</button>
      </article>
      <div class="metrics student-metrics">
        <article class="metric">${icon("chart")}<strong>${stats.percent}%</strong><span>Progreso</span></article>
        <article class="metric">${icon(stats.allModulesCompleted ? "check" : "play")}<strong>${stats.allModulesCompleted ? "OK" : String(stats.nextModule.order).padStart(2, "0")}</strong><span>${stats.allModulesCompleted ? "Módulos completados" : "Siguiente módulo"}</span></article>
        <article class="metric">${icon("clock")}<strong>${stats.minutes}</strong><span>Tiempo estudiado</span></article>
        <article class="metric">${icon("award")}<strong>${stats.averageScore}</strong><span>Nota media</span></article>
        <article class="metric">${icon("lock")}<strong>${stats.certificateCount}</strong><span>Certificados</span></article>
        <article class="metric">${icon("check")}<strong>${lastActivity}</strong><span>Última actividad</span></article>
      </div>
      <div class="grid two">
        <article class="card">
          <h3>Llega preparado a tu primer día.</h3>
          <p>La experiencia se construye como un turno real en un gastrobar de Pamplona, con situaciones prácticas y criterio de encargado.</p>
        </article>
        <article class="card">
          <h3>Certificado de aprovechamiento</h3>
          <p>No es un título oficial. Es una forma clara de demostrar que has preparado lo básico antes de buscar trabajo.</p>
        </article>
      </div>
    </section>
  `;
};

export const bindDashboard = ({ navigate }) => {
  document.querySelector("[data-continue-module]")?.addEventListener("click", (event) => {
    navigate("lesson", { moduleId: event.currentTarget.dataset.continueModule, mode: "learn" });
  });
};
