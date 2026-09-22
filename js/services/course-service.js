import { courses, modules } from "../data/courses.js?v=0.2.1";
import { regions } from "../data/regions.js?v=0.2.1";

export const getCurrentCourse = (courseId) => courses.find((course) => course.id === courseId) || courses[0];

export const getRegionById = (regionId) => regions.find((region) => region.id === regionId) || regions[0];

export const getCourseModules = (course) =>
  course.modules.map((moduleId) => modules.find((module) => module.id === moduleId)).filter(Boolean);

export const getModuleById = (moduleId) => modules.find((module) => module.id === moduleId) || modules[0];

export const getNextModule = (course, moduleId) => {
  const courseModules = getCourseModules(course);
  const currentIndex = courseModules.findIndex((module) => module.id === moduleId);
  return courseModules[currentIndex + 1] || null;
};

export const getPreviousModule = (course, moduleId) => {
  const courseModules = getCourseModules(course);
  const currentIndex = courseModules.findIndex((module) => module.id === moduleId);
  return currentIndex > 0 ? courseModules[currentIndex - 1] : null;
};

export const isModuleUnlocked = (state, course, moduleId) => {
  const previousModule = getPreviousModule(course, moduleId);
  return !previousModule || Boolean(state.progress[previousModule.id]?.completed);
};

export const getCourseStats = (state, course) => {
  const courseModules = getCourseModules(course);
  const completed = courseModules.filter((module) => state.progress[module.id]?.completed).length;
  const scores = courseModules
    .map((module) => state.quizAttempts[module.id])
    .filter((attempt) => Number.isFinite(attempt?.score));
  const averageScore = scores.length
    ? Math.round(scores.reduce((total, attempt) => total + attempt.score, 0) / scores.length)
    : 0;
  const activityDates = [
    ...Object.values(state.progress).map((item) => item.completedAt),
    ...Object.values(state.quizAttempts).map((item) => item.completedAt),
    ...Object.values(state.finalExamAttempts || {}).map((item) => item.completedAt),
  ].filter(Boolean);
  const lastActivity = activityDates.sort().at(-1) || null;
  const finalExam = state.finalExamAttempts?.[course.id];
  const finalExamPassed = Number(finalExam?.score) >= course.certificate.finalExamMinScore;
  const allModulesCompleted = courseModules.length > 0 && completed === courseModules.length;

  return {
    totalModules: courseModules.length,
    completedModules: completed,
    percent: courseModules.length ? Math.round((completed / courseModules.length) * 100) : 0,
    averageScore,
    minutes: Object.values(state.progress).reduce((total, item) => total + (item.minutes || 0), 0),
    nextModule: courseModules.find((module) => !state.progress[module.id]?.completed) || courseModules[0],
    certificateCount: Object.keys(state.certificates || {}).length,
    lastActivity,
    allModulesCompleted,
    finalExam,
    finalExamPassed,
    certificateUnlocked: allModulesCompleted && finalExamPassed,
  };
};
