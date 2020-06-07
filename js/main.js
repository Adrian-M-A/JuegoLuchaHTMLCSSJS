let partida = {
    equipo1: [],
    equipo2: [],
    victoriaPlayer1: 0,
    victoriaPlayer2: 0,
        //FUNCIONES AÑADIR JUGADORES
    añadirJugador1(idJugador){
        this.equipo1.push(luchadores[idJugador]);
        console.log(`Luchador 1 ${luchadores[idJugador]}`);
    },
    añadirJugador2(idJugador){
        this.equipo2.push(luchadores[idJugador]);
        console.log(`Luchador 2 ${luchadores[idJugador]}`);
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

        if (this.equipo2[0].vida <= 0){
            this.victoriaPlayer1++;
            vidaPlayer1.innerText = "";
            vidaPlayer1.innerText = "WINNER";
            vidaPlayer2.innerText = "";
            vidaPlayer2.innerText = "LOSER";
            alert(`Player 1 wins.`, `P1 victories: ${this.victoriaPlayer1} P2 victories: ${this.victoriaPlayer2}`)
        }
    },

    SClick(e){
        if(e.code == "KeyS"){
            this.equipo1[0].vida += this.equipo1[0].defensa;
            let vidaPlayer1 = document.getElementById("vidaPlayer1");
            vidaPlayer1.innerText = `Vida: ${this.equipo1[0].vida}`;
        }
    },

    KClick(e){
        if(e.code == "KeyK"){
            this.equipo1[0].vida -= this.equipo2[0].ataque;
            let vidaPlayer1 = document.getElementById("vidaPlayer1");
            vidaPlayer1.innerText = `Vida: ${this.equipo1[0].vida}`;
        }
        if (this.equipo1[0].vida <= 0){
            this.victoriaPlayer2++;
            vidaPlayer1.innerText = "";
            vidaPlayer1.innerText = "LOSER";
            vidaPlayer2.innerText = "";
            vidaPlayer2.innerText = "WINNER";
            alert(`Player 2 wins.`, `P1 victories: ${this.victoriaPlayer1} P2 victories: ${this.victoriaPlayer2}`)
        }
    },

    LClick(e){
        if(e.code == "KeyL"){
            this.equipo2[0].vida += this.equipo2[0].defensa;
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

    mostrarVida1(){
        let vidaPlayer1 = document.getElementById("vidaPlayer1");
        vidaPlayer1.innerText = `Vida: ${this.equipo1[0].vida}`;
    },

    mostrarVida2(){
        let vidaPlayer2 = document.getElementById("vidaPlayer2");
        vidaPlayer2.innerText = `Vida: ${this.equipo2[0].vida}`;
    },

    victoria(){
        if (this.victoriaPlayer1 >= 2){
            let pantallaWinner = document.getElementById("vencedor");
            pantallaWinner.innerText = "EL VENCEDOR ES EL PLAYER 1.";
            console.log("Ganador player 1")
        } else if (this.victoriaPlayer2 >= 2){
            let pantallaWinner = document.getElementById("vencedor");
            pantallaWinner.innerText = "EL VENCEDOR ES EL PLAYER 2.";
            console.log("Ganador player 2")
        }
    }
}

        //VARIABLE PARA ALMACENAR LA ID DE LA IMAGEN QUE SE COGE Y PASARLA COMO ARGUMENTO EN EL DIV RECEPTOR
let eventTarget;

        //  DRAG & DROP
function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
    eventTarget = ev.target.id; //eventTarget para poder pasar la id de la imagen e incluirla en el array
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev){
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}



