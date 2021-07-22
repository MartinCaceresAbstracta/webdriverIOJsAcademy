import BasePage from './base.page';

class ArticuloPage extends BasePage {

    //Elementos Web
    get wishList(){return $('#wishlist_button')}
    get botonCerrarAviso(){return $('*[title="Close"]')}

    //-------------------------------------------------------------------------------------------------------//
  
    async agregarAListaDeDeseados(){
        addStep('Agregar articulo a la lista de deseados')
        await super.clickearElemento(await this.wishList)
    }

    async cerrarAviso(){
        addStep('Cerrar aviso')
        await super.clickearElemento(await this.botonCerrarAviso)
    }

}
export default new ArticuloPage();