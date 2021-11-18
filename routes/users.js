const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { getCurrentUser, updateUser } = require('../controllers/users');
const validEmail = require('../utils/validEmail');

router.get('/me', getCurrentUser);
router.patch('/me', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().custom(validEmail),
    name: Joi.string().min(2).max(30).required(),
  }),
}), updateUser);

module.exports = router;
