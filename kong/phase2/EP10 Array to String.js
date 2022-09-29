// ແປງ Array ເປັນ String
/*
    .toString() ແປງເປັນ String
    .join("*")  ນຳຄ່າແຕ່ລະຄ່າໃນໂຕແປ array ມາລວມກັນເປັນຂໍ້ຄວາມແລະສົ່ງຄ່າກັບເປັນຂໍ້ຄວາມທີ່ມີໂຕຄັ່ນຄ່າໂຕແປແຕ່ລະຄ່າຕາມທີ່ກຳນົດ
    color.pop(); ເອົາສະມາຊິກໂຕສຸດທ້າຍອອກໄປ
    let x = color.pop(); ເອົາສະມາຊິກໂຕສຸດທ້າຍອອກແລ້ວເກັບໃນໂຕແປ x
*/

let colors = ["Red","Blue","Yellow","Brown","purple","Orange","Pink","Gray"];
let y = colors.toString();
let x = colors.join(" | ");
console.log(y);
console.log(x);

console.log("Before using pop = ",colors);
let p = colors.pop();
console.log("After using pop = ",colors)
console.log(p)