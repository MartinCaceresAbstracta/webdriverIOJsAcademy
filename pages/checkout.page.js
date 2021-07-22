import BasePage from '../pages/base.page';


class Checkout extends BasePage{

    //WebElements
    get botonIrAlCheckout(){return $('=Proceed to checkout')}
    get botonAvanzarCheckout(){return $('[name="processAddress"]')}
    get botonAvanzarShipping(){return $('[name="processCarrier"]')}
    get checkboxTerminosYCondiciones(){return $('#cgv')}
    get cheque(){return $('.cheque')}
    get botonConfirmarOrden(){return $('span=I confirm my order')} 
    get alertaExito(){return $('.alert-success')}
    
    //-------------------------------------------------------------------------------------------------------//

    async aceptarTerminosYCondiciones(){
        addStep('Aceptar términos y condiciones')
        await (await this.checkboxTerminosYCondiciones).click()
    }

    async irAlCheckout(){
        addStep('Ir al checkout')
        await super.clickearElemento(await this.botonIrAlCheckout)
    }

    async avanzarCheckout(){
        addStep('Avanzar al siguiente paso del checkout')
        await super.clickearElemento(await this.botonAvanzarCheckout)
    }

    async avanzarShipping(){
        addStep('Avanzar al siguiente paso del shipping')
        await super.clickearElemento(await this.botonAvanzarShipping)
    }

    async seleccionarMetodoDePagoCheque(){
        addStep('Seleccionar cheque como método de pago')
        await super.clickearElemento(await this.cheque)
    }

    async confirmarOrden(){
        addStep('Confirmar orden')
        await super.clickearElemento(await this.botonConfirmarOrden)
    }

    async existeAlertaDeExito(){
        addStep('Validar si existe alerta indicando que se confirmó la compra')
        return (await this.alertaExito).isExisting()
    }

}

export default new Checkout();