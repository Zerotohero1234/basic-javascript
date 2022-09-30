const a =[2,34424,-23,123,233];
let result;

//logic
let maxNumber = a[0];
let min = a[0]
for (let i = 0; i < a.length; i++) {
    // const element = array[i];
    if (a[i]>maxNumber) {
        maxNumber = a[i]
    } else if (a[i]<min){
        min = a[i]
    }
}
result = maxNumber
console.log(result);
console.log(min);