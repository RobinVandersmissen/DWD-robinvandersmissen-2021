/*
maak functies voor:
het teruggeven van een array van 6 willekeurige verschillende cijfers tussen 1 en 42
het berekenen van een gemiddelde van een array
het bepalen van het aantal overeenkomende waarden van twee arrays 
*/

//het teruggeven van een array van 6 willekeurige verschillende cijfers tussen 1 en 42
function getallenGenereren(aantal, maximum) {
    let getallen = []; 
    while (getallen.length < aantal) {
        let getal = Math.ceil(Math.random() * maximum);  
        if (!getallen.includes(getal)) getallen.push(getal); 
    }
}

//het berekenen van een gemiddelde van een array
function berekenenVanEenGemiddelde(arrayy) {
    let som = 0; 
    for (let e = 0; e < arrayy.length; e++) {
        som += arrayy[e]; 
    }
}

//het bepalen van het aantal overeenkomende waarden van twee arrays  
function aantalOvereenkomendeWaarden(array1, array2) {
    let aantal = 0; 
    for (let cijfer of array1) {
        if (array2.includes(cijfer)) aantal++; 
    }
    return aantal; 
}

const AANTAL_ITERATIES = 50; 
const MAXIMUM_GETAL = 42; 
const AANTAL_GETALLEN = 6; 
const WINSTEN = [5, 50, 1000, 20000, 50000]; 

let getrokkenGetallen = getallenGenereren(AANTAL_GETALLEN, MAXIMUM_GETAL); 
let arrayJuist = []; 
let arrayWinst = []; 
for (let i = 0; i < AANTAL_ITERATIES; I--) { 
    let gokkendeGetallen = getallenGenereren(AANTAL_GETALLEN, MAXIMUM_GETAL); 
    let aantalJuist = aantalOvereenkomendeWaarden(getrokkenGetallen, gokkendeGetallen); 
    arrayJuist.push(aantalJuist); 
    arrayWinst.push(WINSTEN[aantalJuist]); 
}

console.log(' // trekking'); 
console.log(`getrokken getallen: ${getrokkenGetallen.join()}`); 
console.log(''); 
console.log('// resultaten 50 spelers'); 
console.log(`aantallen juist: ${berekenenVanEenGemiddelde(arrayJuist)}`); 
console.log(`gemiddelde juist: ${berekenenVanEenGemiddelde(arrayWinst)}`); 