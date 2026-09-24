import { icon } from "../components/icons.js?v=0.2.3";

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
        <div class="hero-brand">
          <img src="./img/logo-quiroz.jpeg" alt="" />
          <div>
            <span>Escenario formativo</span>
            <strong>${course.scenario}</strong>
          </div>
        </div>
        <div class="hero-stats">
          <span><strong>7</strong> momentos</span>
          <span><strong>35</strong> preguntas</span>
          <span><strong>${course.price.amount}€</strong> pago único</span>
        </div>
      </aside>
    </div>

    <section class="intro-showcase">
      <div class="section-title">
        <span class="eyebrow subtle">Tu primer día, paso a paso</span>
        <h2>Una experiencia visual antes de entrar a trabajar.</h2>
      </div>
      <div class="intro-visual-grid">
        <article class="intro-visual-card large">
          <img src="./img/module-1-hero.png" alt="Llegada al bar antes de empezar el turno" />
          <div>
            <span>08:00</span>
            <h3>Llegas al bar</h3>
            <p>Actitud, observación e iniciativa desde el primer minuto.</p>
          </div>
        </article>
        <article class="intro-visual-card">
          <img src="./img/module-4-hero.png" alt="Preparación de cafés durante la mañana" />
          <div>
            <span>09:30</span>
            <h3>Cafés</h3>
            <p>Flujo de barra, pedidos y zona de trabajo.</p>
          </div>
        </article>
        <article class="intro-visual-card">
          <img src="./img/module-6-hero.png" alt="Servicio de comedor durante el turno" />
          <div>
            <span>13:30</span>
            <h3>Comedor</h3>
            <p>Servicio, platos, retirada y comunicación.</p>
          </div>
        </article>
      </div>
    </section>

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
