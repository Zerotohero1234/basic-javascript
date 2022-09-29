const box = document.getElementById('box');
let status;

function addDarkMode(){
    box.classList.add('darkMode');
    status = box.classList.contains('darkMode');
    if (status) {
        box.style.color = 'yellow'
    }
}

function removeDarkMode(){
    box.classList.remove('darkMode');
    // status = box.classList.contains('darkMode');
    // if (!status) {
    box.style.color = "black";
    // }
}

function switchMode(){
    box.classList.toggle('darkMode');
    status = box.classList.contains('darkMode');
    // console.log(status);
    if(status){
        box.style.color = "yellow";
    }
    else{
        box.style.color = "black";
    }
}