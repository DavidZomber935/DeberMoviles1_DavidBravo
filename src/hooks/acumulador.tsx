import { useState } from "react";

export const useAcumulador = (numeroInicial: number = 0) => {
    
    const [valor, setValor] = useState<number>(numeroInicial);

    const acumulador = (numero: number) => {
        setValor(valor + numero)
    }

    return {
        valor,
        acumulador
    }
}
