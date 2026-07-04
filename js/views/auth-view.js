import { getState, saveState } from "../services/storage-service.js";

export const renderAuth = ({ state }) => `
  <section class="auth-wrap">
    <div class="auth-panel">
      <div class="segmented">
        <button class="active" data-auth-tab="register">Registro</button>
        <button data-auth-tab="login">Entrar</button>
        <button data-auth-tab="recover">Clave</button>
      </div>
      <h1>Perfil del alumno</h1>
      <p class="lesson-copy">Autenticacion preparada para conectar con backend. Ahora guarda un perfil local para probar la experiencia.</p>
      <form class="form-grid" data-profile-form>
        <label class="field">
          <span>Nombre</span>
          <input name="name" value="${state.user.name || ""}" placeholder="Nombre del alumno" />
        </label>
        <label class="field">
          <span>Email</span>
          <input name="email" type="email" value="${state.user.email || ""}" placeholder="alumno@email.com" />
        </label>
        <button class="btn" type="submit">Guardar perfil</button>
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
  });
};
