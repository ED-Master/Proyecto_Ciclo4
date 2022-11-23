import { Router }from "express";
import { deleteProduct, getAProduct, getProducts, postProducts, putProduct} from "../controllers/products.controllers.js";


const router = Router();

router.get("/products", getProducts);

router.post("/products", postProducts );

router.put("/products/:id", putProduct);

router.delete("/products/:id", deleteProduct);

router.get("/products/:id", getAProduct);

export default router;