/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  result = l1 * l2;
  return result;
}

console.log(area(4, 5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(num1, num2) {
  let result;
  if (num1 === num2) {
    result = (num1 + num2) * 3;
  } else {
    result = num1 + num2;
  }
  return result;
}

console.log("1) Caso in cui i due valori siano i medesimi", crazySum(3, 3));
console.log("2) Caso in cui i due valori siano diversi", crazySum(4, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num) {
  const absoluteDiff = Math.abs(num - 19);
  let result;
  if (num > 19) {
    result = 3 * absoluteDiff;
  } else {
    result = absoluteDiff;
  }
  return result;
}

console.log("1) Caso in cui il valore immesso sia <= di 19", crazyDiff(15));
console.log("2) Caso in cui il valore immesso sia > di 19", crazyDiff(25));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
  let result;
  if (typeof n === "number") {
    //console.log("Numero");
    if ((n >= 20 && n <= 100) || n === 400) {
      result = true;
    } else {
      result = false;
    }
  } else {
    console.log("Il numero inserito non è un numero");
  }
  return result;
}

console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(myString) {
  let result;
  if (typeof myString === "string") {
    const positionEpicode = myString.indexOf("EPICODE");
    if (positionEpicode === 0) {
      result = myString;
    } else {
      result = "EPICODE " + myString;
    }
  } else {
    result = "Non è stata fornita una stringa";
  }
  return result;
}

console.log(epify("Epicode"));

/* ESERCIZIO 6""
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(num) {
  let result;
  if (typeof num === "number" && num > 0) {
    if (num % 3 === 0 || num % 7 === 0) {
      result = "Il numero fornito è multiplo di 3 o 7? " + true;
    } else {
      result = "Il numero fornito è multiplo di 3 o 7? " + false;
    }
  } else {
    result = "Non è stato fornito un numero positivo";
  }
  return result;
}

console.log(check3and7(36));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(myString) {
  let result;
  result = myString.split("").reverse().join("");
  return result;
}

console.log(reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(string) {
  let result;
  const arrString = string.split(" ");
  //console.log(arrString);
  for (let i = 0; i < arrString.length; i++) {
    //console.log(arrString[i]);
    arrString[i] =
      arrString[i].charAt(0).toUpperCase() + arrString[i].substring(1);
  }
  result = arrString.join(" ");
  return result;
}

console.log(upperFirst("epicode corso da full stack developer"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(myString) {
  NewString = myString.slice(1, -1);
  return NewString;
}

console.log(cutString("Una stringa senza primo e ultimo carattere"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  let result;
  const arr = [];
  if (typeof n === "number") {
    for (let i = 0; i < n; i++) {
      const randomNumber = Math.floor(Math.random() * 11);
      arr.push(randomNumber);
    }
    result = arr;
  } else {
    result = "Non è stato immesso un numero";
  }
  return result;
}

console.log(giveMeRandom(5));
