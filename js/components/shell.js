import { courses } from "../data/courses.js";
import { icon } from "./icons.js";

const navItems = [
  ["home", "Inicio", "home"],
  ["dashboard", "Dashboard", "chart"],
  ["course", "Turno", "book"],
  ["exam", "Examen", "check"],
  ["certificate", "Certificado", "award"],
  ["auth", "Cuenta", "user"],
];

export const renderShell = ({ state, course, region, activeRoute, content }) => `
  <div class="layout">
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">PT</div>
        <span>Primer Turno</span>
      </div>
      ${navItems
        .map(
          ([route, label, iconName]) => `
            <button class="nav-btn ${activeRoute === route ? "active" : ""}" data-route="${route}" title="${label}">
              ${icon(iconName)}
              <span>${label}</span>
            </button>
          `,
        )
        .join("")}
    </aside>
    <main class="main">
      <header class="topbar">
        <div class="course-switcher">
          <select data-course-select aria-label="Seleccionar curso">
            ${courses
              .map((item) => `<option value="${item.id}" ${item.id === course.id ? "selected" : ""}>${item.title}</option>`)
              .join("")}
          </select>
          <span class="region-pill">${region.name} · ${region.province}</span>
        </div>
        <div class="actions">
          <button class="icon-btn" data-theme-toggle title="Cambiar tema">${icon("moon")}</button>
          <button class="avatar" data-route="auth" title="Perfil">${(state.user.name || "A").slice(0, 1)}</button>
        </div>
      </header>
      ${content}
    </main>
  </div>
`;
