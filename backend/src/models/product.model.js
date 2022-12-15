const { Schema, model } = require("mongoose");

const productSchema = new Schema({
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
    description: {
        type: String,
        required: true,
    },
    rating: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ["gel", "lip_gloss", "powder", "contour", "liquid", "pencil", "lipstick", "highlighter", "lip_stain", "cream", "palette", "mineral", "concealer", "bb_cc"]
    },
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: "user", 
        required: true 
    }
}, {
    versionKey: false,
    timestamps: true
})

const ProductModel = model("product", productSchema);

module.exports = ProductModel;
