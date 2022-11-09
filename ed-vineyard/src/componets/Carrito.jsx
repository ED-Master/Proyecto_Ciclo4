import "../styles/Carrito.css";
import prod from "../carrito.json";
import imagen from "../img/logo192.png";

export function Carrito(){
    return(
        <div className="container">
            
            <h2 className="h2-carrito">CARRITO</h2>
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Cantidad</th>
                        <th>Producto</th>
                        <th>Valor</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {prod.map( p => (
                        <tr>
                            <td><img src={imagen} alt="" /></td>
                            <td>{p.cant}</td>
                            <td>{p.prod}</td>
                            <td>{p.valor}</td>
                            <td>{p.Total}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
            <div className="btns">
                <button>Finalizar compra</button>
                <button>Cancelar</button>
            </div>
        </div>
    );
}