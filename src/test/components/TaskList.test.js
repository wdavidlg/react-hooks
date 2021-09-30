const { shallow } = require("enzyme")
const { default: TaskList } = require("../../components/08-useReducer/TaskList")
const { tasks } = require("./fixtures/tasks")


describe('Pruebas con <TaskList />', () => {

    const complete = jest.fn();
    const handleDelete = jest.fn();

    const wrapper = shallow(
        <TaskList 
            tasks={tasks}
            complete={complete}
            handleDelete={handleDelete}
        />
    );
    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener todos los elementos', () => {
        
        const tam = wrapper.find('Task').length;
        expect(tam).toBe(tasks.length);
        expect( typeof wrapper.find('Task').at(0).prop('handleDelete')).toBe( 'function' );
    })

})
