// 1. Transforma esta declaración de función a una función de expresión. El ejercicio debe
// quedar en un archivo nombrado `1_funcion.js` (1 Punto)


// function example(a, b, c){
// return a+b+c
// }


const example = function(a, b, c) {
    return a + b + c;
  };

//  Se usara de la siguiente manera
const resultado = example(1, 2, 3);
console.log(resultado);