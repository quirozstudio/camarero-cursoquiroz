import { renderShell } from "./components/shell.js?v=0.2.4";
import { routes } from "./routes.js?v=0.2.4";
import { getCurrentCourse, getRegionById } from "./services/course-service.js?v=0.2.4";
import { getState, saveState } from "./services/storage-service.js?v=0.2.4";

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
      questionIndex: searchParams.get("questionIndex") || undefined,
      completed: searchParams.get("completed") || undefined,
    },
  };
};

const updateUrl = (route, params = {}, replace = false) => {
  const searchParams = new URLSearchParams({ route });

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.set(key, String(value));
    }
  });

  const url = `${window.location.pathname}?${searchParams.toString()}`;
  window.history[replace ? "replaceState" : "pushState"]({}, "", url);
};

const navigate = (route, params = {}) => {
  const state = getState();
  saveState({ ...state, route, params });
  updateUrl(route, params);
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
} else {
  const state = getState();
  updateUrl(state.route, state.params, true);
}

window.addEventListener("popstate", () => {
  const routeFromUrl = readRouteFromUrl();
  if (routeFromUrl) {
    saveState({ ...getState(), ...routeFromUrl });
    render();
  }
});

document.documentElement.dataset.theme = getState().theme;
render();
