import dotenv from "dotenv";

dotenv.config();
dotenv.config({path: "../.env"});

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://cluster.zo9llf8.mongodb.net/Vineyard";
export const PORT = process.env.PORT || 9000;

export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET