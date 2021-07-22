import BasePage from '../pages/base.page';

class BusquedaPage extends BasePage {

    //Elementos Web
    get resultado(){return $('.product-container .product-name')}

    //-------------------------------------------------------------------------------------------------------//
  
    /**
     * Click en el resultado de la búsqueda
     */
    async ingresarAlResultado(){
        addStep('Ingresar al resultado de la búsqueda')
        await super.clickearElemento(await this.resultado);
    }

    /**
     * Obtener texto del resultado de la búsqueda
     */
    async obtenerNombreResultado(){
        addStep('Obtener el nombre del resultado')
        return (await this.resultado).getText();
    }

}

export default new BusquedaPage();