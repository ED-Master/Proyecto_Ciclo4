import { ProductosCliente } from "./ProductosCliente";
import { Carrito } from "./Carrito";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { EncabezadoCliente } from "./EncabezadoCliente"

export function Cliente(){
    return( 
        <BrowserRouter> 
            <Routes>
                <Route path="Clientes" element={<EncabezadoCliente />}>
                    <Route path='ProductosCliente' element={<ProductosCliente />}/>
                    <Route path="Carrito" element={<Carrito />}/>
                </Route>
            </Routes>   
        </BrowserRouter>
    );
}