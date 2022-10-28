import productos from "../productos.json"
import imagen from "../img/logo192.png"

// A D M I N I S T R A D O R

export function Lista(){
    return(
        <div>
            <h4>LISTA PRODUCTOS</h4>
            {productos.map(p =>(
                <div className="producto">
                    <img src={imagen} alt="" width="40px"/>
                    <h5>{p.nombre}</h5>
                    <p>${p.precio}</p>
                    <p>Stock: {p.stock}</p>
                </div>        
            ))};
        </div>
    );
}