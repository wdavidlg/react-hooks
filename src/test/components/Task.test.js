const { shallow } = require("enzyme")
const { default: Task } = require("../../components/08-useReducer/Task")


describe('Pruebas en <Task/>', () => {

    const handleDelete = jest.fn();
    const complete = jest.fn();

    const task = {
        id: '2',
        task: 'Aprender React',
        done: false
    }

    const wrapper = shallow(
        <Task 
            task={task} 
            i={0} 
            handleDelete={handleDelete}
            complete={complete} />
    )


    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de llamar la funcion borrar', () => {
       
        wrapper.find('.btn-danger').simulate('click');
        expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledWith(task.id);
    })

    test('debe de llamar la funcion complete', () => {
     
        wrapper.find('p').simulate('click');
        expect(complete).toHaveBeenCalledWith(task.id);
    })

    test('debe la clase complete si es done', () => {
        const taskComplete = {
            id: '3',
            task: 'Aprender JS',
            done: true
        }
        const wrapper = shallow(
            <Task 
                task={taskComplete} 
                i={1} 
                handleDelete={handleDelete}
                complete={complete} />
        )

        const done = wrapper.find('.complete').exists();
        expect(done).toBe(true);
        //Otra forma mas facil
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    })

    test('debe de mostrar el texto correctamente', () => {

        const text = wrapper.find('p').text();
        expect(text).toBe(`${1}. ${task.task}`)

    })
    
})
