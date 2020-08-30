const animacionDragDown = document.querySelector('.orders__lists-drag-down');
const animacionDragDown2 = document.querySelector('.orders__lists-drag-down2');
const animacionUbicacion = document.querySelector('.orders__lists-item1');
const animacionDias = document.querySelector('.orders__lists-item2');
const animacionParticipantes = document.querySelector('.orders__lists-item3');
const animacionBuy = document.querySelector('.orders__lists-item4');
var showMenu = false; 
var showMenu2 = false;
function clickMe () {
    
    if (!showMenu) {
        showMenu = true;
        animacionDragDown.classList.add('open');
        animacionUbicacion.classList.add('open');
        animacionParticipantes.classList.add('open');
        animacionDias.classList.add('open');
        animacionBuy.classList.add('open');
    
    } else {
        animacionDragDown.classList.remove('open');
        
        animacionUbicacion.classList.remove('open');
        animacionParticipantes.classList.remove('open');
        animacionDias.classList.remove('open');
        animacionBuy.classList.remove('open');
        showMenu=false;
    }
}
