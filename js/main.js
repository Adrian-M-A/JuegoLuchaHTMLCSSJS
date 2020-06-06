let partida = {
    equipo1: [],
    equipo2: [],
        //FUNCIONES AÑADIR JUGADORES
    añadirJugador1(idJugador){
        console.log(`añadir jugador1`);
        this.equipo1.push(luchadores[idJugador]);
        console.log(this.equipo1);
    },
    añadirJugador2(idJugador){
        console.log("añadir jugador2");
        this.equipo2.push(luchadores[idJugador]);
        console.log(this.equipo2);
    },
            // ORGANIZADOR PARA PASAR DE PÁGINA
    organizer(arg_O){
        let fasewant = "pantalla" + arg_O;
        let arrFases = ["pantalla1", "pantalla2","pantalla3", "pantalla4", "pantalla5", "pantalla6"];

        arrFases = arrFases.filter(val => !fasewant.includes(val));
        document.getElementById(fasewant).style.display = "flex";

        for (let _f of arrFases) {
            document.getElementById(_f).style.display = "none";
        }
    },
            //FUNCIONES AL APRETAR TECLAS DE ATAQUE Y DEFENSA DEL JUGADOR1 Y JUGADOR2
    AClick(e){
        if(e.code == "KeyA"){
            this.equipo2[0].vida -= this.equipo1[0].ataque;
            console.log(`Vida 2 ${this.equipo2[0].vida}`);
            let vidaPlayer2 = document.getElementById("vidaPlayer2");
            vidaPlayer2.innerText = `Vida: ${this.equipo2[0].vida}`;
        }

    },

    SClick(e){
        if(e.code == "KeyS"){
            this.equipo1[0].vida += this.equipo1[0].defensa;
            console.log(`Vida 1 ${this.equipo1[0].vida}`);
            let vidaPlayer1 = document.getElementById("vidaPlayer1");
            vidaPlayer1.innerText = `Vida: ${this.equipo1[0].vida}`;
        }
    },

    KClick(e){
        if(e.code == "KeyK"){
            this.equipo1[0].vida -= this.equipo2[0].ataque;
            console.log(`Vida 1 ${this.equipo1[0].vida}`);
            let vidaPlayer1 = document.getElementById("vidaPlayer1");
            vidaPlayer1.innerText = `Vida: ${this.equipo1[0].vida}`;
        }
    },

    LClick(e){
        if(e.code == "KeyL"){
            this.equipo2[0].vida += this.equipo2[0].defensa;
            console.log(`Vida 2 ${this.equipo2[0].vida}`);
            let vidaPlayer2 = document.getElementById("vidaPlayer2");
            vidaPlayer2.innerText = `Vida: ${this.equipo2[0].vida}`;
        }
    },

    borrarDatos(){
        this.equipo1 = [];
        this.equipo2 = [];
        vidaPlayer1.innerText = "";
        vidaPlayer2.innerText = "";
    },

    mostrarVida(){
        let vidaPlayer1 = document.getElementById("vidaPlayer1");
        vidaPlayer1.innerText = `Vida: ${this.equipo1[0].vida}`;
        let vidaPlayer2 = document.getElementById("vidaPlayer2");
        vidaPlayer2.innerText = `Vida: ${this.equipo2[0].vida}`;
    }
}

        //VARIABLE PARA ALMACENAR LA ID DE LA IMAGEN QUE SE COGE Y PASARLA COMO ARGUMENTO EN EL DIV RECEPTOR
let eventTarget;

        //  DRAG & DROP
function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
    eventTarget = ev.target.id;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev){
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

