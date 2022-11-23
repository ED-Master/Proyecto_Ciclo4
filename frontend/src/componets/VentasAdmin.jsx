import React from "react";
import ventas from "../listVentas.json"
import { TotalVentas } from "./TotalVentas";
import "../styles/VentasAdmin.css"

// A D M I N I S T R A D O R

export function VentasAdmin(){
    return(
        <div className="container-ventasadmin">
          <h4>VENTAS</h4>
          <div className="tabla">
            <div className="table-wrapper">
              <table >
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>idVenta</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {ventas.map( v =>(
                    <tr>
                      <td>{v.fecha}</td>
                      <td>{v.idVenta}</td>
                      <td>${v.valor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <table>
              <tbody>
                <tr>
                  <td></td>
                  <td>TOTAL:</td>
                  <td>$<TotalVentas></TotalVentas></td>
                </tr>
              </tbody>
            </table>
          </div>

          
        </div>
    );
}