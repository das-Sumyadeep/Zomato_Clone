import joi from 'joi';

export const ValidationRestId = (restId) => {

    const Schema = joi.object({
        _id: joi.string().required()
    });

    return Schema.validateAsync(restId);
};


export const ValidationCategory = (category) => {

    const Schema = joi.object({
        category: joi.string().required()
    });

    return Schema.validateAsync(category);
};


