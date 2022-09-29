/*
Locak variable ໂຕແປທີ່ທຳງານຢູ່ໃນຟັງຊັ່ນມີຂອບເຂດການທຳງານແບບຈຳກັດ

global variable ໂຕແປທີ່ທຳງານຢູ່ນອກຟັງຊັ່ນມຮຂອບເຂດການທຳງານທັງໃນແລະນອກຟັງຊັ່ນ
*/

let a = 100; //global variable

function  display() {
    let a = 50; //local variable
    console.log("a ໃນຟັງຊັ່ນ = ",a)
    console.log("a ໃນຟັງຊັ່ນ = ",a)
}

console.log("a ນອກຟັງຊັ່ນ = ",a);
console.log("a ນອກຟັງຊັ່ນ = ",a);
display()
