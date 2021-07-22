import BasePage from '../pages/base.page';

class Cuenta extends BasePage {

    //Elementos Web
    get listaDeDeseados(){return $('.lnk_wishlist')}
    get miLista(){return $('=My wishlist')}
    get nombreArticulo(){return $('#s_title')}
    get eliminar(){return $('.lnkdel')}

    //-------------------------------------------------------------------------------------------------------//
  
    async irAListaDeDeseados(){
        addStep('Ir a las listas de deseados')
        await super.clickearElemento(await this.listaDeDeseados)
    }

    async ingresarAListaDeDeseados(){
        addStep('Ingresar a mi lista de deseados')
        await super.clickearElemento(await this.miLista)
    }

    async obtenerNombreArticulo(){
        addStep('Obtener nombre de artículo')
        return (await this.nombreArticulo).getText()
    }

    async eliminarDeLaLista(){
        addStep('Eliminar artículo de la lista')
        await super.clickearElemento(await this.eliminar)
    }

}
export default new Cuenta();