let balance = 10000;
let withDraw = prompt("ຖອນເທົ່າໃດ = ");

if(balance>withDraw){
    console.log("your account balance = ",balance);
    balance-=withDraw;
    console.log("This is the money that you want to withdraw = ",withDraw)
    console.log("remaining your balance = ",balance)
}
else{
    console.log("sorry your account doesn't have enough for withdraw = ",withDraw)
    console.log("your account balance = ",balance)
}

