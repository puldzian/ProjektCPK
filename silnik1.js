// STAŁE PORZĄDKOWE

var nObrazkow = 10; // Minimalna liczba obrazków na ekranie
const n00Grunt = 30; // Liczba grafik ziemi, folder 0
const n01Male = 44; // Liczba grafik budynków, folder 1Male
const n02Srednie = 11; // jw
const n03Duze = 9; // jw
const xy_w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const xy_h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
var losujCos = function (n) { // generuje liczbę do N
    return Math.floor(Math.random() * (n));
};

// NAPISY
var liczba = losujCos(666); // Tego używam do numeru wariantu
document.getElementById("numerWariantu").innerHTML = liczba;
var litera = "Wymiary ekranu. W:" + xy_w + " H:" + xy_h;
console.log(litera);

// DODAWANIE GRAFIK

// #TODO Tutaj wprowadzić rozróżnienie zależne od stałej "wariant"
// #TODO Brać wymiary ekranu i dopasowywać do nich liczbę elementów?

const dodajObrazek = function (wariant, folder) {
    var obrazek = document.createElement("img");
    var nObrazkowWFolderze;
    switch (wariant) {
        case "park":
            console.log("Wariant park czeka na wykonanie!");
        break;
        case "lotnisko":
            console.log("Wariant lotnisko zostaje wykonany!");
            switch (folder) {
                case 0:
                    nObrazkowWFolderze = 1;
                    break;
                case 1:
                    nObrazkowWFolderze = 1;
                    break;
                case 2:
                    nObrazkowWFolderze = 1;
                    break;
                case 3:
                    nObrazkowWFolderze = 1;
                    break;
            }
        break;
    }
    console.log(nObrazkowWFolderze);
    var nObrazka = losujCos(nObrazkowWFolderze);
    var nazwaObrazka = "img/" + folder + "/" + nObrazka + ".png";
    obrazek.src = nazwaObrazka;
    obrazek.setAttribute("class", "obrazek");   
    var poz_x = losujCos(xy_w);
    var poz_y = losujCos(xy_h);
    obrazek.style.left = poz_x;
    obrazek.style.top = poz_y;
    obrazek.style.zIndex = nObrazkow;
    nObrazkow = nObrazkow + 1;
    var katObrazka = losujCos(360);
    var cssKatObrazka = "rotate(" + katObrazka + "deg)";
    obrazek.style.transform = cssKatObrazka;
    document.getElementById('canvas').appendChild(obrazek);
}

const podajLotnisko = function () { // Wstawia obrazki z bazy lotnisk
    for (i = 0; i < 6; i++) {
        setTimeout(dodajObrazek(wariant, "lot0"),1000);
    }
    for (i = 0; i < 15; i++) {
        setTimeout(dodajObrazek(wariant, "lot1"),500);
    }
    for (i = 0; i < 6; i++) {
        setTimeout(dodajObrazek(wariant, "lot2"),500);
    }
    for (i = 0; i < 3; i++) {
        setTimeout(dodajObrazek(wariant, "lot3"),500);
    }
}

const wprowadzEkran = function () {
    var canvas = document.getElementById("canvas");
    var opacity = 0;
    var intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.1;
            canvas.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 50);
}

const wprowadzLotnisko = function () {
    console.log(wariant);
    podajLotnisko();
    wprowadzEkran();
}

// DZIAŁANIE! 
window.onload = wprowadzLotnisko();