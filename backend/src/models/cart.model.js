const { Schema, model } = require("mongoose");

const CartSchema = new Schema({
    brand: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    image_link: {
        type: String,
        required: true,   
    },
    category: {
        type: String,
        required: true,
        enum: ["gel", "lip_gloss", "powder", "contour", "liquid", "pencil", "lipstick", "highlighter", "lip_stain", "cream", "palette", "mineral", "concealer", "bb_cc"]
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "product",
        required: true,
    },

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true,
    },

    quantity: {type: Number, min: 1, required: true}
});

const CartModel = model("cart", CartSchema);

module.exports = CartModel;