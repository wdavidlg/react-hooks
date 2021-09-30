
const { act } = require("@testing-library/react")
const { shallow, mount } = require("enzyme")
const { default: TaskApp } = require("../../components/08-useReducer/TaskApp")
const { tasks } = require("./fixtures/tasks")


describe('Pruebas con <TaskApp />', () => {
    
    test('debe mostrarse correctamente ', () => {
        const wrapper = shallow(<TaskApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de agregar un Task', () => {

        const wrapper = mount(<TaskApp />);

        Storage.prototype.setItem = jest.fn();

        act(() => {
            wrapper.find('TaskAdd').prop('handleAdd')(tasks[0]);
            wrapper.find('TaskAdd').prop('handleAdd')(tasks[1]);
        })
        
        expect(wrapper.find('h1').text()).toBe('TaskApp( 2 )')
        expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    })

    test('debe de borrar un Task', () => {
        const wrapper = shallow(<TaskApp/>);

        wrapper.find('TaskAdd').prop('handleAdd')(tasks[0])
        wrapper.find('TaskList').prop('handleDelete')(tasks[0].id)
        expect(wrapper.find('h1').text()).toBe('TaskApp( 0 )')
    })
    


    
    
    
})
