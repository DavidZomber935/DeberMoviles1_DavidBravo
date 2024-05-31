import React from 'react'

export const Ejercicio5 = () => {
    const datos: (number | string)[] = [7, 5, "sistemas", "hola", "adios", 2];
    
    const datosTexto: string[] = datos.filter(item => typeof item === 'string') as string[];
    const datosNumeros: number[] = datos.filter(item => typeof item === 'number') as number[];

    //•	Determinar cuál de los tres datos de texto es mayor.
    const textoMayor = datosTexto.reduce((a, b) => a > b ? a : b);

    //•	Determinar el resultado de las cinco operaciones matemáticas realizadas con los tres datos numéricos.
    const [num1, num2, num3] = datosNumeros;

    const suma = num1 + num2 + num3;
    const resta = num1 - num2 - num3;
    const multiplicacion = num1 * num2 * num3;
    const division = num1 / num2 / num3;
    const operacionMezclada = ((num1 + num2) * num3);

  return (
    <div>
        <h1>Dato con mayor texto</h1>
        <span>Resultado: {textoMayor}</span>
        <hr/>
        <h1>Operaciones</h1>
        <span>Suma: {suma}</span>
        <br/>
        <span>Resta: {resta}</span>
        <br/>
        <span>Multiplicación: {multiplicacion}</span>
        <br/>
        <span>Division: {division}</span>
        <br/>
        <span>Operacion Mezclada: {operacionMezclada}</span>
    </div>
  )
}
