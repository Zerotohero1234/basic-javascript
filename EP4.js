// JSON
const obj = {
    name:'aaaa'
}

// console.log(obj);
// console.log(JSON.stringify(obj));

const c = JSON.stringify(obj) // JSON.stringify() man pein obj => string

const par = JSON.parse(c) // JSON.parse() man pein jak string => obj
// console.log(par);

// Math
const a = Math.PI // kha pi
console.log(a);

const r = 7
const area = Math.PI * 7 ** 2
console.log(area);

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));

// Date

const d1 = new Date()
console.log(d1);
console.log(d1.toISOString());
console.log(d1.toString());

const d2 = new Date('2022-04-02')
console.log(d2);
console.log(d2.getDay());