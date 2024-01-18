function verificaPassword(){
    const password1 = document.querySelector("#password1").value;
    const password2 = document.querySelector("#password2").value;
    const password3 = document.querySelector("#password3").value;

    const result = document.querySelector("#result")

    if(password1 === '9' && password2 === '1' && password3 === '1'){
        result.textContent = `El password 1 "${password1}${password2}${password3}" es correcto`
        result.style.color = 'blue';
    } 
    else if (password1 === '7' && password2 === '1' && password3 === '4'){
        result.textContent = `El password 2 "${password1}${password2}${password3}" es correcto`
        result.style.color = 'blue';
    } else{
        result.textContent = `El password "${password1}${password2}${password3}" es incorrecto`
        result.style.color = 'red';
    }
}
