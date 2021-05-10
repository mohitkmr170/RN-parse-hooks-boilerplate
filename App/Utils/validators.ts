export const Validators = {
  emailRegex: {
    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Not a valid Email',
  },
  passwordMinimumLength: {
    value: 8,
    message: 'Password should be minimum 8 characters long',
  },
};
