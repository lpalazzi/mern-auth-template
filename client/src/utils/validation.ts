export const validateEmail = (value: string) =>
  !!value && /^\S+@\S+$/.test(value);
export const validatePassword = (value: string) =>
  !!value && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,64}$/.test(value);
