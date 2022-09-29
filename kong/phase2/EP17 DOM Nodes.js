// const textAll = document.querySelectorAll('p');
// let message = textAll[1].innerHTML;
// console.log(message);

// const menu = document.getElementById('menu');
// let count = 1;
// function addItem(){
//     const item = document.createElement('li');// create li
//     item.innerText = "Item "+(count++);
//     menu.appendChild(item);
// }

const menu = document.getElementById('menu');
const item = document.getElementById('item-3');
const itemB = document.getElementById('item-2');

const newitem = document.createElement("li");
newitem.innerText = "X";

function deleteItem(){
    menu.removeChild(item);
}

function replaceItem(){
    menu.replaceChild(newitem,itemB)
}