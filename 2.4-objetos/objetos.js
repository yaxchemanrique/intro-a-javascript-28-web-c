let diego = {
    nombre: 'Diego',
    apellido: 'Lechuga',
    edad: 2023-2003,
    metodo: function tomarAgua () {
        console.log(`${ana.nombre} esta tomando agua`)
    },
}

let ana = {
    nombre: 'Ana'
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

diego.metodo()

const frutas = ['Manzana', 'Pera', 'Naranja', 'Uva']

/*for(let i = 0;i<frutas.length;i++){
    console.log(frutas[i])
}*/

for(let i = 0;i<lista[0].albums.length;i++){
    console.log(lista[0].albums[i])
}

frutas.forEach(fruta => {
    console.log(fruta);
});

const valores = Object.keys(diego);

for(let i = 0;i<valores.length;i++){
    console.log(valores[i])
}