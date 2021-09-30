const { shallow } = require("enzyme")
const { MultipleCustomHooks } = require("../../components/03-examples/MultipleCustomHooks");
const { useCounter } = require("../../hooks/useCounter");
const { useFetch } = require("../../hooks/useFetch");
jest.mock("../../hooks/useFetch");
jest.mock('../../hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks />', () => {

    beforeEach(() => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {}
        });
    })
    
    test('debe mostrarse correctamente', () => {
        const state = {
            data: null,
            loading: true,
            error: null
        }
        useFetch.mockReturnValue(state);
        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar la informacion', () => {
        const data = [
            {
                quote_id: '123',
                quote: 'Hola mundo',
                author: 'Mark'
            }
        ]
        
        const state = {
            data,
            loading: false,
            error: null
        }
        useFetch.mockReturnValue(state);
        const wrapper = shallow(<MultipleCustomHooks/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('p').at(2).text()).toBe('Mark');
        
    })
    
    

})
