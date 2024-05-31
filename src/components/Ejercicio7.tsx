import { useAcumulador } from '../hooks/acumulador';

export const Ejercicio7 = () => {

    const {valor, acumulador} = useAcumulador(0);
  return (
    <div>
        <h3>Acumulador: <small>{valor}</small></h3>
            <button 
                className='btn btn-primary'
                onClick={()=>acumulador(5)}>+5</button>
            &nbsp;
            <button 
                className='btn btn-primary'
                onClick={()=>acumulador(-5)}>-5</button>
    </div>
  )
}
