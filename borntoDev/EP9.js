let number = prompt("ປ້ອນຄະແນນຂອງທ່ານ : ")
if (number >= 80){
    document.getElementById("result").innerHTML = "ທ່ານໄດ້ເກດ A"
}
else if (number >= 70) {
    document.getElementById("result").innerHTML = "ທ່ານໄດ້ເກດ B"
} 
else if (number >= 60) {
    document.getElementById("result").innerHTML = "ທ່ານໄດ້ເກດ C"
} 
else if (number >= 50) {
    document.getElementById("result").innerHTML = "ທ່ານໄດ້ເກດ D"
}
else{
    document.getElementById("result").innerHTML = "ທ່ານໄດ້ເກດ F"
} 