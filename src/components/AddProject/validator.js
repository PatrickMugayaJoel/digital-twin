export default (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = 'Can not be blank';
  } else if (values.name.length < 3) {
    errors.name = 'Project Name must be at least 3 characters long';
  }

  if (!values.city) {
    errors.city = 'Can not be blank';
  } else if (values.city.length < 3) {
    errors.city = 'City must be at least 3 characters long';
  }

  if (!values.state) {
    errors.state = 'Can not be blank';
  } else if (values.state.length < 3) {
    errors.state = 'State must be at least 3 characters long';
  }

  return errors;
};
