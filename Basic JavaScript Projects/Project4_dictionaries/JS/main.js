function my_Dictionary() {
    var Smarthphone = {
        Make:"Samsung",
        Model:"Galaxy",
        Display:"5 inch",
        Color: "Green",
        Battery: "2500 mah",
        Price:1300
    };
    document.getElementById("Dictionary").innerHTML = Smarthphone.Model;
    delete Smarthphone.Color;
    document.getElementById("Dictionary").innerHTML = Smarthphone.Color;
}
