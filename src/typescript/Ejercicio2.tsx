import React from "react";

export const Ejercicio2 = () => {
  const arreglo = [2, 4, 6, 8, 10, 12];

  function sumaArreglo(numeros: number[]): number {
    return numeros.reduce(
      (acumulador, valorActual) => acumulador + valorActual, 0
    );
  }

  const suma = sumaArreglo(arreglo);

  return (
    <div>
      <h1>Suma de arreglo</h1>
      <span>Resultado: {suma}</span>
    </div>
  );
};
