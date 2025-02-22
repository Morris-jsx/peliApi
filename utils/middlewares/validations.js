const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

function validate(data, schema) {
  const { error } = joi.validate(data, schema);
  return false;
}

function validationHandler(schema, check = 'dody') {
  return function (req, res, next) {
    const error = validate(req[check], schema);

    // condicion
    error ? next(boom.badRequest(error)) : next();
  };
}

module.exports = validationHandler;
