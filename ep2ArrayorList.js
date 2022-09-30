let circles = ['green-circle','red-circle','blue-circle','black-circle']

console.table(circles);

// edit

circles[1] = 'stringwath'
console.table(circles);

//  add
const num1 = 20
circles.push('JavaScript')
circles.push(num1);
console.table(circles);

// Del
circles.pop()
circles[1] = null;
console.table(circles);