const validator = require('validator');
const BadRequestError = require('./BadRequestError');

module.exports = (value) => {
  const result = validator.isEmail(value);
  if (result) {
    return value;
  }
  throw new BadRequestError('Введена некорректная почта');
};
