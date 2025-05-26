/* 
1) Quali sono i tipi primitivi principali in TypeScript?

tipi primitivi
string, number, boolean,  null, undefined, any, never, unknown, void;

array, obj, function sono tipi strutturali
*/

/* 
2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
*/

const myName: string = "Zaira";
console.log(myName);
const mySurname: string = "Straticò";
console.log(mySurname);
const myAge: number = 32;
console.log(myAge);
const areStudying: boolean = true;
console.log(areStudying);

/* 
3) Tipizza il parametro della seguente funzione:
const greet = (name) => { return "Ciao " + name }
*/
//in questo caso tipizzo solo il dato in uscita dalla funzione perchè le passo come parametro una costante che ho già definito come stringa,
//quindi non devo tipizzare il parametro in ingresso perché l'ho già dichiarato
const greet: () => string = function () {
  return "Ciao, " + myName;
};

console.log(greet());

/* 
4) Specifica il tipo di ritorno della seguente funzione: dichiaro il tipo di valore ottenuto da ciascuna variabile
const sum = (a: number, b: number) => { return a + b }
*/
//tipizzazione esplicita
const sum = (a: number, b: number): number => a + b;
console.log(sum(4, 7));

/* 
5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
*/
//tipizzazione esplicita: dichiaro il tipo di valore ottenuto da ciascuna variabile
const totalPrice: (price: number) => number = (price) => price + price * 0.22;
console.log(totalPrice(56));

/* 
6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
*/
const lenghtValue: () => number = () => {
  return (myName + mySurname).length;
};

console.log(lenghtValue());

/* 
7) Cos'è un Type Union e come si scrive?

Una Type Union consiste nell'assegnare due o più tipi possibili a una variabile, in modo che possa "contenere" tipi diversi a seconda del punto in cui la utilizzo e dal valore che voglio assegnarle in quel contesto;
i tipi possibili vanno scritti uno di seguito all'altro separati da una linea verticale:
*/

let variable: string | number | boolean;

/* 
8) Crea una variabile che possa contenere un numero, null o undefined.
*/

let anotherVariable: number | null | undefined;

/* 
9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
*/

type WeeksDay = "lunedì" | "martedì" | "mercoledì" | "giovedì" | "venerdì" | "sabato" | "domenica";
let today: WeeksDay;
console.log((today = "lunedì"));
console.log((today = "venerdì"));

/*
10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers = [1, 2, 3]
*/

//primo metodo: creo un array vuoto e specifico che debba contenere numeri, altrimenti è un array di never che non potrò mai riempire
//(avrei potuto anche riempirlo direttamente ma in quel caso non avrebbe avuto senso tipizzarlo perché typescript avrebbe capito da solo che era un array di numeri)
const arrayOfNumbs: number[] = [];
arrayOfNumbs.push(1);
arrayOfNumbs.push(2);
arrayOfNumbs.push(3);

console.log(arrayOfNumbs);

//uso la sintassi generica, scrivendo il tipo tra "parentesi di typescript" - (riga 347 repository)
//questa sintassi ha senso nel caso in cui io voglia creare un componente riutilizzabile con più tipi a seconda dei casi specifici

const anotheArrayOfNumbs: Array<number> = [1, 2, 3];
console.log(anotheArrayOfNumbs);

/*
11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
*/

const myTuple: [string, string, string, number, number] = [myName, mySurname, mySurname.slice(2, 4), myAge + 2, myAge];
console.log(myTuple);

/*
12) Qual è la differenza tra type e interface?
I type accettano parametri multipli ma questi devono essere definiti quando il type viene dichiarato;
le interfaces possono essere variabili a seconda dei parametri passati e di conseguenza sono estendibili e riutilizzabili in momenti successivi nel tempo.
*/

/*
13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
*/
//ricordare di scrivere il nome dell'interface con prima lettera maiuscola
interface Person {
  firstname: string;
  lastname: string;
  age: number;
}

const firstPerson: Person = {
  firstname: "Zaira",
  lastname: "Straticò",
  age: 32,
};

console.log(firstPerson);

/*
14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
*/
interface Contacts {
  mail: string;
  phone?: number;
}

const firstContacts: Contacts = {
  mail: "zairastratico.yahoo.it",
  phone: 981949292,
};

console.log(firstContacts);

/* 
15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
*/

interface Student {
  name: string;
  rate: number;
}

const students: Student[] = [
  { name: "Zaira", rate: 6 },
  { name: "Angelo", rate: 8 },
  { name: "Maria", rate: 7 },
  { name: "Giulio", rate: 5 },
];

console.log(students);

/*
16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
*/

interface Vehicle {
  wheels: number;
  handlebar?: boolean;
  steering?: boolean;
  color: string;
}

const bike: Vehicle = {
  wheels: 2,
  handlebar: true,
  color: "purple",
};

console.log(bike);
interface Auto extends Vehicle {
  displacement: number;
  transmission: string;
  fuel: string;
  eco: boolean;
}

/*
17) Crea un oggetto che implementi l'interfaccia Auto.
*/

const puma: Auto = {
  wheels: 4,

  steering: true,
  color: "white",
  displacement: 1000,
  transmission: "auto",
  fuel: "diesel",
  eco: false,
};

console.log(puma);

/*
18) Cosa sono i Generics in TypeScript?
i Generics (vd riga 97) servono a stabilire dei parametri di tipo per un'interface;
servono a rendere l'interface flessibile e riutilizzabile in più punti semplicemente sostituendo al parametro generico quello specifico per l'occasione d'uso.
*/

/*
19) È possibile avere più tipi generici in un'interfaccia?
Sì, è possibile
*/

/*
20) Crea un'interfaccia generica per una risposta API. 

 useEffect(() => {
    const fetchTodayWeather = async () => {
      try {
        const cityResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${token}`);
        if (!cityResponse.ok) {
          setError(true);
          setErrorMessage("City not found - please try with another city");
          return;
        }
        const cityData = await cityResponse.json();
        const { lat, lon } = cityData.coord;

        const weatherToday = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${token}&units=metric`);
        if (!weatherToday.ok) {
          setError(true);
          setErrorMessage("Errore loading data");
          return;
        }
        const weatherData = await weatherToday.json();
        setWeather(weatherData);
        setError(false);
        setErrorMessage("");
      } catch {
        setError(true);
        setErrorMessage("Error loading data");
      } finally {
        setLoading(false);
      }
    };
    
    fetchTodayWeather();
  }, [cityName]);
*/

//uso un generics così l'interface è riutilizzabile sostituendo al parametro il risultato ottenuto dall'APi
interface Api<T> {
  success: boolean;
  data: T;
  error: boolean;
  errorMessage?: string;
}
