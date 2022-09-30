// ຮັບຄ່າ num1 ເປັນຄູ່ print EVEN ຄີ່ PRINT ODD
const number1 = 11;

const message = number1 % 2 === 0 ? "EVEN" : "ODD";
console.log(message);


// num1 num2 num3

const num1 = 23
const num2 = 31
const num3 = 99

let result;

if (num1 > num2 && num1 > num3) {
    result = "num1 > num2 and num3"
} else if(num2 > num1 && num2 > num3){
    result = "num2 > num1 and num3"
} else {
    result = "num3 > num2 and num1"
}

// code ....

console.log(result);