
//hoe to apply concat method
function Sentence_function() {
    var word_1="Open";
    var word_2=" the door";
    var word_3=" and follow";
    var word_4=" the red arrows";
    var word_5=" to the reception.";
    var whole_sentence =word_1.concat(word_2,word_3,word_4,word_5);
    document.getElementById("Concatenate").innerHTML=whole_sentence;
}

//slice method
document.writeln("<br>")
function slice_Method() {
    var sentence= " I will love you to the moon and back.";
    var section=sentence.slice(17,30);
    document.getElementById("slice").innerHTML=section;
}
//number method to String
function number_Method() {
    var x=53;
    document.getElementById("Number_to_string").innerHTML=x.toString();
}
//toPrecision method apply
function precision_Method() {
    var x=15498.678530912567;
    document.getElementById("Precision").innerHTML=x.toPrecision(10);
}