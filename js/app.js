import { renderShell } from "./components/shell.js";
import { routes } from "./routes.js";
import { getCurrentCourse, getRegionById } from "./services/course-service.js";
import { getState, saveState } from "./services/storage-service.js";

const app = document.querySelector("#app");

const readRouteFromUrl = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const route = searchParams.get("route");

  if (!route || !routes[route]) {
    return null;
  }

  return {
    route,
    params: {
      moduleId: searchParams.get("moduleId") || undefined,
      mode: searchParams.get("mode") || undefined,
    },
  };
};

const navigate = (route, params = {}) => {
  const state = getState();
  saveState({ ...state, route, params });
  render();
};

const render = () => {
  const state = getState();
  const course = getCurrentCourse(state.selectedCourseId);
  const region = getRegionById(course.regionId);
  const view = routes[state.route] || routes.home;

  app.innerHTML = renderShell({
    state,
    course,
    region,
    activeRoute: state.route,
    content: view.render({ state, course, region }),
  });

  bindGlobalEvents();
  view.bind?.({ navigate, state, course, region });
};

const bindGlobalEvents = () => {
  document.querySelectorAll("[data-route]").forEach((element) => {
    element.addEventListener("click", () => navigate(element.dataset.route));
  });

  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    saveState({ ...getState(), theme: nextTheme });
  });

  document.querySelector("[data-course-select]")?.addEventListener("change", (event) => {
    saveState({ ...getState(), selectedCourseId: event.target.value, route: "dashboard", params: {} });
    render();
  });
};

const urlRoute = readRouteFromUrl();
if (urlRoute) {
  saveState({ ...getState(), ...urlRoute });
}

document.documentElement.dataset.theme = getState().theme;
render();
