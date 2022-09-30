// global scope
// const a = 20;
// function addAge(student1,student2){
//     //  local scope -> function
//     var num1 = 5;
//     const num2 = 6;
//     let num3 = 7;

//     return 1; 
// }

// global scope
// if (1>0) {
//     // local scope 2 -> block scope
//     var num1 = 9;
//     const num2 = 6;
//     let num3 = 7; 
// }

// global scope
// console.log(num1);
// console.log(num2);
// console.log(num3);

function getPrintName() {
    const name = 'Anouwath'
    function printName() {
        console.log(name);
        // return name
    }
    return printName;
}

const fn1 = getPrintName();

// console.log(fn1());
fn1()