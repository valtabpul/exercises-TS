//Variables de entorno

/*const name = "cammila"
const age = 25
const activo:boolean = true

//objetos
const usuarios :{
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
} = {
    id: 1,
    nombre: "vale",
    email: "val@gmail.com",
    activo: true
}

console.log(usuarios)

//tipos de casa
const casas :{
    id: number;
    size:number;
    type: string;
    material: string;
} = {
    id: 2,
    size: 100,
    type: "casa",
    material: "ladrillo"
}
console.log(casas)

//tipos de vehiculo
const car :{
    id: number;
    brand:string;
    year: number;
    color: string;
} = {
    id:3,
    brand:"MBW",
    year:2026,
    color:"white"
}
console.log(car)

//obejto relacionaod con una red social
const socialMedia: {
    id:number;
    userName: string;
    email:string;
    typeSocial:string;
} = {
    id:4,
    userName:"valtab",
    email:"val@gmail.com",
    typeSocial:"Instagram"
}
console.log(socialMedia)*/

//Cancion
//id, name, type, date, artist,numventas si el num de venta esta entre 500mil y 700mil y si esta por debajo de 500mil eres novato

/*const music:{
    id:number;
    name: string;
    type: {genero:string} //anidado
    artist: string;
    date: string;
    sales:number;
} = {
    id:5,
    name: "vacaciones",
    type: {genero:"Reggaeton"},
    artist:"Feid",
    date:"2025",
    sales:500    
}

let level:string

if (music.sales >= 500 && music.sales <= 750) {
    level = "Eres un crack"
}else if(music.sales >= 750){
    level = "Eres un Super crack"
}else{
    level = "Eres un novato"
}
console.log(level)*/

// type Position = {
//     linea: string; //"defensa | medio | delantero"
//     rol: string; //"defender | filtrar | hacer goles"
// }

// type Jugador = {
//     nombre: string;
//     club: string;
//     dorsal: number;
//     activo: boolean;
//     position: Position;
// }

// // Plantilla inicial

// const jugador1: Jugador = {
//     nombre: "James rodriguez",
//     club: "Seleccion colombia",
//     dorsal: 10,
//     activo: true,
//     position: { linea: "medio campo", rol: "caminar" }
// }

// const jugador2: Jugador = {
//     nombre: "Falcao",
//     club: "Seleccion colombia",
//     dorsal: 9,
//     activo: true,
//     position: { linea: "delantero", rol: "hacer goles" }
// }

// const jugador3: Jugador = {
//     nombre: "Ronaldo",
//     club: "Real madrid",
//     dorsal: 9,
//     activo: false,
//     position: { linea: "delantero", rol: "ser el mejor del mundo" }
// }

// const jugador4: Jugador = {
//     nombre: "Mbappe ",
//     club: "Real madrid",
//     dorsal: 9,
//     activo: true,
//     position: { linea: "delantero", rol: "Estrella con gran velocidad" }
// }

// const jugador5: Jugador = {
//     nombre: "Rodri Hernandez",
//     club: "Manchester city",
//     dorsal: 16,
//     activo: true,
//     position: { linea: "defensivo", rol: "organizador del juego" }
// }
// // Logica de negocio: Agreguen otros dos objetos y recórranlos todos.

// const jugadores: Jugador[] = [jugador1, jugador2, jugador3, jugador4, jugador5];

// for (const j of jugadores) {
//     console.log('---'.repeat(20));
//     console.log(`Nombre: ${j.nombre}`);
//     console.log(`Club: ${j.club}`);
//     console.log(`Dorsal: ${j.dorsal}`);
//     console.log(`Activo: ${j.activo ? 'Sí' : 'No'}`);
//     console.log(`Línea: ${j.position.linea} — Rol: ${j.position.rol}`);
// }

type cancion = {
    titulo:string;
    
}