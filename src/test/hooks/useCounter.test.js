import {renderHook, act} from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'

describe('Pruebas con useCounter', () => {

    test('debe de retornar los valores por defecto', () => {
        const {result} = renderHook(() => useCounter());
        const {counter, increment, decrement, reset} = result.current;
        expect(counter).toBe(10);
        expect(typeof increment).toBe('function');
        expect(typeof decrement).toBe('function');
        expect(typeof reset).toBe('function');

    })

    test('debe de retornar el valor enviado', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter} = result.current;
        expect(counter).toBe(100);
    })

    test('debe de incrementar el counter en 1', () => {
        const {result} = renderHook(() => useCounter(100));
        const {increment} = result.current;
        //No se puede colocaar la declaracion del counter aqui
        //No se comporta de manera dinamica
        //Se tiene que colocar despues de incrementar
        //Porque si no, no cambia el valor del counter
        //const {counter} = result.current;
        act(() => {
            increment();
        })
        const {counter} = result.current;
        
        expect(counter).toBe(101);
    })

    test('debe de decrementar el counter en 1', () => {
        const {result} = renderHook(() => useCounter(100));
        const {decrement} = result.current;
        act(() => {
            decrement();
            decrement();
        })
        const {counter} = result.current;
        
        expect(counter).toBe(98);
    })
    
    test('debe de resetear el counter', () => {
        const {result} = renderHook(() => useCounter(100));
        const {reset, increment} = result.current;
        act(() => {
            increment();
            reset();
        })
        const {counter} = result.current;
        
        expect(counter).toBe(100);
    })
    
})
