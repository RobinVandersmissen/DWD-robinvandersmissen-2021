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

console.log("Alle paswoorden: ");  
for (let i = 0; i < paswoorden.length; i++) { 
        console.log(`${i+ 1}` + passwoorden[i]);     
}

let welOk = []; 
let nietOk = []; 

for(let pw of passwoorden) {
    if (isCorrectPassword(pw)){
        welOk.push(pw);
    }
    else{
        nietOk.push(pw);
    }
} 

console.log("Ok: " + welOk.join(", "));
console.log("Niet ok: "  + nietOk.join(", "));

