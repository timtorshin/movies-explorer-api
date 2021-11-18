const validator = require('validator');
const BadRequestError = require('./BadRequestError');

module.exports = (value) => {
  const result = validator.isURL(value, { require_protocol: true });
  if (result) {
    return value;
  }
  throw new BadRequestError('Введена некорректная ссылка');
};
