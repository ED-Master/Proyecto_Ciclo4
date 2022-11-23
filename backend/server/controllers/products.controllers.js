import productSchema from "../models/product.js";
import { uploadImage, deleteImage } from "../libraries/cloudinary.js";
import fs from "fs-extra";

export const getProducts = async (req, res) => {
    try {
        const products = await productSchema.find();
    
        return res.send(products);
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json(`Error: ${error.message}`);
    }
};

export const postProducts = async (req, res) => {
    try {
        const { nombre, descrip, precio, stock} = req.body;
        var img = null;

        if(req.files.img){
            const fileUpload = await uploadImage(req.files.img.tempFilePath);
            img = {
                url: fileUpload.secure_url,
                public_id: fileUpload.public_id
            }
            await fs.remove(req.files.image.tempFilePath);
        }

        const product = new productSchema({nombre, descrip, precio, stock, img});
        await product.save()
        return res.json(product);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json(`Error: ${error.message}`);
    }
};

export const putProduct = async (req, res) => {
    try {
        const product = await productSchema.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.send(product);
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json(`Error: ${error.message}`);
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await productSchema.findByIdAndDelete(req.params.id);
    
        if(!product){
            return res.send("Not found");
        }else{
            if(product.img.public_id){
                await deleteImage(product.img.public_id);
            }
            await deleteImage(product.public_id);
            return res.send(product);
        }
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json(`Error: ${error.message}`);
    }
};

export const getAProduct =  async (req, res) => {
    try {
        const product = await productSchema.findById(req.params.id);
    
        if(!product){
            return res.send("Not found");
        }else{
            return res.json(product);
        }
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).json(`Error: ${error.message}`);
    }
};
