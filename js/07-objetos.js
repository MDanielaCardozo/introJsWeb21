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
        console.log(this);
        document.writeln(`<p><b>Funko: ${this.nombre}</b></p>`);
        document.writeln(`<ul><li>Codigo: ${this.codigo}</li>
            <li>Precio: ${this.precio}</li>
            <li>Marca: ${this.marca}</li>
            <li>Estado: ${this.estado}</li></ul>`)
    }
}

console.log(funko.codigo);
console.log(funko.nombre);



