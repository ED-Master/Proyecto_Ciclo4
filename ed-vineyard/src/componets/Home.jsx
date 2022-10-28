import { Outlet, Link } from "react-router-dom";
import "../styles/Home.css"
export function Home(){
    return(
        <>
            <header>
                <h1>ED VINEYARD</h1>
            </header>
            <section>
                <div>
                    <h6>Vista del Administrador</h6>
                    <button><Link to="/Administrador">Admin</Link></button>
                </div>
                <div>
                    <h6>Vista del Cliente</h6>
                    <button><Link to="/Cliente">Cliente</Link></button>
                </div>
            </section>
            <Outlet/>
        </>
    );
}