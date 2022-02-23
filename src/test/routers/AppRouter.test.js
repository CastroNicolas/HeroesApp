import { mount } from "enzyme"
import { authContext } from "../../auth/authContex"
import { AppRouter } from "../../Routers/AppRouter"


describe('Pruebas en <AppRouter>', () => { 


    test('debe de mostrar login si no esta autenticado', () => { 
        
        const contextValue = {
            user: {
                logged: false
            }
        }
        
        const wrapper = mount(
            <authContext.Provider value={ contextValue}>
                <AppRouter/>
            </authContext.Provider>
        )
        
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('h1').text().trim()).toBe('Login')
    })

    test('debe de mostrar el componente de MArvel si esta autenticado', () => { 
        
        const contextValue = {
            user: {
                logged: true,
                name: 'Nicolas'
            }
        }
        
        const wrapper = mount(
            <authContext.Provider value={ contextValue}>
                <AppRouter/>
            </authContext.Provider>
        )
        
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.navbar').exists()).toBe(true)
    })

 })