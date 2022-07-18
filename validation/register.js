const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  

  console.log("data.email", data.email)
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }
  
    else if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
    console.log("data.password", data.password)
  }

  else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};
