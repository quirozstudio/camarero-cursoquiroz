import { icon } from "../components/icons.js?v=0.2.2";
import { getCourseModules, isModuleUnlocked } from "../services/course-service.js?v=0.2.2";

export const renderCourse = ({ state, course, region }) => {
  const modules = getCourseModules(course);

  return `
    <section class="view first-shift-view">
      <header class="shift-hero">
        <div>
          <span class="eyebrow">${region.name} · ${region.province}</span>
          <h2>Primer Turno</h2>
          <p>Llega preparado a tu primer día. Avanza por una línea temporal inspirada en un turno real en ${course.scenario}.</p>
        </div>
        <div class="shift-hero-panel">
          <strong>${modules.length}</strong>
          <span>momentos del turno</span>
        </div>
      </header>

      <div class="shift-timeline" aria-label="Línea de tiempo de Primer Turno">
        ${modules
          .map((module) => {
            const progress = state.progress[module.id];
            const unlocked = isModuleUnlocked(state, course, module.id);
            const status = progress?.completed ? "Completado" : unlocked ? "Disponible" : "Bloqueado";
            return `
              <article class="timeline-point ${progress?.completed ? "completed" : ""} ${!unlocked ? "locked" : ""}">
                <div class="timeline-rail">
                  <span class="timeline-dot"></span>
                </div>
                <button class="timeline-card" ${unlocked ? `data-open-module="${module.id}"` : "disabled"} aria-disabled="${!unlocked}">
                  <span class="timeline-time">${module.time}</span>
                  <div>
                    <h3>${module.title}</h3>
                    <strong class="timeline-module">${module.moduleName}</strong>
                    <p>${module.summary}</p>
                  </div>
                  <div class="timeline-meta">
                    <span>${module.estimatedMinutes} min</span>
                    <span>${status}</span>
                  </div>
                  <span class="timeline-action">${icon(unlocked ? "arrow" : "lock")}</span>
                </button>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
};

export const bindCourse = ({ navigate }) => {
  document.querySelectorAll("[data-open-module]").forEach((button) => {
    button.addEventListener("click", () => navigate("lesson", { moduleId: button.dataset.openModule, mode: "learn" }));
  });
};
