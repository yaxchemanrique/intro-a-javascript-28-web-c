/* let dato = prompt('dame un dato');

while (dato != 'esc') {
    console.log(dato);
    dato = prompt('dame un dato');
} */

/* let i = 1;
while(i <= 12){
    console.log(i);
    // i = i + 1;
    // i += 1;
    i++
} */

/* 1+12 = 13 ✅
2+12 = 14 ✅
... */

/* let i = 1;
// debugger
while( i<= 12) {
    console.log(`${i} + 12 = ${i + 12}`);
    i++;
} */

/* let numero = null;

do {
    numero = prompt(' Dame uun numero del 1 al 10');
    console.log(numero)
}

while(numero > 10 || numero < 1)
console.log(`Super! ${numero} sí esta entre el 1 y 10!`); */

const array = [0, 1, 2, 3, 4, 5, 6];
console.log(array);

/* for (let i = 0; i < array.length; i++) {
    if(i === 3) {
        continue;
    }
    console.log(i);
} */

for (let i = 0; i < array.length; i++) {
    if(i === 3) {
        break;
    }
    console.log(i);
}
console.log('Fin!')