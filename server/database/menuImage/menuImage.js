import mongoose from 'mongoose';

const MenuImageSchema = new mongoose.Schema(
    {
        restaurant: {
            type: mongoose.Types.ObjectId,
            ref: "Restaurants"
        },
        menus:
        [{
            category: { type: String, required: true },
            src:
                [
                    { type: String, required: true }
                ]
        }]



    });

const MenuImageModel = mongoose.model('MenuImages', MenuImageSchema);

export default MenuImageModel