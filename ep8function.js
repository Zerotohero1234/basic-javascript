const a = 1;

const b = 3;

function checkEvenOrdd(number) {
    const isEven = number % 2 === 0
    if (isEven) {
        return "Even"
    } else {
        return "ODD"
    }
}

const aa = checkEvenOrdd(a)
const bb = checkEvenOrdd(b)

console.log("a = ",aa);
console.log("b = ",bb);