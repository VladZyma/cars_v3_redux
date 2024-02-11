import Joi from "joi";

import { carRegExp } from "../configs/car.regExp";

const carValidator = Joi.object({
  brand: Joi.string().regex(carRegExp.BRAND).required().messages({
    "string.pattern.base": "minimum 1 character",
  }),
  price: Joi.number().min(100).max(1000000).required().messages({
    "string.pattern.base": "min price is 100",
  }),
  year: Joi.number()
    .min(1995)
    .max(new Date().getFullYear())
    .required()
    .messages({
      "string.pattern.base": `minimum year 1995, maximum ${new Date().getFullYear()}`,
    }),
});

export { carValidator };
