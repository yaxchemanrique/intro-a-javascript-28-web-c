const salario = prompt('¿Cuál es el salario del cliente?');
const strikes = prompt('¿El usuario tiene penalizaciones?')

let numeroSalario = parseFloat(salario);
let numeroStrikes = parseInt(strikes);

let tarjeta = null;
numeroSalario = numeroSalario - (numeroStrikes*5000);
console.log(numeroSalario);

if(numeroSalario <= 5000 && numeroSalario > 0) {
    tarjeta = 'Silver';
} else if (numeroSalario > 5000 && numeroSalario <= 10000) {
    tarjeta = 'Gold';
} else if (numeroSalario > 10000) {
    tarjeta = 'Platinum';
}



if(tarjeta !== null) {
    console.log(`Tu tarjeta es ${tarjeta}`)
} else {
    console.log('Este usuario no puede tener una tarjeta')
}