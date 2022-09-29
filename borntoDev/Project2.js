let number = prompt("ປ້ອນໂຕເລກທີ່ທ່ານຊື້")
let random_number = Math.floor(Math.random() * 1000 )
document.getElementById("random").innerHTML = random_number

if (number === random_number) {
    document.getElementById("result").innerHTML = "ຍິນດີກັບທ່ານທ່ານຖືກລາງວັນເລກທ້າຍ 3 ຕົວ "
}
else{
    document.getElementById("result").innerHTML = "ເສຍໃຈນຳ ທ່ານບໍ່ຖືກລາງວັນເລກທ້າຍ "
}