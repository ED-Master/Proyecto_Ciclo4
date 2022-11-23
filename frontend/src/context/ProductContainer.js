import { useState, useContext, createContext, useEffect } from "react";
import { getProductRequest } from "../api/product";

export const context = createContext();

export const useProducts = () =>{
    const contexto = useContext(context);
    return contexto;
}

export const ProductProvider = ({children}) => {
    const  [products, setProducts] = useState([]);

    const getProducts = async () => {
        const res = await getProductRequest();
        setProducts(res.data);
    }

    useEffect(() => {
        getProducts()
    }, []);

    return <context.Provider value={{
        products,
        setProducts,
        getProducts
    }}>
        {children}
    </context.Provider>
}