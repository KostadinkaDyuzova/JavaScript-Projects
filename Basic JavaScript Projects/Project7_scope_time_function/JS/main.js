

//global and local variables
document.writeln("<br>");
var x = 6;
function add_number_1(){
    document.writeln(16+x+"<br>");
} 

function add_number_2() {
    document.writeln(x+50);
}

add_number_1();
add_number_2();

function add_number_1() {
    var x = 6;
    document.writeln(16+x+"<br>");
}

function add_number_2() {
    document.writeln(x + 50);
    console.log(x);
}

add_number_1();
add_number_2();


//if statement with newDate().getHours() method
function get_Hour() {
    if (new Date().getHours() < 12) {
        document.getElementById("breakfast").innerHTML = "It's breakfast time!";
    }
}

//if and else statements

function winner_Function() {
    var winner = document.getElementById("win").value;
    if(winner >=100) {
        reply = "You are winner :)";
        document.getElementById("result").innerHTML = reply;
    }
    else {
        reply = "Try one more time:(";
        document.getElementById("result").innerHTML=reply;
    }
}
//else if function used to show the time
function Time_function() {
    var Time= new Date().getHours();
    var Reply;
    if (Time<12 ==Time>0) {
        Reply = "It is morming time";
    }

    else if (Time>=12 ==Time<18) {
        Reply ="It is afternoon";
    
    }

    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}