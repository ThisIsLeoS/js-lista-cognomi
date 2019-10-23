/* Esercizio: lista di cognomi

DESCRIZIONE:
- Chiedi all’utente il cognome
- inseriscilo in un array con altri cognomi
- stampa la lista ordinata alfabeticamente
- scrivi anche la posizione della lista in cui il nuovo utente si trova

QUINDI OUTPUT sarà:
- array disordinato di partenza
- array ordinato
- posizione in cui si trova il cognome dell’utente nell’array ordinato 

BONUS:
- l’utente non è un dev, quindi gli diremo in che posizione si trova in modo “umano”, quindi la
posizione 1 sarà 1 e non zero;
- elaborazione di entrambi a livello di output e ottimizzazione codice (da ora sarà abbastanza una
costante come bonus);
- iniziare a pensare/gestione dei casi limite (questo se lo fate, fatelo in altra sottocartella
dell’ex e non nella cartella della consegna di base).*/

var lastNames = ["Bianchi", "Rossi", "Conte", "Salvini", "Di Maio"];
var lastName = prompt("Enter your last name");

var isLoopContinuing = true;
while (isLoopContinuing)
{
    /* if the inserted string isn't capitalized or contains at least one character that's not a
    letter */
    if (!/^[A-Z]/.test(lastName) || !/^[a-zA-Z]+$/.test(lastName))
    {
        lastName = 
            prompt("Last names must be capitalized and can only contain letters\n\nEnter a valid " +
            "last name");
    }
    // else the inserted string is valid
    else isLoopContinuing = false;
}

/* the unsorted collection is printed (the method join is used to add a space between each item of
the collection) */
document.getElementsByClassName("unsorted-collection-msg")[0].textContent =
    "The unsorted list is: " + lastNames.join(", ");
lastNames.push(lastName);

/* the sorted collection is printed (the method join is used to add a space between each item of
the collection) */
document.getElementsByClassName("sorted-collection-msg")[0].textContent =
    "The sorted list is: " + lastNames.sort().join(", ");

// the position of the user's lastName is printed
document.getElementsByClassName("item-position-msg")[0].textContent =
    "Your position in the sorted list is: " + (lastNames.indexOf(lastName) + 1);