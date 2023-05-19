const obtener = document.getElementById('obtener');
const text = document.getElementById('inputText');
const box3=document.getElementById('box3');
const box2=document.getElementById('box2');


obtener.addEventListener('click',function(){

    let num=parseInt(text.value);
    for(let i=1;i<=num;i++){
        var input = document.createElement("input");
        input.type = "number";
        input.name = "input" + i;

        text.classList.add("hidden");
        obtener.classList.add("hidden");
        box3.appendChild(input);
        box3.appendChild(document.createElement("br"));

        



    }
    var boton = document.createElement("button");

    boton.innerHTML="Sumar";
    boton.onclick=sumar;
    box3.appendChild(boton);


    function sumar(){
      var box3=document.getElementById("box3");
      var inputs=box3.getElementsByTagName("input");
      let suma=0;

      for(let i=0;i<inputs.length;i++){
        let valor=parseInt(inputs[i].value);


        if(!isNaN(valor)){
          suma+=valor;
        }
      }
      console.log(suma);
    };
});


/*
    function crearInputs() {
      var box2 = document.getElementById("box2");
      var numero = parseInt(box2.value);

      var box3 = document.getElementById("box3");
      box3.innerHTML = "";

      for (var i = 1; i <= numero; i++) {
        var input = document.createElement("input");
        input.type = "number";
        input.name = "input" + i;
        box3.appendChild(input);
        box3.appendChild(document.createElement("br"));
      }

      var sumarButton = document.createElement("button");
      sumarButton.innerHTML = "Sumar";
      sumarButton.onclick = sumarInputs;
      box3.appendChild(sumarButton);
    }

    function sumarInputs() {
      var box3 = document.getElementById("box3");
      var inputs = box3.getElementsByTagName("input");
      var suma = 0;

      for (var i = 0; i < inputs.length; i++) {
        var valor = parseInt(inputs[i].value);
        if (!isNaN(valor)) {
          suma += valor;
        }
      }

      alert("La suma es: " + suma);
    }
*/
    

    
