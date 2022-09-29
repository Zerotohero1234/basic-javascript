// let b = document.querySelectorAll('p');

// let a = b[0];

// console.log(b)

// let x = "Anouwath"

// function change() {
//     a.innerHTML = `<strong>${x}&nbsp&nbspThammavong</strong>`;
//     // a.style.color = "white";
//     a.style.background = "Red";
//     a.style.fontSize = "10rem";
// }

// let c = document.querySelector('.standard');

// function Light(){
//     c.setAttribute('class','light');
// }

// function Dark(){
//     c.setAttribute('class','dark');
// }

const menu = document.getElementById('menu');

function Add() {
    const newItem = document.createElement('li');
    newItem.innerHTML = prompt('')
    newItem.setAttribute('id',prompt(''))
    menu.appendChild(newItem)
}


function Replace() {
    const change = document.getElementById(prompt(''));
    const add = document.createElement('li');
    add.innerHTML = prompt('');
    menu.replaceChild(add,change);
}

function Remove() {
    const remove = document.getElementById(prompt(''));
    menu.removeChild(remove);
}