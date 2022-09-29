let round = prompt("ທ່ານຈະຫຼິ້ນຈັກຮອບ")
var score = 0
for(var i = 0 ; i < round ; i++){
    var answer = prompt("ຫົວ ຫຼື ກ້ອຍ")
    var random_answer = ""
    if(Math.floor(Math.random()*10) <= 4){
        random_answer = "ຫົວ"
    }
    else{
        random_answer = "ກ້ອຍ"
    }

    if(answer == random_answer){
        alert("ຕອບຖືກ ! ຍິນດີນຳ")
    }
    else{
        alert("ຕອບຜິດ ! ເສຍໃຈນຳ")
    }
    console.log(random_answer+ " : " + answer)
    document.getElementById("game-list").innerHTML += answer +"<br>"
    document.getElementById("result").innerHTML += random_answer +"<br>"
    
    if(answer==random_answer){
        score+=1
    }
    else{
        score+=0
    } 
}
document.getElementById("score").innerHTML = score