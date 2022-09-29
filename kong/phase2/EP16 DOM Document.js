const titleEl = document.getElementById('title');
const contentEl = document.querySelector('.content');
const allEl = document.querySelectorAll('p');

const box = document.querySelector('.box');

// function displayText(){
//     // titleEl.style.color="red";
//     // titleEl.style.backgroundColor="Yellow";
//     // titleEl.style.fontSize="60px";

//     // contentEl.setAttribute('class','Anouwath');
//     box.setAttribute('class','dark');
// }

function lightMode(){
    box.setAttribute('class','light');
}

function darkMode(){
    box.setAttribute('class','dark');
}