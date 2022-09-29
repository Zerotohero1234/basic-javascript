const menu = document.getElementById('menu');
const pherm = document.getElementById('pherm');
const lop = document.getElementById('lop');
const edit = document.getElementById('edit');

pherm.addEventListener('click',add);

lop.addEventListener('click',Remove);

edit.addEventListener('click',Edit);

function add(){
    const item = document.createElement('li');
    item.innerHTML = prompt("input your menu");
    item.classList.add(prompt("Add class"))
    item.setAttribute('id',prompt('Input Id'))
    menu.appendChild(item);
}

function Edit(){
    const edit = document.getElementById(prompt('Input id that you want to edit'));
    edit.innerHTML = prompt("input new")
    edit.classList.add(prompt("Add class"))
    edit.setAttribute('id',prompt('Input Id'))
    menu.replaceChild(edit)
}

function Remove(){
    const Remove = document.getElementById(prompt("input id that you want to Remove"));
    menu.removeChild(Remove);
}


