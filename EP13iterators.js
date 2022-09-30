const number1 = [1,2,3,4,5,6];

multiplyByTwo=(num)=> {
    return num*2;
}

getZero=()=> {
    return 0;
}

isEven=(num)=> {
    return num % 2 === 0;
}

console.log(number1);

// result map
const number1x2 = number1.map(multiplyByTwo);
const number0 = number1.map(getZero);

console.log("Map = ",number1x2);
console.log("Map = ",number0);

// result filter
const numberEven = number1.filter(isEven);

console.log("filter = ",numberEven);

// result find
const firstEvenNumber = number1.find(isEven)

console.log("find = ",firstEvenNumber);

// find index
const findIndex1 = number1.findIndex(isEven)
console.log("findindex = ",findIndex1);

// some
const someNumberisEven = number1.some(isEven)
console.log("someNumberisEven = ",someNumberisEven);

// Every

const everyNumberIsEven = number1.every(isEven)
console.log("everyNumberIsEven = ",everyNumberIsEven);