const obtener = document.getElementById('obtener');
const text = document.getElementById('inputText');
const link=document.getElementById('link');



obtener.addEventListener('click',function(){

    const regex = /\/([\w-]+)\?/;
    let url=text.value;
    let match=url.match(regex);
    let meetCode = match ? match[1] : null;
    

    meetCode=meetCode.split("-").join(" ");
    obtener.classList.add('hidden');
    text.classList.add('hidden');

    link.style.fontSize="24px";
    link.textContent=meetCode;
});
