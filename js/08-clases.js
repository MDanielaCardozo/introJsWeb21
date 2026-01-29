//Usuarios
//propiedades: Nombre, apellido, email, password, edad, dni, estado
//metodos: registrarse, iniciarSesion, mostrarDatos, editarDatos

//Alumnos
//curso, asistencia, materias, modulos, notas, rollinCoins
//mostrarDatos, agregarNotas, mostrarModulo, mostrarNotas

class Usuario {
    #email;
    #password;
    //diseñar la propiedades
    constructor(nombre, apellido, email, edad, dni, password, estado) {
        //clave: valor
        //key: value
        this.nombre = nombre;
        this.apellido = apellido;
        this.#email = email;
        this.#password = password;
        this.edad = edad;
        this.dni = dni;
        this.estado = estado;
    }

    get email() {
        return this.#email;
    }

    set email(nuevoEmail) {
        //si existe el nuevo email
        if(nuevoEmail) {
        return this.#email;
        }
    }
    
    get password () {
        return this.#password
    }

    set password (nuevoPassword) {
        if( nuevoPassword.length > 0) {
            this.#password;
        }
    } 

    mostrarDatos() {
        document.writeln(`<h3>Usuario: </h3>`);
        document.writeln(`<ul>
            <li>Nombre y apellido: ${(this.nombre)} ${(this.apellido)}</li>
            <li>Email: ${(this.#email)}</li>
            <li>Edad: ${(this.edad)}</li>
            <li>DNI: ${(this.dni)}</li></br>`)
    }
}

const diego = new Usuario(
    "Diego",
    "Gimenez",
    "diego@gmail.com",
    "nq138794ha@jdfsi",
    22,
    "40212748"
)

const agustin = new Usuario(
    "Agustin",
    "Lopez",
    "agus@gmail.com",
    "akjdl@fsi349",
    20,
    "40218373"
)

diego.mostrarDatos();
agustin.mostrarDatos();
