function clickBorde(){
    const imagen  = document.querySelector('#imgBorde')

    if (imagen.style.borderColor === 'red' ){

        imagen.style.borderColor ='transparent';
    } else {
        imagen.style.borderColor = 'red';
    }
}
  