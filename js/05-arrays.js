//Como instanciar un array vacio(buena practica declarar el array con const)

const nombres = [];

//como instanciar un array con datos combinados

const datosCombinados = [true, "Juan", 35, false, "Pedro"];

//array de un tipo de dato

const años = [12, 390, 2, 167, 40];

console.log(años[0]);
console.log(años[2]);

//nos devuelve la longitud del array
console.log(años.length);

//nos devuelve el numero mayor del array
console.log(Math.max(...años));
console.log(...años);


//Metodos de arrays MUTABLES(modifican al array original)

let numbers = [2, 4, 6, 8]
console.log(numbers);

//metodo push() agrega un elemento a la ultima posicion
console.log(numbers.push(10));
console.log(numbers);

//metodo pop() Elimina el elemento de la ultima posicion
console.log(numbers.pop());
console.log(numbers);

//metodo shift() elimina el elemento de la primera posicion
numbers.shift()
console.log(numbers);

//metodo unshift() agregar un elemento a la primera posición
numbers.unshift(1)
console.log(numbers);

//metodo splice()
//primer parametro le indicamos la posicion
//segundo parametro le indicamos cuantos elementos queremos eliminar
//tercer parametro le indicamos elementos para agregar
numbers.splice(1, 0, 3, 9, 10, 11)
console.log(numbers);

//Metodo INMUTABLES(no modifican al array original, hacen un duplicado)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

//metodo map()
const triples = numeros.map(elemento => elemento * 3);
console.log(triples);

//metodo slice() necesita de dos parametros
//corta al array
//incluyendo al primer parametro
//excluyendo al segundo parametro
const array = [10, 20, 30, 40, 50, 60, 70, 3, 80, 5];

const b = array.slice(0,2)
console.log(b);

//metodo concat() concatenar
const c = [1, 2, 3].concat([4, 5]);
console.log(c);

//metodo find() nos devuelve el primer elemento que cumpla con la condicion
const encontrado = array.find(elemento => elemento > 3 );
console.log(encontrado);

//metodo filter() nos devueve a todos los elementos que cumplen la condicion
const filtrados = array.filter(elemento => elemento > 40)
console.log(filtrados);

const meses = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

document.writeln(`<ul class="list-group">`);
for (let i = 0; i < meses.length; i++) {
    document.writeln(`<li class="list-group-item">${meses[i]}`)
}
document.writeln(`</ul>`);
































