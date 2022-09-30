const {appVersion,license,owner} = require('./config/appVersion')
const {calculateCircleArea,calculateSquareArea,getName} = require('./config/utils/calculateArea')

function greeting() {
    console.log("Hello", appVersion, license, owner);
}

greeting()

const a1 = calculateCircleArea(7);
const a2 = calculateSquareArea(10);
const a3 = getName();
console.log(a1, a2);
console.log(a3);