var menu = document.querySelector(".menu").addEventListener("click", openmenu);
var close=document.querySelector(".close").addEventListener("click",closemenu);
function closemenu(){
    var open=document.querySelector(".sidebar");
    open.style.display="none"
}

function openmenu() {
    var open=document.querySelector(".sidebar");
    open.style.display="block"
}