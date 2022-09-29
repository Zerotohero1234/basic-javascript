let qrt = prompt("ຈຳນວນສິນຄ້າ")
let sum = 0
for(var i = 1; i <= qrt; i++)
{
    let item_price = prompt("ລາຄາສິນຄ້ານີ້ລາຄາ" + i)
    sum+= parseInt(item_price)
    document.getElementById("price-list").innerHTML += "ລາຍການສິນຄ້າເມນູທີ່"+ i + ":" +item_price +"ກີບ"+"<br>"
    // document.getElementById("result").innerHTML = "ລາຄາລວມ : "+sum+"ກີບ"
}
document.getElementById("result").innerHTML = "ລາຄາລວມ : "+sum+"ກີບ"