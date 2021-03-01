const msg = document.querySelector('#lblMessage');  
const frm = document.querySelector('#frm'); 
const inpName = document.querySelector('#inpName');  
const inpBod = document.querySelector('#inpBod'); 
const btn = document.querySelector('#btnBod'); 

let highestBid = ''; 
let highestOffer = 0; 

msg.innerHTML = `er is nog geen bod uitgebracht`;      

btn.addEventListener('click', function(e){    
    e.preventDefault();   

    if  (inpBod.value > highestOffer) {
        highestOffer = inpBod.value; 
        highestBid = inpName.value; 
        msg.innerHTML = `gefeliciteerd! je hebt momenteel het hoogste bod`;   
    }    
    if (inpBod.value < highestOffer) {
        msg.innerHTML = `jammer! ${highestBid} heeft een hoger bod`;     
    }
}); 
