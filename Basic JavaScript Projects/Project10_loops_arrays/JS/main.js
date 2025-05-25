//while loop example
function Call_Loop() {
    var Digit ="";
    var x=1;
    while (x<21) {
        Digit +="<br>" +x;
        x++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}

//for loop example

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content="";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content +=Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML=Content;
}
//array function example
function array_Function() {
    var fruits = [];
    fruits[0]="kiwi ";
    fruits[1]="orange";
    fruits[2]="apple";
    fruits[3]="pear";
    document.getElementById("Array").innerHTML="My favourite fruit is " + fruits[2] + "."; 
}

//example with let
function shoes() {
    let shoes= {
        brand:"Nike",
        year:"2023",
        colors: "black,white and purple",
    };
    document.getElementById("shoes").innerHTML="I would like to buy " + shoes.brand+ "trainers " + shoes.year+ " " +shoes.colors+ " "+ "for myself, my son and my daughter.";
}
