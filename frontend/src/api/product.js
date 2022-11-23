import axios from "axios";

export const getProductRequest = async () => await axios.get("/products");