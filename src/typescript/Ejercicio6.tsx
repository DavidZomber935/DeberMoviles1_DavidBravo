import React from 'react'

import { Alumno } from '../interfaces/interfaceAlumnos';

export const Ejercicio6 = () => {
    const alumnos: Alumno[] = [
        {
            name: "Viviana",
            edad: 19,
            calificacion: 10,
        },
        {
            name: "Wendy",
            edad: 20,
            calificacion: 8,
        },
        {
            name: "Gerson",
            edad: 18,
            calificacion: 9,
        }
    ];

    function calcularPromedioCalificaciones(alumnos: Alumno[]): number {
        // Sumar las calificaciones
        const sumaCalificaciones = alumnos.reduce((acumulador, alumno) => {
            return acumulador + alumno.calificacion;
        }, 0);
    
        // Calcular el promedio
        const promedio = sumaCalificaciones / alumnos.length;
    
        return promedio;
    }
    const promedio = calcularPromedioCalificaciones(alumnos);

  return (
    <div>
        <h1>el promedio de las calificaciones</h1>
      <span>Resultado: {promedio}</span>
    </div>
  )
}
