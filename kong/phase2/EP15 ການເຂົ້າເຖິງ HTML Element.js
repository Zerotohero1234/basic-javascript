/*
    innerHTML ໃຊ້ຳສຳລັບ HTML ຫຼື ເວລາທີ່ເຮົາຕ້ອງການໃສ່ແທັກໄປໃນຂໍ້ຄວາມ
    innerText ແມ່ນເວລາທີ່ຕ້ອງການໃສ່ພຽງແຕ່ຂໍ້ຄວາມ ຫຼື ປ່ຽນຂໍ້ຄວາມ
*/
// let a = document.getElementsByTagName('p');
// let a = document.getElementById('demo'); // ອ້າງອີງ
const a = document.querySelector('#demo'); // ອ້າງອີງຜ່ານ id
const b = document.querySelector('.myjs'); // ອ້າງອີງຜ່ານ class
const c = document.querySelectorAll('p'); // ອ້າງອີງຜ່ານ tag

// console.log(b);
console.log(c);

let x = 10 , y = 20;

function displayText(){
    // a.innerText="<storng>Teaching javascript basic</storng>"; // ສະແດງຜໄນ ຫຼື ປ່ຽນຂໍ້ຄວາມ
    // a.innerHTML="<strong>Display variable x = </strong>"+x+" and variable y = "+y;
    a.innerHTML=`<strong>Display data of x = ${x} and vriable y = ${y}</strong>`;
}