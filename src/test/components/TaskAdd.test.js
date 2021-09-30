import {shallow} from 'enzyme'
import TaskAdd from '../../components/08-useReducer/TaskAdd'
import { useForm } from '../../hooks/useForm';
//jest.mock('../../hooks/useForm')

describe('Pruebas en <TodoAdd />', () => {

    const handleAdd = jest.fn();
    // let wrapper = null;
    
    // beforeEach(() => {
    //     jest.clearAllMocks();
    //     useForm.mockReturnValue([{
    //         task: ''
    //     }, () => {}, () => {}]);

    //     wrapper = shallow(
    //         <TaskAdd 
    //             handleAdd={handleAdd}
    //         />
    //     )
    // })

    // test('debe de mostrarse correctamente', () => {

    //     expect(wrapper).toMatchSnapshot();
        
    // })

    // test('No debe de llamar a handleAdd', () => {
        
    //     wrapper.find('form').simulate('submit', {
    //         preventDefault: ()=>{}
    //     })
    //     expect(handleAdd).not.toHaveBeenCalled();
        
    // })
    
    // test('debe de llamar a handleAdd', () => {

    //     useForm.mockReturnValue([{
    //         task: 'Aprender React'
    //     }, () => {}, () => {}]);
        
    //     const wrapper = shallow(<TaskAdd  handleAdd={handleAdd}/>)
    //     wrapper.find('form').simulate('submit', {
    //         preventDefault: ()=>{}
    //     })
    //     expect(handleAdd).toHaveBeenCalledTimes(1);
    //     expect(handleAdd).toHaveBeenCalledWith({
    //         done: false,
    //         task: 'Aprender React',
    //         id: expect.any(Number)
    //     })

    // })

    test('Otra forma de hacerlo todo, yver si el reset funciona', () => {
        
        const value = 'Aprender Node';
        
        const wrapper = shallow(<TaskAdd  handleAdd={handleAdd}/>)
        //Debe de mostrarse correctamente
        expect(wrapper).toMatchSnapshot();
        
        //No debe de llamar a handleAdd
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(handleAdd).not.toHaveBeenCalled();

        //Debe de llamar a handleAdd
        wrapper.find('input').simulate('change', {
            target:{
                value,
                name: 'task'
            }
        })
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(handleAdd).toHaveBeenCalledTimes(1);
        //Debe de resetear el valor
        expect(wrapper.find('input').prop('value')).toBe('')

    })
    
    
    
})
