function contarSticker() {
    const contarSticker1 = document.querySelector('#countSticker1');
    const contarSticker2 = document.querySelector('#countSticker2');
    const contarSticker3 = document.querySelector('#countSticker3');

    const valorInput1 = parseFloat(contarSticker1.value) || 0;
    const valorInput2 = parseFloat(contarSticker2.value) || 0;
    const valorInput3 = parseFloat(contarSticker3.value) || 0;

    if (valorInput1 < 0) {
        return valorInput1;

    } else if (valorInput2 < 0) {
        return valorInput2;

    } else if (valorInput3 < 0) {
        return valorInput3;

    } else {
        return valorInput1 + valorInput2 + valorInput3;
    }
}


function validarCantidad() {
    const totalSticker = contarSticker();
    const msjeResultado = document.querySelector('#msjeResultado');

    if (totalSticker >= 0 && totalSticker <= 10) {
        msjeResultado.textContent = "El total de stickers es: " + totalSticker;
        msjeResultado.style.color = 'black';
    } else {
        msjeResultado.textContent = "No puede llevar más de 10 o stickers negativos, y llevas: " + totalSticker;
        msjeResultado.style.color = 'red';
    }
}
