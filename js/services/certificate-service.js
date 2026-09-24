export const buildCertificateDraft = ({ user, course, region, stats, issuedAt = new Date().toISOString() }) => {
  const date = new Date(issuedAt).toLocaleDateString(region.locale);
  const studentName = user.name || "Alumno";
  const seed = `${course.id}-${studentName}-${issuedAt}`;
  const hash = [...seed].reduce((value, character) => (value * 31 + character.charCodeAt(0)) >>> 0, 7).toString(36).toUpperCase();
  const code = `PT-${hash.slice(0, 12)}`;

  return {
    studentName,
    courseName: course.title,
    issuer: region.certificate.issuer,
    modulesCompleted: stats?.completedModules || course.modules.length,
    totalModules: stats?.totalModules || course.modules.length,
    finalExamScore: Number.isFinite(stats?.finalExam?.score) ? stats.finalExam.score : null,
    date,
    issuedAt,
    code,
    verificationUrl: null,
  };
};
