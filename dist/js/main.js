// Variables a enlazar con los class
const animacionDragDown = document.querySelector('.orders__lists-drag-down');
const animacionUbicacion = document.querySelector('.orders__lists-item1');
const animacionDias = document.querySelector('.orders__lists-item2');
const animacionParticipantes = document.querySelector('.orders__lists-item3');
const animacionBuy = document.querySelector('.orders__lists-item4');

function clickMe (i) {

    //let displayed = document.querySelector('.orders__lists-drag-down').style.display;

    if (document.querySelector('.orders__lists-drag-down').style.display == 'none') {
        document.querySelector('.orders__lists-drag-down').style.display = 'grid';
        animacionDragDown.classList.add('open');
        animacionUbicacion.classList.add('open');
                    // Aplicamos la transicion a los elementos guardados en las variables
        // Primero el DragDown
        //animacionDragDown.style.animation = 'mueve-dragDown 0.2s ease-out';

        // De Izquierda a derecha
        //animacionUbicacion.style.animation = 'mueve-item1 0.5s ease-out';
        //animacionParticipantes.style.animation = 'mueve-item3 0.5s ease-out';

        // De Derecha a izquierda
        //animacionDias.style.animation = 'mueve-item2 0.5s ease-out';
        //animacionBuy.style.animation = 'mueve-item4 0.5s ease-out';

    } else {
        document.querySelector('.orders__lists-drag-down').style.display = 'none';

        //animacionBuy.style.animation = 'oculta-item4 0.5s ease-out';

                            // Aplicamos la transicion a los elementos guardados en las variables
        // Primero el DragDown
        //animacionDragDown.style.animation = 'oculta-dragDown 1s ease-out';

        // De Izquierda a derecha
        //animacionUbicacion.style.animation = 'oculta-item2 0.5s ease-out';
        //animacionParticipantes.style.animation = 'oculta-item3 0.5s ease-out';

        // De Derecha a izquierda
        //animacionDias.style.animation = 'oculta-item2 0.5s ease-out';
    }
}

