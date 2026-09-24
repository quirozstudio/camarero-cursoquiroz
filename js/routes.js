import { renderHome } from "./views/home-view.js?v=0.2.2";
import { renderAuth, bindAuth } from "./views/auth-view.js?v=0.2.2";
import { renderDashboard, bindDashboard } from "./views/dashboard-view.js?v=0.2.2";
import { renderCourse, bindCourse } from "./views/course-view.js?v=0.2.2";
import { renderLesson, bindLesson } from "./views/lesson-view.js?v=0.2.2";
import { renderCertificate, bindCertificate } from "./views/certificate-view.js?v=0.2.2";
import { renderExam, bindExam } from "./views/exam-view.js?v=0.2.2";

export const routes = {
  home: { render: renderHome },
  auth: { render: renderAuth, bind: bindAuth },
  dashboard: { render: renderDashboard, bind: bindDashboard },
  course: { render: renderCourse, bind: bindCourse },
  lesson: { render: renderLesson, bind: bindLesson },
  exam: { render: renderExam, bind: bindExam },
  certificate: { render: renderCertificate, bind: bindCertificate },
};
