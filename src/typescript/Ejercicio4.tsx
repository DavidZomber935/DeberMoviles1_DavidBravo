import React from "react";

export const Ejercicio4 = () => {
  const numeros: number[] = [1, 2, 3, 4];

  const arregloParImpar: string[] = numeros.map((numero) => {
    return numero % 2 === 0 ? "par" : "impar";
  });
  return (
    <div>
      <h1>arreglo que remplace el número por las palabras par o impar</h1>
      <span>Resultado: {arregloParImpar.join(", ")}</span>
    </div>
  );
};
