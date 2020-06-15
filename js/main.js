let partida = {
    equipo1: [],
    equipo2: [],
    victoriaPlayer1: 0,
    victoriaPlayer2: 0,
    botiquinP1: 0,
    botiquinP2: 0,

            //FUNCIONES PARA AÑADIR JUGADORES
    añadirJugador1(idJugador){
        this.equipo1.push(luchadores[idJugador]);
    },
    
    añadirJugador2(idJugador){
        this.equipo2.push(luchadores[idJugador]);
    },
            // ORGANIZADOR PROPIO PARA PASAR DE PÁGINA
    organizer(n){
        let pantallaOff = "pantalla" + (n-1);
        let pantallaOn = "pantalla" + n;
        let pantallaFinal = "pantalla6";
        let pantallaTransicion = "pantallaTransicion";
        
        if (pantallaOff == "pantalla0"){
            document.getElementById(pantallaFinal).style.display = "none";
            document.getElementById(pantallaTransicion).style.display = "flex";
            setTimeout(() =>{
                document.getElementById(pantallaTransicion).style.display = "none";
                document.getElementById(pantallaOn).style.display = "flex";
            }, 2000); 
        } else {
            document.getElementById(pantallaOff).style.display = "none";
            document.getElementById(pantallaTransicion).style.display = "flex";
            setTimeout(() => {
                document.getElementById(pantallaTransicion).style.display = "none";    
                document.getElementById(pantallaOn).style.display = "flex";
            },1000);
        }        
    },
            //FUNCIONES AL APRETAR TECLAS DE ATAQUE Y DEFENSA DE AMBOS JUGADORES
    AClick(e){
        if(e.code == "KeyA" && this.equipo2[0].vida > 0){
            this.equipo2[0].vida -= this.equipo1[0].ataque;
            let vidaPlayer2 = document.getElementById("vidaPlayer2");
            vidaPlayer2.innerHTML = `<div id="barraVida2" style="width:${this.equipo2[0].vida/18}rem"></div>`;
            if(this.equipo2[0].vida < 200){
                vidaPlayer2.innerHTML = `<div id="barraVida2" style="background-color:yellow;width:${this.equipo2[0].vida/18}rem"></div>`;
                if(this.botiquinP2 == 0){
                    document.getElementById("botiquinPlayer2").style.display = "flex";
                    document.getElementById("player2Botiquin").style.display = "flex";
                }
            }
        } else if (e.code == "KeyA" && this.equipo2[0].vida <= 0){
                this.equipo2[0].vida = undefined;
                this.equipo1[0].vida = undefined;
                this.victoriaPlayer1++;
                vidaPlayer1.innerText = "";
                vidaPlayer1.innerText = "WINNER";
                vidaPlayer2.innerText = "";
                vidaPlayer2.innerText = "LOSER";
                alert(`Player 1 wins. Victories: ${this.victoriaPlayer1} - ${this.victoriaPlayer2}`);
            }
    },

    SClick(e){
        if(e.code == "KeyS"){
            if(this.equipo1[0].vida >= 1000) {
                this.equipo1[0].vida += 0;
            }else {
                this.equipo1[0].vida += this.equipo1[0].defensa;
            }
            let vidaPlayer1 = document.getElementById("vidaPlayer1");
            vidaPlayer1.innerHTML = `<div id="barraVida1" style="width:${this.equipo1[0].vida/18}rem"></div>`;
        }
    },

    QClick(e) {
        if(e.code == "KeyQ" && this.botiquinP1 == 0){
            this.equipo1[0].vida = 1000;
            this.botiquinP1 = 1;
            document.getElementById("botiquinPlayer1").style.display = "none";
            document.getElementById("player1Botiquin").style.display = "none";
        }
    },

    KClick(e){
        if(e.code == "KeyK" && this.equipo1[0].vida > 0){
            this.equipo1[0].vida -= this.equipo2[0].ataque;
            let vidaPlayer1 = document.getElementById("vidaPlayer1");
            vidaPlayer1.innerHTML = `<div id="barraVida1" style="width:${this.equipo1[0].vida/18}rem"></div>`;
            if(this.equipo1[0].vida < 200){
                vidaPlayer1.innerHTML = `<div id="barraVida1" style="background-color:yellow;width:${this.equipo1[0].vida/18}rem"></div>`;
                if(this.botiquinP1 == 0){
                    document.getElementById("botiquinPlayer1").style.display = "flex";
                    document.getElementById("player1Botiquin").style.display = "flex";
                } 
            }
        } else if (e.code == "KeyK" && this.equipo1[0].vida <= 0){
                this.equipo1[0].vida = undefined;
                this.equipo2[0].vida = undefined;    
                this.victoriaPlayer2++;
                vidaPlayer1.innerText = "";
                vidaPlayer1.innerText = "LOSER";
                vidaPlayer2.innerText = "";
                vidaPlayer2.innerText = "WINNER";
                alert(`Player 2 wins. Victories: ${this.victoriaPlayer1} - ${this.victoriaPlayer2}`);
            }
    },

    LClick(e){
        if(e.code == "KeyL"){
            if(this.equipo2[0].vida >= 1000) {
                this.equipo2[0].vida += 0;
            }else {
                this.equipo2[0].vida += this.equipo2[0].defensa;
            }
            let vidaPlayer2 = document.getElementById("vidaPlayer2");
            vidaPlayer2.innerHTML = `<div id="barraVida2" style="width:${this.equipo2[0].vida/18}rem"></div>`;
        }
    },

    IClick(e) {
        if(e.code == "KeyI" && this.botiquinP2 == 0){
            this.equipo2[0].vida = 1000;
            this.botiquinP2 = 1;
            document.getElementById("botiquinPlayer2").style.display = "none";
            document.getElementById("player2Botiquin").style.display = "none";
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
        // vidaPlayer1.innerText = `Vida: ${this.equipo1[0].vida}`;
        vidaPlayer1.innerHTML = `<div id="barraVida1" style="width:${this.equipo1[0].vida/18}rem"></div>`;
    },

    mostrarVida2(){
        let vidaPlayer2 = document.getElementById("vidaPlayer2");
        // vidaPlayer2.innerText = `Vida: ${this.equipo2[0].vida}`;
        vidaPlayer2.innerHTML = `<div id="barraVida2" style="width:${this.equipo1[0].vida/18}rem"></div>`;
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



