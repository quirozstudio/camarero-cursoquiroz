import { renderHome } from "./views/home-view.js";
import { renderAuth, bindAuth } from "./views/auth-view.js";
import { renderDashboard, bindDashboard } from "./views/dashboard-view.js";
import { renderCourse, bindCourse } from "./views/course-view.js";
import { renderLesson, bindLesson } from "./views/lesson-view.js";
import { renderCertificate } from "./views/certificate-view.js";

export const routes = {
  home: { render: renderHome },
  auth: { render: renderAuth, bind: bindAuth },
  dashboard: { render: renderDashboard, bind: bindDashboard },
  course: { render: renderCourse, bind: bindCourse },
  lesson: { render: renderLesson, bind: bindLesson },
  certificate: { render: renderCertificate },
};
