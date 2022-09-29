/*  ຄວາມແຕກຕ່າງລະຫວ່າງ Array ແລະ Object
    Array ມີ index ເປັນຕົວເລກ , Object ກຳນົດເປັນຊື່
    Array ໃຊ້ [] , ສ່ວນ Object ໃຊ້ {}
*/ 

let product = {
    name : "Mouse",
    price : 1500,
    color:"black",
    category:"computer",
    size:"M",
    displayProduct:function(){   // Method
        return "ຊື່ສິນຄ້າ : "+this.name + ", ລາຄາ : "+this.price + ", ໝວດໝູ່ : "+this.category
    },
    disCount:function(){
        return this.price - 1000;
    },
    getColor:function(){
        return this.color;
    }
};

// ເອີ້ນໄຊ້ Method
document.write(product.displayProduct(),"<br>");
document.write("ສ່ວນລົດລາຄາ : ",product.disCount(),"<br>");
document.write("ສີຂອງສິນຄ້າ : ",product.getColor());

// let item = ["Mouse",1500,"black","computer","M"];

// object
// console.log("ຊື່ສິຄ້າ : ",product.name);
// console.log("ລາຄາ : ",product.price);
// console.log("ໝວດໝູ່ : ",product.category);

// array
// console.log("ຊື່ສິຄ້າ : ",item[0]);
// console.log("ລາຄາ : ",item[1]);
// console.log("ໝວດໝູ່ : ",item[3]);