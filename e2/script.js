const invertir = document.getElementById('invertButton');
const text = document.getElementById('inputText');
const invertText=document.getElementById('invertedText');
invertir.addEventListener('click', function(){
    let palabra=text.value;
    let palabraF= '';

    for(let i=palabra.length -1; i>=0; i--){
        palabraF+=palabra[i];
    }
    invertir.classList.add('hidden');
    text.classList.add('hidden');

    invertText.style.fontSize="24px";
    invertText.textContent=palabraF;

});