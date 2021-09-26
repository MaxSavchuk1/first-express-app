const yup = require('yup');

module.exports.validateUser = async (req, res, next) => {
  const { body } = req;
  const NAME_SCHEMA = yup
    .string()
    .trim()
    .min(1)
    .max(40)
    .required();
  const USER_VALIDATION_SCHEMA = yup.object().shape({
    firstName: NAME_SCHEMA,
    lastName: NAME_SCHEMA,
    email: yup
      .string()
      .email()
      .required(),
  });
  try {
    const validatedUser = await USER_VALIDATION_SCHEMA.validate(body);
    req.body = validatedUser;
    next();
  } catch (e) {
    next(e);
  }
};
