// STAŁE PORZĄDKOWE
var nMalych = 11; // Liczba elementów z grupy male_NNN.png
var xy_w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var xy_h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

// FUNKCJE PORZĄDKOWE
var losujCos = function (n) { // generuje liczbę do N
    return Math.floor(Math.random() * (n));
};

var liczba = losujCos(666); // Tego używam do numeru wariantu
document.getElementById("numerWariantu").innerHTML = liczba;

var litera = "W:" + xy_w + " H:" + xy_h;
document.getElementById("konsola").innerHTML = litera;

// GENERATOR OBRAZKÓW
var generujMalyObrazek = function () {
    var i = document.createElement("div");

    i.setAttribute("position", "absolute");
    i.setAttribute("left", wymiar_x);
    i.setAttribute("top", wymiar_y);
    i.setAttribute("background-image", "img/maly_001.png");
    document.documentElementById("canvas").appendChild(i);
    litera = litera + " MX:" + wymiar_x + " MY:" + wymiar_y;
    return litera;
}

var generujObrazekTestowy = function () {
    var img01 = document.getElementById("img01");
    var wymiar_x = losujCos(xy_w) - 100;
    var wymiar_y = losujCos(xy_h) - 100;
    img01.style.left=wymiar_x;
    img01.style.top=wymiar_y;
    img01.style.backgroundImage="url(img/maly_1.png)";
}

generujObrazekTestowy();



// REZERWA - do skasowania
var generujWariant = function () { // tworzy kolejny wariant jeśli stosuję kolejne N
    liczba = liczba+1;
    return liczba;
}