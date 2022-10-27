import { Tabla } from './Tabla';
import { ModProductos } from './ModProductos';
import { Lista } from './Lista';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Encabezado } from './EncabezadoAdmin';

export function Administrador(){
    return( 
        <BrowserRouter> 
            <Routes>
                <Route path="/Administrador" element={<Encabezado />}>
                    <Route path='Lista' element={<Lista />}/>
                    <Route path="ModProductos" element={<ModProductos />}/>
                    <Route path="Tabla" element={<Tabla />}/>
                </Route>
            </Routes>   
        </BrowserRouter>
    );
}