/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (i = 0; i < pets.length; i++) {
  console.log("Elemento ", i + 1, "", pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log("Array riordinato alfabeticamente ", pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse();
for (i = 0; i < pets.length; i++) {
  console.log("Elemento invertito ", pets[i]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.

*/
const first = pets.slice(0);
const last = pets.pop();
const pets1 = pets.push(last);
console.log("Array con gli estremi invertiti ^", pets1);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];
for (i = 0; i < cars.length; i++) {
  const array = cars[i];
  array.licensePlate = true;
}
console.log("Array con oggetto inserito in coda ", cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const lastElement = {
  object: "insert",
};

cars.push(lastElement);

for (i = 0; i < cars.length - 1; i++) {
  cars[i].trims.pop();
}

console.log("Array con chiave oggetto aggiunta ", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (i = 0; i < cars.length - 1; i++) {
  const primo = cars[i].trims.shift();
  justTrims.push(primo);
  cars[i].trims.push(primo);
}
console.log("Array con primo elemento degli array 'trims' ", justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (i = 0; i < cars.length - 1; i++) {
  const firstLetter = cars[i].color.search("b");
  if (firstLetter === 0) {
    console.log("Frizz, il colore inizia con la lettera 'B'");
  } else {
    console.log("Buzz il colore inizia con un'altra lettera");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
const number32 = 32;
for (i = 0; i < numericArray; i++) {
  numericArray[i];
}
while (numericArray[i] !== number32) {
  console.log("Il valore numero ", i + 1, "", "è ", numericArray[i]);
  i++;
}
console.log("Il valore dell'ultimo numero è ", 32);
console.log("Sono stati stampati ", i, " valori prima del numero 32");
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];

const position = [];

for (i = 0; i < charactersArray.length; i++) {
  const positionLetter = charactersArray[i];
  console.log(
    "La ",
    i + 1,
    " lettera di cui calcolare la posizione nell'alfabeto è ",
    positionLetter
  );

  switch (charactersArray[i]) {
    case "a":
      position.push(1);
      break;
    case "b":
      position.push(2);
      break;
    case "c":
      position.push(3);
      break;
    case "d":
      position.push(4);
      break;
    case "e":
      position.push(5);
      break;
    case "f":
      position.push(6);
      break;
    case "g":
      position.push(7);
      break;
    case "h":
      position.push(8);
      break;
    case "i":
      position.push(9);
      break;
    case "j":
      position.push(7);
      break;
    case "k":
      position.push(8);
      break;
    case "l":
      position.push(9);
      break;
    case "m":
      position.push(10);
      break;
    case "n":
      position.push(11);
      break;
    case "o":
      position.push(12);
      break;
    case "p":
      position.push(13);
      break;
    case "q":
      position.push(14);
      break;
    case "r":
      position.push(15);
      break;
    case "s":
      position.push(16);
      break;
    case "t":
      position.push(17);
      break;
    case "u":
      position.push(18);
      break;
    case "v":
      position.push(19);
      break;
    case "w":
      position.push(20);
      break;
    case "x":
      position.push(21);
      break;
    case "y":
      position.push(22);
      break;
    case "z":
      position.push(23);
      break;
    default:
      console.log("Il carattere inserito non è una lettera");
  }
}
console.log("La loro posizione nell'ordine alfabetico è ", position);
