import { Outlet, Link} from "react-router-dom"
import "../styles/Encabezados.css"
import imagen from "../img/Logo Vineyard.png" 

export function EncabezadoCliente(){
    return(
    <>
        <header className="header-principal">
                <img src={imagen} alt="Logo" className="img" />
                {/* <h4>ED VINYARD</h4> */}
                <nav>
                    <Link to="/Cliente/ProductosCliente" className="link">Lista Productos </Link>|
                    <Link to="/Cliente/Carrito" className="link2">  Carrito </Link>
                </nav>
            </header>

        <Outlet/>
    </>
    );
}