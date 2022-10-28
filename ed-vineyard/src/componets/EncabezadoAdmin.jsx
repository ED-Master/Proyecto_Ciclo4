import { Outlet, Link } from "react-router-dom";

export function EncabezadoAdmin() {
  return (
    <>
    <header className="header-principal">
              <h4>ED VINYARD</h4>
              <nav>
                  <Link to="/Administrador/Lista">Lista Productos</Link>
                  <Link to="/Administrador/ModProductos">Modificar Productos</Link>
                  <Link to="/Administrador/Tabla">Lista Ventas</Link>
                  <Link to="/">Home</Link>
              </nav>
        </header>

    <Outlet/>
    </>
  );
}

