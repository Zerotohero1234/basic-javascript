let color = ["Red","Blue","Yellow"];
let fruits = ["Mango","Apple","Banana","Saba"];


console.log("Before Sort = ", color)


// ການຫາຈຳນວນສະມາຊິກແລະລ່ຽງລຳດັບ
let x = color.length; // .length ກວດສອບສະມາຊິກໃນ Array ຫວາໃນນັ້ນມີສະມາຊິກຢູ່ຈັກໂຕ
let y = color.sort(); //  sort() ແມ່ນການລ່ຽງລຳດັບໃນສະມາຊິກ$ມ່ຈາກໜ້ອຍໄປຫຼາຍ ຫຼື ຕາມພະຍັນຊະນະ ແລະ ສະຫຼະ
// color.sort();
console.log("After Sort = ",y)

console.log(fruits.sort()); // sort() ແມ່ນລ໋ຽງຈາກພະຍັນສະນະ ໄປ ສະຫຼະ
console.log(fruits.reverse()); // reverse() ແມ່ນລ່ຽງຈາກສະຫຼະ ໄປ ພະຍັນສະນະ


// ສະມາຊິກໂຕແລກ ແລະ ໂຕສຸດທ້າຍ
console.log(color[0])
console.log(color[color.length-1])

// ການເພີ່ມສະມາຊິກ
console.log('Before using push("Gray") = ',color)
color.push("Gray");
color.push("Green");
console.log('After using push("Gray") = ',color)