// Array literal

var myArr = [
    'BMW',
    'Ford',
    'Honda'
];

// Array Constructor
var myArr2 = new Array('bmw','ford','honda');

console.log(myArr[1]);
console.log(myArr.length);


// Using method in array
var fruit = [
    'Banana',
    'Orange',
    'Apple',
    'Mango'
];

// convert array to string
document.getElementById('demo').innerHTML = fruit.toString(); // tostring() is convert from other value is string

// join array
document.getElementById('demo1').innerHTML = fruit.join(' * '); // join() is bring value in () is join with value in variable

// delete value in array from back side by pop
document.getElementById('demo2').innerHTML = fruit.pop(); // pop is delete value from behide
document.getElementById('demo2').innerHTML = fruit;

// add value in array from back side by push
document.getElementById('demo3').innerHTML = fruit.push('Kiwi'); // push is add value that inside of () into variable from back side
document.getElementById('demo3').innerHTML = fruit;

// delete value in array from front side by shift
document.getElementById('demo4').innerHTML = fruit.shift(); // shift is delete it's samilar pop but shift delete from front side 
document.getElementById('demo4').innerHTML = fruit;

// add value in array from front side by unshift
document.getElementById('demo5').innerHTML = fruit.unshift('Lemon'); //unshift is add but it add value from front side
document.getElementById('demo5').innerHTML = fruit;

// change value in array
fruit[1] = 'papaya';
document.getElementById('demo6').innerHTML = fruit;