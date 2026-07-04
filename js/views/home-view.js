import { icon } from "../components/icons.js";

export const renderHome = ({ course, region }) => `
  <section class="view">
    <div class="hero">
      <div class="hero-content">
        <span class="eyebrow">Pamplona · ${region.province}</span>
        <h1>Primer Turno</h1>
        <p>Llega preparado a tu primer día. Una formación práctica, visual y cercana para personas sin experiencia que quieren empezar en hostelería.</p>
        <div class="btn-row">
          <button class="btn" data-route="dashboard">${icon("play")}Continuar mi primer turno</button>
          <button class="btn ghost" data-route="course">${icon("book")}Ver recorrido</button>
        </div>
      </div>
      <aside class="hero-panel">
        <span>Curso regional</span>
        <strong>Pamplona</strong>
        <small>Escenario: ${course.scenario}</small>
        <div class="progress-track"><div class="progress-bar" style="width: 34%"></div></div>
      </aside>
    </div>

    <div class="grid three">
      <article class="card">
        <h3>Práctico</h3>
        <p>El alumno aprende cómo actuar, observar, preguntar y ayudar desde el primer día.</p>
      </article>
      <article class="card">
        <h3>Local</h3>
        <p>El curso empieza en Pamplona y está preparado para crecer con cursos regionales.</p>
      </article>
      <article class="card">
        <h3>Visual</h3>
        <p>Las imágenes enseñan: situaciones reales, comparativas, bebidas, esquemas y mini prácticas.</p>
      </article>
    </div>
  </section>
`;
