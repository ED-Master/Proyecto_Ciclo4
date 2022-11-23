import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nombre : {
        type: String,
        required: true,
        trim: true
    },
    descrip : {
        type: String,
        required: true,
        trim: true
    },
    precio : {
        type: Number,
        required: true,
        trim: true
    },
    stock : {
        type: Number,
        required: true,
        trim: true
    },
    img : {
        url: String,
        public_id: String
    }
});

export default mongoose.model("productos", productSchema);