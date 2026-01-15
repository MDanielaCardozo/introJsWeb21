//Escribe un programa que pida una frase y es escriba las vocales que aparecen
//Nota: a tener en cuenta la funcion length y substring o charAt(developer mozilla)
//1-Escribe un programa que pida una frase
//2-Pregunta si el primer caracter es vocal, si lo es lo muestro por pantalla, sino no lo mostramos.
//3-Hacemos lo mismo con el siguiente caracter.

const frase = prompt('Ingrese una frase.').toLowerCase();

for (let caracter = 0; caracter < frase.length; caracter++) {
    console.log(frase.charAt(caracter));
    if (
        frase.charAt(caracter) === 'a' ||
        frase.charAt(caracter) === 'e' ||
        frase.charAt(caracter) === 'i' ||
        frase.charAt(caracter) === 'o' ||
        frase.charAt(caracter) === 'u' 
    ) {
        document.writeln(frase.charAt(caracter));
    }
}