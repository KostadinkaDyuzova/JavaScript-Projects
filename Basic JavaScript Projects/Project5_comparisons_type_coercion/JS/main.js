document.writeln("<br>");
document.writeln("15"+10);
document.writeln(typeof "dog");
document.writeln("<br>");

document.writeln(125>6);
document.writeln(125>666);
document.writeln("<br>");

document.writeln(6==6);
document.writeln("<br>");
document.writeln(3==6);
document.writeln("<br>");

x=2;
y="2";
document.writeln(x===y);
document.writeln("<br>");

x="hello"
y="hello"
document.writeln(x===y);
document.writeln("<br>");

document.writeln(1>0 && 5>3);
document.writeln("<br>");

document.writeln(1>5 || 5>3);
document.writeln("<br>");

function not_Function() {
    document.getElementById("not").innerHTML = !(3>2);
}
