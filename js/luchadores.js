class luchador {
    constructor(nombre, ataque, defensa, velocidad, astucia, vida){
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.astucia = astucia;
        this.vida = 500;
    }
    atacar(){
        if (this.astucia >=90 || this.velocidad >= 90){
            this.ataque += 50;
            enemigo.vida -= this.ataque;
        } else if (this.ataque >= 70 && this.ataque < 90 || 
            this.velocidad >= 70 &&  this.velocidad < 90){
            this.ataque += 30;
            enemigo.vida -= this.ataque;
        }else {
            this.ataque = ataque;
            enemigo.vida -= this.ataque; 
        }
    }

    defender(){
        if (this.defensa >= 50 && this.defensa < 60 || 
            this.astucia >= 60 && this.astucia < 70){
            this.astucia += 5;
            this.defensa += 20;
            this.vida += this.defensa;
        } else if (this.defensa >=60 && this.defensa < 70 ||
                   this.astucia >= 70 && this.astucia < 90){
            this.astucia +=10;
            this.defensa +=50;
            this.vida += this.defensa;
        } else {
            this.defensa += 10;
            this.vida += this.defensa;
        }
    }
}

const random = () => Math.floor(Math.random()*100);

let luchador1 = new luchador("butuke",random(), random(), random(), random());
let luchador2 = new luchador("dort", random(), random(), random(), random());
let luchador3 = new luchador("melvian", random(), random(), random(), random());
let luchador4 = new luchador("falair", random(), random(), random(), random());
let luchador5 = new luchador("tousa", random(), random(), random(), random());
let luchador6 = new luchador("stiggeor", random(), random(), random(), random());
let luchador7 = new luchador("syles", random(), random(), random(), random());
let luchador8 = new luchador("frake", random(), random(), random(), random());
let luchador9 = new luchador("kekovey", random(), random(), random(), random());

console.log(luchador1, luchador2, luchador3, luchador4, luchador5, luchador6, luchador7, luchador8, luchador9)

// 1. Se crea la clase
// 2. Se instancia a los luchadores (con nombre de variables sencillas)
// traductor

let jugadores = {
    "1": f1,
    "2": f2,
    "3": f3,
    "4": f4,
    "5": f5,
    "6": f6,
    "7": f7,
    "8": f8,
    "9": f9
}

let juego = {

    turno: 0,
    player1: "",
    player2: "",
    ganador: "",

    resetearLucha(){

    },

    turnoLucha(){

    },
}