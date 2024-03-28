export const calculateMembershipDuration = (member_until) => {
  const sekarang = new Date();
  const expired = new Date(member_until);

  expired.setHours(23);

  if (expired <= sekarang) {
    return "Expired";
  }

  const diffTime = Math.abs(expired - sekarang);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Difference in days

  const diffMonths =
    expired.getMonth() -
    sekarang.getMonth() +
    12 * (expired.getFullYear() - sekarang.getFullYear()); // Difference in months

  const diffYears = expired.getFullYear() - sekarang.getFullYear(); // Difference in years

  return diffDays;

  // if (diffDays === 1) {
  //   return "1 hari";
  // } else if (diffDays > 1 && diffDays <= 30) {
  //   return diffDays + " hari";
  // } else if (diffMonths === 1) {
  //   return "1 bulan";
  // } else if (diffMonths > 1 && diffMonths < 12) {
  //   return diffMonths + " bulan";
  // } else if (diffYears === 1) {
  //   return "1 tahun";
  // } else if (diffYears > 1) {
  //   return diffYears + " tahun";
  // } else {
  //   return "Expired";
  // }
};
