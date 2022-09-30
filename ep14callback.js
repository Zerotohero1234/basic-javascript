function add(num1,num2){
    return num1+num2;
}

function mul(num1,num2) {
    return num1 * num2;
}

let lastResult = 0;
function sumResult(result) {
    lastResult = lastResult + result;
}

function calAndLog(n1,n2,operator,finish) {
    const result = operator(n1,n2);
    console.log(result);
    finish(result)
}

calAndLog(4,5,add,sumResult)
calAndLog(1,50,mul,sumResult)

console.log(lastResult);