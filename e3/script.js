

function calcular(){
    let hoy = new Date();
    let diaAqp = new Date(hoy.getFullYear(),7,15);
    let dia=24*60*60*1000;

    let diasRestantes=Math.floor((diaAqp-hoy)/dia);
    return diasRestantes;
};


function mostrar(){
    let resultado=calcular();
    let div=document.getElementById("box2");
    div.style.fontSize="24px";
    div.textContent="FALTAN "+resultado+" dias";

};

window.onload = mostrar;
