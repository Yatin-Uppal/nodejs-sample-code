import Joi from 'joi';

export const validateUserRegistration = (body: any) => {
  const schema = Joi.object({
    email: Joi.string().email().trim().lowercase().required()
      .messages({
        'string.email': 'Please provide a valid email address',
        'any.required': 'Email is required'
      }),
    password: Joi.string().min(8).max(30)
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)
      .required()
      .messages({
        'string.min': 'Password must be at least 8 characters long',
        'string.max': 'Password cannot exceed 30 characters',
        'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
        'any.required': 'Password is required'
      }),
    userName: Joi.string().min(3).max(30).trim()
      .pattern(/^[a-zA-Z0-9_]+$/)
      .required()
      .messages({
        'string.min': 'Username must be at least 3 characters long',
        'string.max': 'Username cannot exceed 30 characters',
        'string.pattern.base': 'Username can only contain letters, numbers and underscores',
        'any.required': 'Username is required'
      }),
    phoneNumber: Joi.string()
      .pattern(/^\+?[1-9]\d{7,14}$/)
      .required()
      .messages({
        'string.pattern.base': 'Please provide a valid phone number',
        'any.required': 'Phone number is required'
      })
  });

  return schema.validate(body, {
    abortEarly: true
  });
}
export const validateUserLogin = (body: any) => {
  const schema = Joi.object({
    email: Joi.string().email().trim().lowercase().required()
      .messages({
        'string.email': 'Please provide a valid email address',
        'any.required': 'Email is required'
      }),
    password: Joi.string().required()
      .messages({
        'any.required': 'Password is required'
      })
  });

  return schema.validate(body, {
    abortEarly: true
  });
}

