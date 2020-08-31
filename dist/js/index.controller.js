// Capturalos las etiquetas y las guardamos en variables
const animacionDragDown = document.querySelector('.orders__lists-drag-down');
const animacionDragDown2 = document.querySelector('.orders__lists-drag-down2');
const animacionUbicacion = document.querySelector('.orders__lists-item1');
const animacionDias = document.querySelector('.orders__lists-item2');
const animacionParticipantes = document.querySelector('.orders__lists-item3');
const animacionBuy = document.querySelector('.orders__lists-item4');

// Declaramos una variable que es en alerta -> "Nuestro chivatio"
var showMenu = false; 

// Funcion a llamar al hacer click en la lista de usuarios
function clickMe () {
    // Si nuestra variable showMenu es false 
    if (!showMenu) {

        // Que agregue o ejecute o  active las clase open -> esta clases tienen sus respectivas propiedades transform 
        showMenu = true;
        animacionDragDown.classList.add('open');
        animacionUbicacion.classList.add('open');
        animacionParticipantes.classList.add('open');
        animacionDias.classList.add('open');
        animacionBuy.classList.add('open');

        /*
        setTimeout(() => {
            animacionDragDown.classList.add('open');           
        } , 500);
        */
        
    } else { // Caso contrario que quite o remueva las clases y deje la variable showMenu en false
        animacionDragDown.classList.remove('open');
        animacionUbicacion.classList.remove('open');
        animacionParticipantes.classList.remove('open');
        animacionDias.classList.remove('open');
        animacionBuy.classList.remove('open');
        showMenu=false;
    }
}
