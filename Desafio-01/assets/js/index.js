precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const btnMas = document.querySelector("#btnMas");
const btnMenos = document.querySelector("#btnMenos");
const contadorSpan = document.querySelector("#cantidad");
const valorTotalSpan = document.querySelector("#total");

let contador = 0;


precioSpan.innerHTML = "<p>" + precio + "</p>";

function sumarBtn() {
    contador++;
    document.querySelector('.cantidad').textContent = contador;
    valorTotal();
}

function restarBtn() {
    if(contador > 0){
        contador--;
        document.querySelector('.cantidad').textContent = contador;
        valorTotal();
    }
}

function valorTotal(){
    const valorTotal = precio * contador;
    valorTotalSpan.textContent = valorTotal;
}


valorTotal();

