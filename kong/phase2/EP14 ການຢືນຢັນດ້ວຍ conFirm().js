function deleteData(){
    let result = confirm("ທ່ານຕ້ອງການລົບຂໍ້ມູນ ຫຼື ບໍ ?");
    console.log(result)
    if (result) {
        console.log("ລົບຂໍ້ມູນຮຽບຮ້ອຍ");
    }
    else{
        console.log("ຍົກເລີກການລົບຂໍ້ມູນ");
    }
}