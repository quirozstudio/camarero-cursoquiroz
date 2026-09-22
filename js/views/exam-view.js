import { icon } from "../components/icons.js";
import { finalExamTemplates } from "../data/exams.js";
import { getCourseStats } from "../services/course-service.js";
import { gradeQuiz } from "../services/quiz-service.js";
import { getState, saveState } from "../services/storage-service.js";

const getExam = (course) => finalExamTemplates.find((exam) => exam.courseId === course.id) || finalExamTemplates[0];

export const renderExam = ({ state, course }) => {
  const exam = getExam(course);
  const stats = getCourseStats(state, course);

  if (!stats.allModulesCompleted) {
    return `
      <section class="view">
        <article class="test-shell quiz-result-shell">
          <span class="eyebrow subtle">Examen final</span>
          ${icon("lock")}
          <h2>Completa el recorrido antes de examinarte</h2>
          <p class="lesson-copy">Necesitas terminar los ${stats.totalModules} módulos para desbloquear el examen final.</p>
          <div class="lesson-actions">
            <button class="btn" data-route="course">${icon("book")}Volver al recorrido</button>
          </div>
        </article>
      </section>
    `;
  }

  if (state.params.mode === "result") {
    return renderExamResult({ state, course, exam });
  }

  const questionIndex = Number(state.params.questionIndex || 0);
  const question = exam.questionPool[questionIndex] || exam.questionPool[0];
  const draft = state.finalExamDrafts?.[course.id] || {};
  const progress = Math.round(((questionIndex + 1) / exam.questionPool.length) * 100);

  return `
    <section class="view">
      <form class="test-shell" data-final-exam-form>
        <div class="test-topline">
          <span class="eyebrow subtle">Examen final</span>
          <span>Pregunta ${questionIndex + 1}/${exam.questionPool.length}</span>
        </div>
        <div class="progress-track"><div class="progress-bar" style="width: ${progress}%"></div></div>
        <p class="lesson-copy">Superas el examen con un ${course.certificate.finalExamMinScore}% o más.</p>
        <h2>${question.prompt}</h2>
        <div class="quiz-box">
          ${question.options
            .map(
              (option) => `
                <label class="answer" data-exam-option data-correct="${option.isCorrect ? "true" : "false"}">
                  <input type="radio" name="${question.id}" value="${option.id}" ${draft[question.id] === option.id ? "checked" : ""} required />
                  <span>${option.label}</span>
                  <small>${option.isCorrect ? question.correctExplanation : option.explanation}</small>
                </label>
              `,
            )
            .join("")}
        </div>
        <div class="lesson-actions">
          <button class="btn secondary" type="button" data-route="course">${icon("book")}Volver al recorrido</button>
          <button class="btn" type="submit">${questionIndex + 1 === exam.questionPool.length ? "Terminar examen" : "Siguiente"} ${icon("arrow")}</button>
        </div>
      </form>
    </section>
  `;
};

const renderExamResult = ({ state, course, exam }) => {
  const attempt = state.finalExamAttempts?.[course.id];
  const passed = Number(attempt?.score) >= course.certificate.finalExamMinScore;

  if (!attempt) {
    return `
      <section class="view">
        <article class="test-shell quiz-result-shell">
          <span class="eyebrow subtle">Examen final</span>
          <h2>Examen pendiente</h2>
          <p class="lesson-copy">Todavía no hay ningún intento guardado.</p>
          <button class="btn" data-restart-final-exam>${icon("play")}Comenzar examen</button>
        </article>
      </section>
    `;
  }

  return `
    <section class="view">
      <article class="test-shell quiz-result-shell ${passed ? "passed" : "failed"}">
        <span class="eyebrow subtle">${passed ? "Examen aprobado" : "Examen no superado"}</span>
        <div class="quiz-score-ring" aria-label="Nota ${attempt.score}%">
          <strong>${attempt.score}%</strong>
          <span>${attempt.correct}/${attempt.total}</span>
        </div>
        <h2>${passed ? "Has completado tu preparación." : "Aún puedes mejorar el resultado."}</h2>
        <p class="lesson-copy">
          ${
            passed
              ? "Ya puedes generar tu certificado de aprovechamiento."
              : `Necesitas al menos un ${course.certificate.finalExamMinScore}%. Repasa el recorrido y vuelve a intentarlo.`
          }
        </p>
        <div class="quiz-result-review">
          ${exam.questionPool
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
          <button class="btn secondary" data-restart-final-exam>${icon("play")}Repetir examen</button>
          ${passed ? `<button class="btn" data-route="certificate">${icon("award")}Ver certificado</button>` : ""}
        </div>
      </article>
    </section>
  `;
};

export const bindExam = ({ course }) => {
  document.querySelectorAll("[data-restart-final-exam]").forEach((button) => {
    button.addEventListener("click", () => {
      const state = getState();
      saveState({
        ...state,
        finalExamDrafts: { ...state.finalExamDrafts, [course.id]: {} },
        route: "exam",
        params: { mode: "exam", questionIndex: 0 },
      });
      window.location.reload();
    });
  });

  const form = document.querySelector("[data-final-exam-form]");
  if (!form) {
    return;
  }

  form.querySelectorAll("input[type='radio']").forEach((input) => {
    input.addEventListener("change", () => {
      form.querySelectorAll("[data-exam-option]").forEach((option) => {
        const isCorrect = option.dataset.correct === "true";
        const isSelected = option.contains(input);
        option.classList.toggle("correct", isCorrect);
        option.classList.toggle("wrong", isSelected && !isCorrect);
      });
      form.classList.add("answered");
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const state = getState();
    const exam = getExam(course);
    const questionIndex = Number(state.params.questionIndex || 0);
    const question = exam.questionPool[questionIndex];
    const answer = new FormData(form).get(question.id);
    const answers = {
      ...(state.finalExamDrafts?.[course.id] || {}),
      [question.id]: answer,
    };

    if (questionIndex + 1 < exam.questionPool.length) {
      saveState({
        ...state,
        finalExamDrafts: { ...state.finalExamDrafts, [course.id]: answers },
        route: "exam",
        params: { mode: "exam", questionIndex: questionIndex + 1 },
      });
      window.location.reload();
      return;
    }

    const result = gradeQuiz(exam.questionPool, answers);
    saveState({
      ...state,
      finalExamAttempts: {
        ...state.finalExamAttempts,
        [course.id]: { ...result, completedAt: new Date().toISOString() },
      },
      finalExamDrafts: { ...state.finalExamDrafts, [course.id]: {} },
      route: "exam",
      params: { mode: "result" },
    });
    window.location.reload();
  });
};
