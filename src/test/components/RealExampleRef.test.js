const { shallow } = require("enzyme")
const { RealExampleRef } = require("../../components/04-useRef/RealExampleRef")

describe('Pruebas con <RealExampleRef/>', () => {
    
    test('debe mostrarse correctamente', () => {
        const wrapper = shallow(<RealExampleRef/>);
        expect(wrapper).toMatchSnapshot();
        
    })

    test('debe de mostrar el componente <MultipleCustomHooks/>', () => {
        const wrapper = shallow(<RealExampleRef/>);
        wrapper.find('button').simulate('click');
        const resp = wrapper.find('MultipleCustomHooks').exists();
        expect(wrapper).toMatchSnapshot();
        expect(resp).toBe(true);
    })
    
    
})
