const { taskReducer } = require("../../components/08-useReducer/taskReducer")


describe('Pruebas en taskReducer', () => {
    
    const task = [{
        id: '1',
        task: 'Aprender node',
        done: false
    }];

    test('debe de retornar el estado por defecto', () => {
        const state = taskReducer(task, {} );
        expect(state).toEqual(task);
    })

    test('debe de agregar un task', () => {
        const action = {
            type: 'add', 
            payload: {
                id: '2',
                task: 'Aprender python',
                done: false
            }
        }
        const state = taskReducer(task, action);
        expect(state.length).toBe(2);
    })

    test('debe de eliminar un task', () => {
        const action = {
            type: 'delete', 
            payload: '1'
        }
        const state = taskReducer(task, action);
        expect(state.length).toBe(0);
    })

    test('debe de completar un task', () => {
        const action = {
            type: 'complete', 
            payload: '1'
        }
        const state = taskReducer(task, action);

        expect(state[0].done).toBe(true);
    })
    
    
})
