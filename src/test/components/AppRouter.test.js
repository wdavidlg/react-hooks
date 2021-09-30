const { mount } = require("enzyme")
const { default: AppRouter } = require("../../components/09-useContext/AppRouter")
const { default: UserContext } = require("../../components/09-useContext/UserContext")


describe('Pruebas en <AppRouter />', () => {
    
    const user = {
        id: 1,
        name: 'will',
        emai: 'will@will.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter/>
        </UserContext.Provider>
    )

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        
    })
    
})
