import { Outlet, Link } from "react-router-dom";
import "../styles/Home.css"
export function Home(){
    return(
        <>
            <header className="header">
                <h1>ED VINEYARD</h1>
            </header>
            <section className="section">
                <div className="Admin">
                    <h6>Vista del Administrador</h6>
                    <button><Link to="/Administrador" className="link">Admin</Link></button>
                </div>
                <div className="User">
                    <h6>Vista del Cliente</h6>
                    <button><Link to="/Cliente" className="link">Cliente</Link></button>
                </div>
            </section>
            <Outlet/>
        </>
    );
}