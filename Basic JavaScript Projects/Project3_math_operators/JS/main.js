function addition() {
    var add = 5+9;
    document.getElementById("add").innerHTML = "5 + 9 = " + add;
}

function subtraction() {
    var subtraction = 8-4;
    document.getElementById("sub").innerHTML = "8 - 4 = " + subtraction;
}

function multiplication() {
    var multiplication= 15*14;
    document.getElementById("mul").innerHTML= "15 * 14 = " + multiplication;
}

function division() {
    var division = 177/15;
    document.getElementById("div").innerHTML= "177 / 15 = " + division;
}

function more_Math() {
    var random = (5-3) * 15 / 6 - 2;
    document.getElementById("math").innerHTML= "(5-3) * 15 / 6 - 2 = " + random;
}

function modulus() {
    var modulus= 14 % 3;
    document.getElementById("mod").innerHTML= "In the following example 14 % 3, remainder will be: " + modulus;
}

function negation() {
    var y=15;
    document.getElementById("math1").innerHTML= -y;
}

function increment() {
    var value= document.getElementById("Increment").innerHTML;
    value++;
    document.getElementById("Increment").innerHTML = value;
}

function decrement() {
    var value= document.getElementById("Decrement").innerHTML;
    value--;
    document.getElementById("Decrement").innerHTML = value;
}

function random() {
    document.getElementById("ran").innerHTML=Math.random()*200;
}