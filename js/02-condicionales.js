//condicionales simples

/* 
if(condicion){
codigo a ejecutar si cumple condicion
}
*/

/* let edad;

edad = parseInt(prompt('Ingrese su edad'));

if (edad >= 18) {
    document.writeln("Eres mayor de edad 😎.")
}
 */
//condicionales dobles
/* if(condicion){
bloque de codigo a ejecutar si cumple con la condicion
}else{
    bloque de codigo a ejecutar si no cumple la condicion
    }
 */

const age = parseInt(prompt("Ingrese su edad"));
console.log(age);

console.log(isNaN("hola"));
console.log(isNaN("18"));
console.log(isNaN(18));

if (isNaN(age)) {
    document.writeln("Edad no válida.");
} else {
    //aqui si entra la condicion y ejecuta el condicional de la edad
    if (age >= 18) {
        document.writeln("Sos mayor de edad 😎.")
    } else {
        document.writeln("Sos menor de edad 😊.")
    }
}




