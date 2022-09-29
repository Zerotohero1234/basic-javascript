/*
x+=y ; x=x+y
x-=y ; x=x-y
x*=y ; x=x*y
x/=y ; x=x/y
x%=y ; x=x%y
*/ 

let x=10,y=20;

console.log("Before = ",x);
// x+=y; // x = x+y
console.log("After = ",x);

x%=y;

console.log(x)

// console.log(5*2-40/5)
console.log(7+5/2+25)


/*
1 () left to right
2 ++ , -- left to right
3 * , / , % left to right
4 + , - left to right
5 < , <= , > , >= left to right
6 == , != left to right
7 && left to right
8 || left to right
9 = , += , -= , *= , /= , %= right to left
*/ 