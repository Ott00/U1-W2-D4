// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

console.log("---EXTRA");
/* SCRIVI QUI LA TUA RISPOSTA */
function checkArray(n) {
  const arr = giveMeRandom(n);
  let somma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      console.log("Il valore", arr[i], "é maggiore di 5");
      somma += arr[i];
    } else {
      console.log("Il valore", arr[i], "é minore di 5");
    }
  }
  return "La somma dei valori maggiori di 5 è " + somma;
}

console.log(checkArray(2)); //Chiedo 5 numeri casuali alla funzione giveMeRandom()

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let shoppingCart = [
  {
    price: 2,
    name: "felpa",
    id: 111,
    quantity: 3
  },
  {
    price: 4,
    name: "santaloni",
    id: 290,
    quantity: 2
  },
  {
    price: 5,
    name: "sneaker",
    id: 223,
    quantity: 1
  }
];

function shoppingCartTotal() {
  let totShoppingCart = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    totShoppingCart += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return "Il totale del carrello è " + totShoppingCart;
}

console.log(shoppingCartTotal());

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const objAddToShoppingCart = {
  price: 8,
  name: "sneaker 2",
  id: 220,
  quantity: 4
};

function addToShoppingCart(newObj) {
  console.log(shoppingCart.length);
  shoppingCart.push(newObj); //Numero elementi prima dell'aggiunta
  console.log(shoppingCart.length); //Numero elementi dopo dell'aggiunta
  //console.log(shoppingCart);
  return "L'articolo " + newObj.name + " è stato aggiunto al carrello";
}

console.log(addToShoppingCart(objAddToShoppingCart));

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart(cart) {
  let max = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].price > max) {
      max = cart[i].price;
    } else {
      continue;
    }
  }
  return max;
}

console.log(maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function latestShoppingCart(cart) {
  //   objWithLastElement = cart.slice(-1); Restituisce un array con l'oggetto all'interno
  objWithLastElement = cart[cart.length - 1]; // Restituisce solamente l'oggetto
  return objWithLastElement;
}

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
