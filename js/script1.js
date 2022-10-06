const formulario = document.getElementsByName('formulario')[0],
    elementos = formulario.elements,
    boton = document.getElementById('btn');
const validar = function() {
    if (formulario.rta.value != 18) {
        alert('usted es un robot sin alma, las respuesta correcta era "18" muy mal')
    } else {
        alert('respuesta correcta, usted no es un robot definitivamente. todo el equipo de francis web lo felicita!');
    }

}
formulario.addEventListener("submit", validar)