const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    name: {type: String, required: true},

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {type: String, required: true},

    role: {
        type: String,
        enum: ["admin", "user", "seller"],
        default : "user"
    }, 

    status: {
        type: String,
        required: true,
        enum: ["pending", "approved", "rejected"],
        default: "approved"
    }
 
}, {
    timestamps: true,
    versionKey: false,
})

const UserModel = model("user", UserSchema);

module.exports = UserModel;