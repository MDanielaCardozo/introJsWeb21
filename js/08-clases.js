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
            <li>DNI: ${(this.dni)}</li></ul></br>`)
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


class Pokemon {
    #numPokeDex;
    #tipo;
    constructor(nombreParam, tipo, habilidadesParam, evolucionesParam, numPokeDex) {
        this._nombre = nombreParam;
        this.#tipo = tipo;
        this.habilidades = habilidadesParam;
        this.evoluciones = evolucionesParam;
        this.#numPokeDex = numPokeDex;
        this.nivel = 100; //propiedad por defecto
    }

    //getter y setter para obtener y modificar propiedad privadas(prop conmutadas)
    get tipo(){
        return this.#tipo;
    }
    get numPokeDex(){
        return this.#numPokeDex;
    }

    set tipo(nuevoTipo){
        if (nuevoTipo.length > 0 ) {
            this.#tipo = nuevoTipo;
        }
    }

    set numPokeDex(nuevoNumPokeDex){
        if (nuevoNumPokeDex > 0 && nuevoNumPokeDex <= 151) {
            this.#numPokeDex = nuevoNumPokeDex;
        }
    }

    mostrarNombre() {
        return this._nombre;
    }

    mostrarDatos() {
        document.writeln(`<ul>
            <li>Nombre: ${(this._nombre)}</li>
            <li>Num de PokeDex: ${(this.#numPokeDex)}</li>
            <li>Tipo: ${(this.#tipo)}</li>
            <li>Habilidades: ${(this.habilidades)}</li>
            <li>Evoluciones: ${(this.evoluciones)}</li>
            <li>Nivel de vida: ${(this.nivel)}</li>
            </ul></br>`)
    }
}

const pikachu = new Pokemon(
    "Pikachu",
    "Electrico",
    ["Ataque rápido", "Impactrueno", "Rayo"],
    ["Pichu", "Pikachu", "Raichu"],
    25
)

const charizard = new Pokemon(
    "Charizard",
    "Fuego",
    ["Ataque rapido", "Impactrueno", "Rayo"],
    ["Charmander", "Charmeleon", "Charizard"],
    6
)

console.log(pikachu);
console.log(charizard);

pikachu.mostrarDatos()
charizard.mostrarDatos()

//Herencia
class PokemonLegendario extends Pokemon {
    #habilidadOculta;
    constructor(nombreParam, tipo, habilidadesParam, evolucionesParam, numPokeDex, habilidadOculta){
        /* this._nombre = nombreParam;
        this.tipo = tipo;
        this.habilidades = habilidadesParam;
        this.evoluciones = evolucionesParam;
        this.numPokeDex = numPokeDex;
        this.nivel = 100;  */
        super(nombreParam, tipo, habilidadesParam, evolucionesParam, numPokeDex);
        this.#habilidadOculta = habilidadOculta;
    }
    get habilidadOculta() {
        return this.#habilidadOculta;
    }
    set habilidadOculta(nuevaHabilidadOculta) {
        if (nuevaHabilidadOculta.length > 0) {
            this.#habilidadOculta = nuevaHabilidadOculta;
        }
    }

    mostrarDatosPokemonLegendario(){

    }

    mostrarDatos(){
        document.writeln(`<ul>
            <li>Nombre: ${(this._nombre)}</li>
            <li>Num de PokeDex: ${(this.numPokeDex)}</li>
            <li>Tipo: ${(this.tipo)}</li>
            <li>Habilidades: ${(this.habilidades)}</li>
            <li>Evoluciones: ${(this.evoluciones)}</li>
            <li>Nivel de vida: ${(this.nivel)}</li>
            <li>Habilidad Oculta: ${(this.#habilidadOculta)}</li>
            </ul></br>`)
    }
}

const articuno = new PokemonLegendario(
    "Articuno",
    "Hielo ❄️",
    ["presion", "canto helado"],
    "Sin evolucion",
    144,
    "manto niveo"
);

console.log(articuno);

articuno.mostrarDatos()


