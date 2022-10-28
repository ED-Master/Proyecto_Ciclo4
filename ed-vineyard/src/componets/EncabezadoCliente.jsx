import { Outlet, Link, useRouteMatch, useParams} from "react-router-dom"

export function EncabezadoCliente(){
    return(
    <>
        <header className="header-principal">
                <h4>ED VINYARD</h4>
                <nav>
                    <Link to="/Cliente/ProductosCliente">Lista Productos</Link>
                    <Link to="/Cliente/Carrito">Carrito</Link>
                </nav>
            </header>

        <Outlet/>
    </>
    );
}