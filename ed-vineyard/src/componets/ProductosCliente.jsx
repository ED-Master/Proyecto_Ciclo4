import { Lista } from "./Lista"
import productos from "../productos.json"
import imagen from "../img/logo192.png"
import { useState } from "react";

export function ProductosCliente(){
    const modelo = {};
    
    const [prodCarr, modProdCarr] = useState(modelo);

    const evento = (e) =>{
        //console.log(e);
        modProdCarr(e);
        console.log(prodCarr);
    }
    
    return(
        <div>
            {/* <Lista></Lista> */}
            <div>
                <h4>LISTA PRODUCTOS CLIENTE</h4>
                {productos.map(p =>(
                    <div className="producto">
                        <img src={imagen} alt="" width="40px"/>
                        <h5>{p.nombre}</h5>
                        <p>${p.precio}</p>
                        <p>Stock: {p.stock}</p>
                        <button onClick={() => evento(p)}>Comprar</button>
                    </div>        
                ))};
            </div>
        </div>
    );
}
// onClick={() => modProdCarr(p)}