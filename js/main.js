class luchador {
    constructor(ataque, defensa, velocidad, astucia){
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.astucia = astucia;
    }
    atacar(){

    }
    defender(){

    }
}

const random = () => Math.floor(Math.random()*100);

let butuke = new luchador(random(), random(), random(), random());
let dort =  new luchador(random(), random(), random(), random());
let melvian = new luchador(random(), random(), random(), random());
let falair = new luchador(random(), random(), random(), random());
let tousa = new luchador(random(), random(), random(), random());
let stiggeor = new luchador(random(), random(), random(), random());
let syles = new luchador(random(), random(), random(), random());
let frake = new luchador(random(), random(), random(), random());
let kekovey = new luchador(random(), random(), random(), random());

console.log(butuke, dort, melvian, falair, tousa, stiggeor, syles, frake, kekovey)