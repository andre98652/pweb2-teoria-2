const invertir = document.getElementById('obtener');
const text = document.getElementById('inputText');
const link=document.getElementById('link');
invertir.addEventListener('click', function(){
    let palabra=text.value;
    let expresion= '';


    const url = "https://meet.google.com/tia-hpct-qxx?authuser=1";
    const regex = /\/([\w-]+)\?/;
    const match = url.match(regex);
    const meetCode = match ? match[1] : null;




    for(let i=palabra.length -1; i>=0; i--){
        palabraF+=palabra[i];
    }
    invertir.classList.add('hidden');
    text.classList.add('hidden');

    invertText.style.fontSize="24px";
    invertText.textContent=palabraF;

});