const secretNumberContainer = document.getElementById('secret-number');
const input = document.getElementById('floatingInput');
const button = document.getElementById('check-button');
const hint = document.getElementById('hint');
const scoreContainer = document.getElementById('score');

const randomNumber = Math.trunc(Math.random() * 20);
secretNumberContainer.textContent = randomNumber;

let score = 20;
scoreContainer.textContent = score;

// let clicks = 0;

const compareToRandom = function () {
    // clicks++;
    // console.log(clicks)
    const respuesta = Number(input.value);

    if(respuesta === randomNumber) {
        hint.textContent = 'Correcto! 🎉';
        hint.classList = 'alert alert-success';

    } else if (respuesta > randomNumber) {
        hint.textContent = 'Intenta un numero mas pequeño ⬇️'
        hint.classList = 'alert alert-danger';
        score--;
        scoreContainer.textContent = score;
        // scoreContainer.textContent = score < 0 ? 0 : score;
        // score = score -1;
        // score -= 1;

    } else {
        hint.textContent = 'Intenta un numero mas grande, sin miedo al éxito! ⬆️'
        hint.classList = 'alert alert-danger';
        score--;
        scoreContainer.textContent = score;
    }
}

button.addEventListener('click', compareToRandom);