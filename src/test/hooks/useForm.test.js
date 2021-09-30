import {act, renderHook} from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm'

describe('Pruebas con useForm', () => {
    
    const initialForm = {
        name: 'Hugo',
        email: 'hugo@hugo.com'
    }

    test('debe de regresar un formulario por defecto', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [values] = result.current;
        expect(values).toEqual(initialForm);
    })

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [,handleInputChange] = result.current;
        act(() => {
            handleInputChange({target: {
                name: 'name',
                value: 'Jorge'
            }})
        })
        const [values] = result.current;
        expect(values.name).toBe('Jorge');
        expect(values).toEqual({...initialForm, name:'Jorge'});
    })
    
    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [,handleInputChange,reset] = result.current;
        act(() => {
            handleInputChange({target: {
                name: 'name',
                value: 'Jorge'
            }})
            reset();
        })
        const [values] = result.current;
        expect(values).toEqual(initialForm);
    })
    
})
