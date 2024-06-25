export const getPasswordStrength = (password: any) => {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  return score;
};

export const getPasswordStrengthColor = (score: number) => {
  switch (score) {
    case 0:
    case 1:
      return "red";
    case 2:
      return "orange";
    case 3:
      return "yellow";
    case 4:
      return "lightgreen";
    case 5:
      return "green";
    default:
      return "red";
  }
};
