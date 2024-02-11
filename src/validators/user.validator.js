import Joi from "joi";

import { userRegExp } from "../configs/user.regExp";

const userValidator = Joi.object({
  username: Joi.string().regex(userRegExp.NAME).messages({
    "string.pattern.base": "🚫User name!!!",
  }),
  password: Joi.string().regex(userRegExp.PASSWORD).messages({
    "string.pattern.base": "🚫User password!!!",
  }),
});

export { userValidator };
