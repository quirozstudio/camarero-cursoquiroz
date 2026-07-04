import { courses } from "../data/courses.js";

const key = "quiroz-academy-state-v1";

const defaults = {
  route: "home",
  params: {},
  theme: "light",
  selectedCourseId: courses[0].id,
  user: {
    name: "Bryans",
    email: "",
  },
  progress: {},
  quizAttempts: {},
  quizDrafts: {},
  certificates: {},
};

export const getState = () => {
  const stored = localStorage.getItem(key);
  return stored ? { ...defaults, ...JSON.parse(stored) } : defaults;
};

export const saveState = (state) => {
  localStorage.setItem(key, JSON.stringify(state));
};
