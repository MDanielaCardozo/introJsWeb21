/* saludar()


//como declara funciones o crearlas de forma tradicional(hoisting)
function saludar() {
    //aqui agrego todas lineas de codigo que quiero aislar en esta funcion(Scope/ambito)
    document.writeln("Hola mundo!");
} */
    
    //con saludo por default
    const saludar = (nombre = "Invitado") => {
        document.writeln(`<h1>Bienvenido ${nombre}!</h1>`)
    }
   
   const sumar = function(a, b) {
       return a+b
    }
    
    console.log(sumar(3,3));

    saludar("Mariano");

    //funcion que nos devuelve un nro aleatoria
    function valorAletorio(max, min) {
        const aleatorio = Math.floor(Math.random() * (max - min + 1) + min);
        document.writeln(`<p>El numero aleatorio creado es: ${aleatorio}</p>`)
    }

    const max = parseInt(prompt("Ingrese un número máximo"));
    const min = parseInt(prompt("Ingrese un número minimo"));

    valorAletorio(max, min);




