import BasePage from '../pages/base.page';

class LoginPage extends BasePage {

    //WebElements
    get inputEmail(){return $('#email')}
    get inputContraseña(){return $('#passwd')}
    get enviarLogin(){return $('#SubmitLogin')}
    get header(){return $('.page-heading')}

    //-------------------------------------------------------------------------------------------------------//

    /**
     * Escribe el usuario y contraseña y presiona el botón de ingresar
     * @param {String} usuario
     * @param {String} contraseña
     */
    async login(usuario,contraseña){
        addStep(`Login con usuario: ${usuario} y contraseña ${contraseña}`)
        await super.clearAndSendKeys(await this.inputEmail,usuario)
        await super.clearAndSendKeys(await this.inputContraseña,contraseña)
        await super.clickearElemento(await this.enviarLogin)
    }

    /**
     * Obtener texto del header
     */
    async obtenerTextoHeader(){
        addStep(`Verificar Header`)
        return (await this.header).getText();
    }

}
export default new LoginPage();