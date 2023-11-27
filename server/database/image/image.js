import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema(
    {
        restaurant: {
            type: mongoose.Types.ObjectId,
            ref: "Restaurants"
        },

        photos: [

            { type: String, required: true }
        ]
    });

const ImageModel = mongoose.model('Images', ImageSchema);

export default ImageModel