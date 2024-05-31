import React from "react";

export const Ejercicio3 = () => {
  const arreglo: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  const arregloDividido = arreglo.map((valor) => {
    return valor / 5;
  });

  return (
    <div>
      <h1>Devolver un nuevo arreglo con los valores divididos para 5.</h1>
      <span>Resultado: {arregloDividido.join(", ")}</span>
    </div>
  );
};
