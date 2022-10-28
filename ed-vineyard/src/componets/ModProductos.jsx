import productos from "../productos.json"

// A D M I N I S T R A D O R

export function ModProductos(){
    const obtenerProd = (e) => {
        console.log("Si funciona");
    };
 
    // En la línea 13 nos falta obtener los valores del producto para pasarselos al input y desde ahí poder modificarlo
    return(
        <div>
            <h4>MODIFICAR PRODUCTOS</h4>
            <div className="Lista-prod">
                <h6>Productos</h6>
                <ol>
                    {productos.map(p =>(
                        <li><a href="#" onClick={() => console.log(p.descrip)}>{p.nombre}</a></li>
                    ))}
                </ol>
            </div>
            <div className="imagen">
                <img src="" alt="" />
            </div>
            <div>
                <form action="">
                    <label htmlFor="">Nombre: </label>
                    <input type="text"></input><br />
                    <label htmlFor="">Descripción: </label>
                    <input type="text"></input><br />
                    <label htmlFor="">Precio: </label>
                    <input type="number"></input><br />
                    <label htmlFor="">Stock:</label>
                    <input type="number"></input>
                </form>
            </div>
        </div>
    );
}