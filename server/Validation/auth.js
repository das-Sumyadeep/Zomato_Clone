import joi from 'joi';

export const ValidationSignUp = (userData) => {

    const Schema = joi.object({
        fullname: joi.string().required().min(3),
        email: joi.string().email().required().lowercase(),
        password: joi.string().min(5).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        address: joi.array().items(joi.object(joi.string())),
    });

    return Schema.validateAsync(userData);
};

export const ValidationSignIn = (userData) => {

    const Schema = joi.object({
        email: joi.string().email().required().lowercase(),
        password: joi.string().min(5).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    });

    return Schema.validateAsync(userData);
};