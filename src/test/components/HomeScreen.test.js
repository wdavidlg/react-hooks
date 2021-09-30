const { mount } = require("enzyme")
const { default: HomeScreen } = require("../../components/09-useContext/HomeScreen");
const { default: UserContext } = require("../../components/09-useContext/UserContext");


describe('Pruebas con <HomeScreen />', () => {

    test('debe de mostrarse correctamente', () => {

        const user = {name: 'will', email: 'will@will.com'};

        const wrapper = mount(
          <UserContext.Provider value={{
            user
          }}>
              <HomeScreen/>
          </UserContext.Provider>  
        );
        expect(wrapper).toMatchSnapshot();
    })
    
    
})
