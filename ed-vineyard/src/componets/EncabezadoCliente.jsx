import { Outlet, Link } from "react-router-dom"

export function EncabezadoCliente(){
    return(
    <>
        <header className="header-principal">
                <h4>ED VINYARD</h4>
                <nav>
                    <Link to="/ProductosCliente">Lista Productos</Link>
                    <Link to="/Carrito">Carrito</Link>
                </nav>
            </header>

        <Outlet/>
    </>
    );
}