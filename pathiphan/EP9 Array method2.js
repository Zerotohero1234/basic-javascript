var fruit = [
    'Banana',
    'Orange',
    'Apple',
    'Mango'
];

delete fruit[0];
console.log(fruit)

// adding by splice
fruit.splice(2 , 0 , 'Papaya','coconut')

// deleting by splice
fruit.splice(0, 2)


// Aray method concat

var arr1 = ['value1','value2'];
var arr2 = ['value3','value4'];
var arr3 = ['value5','value6'];

var concatArr = arr1.concat(arr2,arr3);
console.log(concatArr)


// array method slice
var value = ['value1','value2','value3','value4','value5','value6'];

var sliceArr = value.slice(1,3);
console.log(sliceArr)