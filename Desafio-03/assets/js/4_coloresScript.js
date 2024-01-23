const colorDivs = document.querySelectorAll('.color-div');
    
colorDivs.forEach(div => {
    div.addEventListener('click', () => div.style.backgroundColor = 'black');
});

let globalColor;

document.addEventListener('keydown', e => {
    const { key } = e;
     
    if (key === 'a') globalColor = 'pink';
    else if (key === 's') globalColor = 'orange';
    else if (key === 'd') globalColor = 'lightblue';
    else if (key === 'q') crearDiv('purple');
    else if (key === 'w') crearDiv('gray');
    else if (key === 'e') crearDiv('brown');
 

    const keyDiv = document.getElementById('key');
    keyDiv.style.backgroundColor = globalColor;
});

const crearDiv = color => {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'color-div';
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.border = '1px solid black';
    document.body.appendChild(nuevoDiv);
};
  