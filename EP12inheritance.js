class Shape {
    name
    x
    y
    constructor(x,y,name){
        this.x = x
        this.y = y
        this.name = name;
    }
}

class Circle extends Shape{

    constructor(x,y,name,r){
        super(x,y,name)
        this.radius = r;
    }
    // method
    calculateArea(){
        return this.radius ** 2 * Math.PI;
    }
}

const circle1 = new Circle(0,0,"Circle1",7);
console.log(circle1);
console.log(circle1.calculateArea());