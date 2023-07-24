export const validateEmail = (value: string) =>
  !!value && /^\S+@\S+$/.test(value);

export const passwordRequirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

export const validatePassword = (value: string) => {
  if (!value) return false;
  if (value.length < 8) return false;
  passwordRequirements.forEach((requirement) => {
    if (!requirement.re.test(value)) return false;
  });
  return true;
};

export const getPasswordStrength = (password: string) => {
  let multiplier = password.length > 5 ? 0 : 1;

  passwordRequirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(
    100 - (100 / (passwordRequirements.length + 1)) * multiplier,
    10
  );
};
