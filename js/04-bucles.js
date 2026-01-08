//Estructura de repeticion
//Tipos de bucles: While, do-while, for

//while - mientras que se cumpla con la condicion, ejecuta el bloque de codigo

/* while (condicion logica) {
    todas la lineas de codigo que quieramos ejecutar mientras se cumpla con la condicion logica
    deseo repetir varias veces esa ejecucion
    agregar una linea de codigo que haga que se detenga
} */

    let renglon = 21;

    while (renglon <= 20) {
        document.writeln(`Renglon numero ${renglon} </br>`);
        //renglon = renglon + 1;
        renglon ++;
    }

  /*   do {
        siempre ejecuta aunque sea una sola vez este codigo
        ejecuta todas la lineas de codigo que programe a repetir
        agregar algo que haga que el bucle se deje de repetir
    } while (condicion); */

    /* let pasos = 0;

    do {
        document.writeln(`Paso numero ${pasos}. </br>`);
        pasos ++
    } while (pasos < 5); */

    for (let contador = 10; contador >= 0; contador--) {
        document.writeln(`Cuenta regresiva ${contador}. </br>`)
    }
