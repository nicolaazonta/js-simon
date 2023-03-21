/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

let randomNumbersPc = [];
for (let i = 0; i < 5; i++) {

    randomNumbersPc.push(Math.floor(Math.random() * 6))

    const numberEl = document.querySelector('.container')

    const numberSquare = `<div  class="number_square"><span>${randomNumbersPc[i]}</span></div>`

    numberEl.insertAdjacentHTML('beforeend', numberSquare)

}
console.log(randomNumbersPc);

setTimeout(function eraseAll(){//erase all numbers after 2 seconds
  

    //selezionare ogni singolo span
    const allNumbers = document.querySelectorAll('span');

    //inserire un testo vuoto ''
    for (let i = 0; i < allNumbers.length; i++) {
        const thisNumber = allNumbers[i];

        thisNumber.innerHTML('');        
    } 

} , 2000)

/* function eraseAll(){
    const allSpans = document.querySelectorAll('span');

    const eraseEl = '';

    allSpans.insertAdjacentHTML('beforeend' , eraseEl);
} */