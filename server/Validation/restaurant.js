import joi from 'joi';

export const ValidateRestaurantCity = (restData) => {

    const Schema = joi.object({
        
        city: joi.string().required().lowercase()

    });

    return Schema.validateAsync(restData);
};

export const ValidateRestaurantSearchString = (restData) =>{

    const Schema = joi.object({
        
        searchString: joi.string().required(),
        city: joi.string().required().lowercase()
    });

    return Schema.validateAsync(restData);
}