// STAŁE PORZĄDKOWE
var nMalych = 37; // Liczba elementów z grupy male_NNN.png łącznie z 0 ech
var nSrednich = 6; // jw
var nDuzych = 1; // jw
var nObrazkow = 1; // Liczba obrazków na ekranie, a do tego z-index
var xy_w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var xy_h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

// FUNKCJE PORZĄDKOWE
var losujCos = function (n) { // generuje liczbę do N
    return Math.floor(Math.random() * (n));
};

// var liczba = losujCos(666); // Tego używam do numeru wariantu
// document.getElementById("numerWariantu").innerHTML = liczba;

var litera = "W:" + xy_w + " H:" + xy_h;
console.log(litera);

var dodajMalyObrazek = function () { // Przemysl
    var obrazek = document.createElement("img");
    var nObrazka = losujCos(nMalych); // numer pliku z liczby malych
    var nazwaObrazka = "img/male/" + nObrazka + ".png";
    var katObrazka = losujCos(360);
    var transfKatObrazka = "rotate(" + katObrazka + "deg)";
    var poz_x = losujCos(xy_w);
    var poz_y = losujCos(xy_h);
    obrazek.setAttribute("class", "x100");
    obrazek.style.zIndex = nObrazkow + 100;
    obrazek.style.left = poz_x;
    obrazek.style.top = poz_y;
    obrazek.style.transform = transfKatObrazka;
    obrazek.src = nazwaObrazka;
    nObrazkow = nObrazkow + 1;
    document.getElementById('canvas').appendChild(obrazek);
}


var ileMalychObrazkow = losujCos(20) + 5;
for (i = 0; i < ileMalychObrazkow; i++) {
    dodajMalyObrazek();
}

var dodajSredniObrazek = function () { // Infrastruktura lotniska
    var obrazek = document.createElement("img");
    var nObrazka = losujCos(nSrednich); // numer pliku z liczby malych
    var nazwaObrazka = "img/srednie/" + nObrazka + ".png";
    var katObrazka = losujCos(360);
    var transfKatObrazka = "rotate(" + katObrazka + "deg)";
    var poz_x = losujCos(xy_w);
    var poz_y = losujCos(xy_h);
    obrazek.setAttribute("class", "x100");
    obrazek.style.zIndex = nObrazkow + 200;
    obrazek.style.left = poz_x;
    obrazek.style.top = poz_y;
    obrazek.style.transform = transfKatObrazka;
    obrazek.src = nazwaObrazka;
    nObrazkow = nObrazkow + 1;
    document.getElementById('canvas').appendChild(obrazek);
}

var ileSrednichObrazkow = losujCos(5) + 1;
for (i = 0; i < ileSrednichObrazkow; i++) {
    dodajSredniObrazek();
}

var dodajDuzyObrazek = function () { // Dodaj pas startowy
    var obrazek = document.createElement("img");
    var nObrazka = losujCos(2); // numer pliku z liczby malych
    var nazwaObrazka = "img/duze/" + nObrazka + ".png";
    var katObrazka = losujCos(360);
    var transfKatObrazka = "rotate(" + katObrazka + "deg)";
    var poz_x = losujCos(xy_w);
    var poz_y = losujCos(xy_h);
    obrazek.setAttribute("class", "x100");
    obrazek.style.zIndex = nObrazkow + 200;
    obrazek.style.left = poz_x - 200;
    obrazek.style.top = poz_y - 200;
    obrazek.style.transform = transfKatObrazka;
    obrazek.src = nazwaObrazka;
    nObrazkow = nObrazkow + 1;
    document.getElementById('canvas').appendChild(obrazek);
}

var ileDuzychObrazkow = losujCos(5) + 1;
for (i = 0; i < ileDuzychObrazkow; i++) {
    dodajDuzyObrazek();
}


// REZERWA - do skasowania
var generujWariant = function () { // tworzy kolejny wariant jeśli stosuję kolejne N
    liczba = liczba+1;
    return liczba;
}

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