let points = [20,100,-100,5,-25,10];

console.log(points)

// ນ້ອບໄປຫຼາຍ
points.sort(function(a,b){
    return a-b;
});
console.log("ນ້ອບໄປຫຼາຍ = ",points)

// ຫຼາຍໄປນ້ອຍ
points.sort(function(a,b){
    return b-a;
});
console.log("ຫຼາຍໄປນ້ອຍ = ",points)