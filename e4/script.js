const invertir = document.getElementById('obtener');
const text = document.getElementById('inputText');
const link=document.getElementById('link');
invertir.addEventListener('click', function(){
    let palabra=text.value;
    let expresion= '';







    for(let i=palabra.length -1; i>=0; i--){
        palabraF+=palabra[i];
    }
    invertir.classList.add('hidden');
    text.classList.add('hidden');

    invertText.style.fontSize="24px";
    invertText.textContent=palabraF;

});