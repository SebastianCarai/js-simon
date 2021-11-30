// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// FUCNTIONS
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


function checknumbers(){
    const rightNumbers = [];
    for (let i=0; i <5; i++){
        const userNumber = parseInt(prompt('Inserisci il numero'));
        if (numbers.includes(userNumber)){
            rightNumbers.push(userNumber);
        }
    } 
    if (rightNumbers.length === numbers.length){
        alert('Hai indovinato tutti i numeri. Questi sono: ' + rightNumbers);
    } else{
        alert('Hai indovinato ' + rightNumbers.length + ' numeri. Questi sono: ' + rightNumbers);
    }
}


// MAIN
const numbers = [];
while (numbers.length<5){
    const singleRandomNumber = getRndInteger(1,100);
    if (!numbers.includes(singleRandomNumber)){
        numbers.push(singleRandomNumber);
    }
}
alert(numbers);
setTimeout(checknumbers, 30000)