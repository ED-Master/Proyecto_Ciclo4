import ventas from "../listVentas.json"

// A D M I N I S T R A D O R

export function TotalVentas(){
    let acum = 0;

    ventas.map(v =>(
        acum += v.valor
    ));

    return acum;
}