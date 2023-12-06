/** @format */
"use strict";
// UZDUOTIS NR 1
// let pasisveikinimas = hello();
// console.log(pasisveikinimas);

// function greeting(pasisveikinimas, vardas){
//   console.log(pasisveikinimas, vardas,"!")
// }

// function hello() {
//   return `Labas as Krabas`;
// }
// console.log(hello());

// function greetings(vardas) {
//   let pasisveikinimas = hello();
//   console.log(`${vardas}! ${pasisveikinimas}`);
// }
// greetings("Tomasino");
// greetings("Loki");

// // UZDUOTIS NR 2
// function skaic(skaicius1, skaicius2, skaicius3) {
//   return skaicius1 > skaicius2
//     ? `${skaicius1} yra > uz ${skaicius2}`
//     : skaicius1 === skaicius2
//     ? ((skaicius3 = parseFloat(skaicius1) + parseFloat(skaicius2)),
//       `${skaicius1} yra lygus ${skaicius2} ju suma yra ${skaicius3}`)
//     : `${skaicius1} yra < uz ${skaicius2}`;
// }
// let skaicius1 = 5;
// let skaicius2 = 5;
// alert(skaic(parseFloat(skaicius1), parseFloat(skaicius2)));

// // UZDUOTIS NR 3
// function fizzAndBuzz(pranesimas) {
//   while (true) {
//     if (pranesimas.toLowerCase() === "fizz") {
//       return "buzz";
//     } else if (pranesimas.toLowerCase() === "buzz") {
//       return "fizz";
//     } else {
//       pranesimas = prompt(`Ismok rasyt , rinkis! (fizz ar buzz):...`);
//     }
//   }
// }
// let fizBuz = prompt(`Iveskite 'fizz' arba 'buzz':...`);
// alert(fizzAndBuzz(fizBuz));

// // UZDUOTIS NR 4
// let krastine1 = 3;
// let krastine2 = 8;
// let skaicius3 =
//   skaicius1 === skaicius2
//     ? skaicius1 + skaicius2
//     : "kurios reiksme is antros uzduoties...";

// function trikampis(a, b, c) {
//   if (
//     a + b > c &&
//     a + c > b &&
//     b + c > a &&
//     (a === skaicius3 || b === skaicius3 || c === skaicius3)
//   ) {
//     return `trikampis iseis nes viena krastine yra ${skaicius3}`;
//   } else {
//     return `trikampis neiseis nes nera krastines ${skaicius3}`;
//   }
// }

// let ats = trikampis(krastine1, krastine2, skaicius3);
// alert(ats);

// // UZDUOTIS 5
// function plotasPagalFigura(pavadinimas) {
//   if (pavadinimas === "kvadratas") {
//     return function (a) {
//       return a * a;
//     };
//   } else if (pavadinimas === "staciakampis") {
//     return function (ilgis, plotis) {
//       return ilgis * plotis;
//     };
//   } else {
//     return function () {
//       alert("Tokios figuros nepazystu!");
//     };
//   }
// }
// let figura = prompt(
//   "pazystu tik dvi figuras kvadrata ir staciakampi kurios ploto nori?:"
// ).toLowerCase();
// let skaiciuokPlota = plotasPagalFigura(figura);
// if (figura === "kvadratas") {
//   let krastine = parseFloat(prompt("kokio ilgio kvadrato krastine??:"));
//   alert(`Kvadrato plotas yra: ${skaiciuokPlota(krastine)}`);
// } else if (figura === "staciakampis") {
//   let ilgis = parseFloat(prompt("Kokio ilgio yra staciakampis???:"));
//   let plotis = parseFloat(prompt("Kokio plocio yra staciakampis??:"));
//   alert(`staciakampio plotas yra: ${skaiciuokPlota(ilgis, plotis)}`);
// } else {
//   skaiciuokPlota();
// }
// // UZDUOTIS 6
// function isSeven(x) {
//   return x === "7" ? true : false;
// }
// let x = "7";
// console.log(isSeven(x));
// //  UZDUOTIS 7

// function isEqual(param1, param2) {
//   return param1 === param2;
// }

// console.log(isEqual(1, true));
// console.log(isEqual(1, 1));
// //  UZDUOTIS 8

// function oblivion(prob, prize, pay) {
//   return prob * prize > pay;
// }
// let result = oblivion(0.5, 50, 40);
// console.log(result);

// //  UZDUOTIS 9
// function minsToSec(minutes) {
//   let seconds = minutes * 60;
//   return seconds;
// }
// let X = 5;
// let Y = minsToSec(X);
// console.log(`${X} min = ${Y} s`);

// //  UZDUOTIS 10
// function skaiciuotuvas() {
//   let sk1 = parseFloat(prompt("Įveskite pirmą skaičių:"));
//   let veiksmas = prompt("Įveskite veiksmą (+, -, *, /):");
//   let sk2 = parseFloat(prompt("Įveskite antrą skaičių:"));
//   let rezultatas;
//   switch (veiksmas) {
//     case "+":
//       rezultatas = sk1 + sk2;
//       break;
//     case "-":
//       rezultatas = sk1 - sk2;
//       break;
//     case "*":
//       rezultatas = sk1 * sk2;
//       break;
//     case "/":
//       rezultatas = sk1 / sk2;
//       break;
//     default:
//       alert("Netinkamas veiksmas.");
//       return;
//   }
//   alert(`Rezultatas: ${rezultatas}`);
//   return rezultatas;
// }
// skaiciuotuvas();
// 1 uzduotis
// for (let index = 1; index < 11; index++) {
//   console.log(index);
// }
// // 2 uzduotis
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }
// // 3 uzduotis
// for (let o = 1; o < 11; o += 2) {
//   console.log(o);
// }
// // 4 uzduotis
// for (let d = 1; d < 11; d++) {
//   console.log(d * 2);
// }
// // 5 uzduotis
// for (let n = 0; n < 5; n++) {
//   if (n === 3) {
//     break;
//   }
//   console.log(n);
// }
// // 6 uzduotis
// for (sk = 0; sk < 11; sk++) {
//   if (sk === 7) {
//     continue;
//   }
//   console.log(sk);
// }

// let person = {
//   name: "sam",
//   age: 33,
//   job: "officer",
// };

// for(let key in person){
//   console.log(key)
// }

// let persons= {
//   name: "tadiausa",
//   age: 46,
//   job:"officer",
//   hobbies:{
//     1: "gaming",
//     2: "coding",
//     3: "sex",
//   },
// };

// for (let key in persons.hobbies){
//   let hobby = persons.hobbies[key];
//   console.log(`My hobby is: ${hobby}`);
// }

// for(let key in persons){
//   if(key === "hobbies"){
//     for(let hobby in persons[key]){
//       console.log(`My hobby is: ${persons[key][hobby]}`);
//     }
//   }
// }

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

// const leFamily = {
//   me: 33,
//   father: 55,
//   mother: 53,
//   sister: 32,
//   brother1: 28,
//   brother2: 25,
//   aunt: 61,
//   uncle: 60,
//   cousin1: 37,
//   cousin2: 37,
//   grandfather1: 79,
//   grandmother1: 77,
//   grandfather2: 81,
//   grandmother2: 80,
//   cat: 3,
//   dog: 7,
//   parrot: 2,
// };

// let count = 0;

// for (let key in leFamily) {
//   if (leFamily[key] >= 66) {
//     count++;
//   }
// }
// console.log(`nariu viresniu nei 66 yra: ${count}`);

// const leFamily = {
//   me: 33,
//   father: 55,
//   mother: 53,
//   sister: 32,
//   brother1: 28,
//   brother2: 25,
//   aunt: 61,
//   uncle: 60,
//   cousin1: 37,
//   cousin2: 37,
//   grandfather1: 79,
//   grandmother1: 77,
//   grandfather2: 81,
//   grandmother2: 80,
//   cat: 3,
//   dog: 7,
//   parrot: 2,
// };

// for (let key in leFamily) {
//   if (leFamily[key] % 2 === 0) {
//     console.log(`${key} yra lyginis.`);
//   } else {
//     console.log(`${key} yra nelyginis.`);
//   }
// }
// if else pakeistas i ternary operatoriu!!
// for (let key in leFamily) {
//   const message = leFamily[key] % 2 === 0 ? `${key} has an even value.` : `${key} has an odd value.`;
//   console.log(message);
// }

// const tekstas = "Tautvydas kreivys ";
// const str = "Petras petraitis";
// const together = tekstas.concat(str);
// console.log(together);

// let text1 = "       Laba diena           ";
// let text2 = "Kaip Sekasi ";
// let text3 = "Ka dabar daryti";

// let concatenatedText = text1.concat(text2, text3).charAt(5);
// console.log(concatenatedText);

// let concatenatedText = text1.endsWith("");
// console.log(concatenatedText);

// let concatenatedText = text1.indexOf("Laba");
// console.log(concatenatedText);

// let concatenatedText = text1.length;
// console.log(concatenatedText);

// let concatenatedText = text1.match("diena");
// console.log(concatenatedText);

// let concatenatedText = text1.repeat("3");
// console.log(concatenatedText);

// let concatenatedText = text1.replace("diena", "ryteli");
// console.log(concatenatedText);

// let concatenatedText = text1.search("na");
// console.log(concatenatedText);

// let concatenatedText = text1.slice(3, 6);
// console.log(concatenatedText);

// let concatenatedText = text1.split(" ");
// console.log(concatenatedText);

// let concatenatedText = text1.substring(5, 9);
// console.log(concatenatedText);
// let concatedText = text1.substring(5, 9);
// let toUpper = text1.charAt(5).toUpperCase();
// let subs = text1.substring(6, 10);
// let concated = toUpper.concat(subs);
// let text = text1.replace("diena", concated);
// let changed = text1.replace("d", "D");
// console.log(concatedText);
// console.log(toUpper);
// console.log(subs);
// console.log(concated);
// console.log(text);
// console.log(changed);

// let concatenatedText = text1.trim();
// console.log(concatenatedText);

// let x = 5;
// console.log(++x);
// let xc = 5;
// console.log(xc++);
// let xv = 5;
// console.log(--xv);
// let xb = 5;
// console.log(xb--);

// let str = "Tautvydas Kreivys";
// str = "Kristupas Kolumbas";
// console.log(str);

// let nr = 5;
// console.log(nr);
// console.log(++nr);
// console.log(++nr);

// let mNr = 5;
// console.log(mNr);
// console.log(--mNr);
// console.log(--mNr);
// console.log(--mNr);

// let sNr = "12";
// console.log(typeof sNr);
// console.log(typeof Number(sNr));
// console.log(typeof parseInt(sNr, 10));
// console.log(typeof parseFloat(sNr));

// let dNr = 12;
// let sk = 10 * dNr;
// console.log(sk);

// let tomasWeight = 90;
// let tomasHeight = 1.77;
// let tomasKmi = tomasWeight / tomasHeight ** 2;
// console.log(tomasKmi);

// let tadasWeight = 40;
// let tadasHeight = 2.25;
// let tadasKmi = tadasWeight / tadasHeight ** 2;
// console.log(tadasKmi);

// let a = 8;
// let b = 6;
// let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log(c);

// let cel = 20;
// let far = (9 / 5) * cel + 32;
// console.log(far);

// const skaiciai = [2, 34, 54, 67, 77, 1, 99];
// let suma = 0;
// for (let i of skaiciai) {
//   console.log(i);
//   suma += i;
// }
// console.log(suma);

// const zodynas = [`Geros`, `dienytes`, `skanios`, ` kavytes`];
// for (let i of zodynas) {
//   let kiek = 0;
//   for (let a of i) {
//     kiek++;
//   }
//   console.log(`${i} = ${kiek}, ${i.length}`);
// }

// let i = 1,
//   n = 10;
// while (i <= n) {
//   console.log(i);
//   i += 1;
// }

// let skaiciuss = 11;
// while (skaiciuss > 0) {
//   skaiciuss--;
//   console.log(skaiciuss);
// }

// let skaicius = 0;
// while (skaicius < 11) {
//   if (skaicius % 2 !== 0) {
//     console.log(skaicius);
//   }
//   skaicius += 1;
// }

// let age = 17;

// do {
//   console.log(age);
//   age += 1;
// } while (age < 20);

// let suma = 0;
// do {
//   const sk = prompt(`Iveskite skaiciu priimsiu betkoki isskyrus neigiama:... `);
//   if (sk > 0) {
//     suma = +parseInt(sk);
//   }
// } while (sk > 0);
// console.log(`Suma: ${suma}`);

// let suma = 0;

// let suma = 0;
// let count = 0;
// let sk;

// do {
//   sk = prompt(`Iveskite skaiciu priimsiu betkoki isskyrus neigiama: `);

//   if (sk > 0) {
//     suma += parseInt(sk);
//     count++;
//   }

// } while (sk > 0);

// if (count > 0) {
//   const average = suma / count;
//   console.log(`Suma: ${suma}`);
//   console.log(`Vidurkis: ${average}`);
// } else {
//   console.log('Nera ivestu teigiamu skaiciu.');
// }

// function zaidimas() {
//   let kartot, n, sk, spejimai, spejimas;

//   do {
//     n = parseInt(prompt("Iveskite maksimalu skaiciu n: "));

//     if (n <= 0 || isNaN(n)) {
//       console.log("Ivestas netinkamas skaicius, iveskite nauja: ");
//       continue;
//     }

//     sk = Math.floor(Math.random() * n) + 1;
//     spejimai = 0;

//     do {
//       spejimas = parseInt(prompt(`Atspekite mano skaiciu nuo 1 iki ${n}: `));
//       spejimai += 1;

//       if (spejimas < 1 || spejimas > n || isNaN(spejimas)) {
//         console.log(`Spejimas turi buti nuo 1 iki ${n}.`);
//       } else if (spejimas < sk) {
//         console.log(`Mano skaicius didesnis uz ${spejimas}.`);
//       } else if (spejimas > sk) {
//         console.log(`Mano skaicius mazesnis uz ${spejimas}.`);
//       } else {
//         console.log(
//           `Sveikiname! Atspejote skaiciu ${sk} per ${spejimai} spejimus.`
//         );
//         break;
//       }
//     } while (true);

//     kartot = prompt("Ar norite zaisti dar karta? (t/n): ");
//   } while (kartot === "t" || kartot === "T");

//   console.log("Aciu, kad zaidet!");
// }

// zaidimas();

// let sk = 1;
// do {
//   console.log(sk);
//   sk += 1;
// } while (sk < 10);

// let sk1 = 1;
// do {
//   console.log(sk1 ** 2);
//   sk1 += 1;
// } while (sk1 < 10);

// let sk2 = 10;

// do {
//   if (sk2 % 2 === 0) {
//     console.log(sk2);
//   }
//   sk2 += 1;
// } while (sk2 < 100);

// let i = 10;
// for (i % 2 === 0; ++i < 100; ) {
//   console.log(i);
//   i += 1;
// }

// for (let i = 10; i < 100; i += 2) {
//   console.log(i);
// }

// let sk3 = prompt(`Iveskite savo skaiciu atspausdinsiu visus iki jo:... `);
// let skk3 = 1;

// do {
//   console.log(skk3);
//   skk3 += 1;
// } while (skk3 < sk3);

// let sk1 = parseInt(
//   prompt("Iveskite skaiciu kiek kartu norite atspausdinti varda.")
// );
// let user = prompt("Parasykite savo varda:... ");
// let sk2 = 1;

// do {
//   console.log(user);
//   sk2 += 1;
// } while (sk2 <= sk1);

// let sk = prompt("Iveskite kurio skaiciaus daugybos lenteles noryte.");

// for (let i = 1; i <= 10; i++) {
//   console.log(`${sk} * ${i} = ${sk * i}`);
// }

// for (let x = -10; x < 10; x++) {
//   console.log(`y = ${7 * 2 + 5 * x - 3}`);
// }

// const kiek = 5;
// let totalAukstumai = 0;

// for (let i = 0; i < kiek; i++) {
//   const aukst = parseInt(prompt(`Iveskite eglutes auksti #${i + 1}:`));
//   totalAukstumai += aukst;
//   console.log(`Eglutes aukstis #${i + 1}: ${aukst}`);
// }

// const averageAukstumai = totalAukstumai / kiek;
// console.log(`Vidutinis egluciu aukstis: ${averageAukstumai}`);

// Pirma uzduotis

// const skaiciai = [1, 5, 98, 45, 65, 15];
// const naujiSkaiciai = skaiciai.filter((el, index) => {
//   return el > 0;
// });

// for (let i = 0; i < naujiSkaiciai.length; i++) {
//   console.log(naujiSkaiciai[i]);
// }

// antra uzduotis vienas budas.

// const sk1 = [1, 5, 98, 45, 65, 15];
// let sum = 0;
// for (let i = 0; i < skaiciai.length; i++) {
//   sum += skaiciai[i];
// }
// console.log("suma loop", sum);

// antra uzduotis antras budas.

// const skaiciai1 = [1, 5, 98, 45, 65, 15];
// const sumReduce = skaiciai1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

// console.log("suma naudojant reduce:", sumReduce);

// antra uzduotis trecias budas.

// const skaiciai2 = [1, 5, 98, 45, 65, 15];
// let sumForEach = 0;

// skaiciai2.forEach((number) => {
//   sumForEach += number;
// });

// console.log("suma naudojant forEach:", sumForEach);

// trecia uzduotis

// const sakinys =
//   "Saule spindi, zole zaliuoja, pauksciai dainuoja, o sunys cia loja.";
// const zodziuMasyvas = sakinys.split(" ");
// const lyginiuIndeksuMasyvas = [];
// const nelyginiuIndeksuMasyvas = [];

// zodziuMasyvas.forEach((zodis, indeks) => {
//   if (indeks % 2 === 0) {
//     lyginiuIndeksuMasyvas.push(zodis);
//   } else {
//     nelyginiuIndeksuMasyvas.push(zodis);
//   }
// });
// const sakinysLyginiai = lyginiuIndeksuMasyvas.join(" ");
// const sakinysNelyginiai = nelyginiuIndeksuMasyvas.join(" ");

// console.log("Sakinys su lyginiais indeksais:", sakinysLyginiai);
// console.log("Sakinys su nelyginiais indeksais:", sakinysNelyginiai);

// ketvirta uzduotis

// let myArray = [11, 30, 5, 7, 11, 10];
// let minNum = Math.min(...myArray);
// console.log(minNum);
// let minNumIndex = myArray.indexOf(minNum);
// console.log(minNumIndex);
// myArray.splice(minNumIndex, 3);
// console.log(myArray);

// pirma uzduotis

// const automobiliai = [`bmw`, `audi`, `mb`, `ford`];
// automobiliai.push(`bentley`);
// console.log(automobiliai);
// console.log(automobiliai.indexOf(`bentley`));

// antra uzduotis

// const prekes = [
//   "morka",
//   "agurkas",
//   "bananas",
//   "cukinija",
//   "baklazanas",
//   "morka",
//   "bananas",
// ];

// const unikaliosPrekes = [];
// for (const preke of prekes) {
//   if (unikaliosPrekes.indexOf(preke) === -1) {
//     unikaliosPrekes.push(preke);
//   }
// }
// console.log(unikaliosPrekes);

// // trecia uzduotis

// const vaisiai = ["bananas", "obuolys", "slyva", "kriausia", "kyvis"];

// const unikalusvaisiai = [];
// for (let vaisius of vaisiai) {
//   if (!unikalusvaisiai.includes(vaisius)) {
//     unikalusvaisiai.push(vaisius);
//   }
// }
// console.log(unikalusvaisiai);

// // ketvirta uzduotis

// const skaiciai = [4, 6, 13, 69, 77];
// const sk = skaiciai.map((el) => (el % 2 === 0 ? `Panama` : el));
// const didziosios = sk.map((el) =>
//   typeof el === `string` ? el.toUpperCase() : el
// );
// console.log(didziosios);

// let rands = [];
// const atsitiktiniai = (count, min, max) => {
//   while (rands.length < count) {
//     const r = Math.floor(Math.random() * (max - min + 1)) + min;
//     rands.push(r);
//   }
//   console.log(rands);
//   return rands;
// };
// atsitiktiniai(30, 5, 25);

// for (let a = 0; a < 9; a++) {
//   const naujas = Math.floor(Math.random() * (25 - 5) + 5);
//   rands.push(naujas);
// }
// console.log(rands);

// const sk = rands.filter((el, index) => el > 10);
// console.log(sk);
// console.log(sk.length);

// const maxValue = Math.max(...rands);
// const index = [];
// for (let i = 0; i < rands.length; i++) {
//   if (rands[i] === maxValue) {
//     index.push(i);
//   }
// }
// console.log(`didziausias skaicius yra ${maxValue} jo indeksas yra ${index}`);

// const maxValue = Math.max(...rands);
// const indexx = [];
// console.log(rands);
// const index = rands.forEach((el, index) =>
//   el === maxValue ? indexx.push(index) : null
// );
// console.log(indexx);

// const indexx = [];
// console.log(rands);
// const index = rands.reduce(
//   (accumulator, currentValue, currentIndex) =>
//     currentIndex % 2 === 0 ? accumulator + currentValue : accumulator,
//   0
// );
// console.log(index);

// const randsInd = [];
// console.log(rands);
// const index = rands.forEach((el, index) => randsInd.push(el - index));
// console.log(randsInd);

// console.log(rands);
// const randsInd = rands.map((el, index) => el - index);
// console.log(randsInd);

// for (let i = 1; i <= 10; i++) {
//   rands.push(Math.floor(randInt(5, 26)));
// }
// console.log(rands);

// // f

// let evens = rands.filter((num, index) => index % 2 == 0);
// let odds = rands.filter((num, index) => index % 2 != 0);
// console.log(evens);
// console.log(odds);

// // g

// let didesniUz15 = rands.map((num, index) =>
//   index52 == 0 && num > 15 ? "nulis" : num
// );
// console.log(didesniUz15);

// // h

// const didesnisUz10 = (num) => num > 10;

// console.log(rands.findIndex(didesnisUz10));

// let duomenys = {
//   id: "0001",
//   type: "donut",
//   name: "Cake",
//   ppu: 0.55,
//   topping: [
//     { id: "5001", type: "None" },
//     { id: "5002", type: "Glazed" },
//     { id: "5005", type: "Sugar" },
//     { id: "5007", type: "Powdered Sugar" },
//     { id: "5006", type: "Chocolate with Sprinkles" },
//     { id: "5003", type: "Chocolate" },
//     { id: "5004", type: "Maple" },
//   ],
// };
// const masyvas = duomenys.topping;
// console.log(masyvas);
// masyvas.forEach((el) => console.log(`id : ${el.id}, type : ${el.typer}`));
// const masyvas2 = duomenys.topping.forEach((el) => {
//   Object.entries(duomenys).forEach(([key, value]) => console.log(key, value));
// });

// const family = {
//   grandparents: {
//     grandma: "Marge",
//     grandpa: "Homer",
//   },
//   parents: {
//     mom: "Lisa",
//     dad: "Millhouse",
//   },
//   children: {
//     dauhter: "Anne",
//     son1: "Peter",
//     son2: "Bob",
//   },
// };

// for (let i in family) {
//   let line = i + ": ";
//   let values = Object.values(family[i]);
//   line += values.join(", ");
//   console.log(line);
// }

// const family = {
//   grandparents: {
//     grandma: "Marge",
//     grandpa: "Homer",
//   },
//   parents: {
//     mom: "Lisa",
//     dad: "Millhouse",
//   },
//   children: {
//     dauhter: "Anne",
//     son1: "Peter",
//     son2: "Bob",
//   },
// };

// for (let category in family) {
//   let line = category + ": ";
//   let members = family[category];
//   let values = [];

//   for (let member in members) {
//     values.push(members[member]);
//   }

//   line += values.join(", ");
//   console.log(line);
// }

// let knygos = [
//   {
//     isbn: 9786098233346,
//     price: 7.99,
//     year: 2006,
//     title: "Bloga dukte",
//     pagecount: 250,
//   },
//   {
//     isbn: 9786098233391,
//     price: 7.99,
//     year: 2015,
//     title: "Mergina kuria jis pazinojo",
//     pagecount: 315,
//   },
//   {
//     isbn: 9786099609324,
//     price: 7.99,
//     year: 2019,
//     title: "Tapk ragana",
//     pagecount: 150,
//   },
//   {
//     isbn: 9786094792250,
//     price: 6.99,
//     year: 2007,
//     title: "Sfera",
//     pagecount: 450,
//   },
//   {
//     isbn: 9786094792335,
//     price: 9.99,
//     year: 2019,
//     title: "Mes susitinkame cia",
//     pagecount: 500,
//   },
//   {
//     isbn: 9786094273780,
//     price: 7.99,
//     year: 2019,
//     title: "Sunaikinimas",
//     pagecount: 509,
//   },
//   {
//     isbn: 9786098233483,
//     price: 12.99,
//     year: 2018,
//     title: "Artemide",
//     pagecount: 199,
//   },
//   {
//     isbn: 9786094273872,
//     price: 4.99,
//     year: 2015,
//     title: "Fondas ir imperija",
//     pagecount: 185,
//   },
//   {
//     isbn: 9786094273902,
//     price: 7.99,
//     year: 2019,
//     title: "Amzinybes fjordo pranasai",
//     pagecount: 333,
//   },
//   {
//     isbn: 9786094442742,
//     price: 5.99,
//     year: 2004,
//     title: "Bejegiai",
//     pagecount: 777,
//   },
//   {
//     isbn: 9786094442940,
//     price: 14.99,
//     year: 2019,
//     title: "Klajunai",
//     pagecount: 172,
//   },
//   {
//     isbn: 9786090404386,
//     price: 7.99,
//     year: 2015,
//     title: "Mergina, kuri pakliuvo i voratinkli",
//     pagecount: 356,
//   },
// ];
// let masyvas = [];
// for (let i in knygos) {
//   if (knygos[i].year > 2015) {
//     masyvas.push(knygos[i].title);
//   }
//   for (let a in knygos[i]) {
//     console.log(`${a} --> ${knygos[i][a]}`);
//   }
// }
// console.log(masyvas);

let moketa = [25, 60, 240];
let arbata2 = [];
let total2 = [];
function arbatpinigiai(moketa) {
  moketa.forEach((element) => {
    let arbata = 0;
    let total = 0;
    if (element < 50) {
      arbata = element * 0.2;
      total = arbata + element;
      //   arbata2.push(arbata);
      //   total2.push(total);
    } else if (50 <= element && element < 200) {
      arbata = element * 0.15;
      total = arbata + element;
      //   arbata2.push(arbata);
      //   total2.push(total);
    } else {
      arbata = element * 0.1;
      total = arbata + element;
      //   arbata2.push(arbata);
      //   total2.push(total);
    }
    arbata2.push(arbata);
    total2.push(total);
  });
}
arbatpinigiai(moketa);
console.log(arbata2);
console.log(total2);
