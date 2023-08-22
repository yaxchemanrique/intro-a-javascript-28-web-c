const header = document.createElement('h1');
header.textContent = 'Este es un h1';

// body <- header
// const body = document.querySelector('body');
// const body = document.getElementsByTagName('body');
// body[0].appendChild(header);
const body = document.getElementById('body');
body.appendChild(header);

header.style.backgroundColor = '#F06A6D';
header.style.fontSize = '5rem';

const parrafos = document.getElementsByTagName('p');
for(let i = 0; i < parrafos.length; i++){
    parrafos[i].style.color = 'blue';
}

// parrafos[0].style.opacity = 0;
// parrafos[0].style.display = 'none';
// body.removeChild(parrafos[0]);

const ankers = document.getElementsByClassName('fondo');
ankers[2].classList.remove('fondo');

const button = document.querySelector('button');

function sayHello() {
    alert('Hello!');
}

// button.addEventListener('click', sayHello);
button.addEventListener('click', function sayHello2() {
    alert('Hello! 2');
});

