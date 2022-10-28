import { Outlet, Link } from "react-router-dom";

export function Encabezado() {
  return (
    <>
    <header className="header-principal">
              <h4>ED VINYARD</h4>
              <nav>
                  <Link to="/Lista">Lista Productos</Link>
                  <Link to="/ModProductos">Modificar Productos</Link>
                  <Link to="/Tabla">Lista Ventas</Link>
              </nav>
        </header>

    <Outlet/>
    </>
  );
}

