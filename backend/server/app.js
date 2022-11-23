import express from "express";
import productRoutes from "./routes/products.routes.js"
import fileUpload from "express-fileupload";

const app = express();

//middlewares
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "files"
}));

//routes
app.use(productRoutes);


export default app;