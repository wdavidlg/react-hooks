import {shallow} from 'enzyme'
import App from '../App';

describe('Pruebas con <App/>', () => {
    test('debe mostrarse correctamente', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toMatchSnapshot();
    })
    
})
