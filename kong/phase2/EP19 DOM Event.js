// function welcome(){
//     alert('Welcome to my website');
// }

function hightlight(obj){
     obj.style.background="yellow"
}

function unhightlight(obj){
     obj.style.background="white"
 }

function getMenu(){
    const menu = document.getElementById('menu');
    const display = document.getElementById('display')
    console.log(menu.value.toUpperCase());
    display.innerHTML = menu.value;
}