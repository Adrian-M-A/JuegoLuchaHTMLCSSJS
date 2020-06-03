function inicio() {
     alert ("¿Listo para empezar a jugar?")
}

let partida = {
    equipo1: [],
    equipo2: [],

    

}

const añadirJugador = () => {
    if(equipo1.length == 3){
        equipo2.push();
    } else {
    equipo1.push();
    }
}
        //  DRAG & DROP
function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

const organizer = (arg_O) => {

    let fasewant = "pantalla" + arg_O;
    let arrFases = ["pantalla1", "pantalla2","pantalla3", "pantalla4", "pantalla5", "pantalla6"];

    arrFases = arrFases.filter(val => !fasewant.includes(val));
    document.getElementById(fasewant).style.display = "flex";

    for (let _f of arrFases) {
        document.getElementById(_f).style.display = "none";
    }
}
   