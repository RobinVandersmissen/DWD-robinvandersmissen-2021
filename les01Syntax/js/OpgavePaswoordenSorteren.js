function IsCorrectPaswoord(pw) {
    if (pw.length < 9) return false; 
    if (pw.Contains("@")) return false; 
    if (pw == "password") return false; 
    return true; 
}

let paswoorden = [
'kleptoe', 
'test', 
'Azerty123',
'rogier@work',
'paswoord',
'MisterNasty12',
'pwnz0red'
]; 

console.log(`Alle paswoorden: `); 
let i  
let weergegevenPaswoord; 
for ( i = 0; i < paswoorden.length; i++) {
    console.log(`${i + 1}. ` + paswoorden[i]); 
    weergegevenPaswoord = `${i + 1}. ` + paswoorden[i]; 
}
console.log(''); 

let welOk = []; 
let nietOk = []; 

paswoorden.forEach(pw => {  
    if (IsCorrectPaswoord(pw)) {
        welOk.push(pw); 
    } else {
        nietOk.push(pw); 
    }
}); 

console.log('Ok: ' + welOk.join(', ')); 
console.log('Niet ok: ' + nietOk.join(', ')); 

document.getElementById("Message").innerHTML = weergegevenPaswoord + '' + 'Ok:' + welOk.join(', ') + '' + 'Niet ok: ' + nietOk.join(', '); 
