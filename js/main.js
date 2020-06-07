let partida = {
    equipo1: [],
    equipo2: [],
    victoriaPlayer1: 0,
    victoriaPlayer2: 0,
            //FUNCIONES PARA AÑADIR JUGADORES
    añadirJugador1(idJugador){
        this.equipo1.push(luchadores[idJugador]);
    },
    añadirJugador2(idJugador){
        this.equipo2.push(luchadores[idJugador]);
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
            //FUNCIONES AL APRETAR TECLAS DE ATAQUE Y DEFENSA DE AMBOS JUGADORES
    AClick(e){
        if(e.code == "KeyA"){
            this.equipo2[0].vida -= this.equipo1[0].ataque;
            let vidaPlayer2 = document.getElementById("vidaPlayer2");
            vidaPlayer2.innerText = `Vida: ${this.equipo2[0].vida}`;
        }

        if (this.equipo2[0].vida <= 0){
            this.victoriaPlayer1++;
            vidaPlayer1.innerText = "";
            vidaPlayer1.innerText = "WINNER";
            vidaPlayer2.innerText = "";
            vidaPlayer2.innerText = "LOSER";
            alert(`Player 1 wins. Victories: ${this.victoriaPlayer1} - ${this.victoriaPlayer2}`)
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
            alert(`Player 2 wins. Victories: ${this.victoriaPlayer1} - ${this.victoriaPlayer2}`)
        }
    },

    LClick(e){
        if(e.code == "KeyL"){
            this.equipo2[0].vida += this.equipo2[0].defensa;
            let vidaPlayer2 = document.getElementById("vidaPlayer2");
            vidaPlayer2.innerText = `Vida: ${this.equipo2[0].vida}`;
        }
    },
            // FUNCION PARA BORRAR DATOS AL CAMBIAR DE PANTALLA
    borrarDatos(){
        this.equipo1 = [];
        this.equipo2 = [];
        vidaPlayer1.innerText = "";
        vidaPlayer2.innerText = "";
    },
            // MUESTRA LA VIDA EN TIEMPO REAL DE CADA LUCHADOR
    mostrarVida1(){
        let vidaPlayer1 = document.getElementById("vidaPlayer1");
        vidaPlayer1.innerText = `Vida: ${this.equipo1[0].vida}`;
    },

    mostrarVida2(){
        let vidaPlayer2 = document.getElementById("vidaPlayer2");
        vidaPlayer2.innerText = `Vida: ${this.equipo2[0].vida}`;
    },
            // MUESTRA EL JUGADOR VENCEDOR EN LA ULTIMA PANTALLA
    victoria(){
        if (this.victoriaPlayer1 >= 2){
            let vencedor = document.getElementById("vencedor");
            vencedor.innerHTML = '<img id="vencedorPlayer1" src="./img/winnerPlayer1.png" alt="Vencedor equipo1" style="width:57.5rem">';
        } else if (this.victoriaPlayer2 >= 2){
            let vencedor = document.getElementById("vencedor");
            vencedor.innerHTML = '<img id="vencedorPlayer2" src="./img/winnerPlayer2.png" alt="Vencedor equipo2" style="width:57.5rem">';
        }
    }
}
        //VARIABLE PARA ALMACENAR LA ID DE LA IMAGEN QUE SE COGE Y PASARLA COMO ARGUMENTO EN EL DIV RECEPTOR
let eventTarget;

        //  FUNCIONES DRAG & DROP
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



