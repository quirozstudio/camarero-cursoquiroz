export const buildCertificateDraft = ({ user, course, region }) => {
  const date = new Date().toLocaleDateString(region.locale);
  const seed = `${course.id}-${user.name || "alumno"}-${Date.now()}`;
  const code = `QA-${btoa(seed).replace(/[^A-Z0-9]/gi, "").slice(0, 12).toUpperCase()}`;

  return {
    studentName: user.name || "Alumno",
    courseName: course.title,
    issuer: region.certificate.issuer,
    date,
    code,
    verificationUrl: `${region.certificate.verificationBaseUrl}/${code}`,
  };
};
