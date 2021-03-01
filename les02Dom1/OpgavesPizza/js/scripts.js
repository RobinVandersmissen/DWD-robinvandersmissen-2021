const msg = document.querySelector('#lblMessage');  
const frm = document.querySelector('#frm');   
const img = document.querySelector('img');      
const radioButtons = document.querySelectorAll('#radioWrap input'); 

radioButtons.addEventListener('submit', function(e) { 
    e.preventDefault();  
    for (const radioButton of radioButtons) { 
        if (radioButton.checked) {
            msg.innerHTML = `je keuze ${radioButton.value}`;    
            if (radioButton.value == 'hot & spicy') {
                img.src = 'spicy.png';
            }
            if (radioButton.value == '4 seizoenen') {
                img.src = 'seizoenen.png';
            }
            if (radioButton.value == 'hawaï') {
                img.src = 'hawai.jpg';
            } 
        }
    }
}) 

// werkt niet, ik geraak er niet meer aan uit. 