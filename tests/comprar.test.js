import homePage from '../pages/home.page';
import loginPage from '../pages/login.page';
import busquedaPage from '../pages/busqueda.page';
import checkout from '../pages/checkout.page';
import articulo from '../pages/articulo.page';
import cuenta from '../pages/cuenta.page';
import DatosLogin from '../datos/usuarios';
import DatosArticulos from '../datos/articulos';

describe('Compra', function () {
    DatosLogin.forEach(({usuario,contraseña,headerEsperado}) => {
    it('Log in', async ()=> {
            await homePage.abrir('/');
            await homePage.navegarAlLogin();
            await expect(await loginPage.obtenerTextoHeader()).to.equal(headerEsperado);
            await loginPage.login(usuario,contraseña);
        });
    });
    it('Buscar articulo', async ()=> {
        await homePage.buscar(DatosArticulos[0].articulo)
        await expect(await busquedaPage.obtenerNombreResultado()).to.equal(DatosArticulos[0].articulo)
    });
    it('Agregar/Validar/Eliminar de la lista de deseados', async ()=> {
        await busquedaPage.ingresarAlResultado();
        await articulo.agregarAListaDeDeseados();
        await articulo.cerrarAviso();
        await homePage.irACuenta();
        await cuenta.irAListaDeDeseados();
        await cuenta.ingresarAListaDeDeseados();
        await expect(await cuenta.obtenerNombreArticulo()).to.contain(DatosArticulos[0].articulo);
        await cuenta.eliminarDeLaLista();
    });
    it('Agregar al carrito', async ()=> {
        await homePage.abrir('/');
        await homePage.agregarPrendaAlCarritoYEsperar(DatosArticulos[1].articulo);
    });
    it('Relizar chekout', async ()=> {
        await checkout.irAlCheckout();
        await checkout.irAlCheckout();
        await checkout.avanzarCheckout();
        await checkout.aceptarTerminosYCondiciones();
        await checkout.avanzarShipping();
        await checkout.seleccionarMetodoDePagoCheque();
        await checkout.confirmarOrden();
        await expect(await checkout.existeAlertaDeExito()).to.be.true
    });
    it('Comparación de imágenes', async () => {
        await browser.url('http://automationpractice.com/index.php?id_category=8&controller=category');
        await (await $(".title_block")).waitForDisplayed();
        expect(
            await browser.checkElement(await $(".title_block"), "title_block", {
            }),
            "Error: la barra de navegación no coincide con la original"
        ).equal(0);
     
        await browser.url('http://automationpractice.com/index.php?id_category=3&controller=category');
        await (await $('.title_block')).waitForDisplayed();
        expect(await browser.checkElement(await $('.title_block'), 'title_block', {})).to.not.equal(0);
     });
});