/*
1) Quali sono i tipi primitivi principali in TypeScript?

tipi primitivi
string, number, boolean,  null, undefined, any, never, unknown, void;

array, obj, function sono tipi strutturali
*/
/*
2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
*/
var myName = "Zaira";
console.log(myName);
var mySurname = "Straticò";
console.log(mySurname);
var myAge = 32;
console.log(myAge);
var areStudying = true;
console.log(areStudying);
/*
3) Tipizza il parametro della seguente funzione:
const greet = (name) => { return "Ciao " + name }
*/
//in questo caso tipizzo solo il dato in uscita dalla funzione perchè le passo come parametro una costante che ho già definito come stringa,
//quindi non devo tipizzare il parametro in ingresso perché l'ho già dichiarato
var greet = function () {
    return "Ciao, " + myName;
};
console.log(greet());
/*
4) Specifica il tipo di ritorno della seguente funzione: dichiaro il tipo di valore ottenuto da ciascuna variabile
const sum = (a: number, b: number) => { return a + b }
*/
//tipizzazione esplicita
var sum = function (a, b) { return a + b; };
console.log(sum(4, 7));
/*
5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
*/
//tipizzazione esplicita: dichiaro il tipo di valore ottenuto da ciascuna variabile
var totalPrice = function (price) { return price + price * 0.22; };
console.log(totalPrice(56));
/*
6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
*/
var lenghtValue = function () {
    return (myName + mySurname).length;
};
console.log(lenghtValue());
/*
7) Cos'è un Type Union e come si scrive?

Un Type Union consiste nell'assegnare due o più tipi possibili a una variabile, in modo che possa "contenere" tipi diversi a seconda del punto in cui la utilizzo e dal valore che voglio assegnarle in quel contesto;
i tipi possibili vanno scritti uno di seguito all'altro separati da una linea verticale:
*/
var variable;
/*
8) Crea una variabile che possa contenere un numero, null o undefined.
*/
var anotherVariable;
var today;
console.log((today = "lunedì"));
console.log((today = "venerdì"));
/*
10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers = [1, 2, 3]
*/
//primo metodo: creo un array vuoto e specifico che debba contenere numeri, altrimenti è un array di never che non potrò mai riempire
//(avrei potuto anche riempirlo direttamente ma in quel caso non avrebbe avuto senso tipizzarlo perché typescript avrebbe capito da solo che era un array di numeri)
var arrayOfNumbs = [];
arrayOfNumbs.push(1);
arrayOfNumbs.push(2);
arrayOfNumbs.push(3);
console.log(arrayOfNumbs);
//uso la sintassi generica, scrivendo il tipo tra "parentesi di typescript" - (riga 347 repository)
//questa sintassi ha senso nel caso in cui io voglia creare un componente riutilizzabile con più tipi a seconda dei casi specifici
var anotheArrayOfNumbs = [1, 2, 3];
console.log(anotheArrayOfNumbs);
