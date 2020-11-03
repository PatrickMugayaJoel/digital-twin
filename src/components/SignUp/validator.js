export default values => {
    let errors = {};

    if (!values.username) {
        errors.username = "Can not be blank";
      } else if (values.username.length < 3) {
        errors.username = "Username must be at least 3 characters long";
      }
  
    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters long";
    }

    if (!(values.password2 === values.password)) {
        errors.password2 = "Passwords do not match.";
    }

    return errors;
}