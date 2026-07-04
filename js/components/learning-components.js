import { icon } from "./icons.js";

const placeholderText = "Pendiente de contenido.";

export const renderMediaFrame = ({ type = "image", label = "Recurso visual", ratio = "wide", src, alt } = {}) => `
  <figure class="media-frame ${ratio}">
    ${
      src
        ? `
          <img src="${src}" alt="${alt || label}" />
          <figcaption>${label}</figcaption>
        `
        : `
          <div class="media-placeholder">
            ${icon(type === "video" ? "video" : "image")}
            <span>${label}</span>
          </div>
        `
    }
  </figure>
`;

export const renderChapterBanner = ({
  label = "Banner superior con imagen",
  src = "./img/pamplona-training.svg",
  brand,
} = {}) => `
  <figure class="chapter-banner">
    <img src="${src}" alt="${label}" />
    ${
      brand
        ? `
          <div class="chapter-brand-mark" aria-label="${brand.name}">
            <img src="${brand.logo}" alt="" />
            <span>${brand.name}</span>
          </div>
        `
        : ""
    }
    <figcaption>
      <span>${label}</span>
    </figcaption>
  </figure>
`;

export const renderAdviceCard = ({ title = "Consejo", body = placeholderText } = {}) => `
  <article class="learning-card advice-card">
    <div class="learning-card-icon">${icon("spark")}</div>
    <div>
      <h4>${title}</h4>
      <p>${body}</p>
    </div>
  </article>
`;

export const renderMistakeCard = ({ title = "Error frecuente", body = placeholderText } = {}) => `
  <article class="learning-card mistake-card">
    <div class="learning-card-icon">${icon("alert")}</div>
    <div>
      <h4>${title}</h4>
      <p>${body}</p>
    </div>
  </article>
`;

export const renderReminderCard = ({ title = "Recordatorio", body = placeholderText } = {}) => `
  <article class="learning-card reminder-card">
    <div class="learning-card-icon">${icon("pin")}</div>
    <div>
      <h4>${title}</h4>
      <p>${body}</p>
    </div>
  </article>
`;

export const renderPracticeCard = ({
  title = "Mini práctica",
  body = placeholderText,
  steps = [],
  prompt,
  options = [],
  takeaway,
} = {}) => `
  <section class="practice-card" ${options.length ? "data-practice-card" : ""}>
    <div class="component-head">
      ${icon("play")}
      <h3>${title}</h3>
    </div>
    <p>${body}</p>
    ${
      options.length
        ? `
          <div class="practice-scenario">
            <strong>${prompt || "Elige la mejor respuesta."}</strong>
          </div>
          <div class="practice-options">
            ${options
              .map(
                (option) => `
                  <button class="practice-option" type="button" data-practice-option data-correct="${option.isCorrect ? "true" : "false"}">
                    <span>${option.label}</span>
                    <small>${option.feedback}</small>
                  </button>
                `,
              )
              .join("")}
          </div>
          ${takeaway ? `<p class="practice-takeaway" data-practice-takeaway>${takeaway}</p>` : ""}
        `
        : `
          <div class="practice-steps">
            ${(steps.length ? steps : ["Paso 1", "Paso 2", "Paso 3"])
              .map(
                (step, index) => `
                  <article>
                    <span>${String(index + 1).padStart(2, "0")}</span>
                    <p>${step}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        `
    }
  </section>
`;

export const renderGallery = ({ items = [] } = {}) => `
  <section class="gallery-grid">
    ${(items.length ? items : ["Imagen preparada", "Ilustracion preparada", "Detalle visual preparado"])
      .map((item) => renderMediaFrame({ label: item, ratio: "compact" }))
      .join("")}
  </section>
`;

export const renderInlineTestPreview = ({ title = "Test", body = placeholderText, buttonLabel = "Comenzar test", moduleId } = {}) => `
  <section class="inline-test-card">
    <div>
      <span class="eyebrow subtle">Evaluacion</span>
      <h3>${title}</h3>
      <p>${body}</p>
    </div>
    <div class="quiz-placeholder-list">
      <button class="answer" disabled>Respuesta de ejemplo</button>
      <button class="answer" disabled>Respuesta de ejemplo</button>
      <button class="answer" disabled>Respuesta de ejemplo</button>
    </div>
    <button class="btn secondary" data-start-test="${moduleId}">${icon("play")}${buttonLabel}</button>
  </section>
`;

export const renderChecklist = ({ title = "Checklist", items = [] } = {}) => `
  <section class="component-block">
    <div class="component-head">
      ${icon("check")}
      <h4>${title}</h4>
    </div>
    <div class="checklist">
      ${(items.length ? items : Array.from({ length: 4 }))
        .map(
          (item) => `
            <label>
              <input type="checkbox" disabled />
              <span>${item || placeholderText}</span>
            </label>
          `,
        )
        .join("")}
    </div>
  </section>
`;

export const renderDataTable = ({ title = "Tabla", columns = [], rows = [] } = {}) => `
  <section class="component-block">
    <div class="component-head">
      ${icon("table")}
      <h4>${title}</h4>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>${(columns.length ? columns : ["Columna", "Columna", "Columna"]).map((column) => `<th>${column}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${(rows.length ? rows : Array.from({ length: 3 }, () => ["", "", ""]))
            .map((row) => `<tr>${row.map((cell) => `<td>${cell || placeholderText}</td>`).join("")}</tr>`)
            .join("")}
        </tbody>
      </table>
    </div>
  </section>
`;

export const renderDrinkCard = ({ title = "Bebida", meta = "Ficha reutilizable", details = [] } = {}) =>
  renderProductCard({ title, meta, details, iconName: "glass", className: "drink-card" });

export const renderCoffeeCard = ({ title = "Cafe", meta = "Ficha reutilizable", details = [] } = {}) =>
  renderProductCard({ title, meta, details, iconName: "coffee", className: "coffee-card" });

export const renderBeerCard = ({ title = "Cerveza", meta = "Ficha reutilizable", details = [] } = {}) =>
  renderProductCard({ title, meta, details, iconName: "beer", className: "beer-card" });

const renderProductCard = ({ title, meta, details, iconName, className }) => `
  <article class="product-card ${className}">
    <div class="product-icon">${icon(iconName)}</div>
    <div>
      <h4>${title}</h4>
      <p>${meta}</p>
    </div>
    <ul>
      ${(details.length ? details : ["Formato", "Servicio", "Notas"])
        .map((detail) => `<li>${detail || placeholderText}</li>`)
        .join("")}
    </ul>
  </article>
`;

export const renderSummaryPanel = ({ title = "Resumen", body = placeholderText } = {}) => `
  <section class="summary-panel">
    <span class="eyebrow subtle">Cierre del modulo</span>
    <h3>${title}</h3>
    <p>${body}</p>
  </section>
`;
