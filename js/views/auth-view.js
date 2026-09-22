import { getState, saveState } from "../services/storage-service.js?v=0.2.1";

const escapeHtml = (value = "") =>
  String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);

export const renderAuth = ({ state }) => `
  <section class="auth-wrap">
    <div class="auth-panel">
      <span class="eyebrow subtle">Perfil local</span>
      <h1>Perfil del alumno</h1>
      <p class="lesson-copy">Tu perfil se guarda de forma local en este dispositivo. La conexión con cuentas reales se añadirá al conectar un backend.</p>
      <form class="form-grid" data-profile-form>
        <label class="field">
          <span>Nombre</span>
          <input name="name" value="${escapeHtml(state.user.name)}" placeholder="Nombre del alumno" />
        </label>
        <label class="field">
          <span>Email</span>
          <input name="email" type="email" value="${escapeHtml(state.user.email)}" placeholder="alumno@email.com" />
        </label>
        <button class="btn" type="submit">Guardar perfil</button>
        <p class="form-status" data-profile-status role="status" aria-live="polite"></p>
      </form>
    </div>
  </section>
`;

export const bindAuth = () => {
  document.querySelector("[data-profile-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const state = getState();
    saveState({
      ...state,
      user: {
        name: formData.get("name"),
        email: formData.get("email"),
      },
    });
    document.querySelector("[data-profile-status]").textContent = "Perfil guardado en este dispositivo.";
  });
};
