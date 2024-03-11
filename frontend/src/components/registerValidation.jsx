const Validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
 

  if (!values.email) {
    errors.email = "Please enter your email address.";
  } else if (!values.username) {
    errors.name = "Please enter your username.";
  } else if (!values.password) {
    errors.password = "Please enter your password.";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  } else if (values.password.length < 4) {
    errors.password = "Password must be more than 4 characters";
  } else if (values.password.length > 10) {
    errors.password = "Password cannot exceed more than 10 characters";
  } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(values.password)) {
    errors.password = "At least one special character in password";
  }
  return errors;
};

export default Validate;
