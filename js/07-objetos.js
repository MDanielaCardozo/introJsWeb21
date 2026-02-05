//OBJETO 
//declar un objeto con notacion literal

/* Propiedad
codigo: 2334455 (NUMBER)
nombre: "Zapatillas deportivas" (STRING)
tamaño
precio
marca
peso
estado: true(tipo de dato boleano)
metodos:
actualizarPrecio(nuevoPrecio)
cambiarEstado(nuevoEstado)
*/

//OBJETO VACIO
const cancion = {};

//OBJETO CON VALORES
const funko = {
    //definir propiedades
    //clave/key : valor/value
    codigo: 867,
    precio: 20.5,
    nombre: "Tanjiro kamado",
    marca: "Special Edition",
    estado: true,
    //metodos
    mostrarDatos: function () {
        //console.log(this);
        document.writeln(`<p><b>Funko: ${this.nombre}</b></p>`);
        document.writeln(`<ul><li>Codigo: ${this.codigo}</li>
            <li>Precio: ${this.precio}</li>
            <li>Marca: ${this.marca}</li>
            <li>Estado: ${this.estado}</li></ul>`)
    },

    actualizarPrecio: function (nuevoPrecio) {
        console.log(this);
        console.log(this.precio);
        this.precio = nuevoPrecio;
        document.writeln(`<p>Precio actualizado, el precio nuevo es: $${this.precio}`);
    },

    mostrarTitulo: () => {
        document.writeln(`<h1>Funko:</h1>`)
    }
}

console.log(funko.codigo);
console.log(funko.nombre);
document.writeln(funko)

funko.mostrarTitulo()
document.writeln(funko.mostrarDatos())
funko.actualizarPrecio(40)

//agregamos un nueva propiedad al objeto funko
funko.tamanio = "Regular";
document.writeln(`<p>Tamaño: ${funko.tamanio}</p>`)

funko.tienda = "no definido por el momento";
document.writeln(`<p>Tienda: ${funko.tienda} </p>`)

//borramos una propiedad del objeto
delete funko.tienda;
document.writeln(`<p>Tienda: ${funko.tienda} </p>`)





