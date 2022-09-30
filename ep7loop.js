// for (let i = 0; i< 11; i++) {
//     if (i%2===0) {
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 2; i++) {
//     for (let j = 1; j <= 5; j++) {
//         console.log(i,"x",j,"=",i*j);
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     for (let j = 1; j <= 5; j++) {
//         if (i%2===0 && j%2===0) {
//             console.log("i = ",i," j = ",j);
//         }
//     }
// }

// const numbers = ['a','b','c']

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// for (str of numbers) {
//     console.log(str);
// }

let student = {
    name:"nou",
    age:21,
    firstName:"Anouwath"
};

const keys = Object.keys(student);
// console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//     const key = keys[i]
//     console.log(student[key]);
// }

for (aaa in student){
    console.log(student[aaa]);
}

let a = 20;

while (a!==10){
    console.log(a);
    if (a>10) {
        a--
    } else if(a<10){
        a++
    }
}