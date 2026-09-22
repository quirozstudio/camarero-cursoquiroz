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
  finalExamAttempts: {},
  finalExamDrafts: {},
  certificates: {},
};

const cloneDefaults = () => JSON.parse(JSON.stringify(defaults));

export const getState = () => {
  const stored = localStorage.getItem(key);

  if (!stored) {
    return cloneDefaults();
  }

  try {
    const parsed = JSON.parse(stored);

    return {
      ...cloneDefaults(),
      ...parsed,
      params: { ...defaults.params, ...(parsed.params || {}) },
      user: { ...defaults.user, ...(parsed.user || {}) },
      progress: parsed.progress || {},
      quizAttempts: parsed.quizAttempts || {},
      quizDrafts: parsed.quizDrafts || {},
      finalExamAttempts: parsed.finalExamAttempts || {},
      finalExamDrafts: parsed.finalExamDrafts || {},
      certificates: parsed.certificates || {},
    };
  } catch {
    localStorage.removeItem(key);
    return cloneDefaults();
  }
};

export const saveState = (state) => {
  localStorage.setItem(key, JSON.stringify(state));
};
