import { icon } from "../components/icons.js?v=0.2.3";
import {
  renderAdviceCard,
  renderChapterBanner,
  renderInlineTestPreview,
  renderMediaFrame,
  renderMistakeCard,
  renderPracticeCard,
  renderReminderCard,
  renderSummaryPanel,
} from "../components/learning-components.js?v=0.2.3";
import { getModuleById, getNextModule, isModuleUnlocked } from "../services/course-service.js?v=0.2.3";
import { getState, saveState } from "../services/storage-service.js?v=0.2.3";
import { moduleContent } from "../data/course-content.js?v=0.2.3";
import { gradeQuiz } from "../services/quiz-service.js?v=0.2.3";

export const renderLesson = ({ state, course, region }) => {
  const moduleId = state.params.moduleId || "arrival";
  const module = getModuleById(moduleId);
  const content = moduleContent[module.id] || { blocks: [], quiz: [] };
  const mode = state.params.mode || "learn";

  if (!isModuleUnlocked(state, course, module.id) && !state.progress[module.id]?.completed) {
    return `
      <section class="view">
        <article class="test-shell quiz-result-shell">
          <span class="eyebrow subtle">Módulo bloqueado</span>
          ${icon("lock")}
          <h2>Completa el módulo anterior para continuar</h2>
          <p class="lesson-copy">El recorrido está diseñado para avanzar como un primer turno real, paso a paso.</p>
          <button class="btn" data-route="course">${icon("book")}Volver al recorrido</button>
        </article>
      </section>
    `;
  }

  if (state.params.completed === true || state.params.completed === "true") {
    return renderCompletion({ module, course, state });
  }

  if (mode === "test") {
    return renderTest({ state, module, content });
  }

  if (mode === "result") {
    return renderQuizResult({ state, module, content });
  }

  return `
    <section class="view lesson-view chapter-template">
      <article class="chapter-shell">
        <header class="chapter-hero">
          <div class="chapter-hero-copy">
            <span class="chapter-time">${module.time}</span>
            <span class="eyebrow">${region.name} · ${region.province}</span>
            <span class="chapter-label">${content.label || `Módulo ${module.order}`}</span>
            <h1>${module.title}</h1>
            <p class="lesson-copy">${content.objective || module.summary}</p>
          </div>
          ${renderChapterBanner({
            label: `${module.time} · ${module.title}`,
            src: content.media?.hero,
            brand: content.media?.brand,
          })}
        </header>

        <section class="chapter-section intro-block">
          <span class="chapter-step">01</span>
          <div>
            <h2>Introducción breve</h2>
            <p class="lesson-copy">${content.introduction || "Texto de ejemplo. Aqui se presentara el momento del turno y el objetivo del capitulo antes de entrar en la practica."}</p>
          </div>
        </section>

        <section class="chapter-section">
          <span class="chapter-step">02</span>
          <div class="chapter-section-content">
            <div class="component-head">
              ${icon("book")}
              <h2>Bloques de explicación</h2>
            </div>
            <div class="content-grid">
              ${renderContentBlocks(content.blocks)}
            </div>
          </div>
        </section>

        <section class="chapter-section">
          <span class="chapter-step">03</span>
          ${renderAdviceCard(content.advice || { title: "Consejo del encargado", body: "Texto de ejemplo. Consejo breve, claro y aplicable al turno." })}
        </section>

        <section class="chapter-section">
          <span class="chapter-step">04</span>
          ${renderMistakeCard(content.mistake || { title: "Error frecuente", body: "Texto de ejemplo. Error comun que el alumno debe detectar y evitar." })}
        </section>

        <section class="chapter-section">
          <span class="chapter-step">05</span>
          ${renderReminderCard(content.reminder || { title: "Recuerda", body: "Texto de ejemplo. Idea corta para fijar antes de seguir." })}
        </section>

        <section class="chapter-section">
          <span class="chapter-step">06</span>
          ${renderPracticeCard(content.practice || { title: "Mini práctica" })}
        </section>

        <section class="chapter-section">
          <span class="chapter-step">07</span>
          ${renderInlineTestPreview({
            moduleId: module.id,
            body: content.quiz?.length ? "Comprueba lo aprendido antes de continuar." : "Test preparado. Las preguntas se añadirán después.",
          })}
        </section>

        <section class="chapter-section">
          <span class="chapter-step">08</span>
          ${renderSummaryPanel(content.summary || { title: "Resumen", body: "Texto de ejemplo. Cierre del capitulo con las ideas que deben quedar claras antes de continuar." })}
        </section>

        <footer class="chapter-footer">
          <button class="btn secondary" data-route="course">${icon("book")}Ver recorrido</button>
          <button class="btn chapter-continue" data-start-test="${module.id}">Continuar ${icon("arrow")}</button>
        </footer>
      </article>
    </section>
  `;
};

const renderContentBlocks = (blocks = []) => {
  const items = blocks.length
    ? blocks
    : [
        { title: "Bloque 1", paragraphs: ["Texto de ejemplo para explicar una idea clave del capitulo."] },
        { title: "Bloque 2", paragraphs: ["Texto de ejemplo para una situación real del primer turno."] },
        { title: "Bloque 3", paragraphs: ["Texto de ejemplo para cerrar la explicación antes de practicar."] },
      ];

  return items.map(renderContentBlock).join("");
};

const renderContentBlock = (block) => `
  <article class="content-block rich-content-block ${block.type ? `content-${block.type}` : ""}">
    <h3>${block.title}</h3>
    ${block.media ? renderMediaFrame({ ...block.media, ratio: block.media.ratio || "compact" }) : ""}
    ${(block.paragraphs || []).map((paragraph) => `<p class="lesson-copy">${paragraph}</p>`).join("")}
    ${block.highlight ? `<strong class="content-highlight">${block.highlight}</strong>` : ""}
    ${block.orderedList ? renderActionSteps(block.orderedList) : ""}
    ${block.list ? `<ul>${block.list.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""}
    ${block.quotes ? block.quotes.map((quote) => `<blockquote>${quote}</blockquote>`).join("") : ""}
    ${block.closing ? `<p class="lesson-copy">${block.closing}</p>` : ""}
  </article>
`;

const renderActionSteps = (items) => `
  <div class="action-steps">
    ${items
      .map(
        (item, index) => `
          <div>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${item}</strong>
          </div>
        `,
      )
      .join("")}
  </div>
`;

const renderTest = ({ state, module, content }) => {
  const questions = content.quiz || [];
  const questionIndex = Number(state.params.questionIndex || 0);
  const currentQuestion = questions[questionIndex];
  const attempt = state.quizAttempts[module.id];

  if (!questions.length) {
    return `
      <section class="view">
        <article class="test-shell">
          <div class="test-topline">
            <span class="eyebrow subtle">Test del capítulo</span>
            <span>0/0</span>
          </div>
          <div class="progress-track"><div class="progress-bar" style="width: 0%"></div></div>
          <div class="empty-state">
            <h3>Test preparado</h3>
            <p>La interfaz ya admite enunciado, varias respuestas, explicación correcta, explicaciones de error, botón Siguiente e indicador de progreso.</p>
          </div>
          <div class="quiz-placeholder-list">
            <button class="answer" disabled>Respuesta pendiente</button>
            <button class="answer" disabled>Respuesta pendiente</button>
            <button class="answer" disabled>Respuesta pendiente</button>
          </div>
          <div class="lesson-actions">
            <button class="btn secondary" data-back-learn="${module.id}">${icon("book")}Volver al capítulo</button>
            <button class="btn" data-complete-module="${module.id}">${icon("check")}Simular aprobado</button>
          </div>
        </article>
      </section>
    `;
  }

  const progress = Math.round(((questionIndex + 1) / questions.length) * 100);

  return `
    <section class="view">
      <form class="test-shell" data-quiz-form>
        <div class="test-topline">
          <span class="eyebrow subtle">Pregunta ${questionIndex + 1}</span>
          <span>${questionIndex + 1}/${questions.length}</span>
        </div>
        <div class="progress-track"><div class="progress-bar" style="width: ${progress}%"></div></div>
        <h2>${currentQuestion.prompt}</h2>
        <div class="quiz-box">
          ${currentQuestion.options
            .map(
              (option) => `
                <label class="answer" data-quiz-option data-correct="${option.isCorrect ? "true" : "false"}">
                  <input type="radio" name="${currentQuestion.id}" value="${option.id}" required />
                  <span>${option.label}</span>
                  <small>${option.isCorrect ? currentQuestion.correctExplanation : option.explanation}</small>
                </label>
              `,
            )
            .join("")}
        </div>
        ${attempt ? `<p class="lesson-copy">Ultima nota: ${attempt.score}. Puedes repetir el test.</p>` : ""}
        <div class="lesson-actions">
          <button class="btn secondary" type="button" data-back-learn="${module.id}">${icon("book")}Volver</button>
          <button class="btn" type="submit">${questionIndex + 1 === questions.length ? "Terminar" : "Siguiente"} ${icon("arrow")}</button>
        </div>
      </form>
    </section>
  `;
};

const renderCompletion = ({ module, course, state }) => {
  const nextModule = getNextModule(course, module.id);
  const content = moduleContent[module.id] || {};
  const completion = content.completion || {
    eyebrow: "Módulo completado",
    title: "Módulo completado.",
    body: "Has terminado este capítulo y puedes continuar con el siguiente punto del turno.",
    points: [],
  };
  const attempt = state.quizAttempts?.[module.id];

  return `
    <section class="view">
      <article class="completion-screen">
        <div class="completion-animation" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <span class="eyebrow subtle">${completion.eyebrow}</span>
        <h2>${completion.title}</h2>
        <p class="lesson-copy">${completion.body}</p>
        <div class="completion-meta">
          <span>${module.time} · ${module.title}</span>
          ${attempt ? `<strong>${attempt.score}%</strong>` : ""}
        </div>
        ${
          completion.points?.length
            ? `
              <div class="completion-points">
                ${completion.points.map((point) => `<span>${icon("check")}${point}</span>`).join("")}
              </div>
            `
            : ""
        }
        <button class="btn" ${nextModule ? `data-next-module="${nextModule.id}"` : 'data-route="dashboard"'}>
          ${icon("arrow")}${nextModule ? "Continuar con el siguiente capítulo" : "Volver al dashboard"}
        </button>
      </article>
    </section>
  `;
};

const renderQuizResult = ({ state, module, content }) => {
  const attempt = state.quizAttempts?.[module.id];
  const passed = (attempt?.score || 0) >= 70;
  const questions = content.quiz || [];

  if (!attempt) {
    return `
      <section class="view">
        <article class="test-shell quiz-result-shell">
          <span class="eyebrow subtle">Resultado</span>
          <h2>Test pendiente</h2>
          <p class="lesson-copy">Todavía no hay una nota guardada para este módulo.</p>
          <div class="lesson-actions">
            <button class="btn" data-start-test="${module.id}">${icon("play")}Comenzar test</button>
          </div>
        </article>
      </section>
    `;
  }

  return `
    <section class="view">
      <article class="test-shell quiz-result-shell ${passed ? "passed" : "failed"}">
        <span class="eyebrow subtle">${passed ? "Test aprobado" : "Test no superado"}</span>
        <div class="quiz-score-ring" aria-label="Nota ${attempt.score}%">
          <strong>${attempt.score}%</strong>
          <span>${attempt.correct}/${attempt.total}</span>
        </div>
        <h2>${passed ? "Buen trabajo. Ya puedes cerrar el módulo." : "Repasa la mentalidad antes de avanzar."}</h2>
        <p class="lesson-copy">
          ${
            passed
              ? "Has demostrado que entiendes la actitud que se espera al llegar al bar: observar, preguntar y ayudar con criterio."
              : "Necesitas al menos un 70% para completar el módulo. Repite el test después de revisar las explicaciones."
          }
        </p>
        <div class="quiz-result-review">
          ${questions
            .map((question, index) => {
              const detail = attempt.details?.find((item) => item.questionId === question.id);
              const correctOption = question.options.find((option) => option.id === detail?.correctOptionId);
              return `
                <article class="${detail?.isCorrect ? "correct" : "wrong"}">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>${question.prompt}</strong>
                    <p>${detail?.isCorrect ? "Correcta" : `Respuesta correcta: ${correctOption?.label || "No disponible"}`}</p>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
        <div class="lesson-actions">
          <button class="btn secondary" data-back-learn="${module.id}">${icon("book")}Repasar módulo</button>
          <button class="btn secondary" data-start-test="${module.id}">${icon("play")}Repetir test</button>
          ${
            passed
              ? `<button class="btn" data-show-completion="${module.id}">${icon("arrow")}Ver módulo completado</button>`
              : ""
          }
        </div>
      </article>
    </section>
  `;
};

export const bindLesson = ({ navigate }) => {
  document.querySelectorAll("[data-practice-card]").forEach((card) => {
    const options = [...card.querySelectorAll("[data-practice-option]")];

    options.forEach((option) => {
      option.addEventListener("click", () => {
        options.forEach((item) => {
          const isCorrect = item.dataset.correct === "true";
          item.classList.toggle("correct", isCorrect);
          item.classList.toggle("wrong", item === option && !isCorrect);
          item.disabled = true;
        });

        card.classList.add("answered");
      });
    });
  });

  document.querySelectorAll("[data-start-test]").forEach((button) => {
    button.addEventListener("click", (event) => {
      navigate("lesson", { moduleId: event.currentTarget.dataset.startTest, mode: "test", questionIndex: 0 });
    });
  });

  document.querySelector("[data-back-learn]")?.addEventListener("click", (event) => {
    navigate("lesson", { moduleId: event.currentTarget.dataset.backLearn, mode: "learn" });
  });

  document.querySelector("[data-next-module]")?.addEventListener("click", (event) => {
    navigate("lesson", { moduleId: event.currentTarget.dataset.nextModule, mode: "learn" });
  });

  document.querySelector("[data-show-completion]")?.addEventListener("click", (event) => {
    navigate("lesson", { moduleId: event.currentTarget.dataset.showCompletion, completed: true, mode: "complete" });
  });

  const quizForm = document.querySelector("[data-quiz-form]");

  quizForm?.querySelectorAll("input[type='radio']").forEach((input) => {
    input.addEventListener("change", () => {
      const options = [...quizForm.querySelectorAll("[data-quiz-option]")];

      options.forEach((option) => {
        const isCorrect = option.dataset.correct === "true";
        const isSelected = option.contains(input);

        option.classList.toggle("correct", isCorrect);
        option.classList.toggle("wrong", isSelected && !isCorrect);
      });

      quizForm.classList.add("answered");
    });
  });

  quizForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const state = getState();
    const moduleId = state.params.moduleId || "arrival";
    const questions = moduleContent[moduleId]?.quiz || [];
    const questionIndex = Number(state.params.questionIndex || 0);
    const formData = new FormData(event.currentTarget);
    const currentAnswer = Object.fromEntries([...formData.entries()]);
    const answers = {
      ...(state.quizDrafts?.[moduleId] || {}),
      ...currentAnswer,
    };

    if (questionIndex + 1 < questions.length) {
      saveState({
        ...state,
        quizDrafts: {
          ...state.quizDrafts,
          [moduleId]: answers,
        },
        route: "lesson",
        params: { moduleId, mode: "test", questionIndex: questionIndex + 1 },
      });
      navigate("lesson", { moduleId, mode: "test", questionIndex: questionIndex + 1 });
      return;
    }

    const result = gradeQuiz(questions, answers);
    const passed = result.score >= 70;

    saveState({
      ...state,
      progress: passed
        ? {
            ...state.progress,
            [moduleId]: {
              completed: true,
              minutes: (state.progress[moduleId]?.minutes || 0) + 10,
              completedAt: new Date().toISOString(),
            },
          }
        : state.progress,
      quizAttempts: {
        ...state.quizAttempts,
        [moduleId]: {
          ...result,
          completedAt: new Date().toISOString(),
        },
      },
      quizDrafts: {
        ...state.quizDrafts,
        [moduleId]: {},
      },
      route: "lesson",
      params: {
        moduleId,
        mode: "result",
      },
    });

    navigate("lesson", { moduleId, mode: "result" });
  });

  document.querySelector("[data-complete-module]")?.addEventListener("click", (event) => {
    const state = getState();
    const moduleId = event.currentTarget.dataset.completeModule;
    saveState({
      ...state,
      progress: {
        ...state.progress,
        [moduleId]: {
          completed: true,
          minutes: (state.progress[moduleId]?.minutes || 0) + 10,
          completedAt: new Date().toISOString(),
        },
      },
      route: "lesson",
      params: { moduleId, completed: true, mode: "complete" },
    });
    navigate("lesson", { moduleId, completed: true, mode: "complete" });
  });
};
