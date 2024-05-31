import React from "react";

export const Ejercicio1 = () => {
  const areaCuadrado = (lado: number): number => {
    return lado * lado;
  };
  
  return (
    <div>
      <h1>Area del cuadrado</h1>
      <span>Resultado: {areaCuadrado(4)}</span>
    </div>
  );
};
