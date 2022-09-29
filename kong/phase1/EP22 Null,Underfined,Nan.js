// null ແມ່ນບໍ່ມີຄ່າຫຍັງເລີຍ ບໍ່ເທົາກັບ 0 ບໍ່ເທົ່າກັບ string ແຕ່ຫາກນຳໄປໃຊ້ໃນການປຽບທຽບແມ່ນຈະມີຄ່າເປັນ false

let a = null;
if (a) {
    console.log("a is null");
}else{
    console.log("a not null");
}

let w;  // w = undefined
console.log(w);

let y = 10-"A";  // nan

console.log(y)