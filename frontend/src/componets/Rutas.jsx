import { BrowserRouter, Routes, Route} from "react-router-dom"
import { EncabezadoAdmin } from "./EncabezadoAdmin";
import { EncabezadoCliente } from "./EncabezadoCliente";
import { Home } from "./Home";
import { ProductosCliente } from "./ProductosCliente";
import { Carrito } from "./Carrito";
import { VentasAdmin } from './VentasAdmin';
import { ModProductos } from './ModProductos';
import { Lista } from './Lista';
import { ProductProvider } from "../context/ProductContainer";
export function Rutas(){
    return(
        <ProductProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Administrador/*" element={<EncabezadoAdmin />}>
                        <Route path='Lista' element={<Lista />}/>
                        <Route path="ModProductos" element={<ModProductos />}/>
                        <Route path="Tabla" element={<VentasAdmin />}/>
                    </Route>
                    <Route path="/Cliente/*" element={<EncabezadoCliente />}>
                        <Route path='ProductosCliente' element={<ProductosCliente />}/>
                        <Route path="Carrito" element={<Carrito />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ProductProvider>
    );
}