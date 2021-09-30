const { renderHook } = require("@testing-library/react-hooks")
const { useFetch } = require("../../hooks/useFetch")


describe('Pruebas de useFetch', () => {
    
    test('debe de retornar la informacion por defecto', () => {
        
        const {result} = renderHook(() => useFetch(1))
        const state = result.current;

        expect(state).toEqual({data: null, loading: true, error: null})
    })

    test('debe de retornar la informacion deseada', async() => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetch(1))
        await waitForNextUpdate({timeout: 4500});
        const state = result.current;

        expect(state.data.length).toBe(1);
        expect(state.loading).toBe(false);
        expect(state.error).toBe(null);

    })

    test('debe manejar el error', async() => {
        
        const {result, waitForNextUpdate} = renderHook(() => useFetch('a'))
        await waitForNextUpdate({timeout: 4900});
        const state = result.current;

        expect(state.data).toBe(null);
        expect(state.loading).toBe(false);
        expect(state.error).toBe('No hay info');
    })
    
})
