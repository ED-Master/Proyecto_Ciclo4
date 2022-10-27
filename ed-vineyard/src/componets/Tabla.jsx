import React from "react";
import { useState } from "react";
import ventas from "../listVentas.json"
import { TotalVentas } from "./TotalVentas";

// A D M I N I S T R A D O R

export function Tabla(){
    return(
        <div>
          <h4>VENTAS</h4>
          <table>
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
                <tr>
                  <td></td>
                  <td>TOTAL:</td>
                  <td>$<TotalVentas></TotalVentas></td>
                </tr>
            </tbody>
          </table>

          
        </div>
    );
}