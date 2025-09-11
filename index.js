
document.getElementById("buyPage").style.display = "none"

function closeBox(){

    document.getElementById("buyPage").style.display = "none"
}


function apple(){

    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "soybean.png";

    itemName.innerHTML = "Soyabean"
    document.getElementById("buyPage").style.top = "20%"
}


function banana(){

    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "pegion pea.webp";

    itemName.innerHTML = "Toor"
    document.getElementById("buyPage").style.top = "20%"
}

function coc(){

    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "wheat.png";

    itemName.innerHTML = "Wheat"
    document.getElementById("buyPage").style.top = "20%"
    
}

function orange(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "cotton.jpeg";

    itemName.innerHTML = "Cotton"
    document.getElementById("buyPage").style.top = "20%"
}
function pom(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "Mustard.jpg";

    itemName.innerHTML = "Musterd"
    document.getElementById("buyPage").style.top = "20%"
}
function pear(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "millet.jpeg";

    itemName.innerHTML = "Millet"
    document.getElementById("buyPage").style.top = "20%"
}
function df(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "onion.jpg";

    itemName.innerHTML = "Onion"
    document.getElementById("buyPage").style.top = "20%"
}
function amulL(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Dairy/amulmil.jpg";

    itemName.innerHTML = "Soyabean"
    document.getElementById("buyPage").style.top = "90%"
}
function dahi(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Dairy/dahi.jpg";

    itemName.innerHTML = "Toor"
    document.getElementById("buyPage").style.top = "90%"
}
function but(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Dairy/butter.jpg";

    itemName.innerHTML = "Cotton"
    document.getElementById("buyPage").style.top = "90%"
}
function cheese(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Dairy/cheese.jpg";

    itemName.innerHTML = "Wheate"
    document.getElementById("buyPage").style.top = "90%"
}
function cheeseC(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Dairy/cheesecube.jpg";

    itemName.innerHTML = "Musterd"
    document.getElementById("buyPage").style.top = "90%"
}
function pizz(){
    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Dairy/pizza.jpg";

    itemName.innerHTML = "Onion"
    document.getElementById("buyPage").style.top = "90%"
}

function paneer(){

    document.getElementById("buyPage").style.display = "block"

    document.getElementById("buyImg").src = "/Images/Dairy/paneer.jpg";

    itemName.innerHTML = "Millete"
    document.getElementById("buyPage").style.top = "90%"

}

function add(){


    document.getElementById("num").innerHTML = Number(document.getElementById("num").innerHTML) + 1;
}
function minus(){

if(Number(document.getElementById("num").innerHTML)>1){
    document.getElementById("num").innerHTML = Number(document.getElementById("num").innerHTML) - 1;

}
}

