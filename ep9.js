// const a = [1,2,3];

// // copy array , copy obj
// let b = [...a];

// b[1] = 99;

// const a = {
//     name:'Anouwath'
// }

// // coppy obj
// const b = {...a};
// b.name = 'OOOOO'

// console.log('a=',a);
// console.log('b=',b);

function addAge(student1,student2) {
    const result = {
        age: student1.age + student2.age
    }
    return result;
}

const a = {
    age:10
};

const b = {
    age:30
};

const sum = addAge(a,b);
console.log('a = ',a,' b=',b);
console.log('sum = ',sum);