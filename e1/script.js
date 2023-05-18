let a=new Date().getDay();

let dias=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];

let text="El dia es: "+dias[a];

let div= document.getElementById("text");
div.style.fontSize="24px";
div.innerHTML=text;
