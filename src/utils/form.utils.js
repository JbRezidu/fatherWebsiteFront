export function formIsValid(formValues) {
  return Object.keys(formValues).every(key => formValues[key].isValid);
};

// export function validateRequire(formValues, setFormValues, field) {
//   setFormValues()
// }
