import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({

    user: { type: mongoose.Types.ObjectId, ref: "Users" },
    restaurant: { type: mongoose.Types.ObjectId, ref: "Restaurants" },
    food: { type: mongoose.Types.ObjectId, ref: "Foods" },
    quantity: { type: Number, required: true }

}, { timestamps: true });

const OrderModel = mongoose.model("Order", OrderSchema);

export default OrderModel