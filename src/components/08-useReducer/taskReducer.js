
export const taskReducer = ( state = [], action) => {
    console.log('action', action)
    switch (action?.type) {
        case 'add':
            return [...state, action.payload ];
        case 'delete':
            return state.filter(task => {
                return task.id !== action.payload;
            })
        case 'complete':
            return state.map(task => {
                if(task.id === action.payload){
                    task.done = !task.done
                }
                return task;
            })
        default:
            return state;
    }
}