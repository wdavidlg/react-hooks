const { mount } = require("enzyme")
const { default: LoginScreen } = require("../../components/09-useContext/LoginScreen")
const { default: UserContext } = require("../../components/09-useContext/UserContext")


describe('Pruebas en <LoginScreen />', () => {

    const user = {
        id: 1234,
        name: 'Jorge',
        email: 'jorge@jorge.com'
    }
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen/>
        </UserContext.Provider>
    )
    
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de ejecutar el setUser con el argumento esperado', () => {
        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledTimes(1);
        expect(setUser).toHaveBeenCalledWith(user);
    })
    

    
})
