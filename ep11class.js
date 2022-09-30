//  class is a template for creating obj

class Student {
    // attribute
    name;
    age;
    title;

    // con
    constructor(t,n,a){
        this.name = n
        this.age = a
        this.title = t
    }

    // method
    getGreetingText(prefix) {
        return prefix + "Hello"+ this.title + this.name + this.age
    } 
}

const student1 = new Student("Mr","Anouwath1",21);
const student2 = new Student("Mr","Anouwath2",22);
const student3 = new Student("Mr","Anouwath3",23);

// console.log(typeof student1);
// console.log(student1 instanceof Student);
// console.log(student1);
console.log(student1.getGreetingText("Hello"));
console.log(student1.getGreetingText("Hi"));
console.log(student1.getGreetingText("Yo"));