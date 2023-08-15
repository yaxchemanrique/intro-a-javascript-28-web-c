let diego = {
    nombre: 'Diego',
    apellido: 'Lechuga',
    edad: 2023-2003,
}

diego.ine = true;

console.log(diego)

let lista = [
    {
        nombre: 'Alex Turner',
        banda: 'Arctic Monkeys',
        albums: ['AM', 'The Car'],
        nacionalidad: 'Britanico',
        edad: 36,
        canciones: ['I wanna be yours'],
    },
    {
        nombre: 'Julian Casablancas',
        banda: 'The Strokes',
        albums: ['Room on fire', 'The new abnormal'],
        nacionalidad: 'Estadouinidense',
        edad: 45,
    },
]

lista[1].canciones = ['A']

console.log(`La banda ${lista[0].banda} es de nacionalidad ${lista[0].nacionalidad}`);


function parEImpar (numero) {
    if (numero%2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(parEImpar(2))