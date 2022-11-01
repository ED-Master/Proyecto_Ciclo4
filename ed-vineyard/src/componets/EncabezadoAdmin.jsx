import { Outlet, Link } from "react-router-dom";
import "../styles/Encabezados.css"
import imagen from "../img/Logo Vineyard.png" 

export function EncabezadoAdmin() {
  return (
    <>
    <header className="header-principal">
              <img src={imagen} alt="Logo" className="img" />
              {/* <h4>ED VINYARD</h4> */}
              <nav>
                  <Link to="/Administrador/Lista" className="link">Lista Productos </Link>|
                  <Link to="/Administrador/ModProductos" className="link"> Modificar Productos </Link>|
                  <Link to="/Administrador/Tabla" className="link"> Lista Ventas </Link>|
                  <Link to="/" className="link2"> Home</Link>
              </nav>
        </header>

    <Outlet/>
    </>
  );
}