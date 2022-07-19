import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,

    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    Password: {
        type: String,
        required: true,

    },
    ConfirmPassword: {
        type: String,
        required: true,

    },
    product_id: {
        type: [String]
    }


},
    { timestamps: true }
)


export default mongoose.model("User", userSchema);