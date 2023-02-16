let scoreHome = document.getElementById("scoreHome")
let scoreGuest = document.getElementById("scoreGuest")

let count = 0;
let count2 = 0;
function one(){
    count +=1
    scoreHome.textContent =  count
}

function one1(){
    count2 +=1;
    scoreGuest.textContent = count2
}

function two(){
    count += 2
    scoreHome.textContent =  count
}

function two2(){
    count2 +=2;
    scoreGuest.textContent = count2
}

function three(){
    count +=3
    scoreHome.textContent =  count
}
function three3(){
    count2 +=3;
    scoreGuest.textContent = count2
}