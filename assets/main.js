// chiedi all'utente la sua email
const email = prompt('scrivi la tua email')
console.log(email);

// lista di chi puo accedere 
const list = [ 'Stefano@gmail.com', 'Sara@gmail.com', 'Veronica@gmail.com', 'Leonardo@gmail.com', 'Giulia@gmail.com' ]
let count = 0
// esito del controllo 
for (let i = 0; i < list.length; i++) {
    

    if (email == list[i]) {
        count++

    } 
        

}

if (count !== 0) {
    alert('puoi accedere')
    
} else{
    alert('non puoi accedere')
}