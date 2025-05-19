function Ride_Function() {
    var height,can_ride;
    height = document.getElementById("height").ariaValueMax;
    can_ride = (height<52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride";
}

//use of new and this keywords
function Vehicle(Make,Model,Year,Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge","Viper", 2020,"Red");
var Emily = new Vehicle("Jeep","Trail Hawk", 2019,"White");
var Erik = new Vehicle("Ford","Pinto", 1971,"Mustard");

function myFunction() {
    document.getElementById("Keyword_and_Construstors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + " -colored " + Erik.Vehicle_Model +
    " manifactured in " + Erik.Vehicle_Year;
}

//example of nested function
function nested() {
    document.getElementById("nested_function").innerHTML = count();
    function count() {
        var start=5;
        function plus_one() {start -= 1;}
        plus_one();
        return start;
    }
}