
// dadi


let user = Math.floor(Math.random() * 6) + 1;
console.log('punteggio user : '+ user);


let computer = Math.floor(Math.random() * 6) + 1;
console.log(' punteggio computer : ' + computer);


if(user === computer) {
    console.log("pareggio!");
}else if(user > computer) {
    console.log("vince User");
}else {
    console.log("vince Computer");
}