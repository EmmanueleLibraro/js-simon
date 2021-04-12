// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var number= [];
console.log(number);

for (i = 0; i < 5; i++) {
    var prova = Math.floor(Math.random() * 20) + 1;
    if(number.indexOf(prova) === -1) number.push(prova);
        
}

