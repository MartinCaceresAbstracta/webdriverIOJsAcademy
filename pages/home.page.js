import BasePage from '../pages/base.page';

class HomePage extends BasePage {

    //WebElements
    get barraDeBusqueda(){ return $('[name="search_query"]') }
    get login(){return $('.login')}
    get buttonAgregarAlCarrito(){return $('=Add to cart')}
    get validacionCarrito(){return $('.layer_cart_product h2')} 
    get divAgregarAlCarrito(){return $('.layer_cart_product')}
    get cuenta(){return $('.account')}
    get header(){return $('#header')}
    prendaPorNombre(nombre){return $(`=${nombre}`)}

    //-------------------------------------------------------------------------------------------------------//

    /**
     * Escribe el artículo en el campo de búsqueda y presiona Enter
     * @param {String} articulo que se buscará
     */
    async buscar(articulo){
        addStep(`Buscar artículo: ${articulo}`)
        await super.clearAndSendKeys(await this.barraDeBusqueda,articulo);
        (await this.barraDeBusqueda).keys('Enter');
    }

    async agregarPrendaAlCarritoYEsperar(nombrePrenda){
        addStep('Agregar prenda al carrito')
        let prenda = await this.prendaPorNombre(nombrePrenda);
        await prenda.scrollIntoView();
        await prenda.moveTo();
        await super.clickearElemento(await this.buttonAgregarAlCarrito);
        (await this.divAgregarAlCarrito).waitForDisplayed();
        
    }

    async navegarAlLogin(){
        addStep('Navegar a login')
        await super.clickearElemento(await this.login)
    }

    async obtenerTextoValidacionCarrito(){
        addStep('Obtener texto de validación')
        return (await this.validacionCarrito).getText();
    }

    async irACuenta(){
        addStep('Ir a la cuenta')
        await super.clickearElemento(await this.cuenta)
    }

    // validarHeader(){
    //     this.header.waitForDisplayed();
    //     expect(
    //         browser.checkElement(this.header, "header"),
    //         "Error: el header no coincide con la imagen original"
    //     ).equal(0)
    // }

}

export default new HomePage();