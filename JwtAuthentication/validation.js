const joi = require("@hapi/joi");

//Register Validation
const registerValidation = (data) => {
  const schema = joi.object({
    name: joi.string().required().min(3),
    email: joi.string().required().min(6).email(),
    password: joi.string().required().min(6),
  });

  return schema.validate(data);
};

//Login Validation
const loginValidation = (data) => {
  const schema = joi.object({
    email: joi.string().required().min(6).email(),
    password: joi.string().required().min(6),
  });

  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
