// STAŁE PORZĄDKOWE

var nObrazkow = 10; // Minimalna liczba obrazków na ekranie
const n0Grunt = 30; // Liczba grafik ziemi, folder 0
const n1Male = 44; // Liczba grafik budynków, folder 1Male
const n2Srednie = 11; // jw
const n3Duze = 9; // jw
const xy_w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const xy_h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    // wymiary ekranu


// FUNKCJE PORZĄDKOWE

const losujCos = function (n) { // generuje liczbę do N
    return Math.floor(Math.random() * (n));
};

// NAPISY

var liczba = losujCos(666); // Tego używam do numeru wariantu
document.getElementById("numerWariantu").innerHTML = liczba;

var litera = "W:" + xy_w + " H:" + xy_h;
console.log(litera);

// DODAWANIE GRAFIK

const dodajObrazek = function (folder) {
    var obrazek = document.createElement("img");
    var nObrazkowWFolderze;
    switch (folder) {
        case 0:
            nObrazkowWFolderze = n0Grunt;
            break;
        case 1:
            nObrazkowWFolderze = n1Male;
            break;
        case 2:
            nObrazkowWFolderze = n2Srednie;
            break;
        case 3:
            nObrazkowWFolderze = n3Duze;
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

// DZIAŁANIE! 
for (i = 0; i < 6; i++) {
    setTimeout(dodajObrazek(0),1000);
}

for (i = 0; i < 15; i++) {
    setTimeout(dodajObrazek(1),500);
 }
 for (i = 0; i < 6; i++) {
    setTimeout(dodajObrazek(2),500);
 }
 for (i = 0; i < 3; i++) {
    setTimeout(dodajObrazek(3),500);
 }