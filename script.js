/** @format */
// UZDUOTIS NR 1
function hello() {
  return `Labas as Krabas`;
}
console.log(hello());

function greetings(vardas) {
  let pasisveikinimas = hello();
  console.log(`${vardas}! ${pasisveikinimas}`);
}
greetings("Tomasino");
greetings("Loki");

// UZDUOTIS NR 2
function skaic(skaicius1, skaicius2, skaicius3) {
  return skaicius1 > skaicius2
    ? `${skaicius1} yra > uz ${skaicius2}`
    : skaicius1 === skaicius2
    ? ((skaicius3 = parseFloat(skaicius1) + parseFloat(skaicius2)),
      `${skaicius1} yra lygus ${skaicius2} ju suma yra ${skaicius3}`)
    : `${skaicius1} yra < uz ${skaicius2}`;
}
let skaicius1 = 5;
let skaicius2 = 5;
alert(skaic(parseFloat(skaicius1), parseFloat(skaicius2)));

// UZDUOTIS NR 3

function fizzAndBuzz(pranesimas) {
  while (true) {
    if (pranesimas.toLowerCase() === "fizz") {
      return "buzz";
    } else if (pranesimas.toLowerCase() === "buzz") {
      return "fizz";
    } else {
      pranesimas = prompt(`Ismok rasyt , rinkis! (fizz ar buzz):...`);
    }
  }
}
let fizBuz = prompt(`Iveskite 'fizz' arba 'buzz':...`);
alert(fizzAndBuzz(fizBuz));

// UZDUOTIS NR 4

let krastine1 = 3;
let krastine2 = 8;
let skaicius3 =
  skaicius1 === skaicius2
    ? skaicius1 + skaicius2
    : "kurios reiksme is antros uzduoties...";

function trikampis(a, b, c) {
  if (
    a + b > c &&
    a + c > b &&
    b + c > a &&
    (a === skaicius3 || b === skaicius3 || c === skaicius3)
  ) {
    return `trikampis iseis nes viena krastine yra ${skaicius3}`;
  } else {
    return `trikampis neiseis nes nera krastines ${skaicius3}`;
  }
}

let ats = trikampis(krastine1, krastine2, skaicius3);
alert(ats);

// UZDUOTIS 5
function plotasPagalFigura(pavadinimas) {
  if (pavadinimas === "kvadratas") {
    return function (a) {
      return a * a;
    };
  } else if (pavadinimas === "staciakampis") {
    return function (ilgis, plotis) {
      return ilgis * plotis;
    };
  } else {
    return function () {
      alert("Tokios figuros nepazystu!");
    };
  }
}
let figura = prompt(
  "pazystu tik dvi figuras kvadrata ir staciakampi kurios ploto nori?:"
).toLowerCase();
let skaiciuokPlota = plotasPagalFigura(figura);
if (figura === "kvadratas") {
  let krastine = parseFloat(prompt("kokio ilgio kvadrato krastine??:"));
  alert(`Kvadrato plotas yra: ${skaiciuokPlota(krastine)}`);
} else if (figura === "staciakampis") {
  let ilgis = parseFloat(prompt("Kokio ilgio yra staciakampis???:"));
  let plotis = parseFloat(prompt("Kokio plocio yra staciakampis??:"));
  alert(`staciakampio plotas yra: ${skaiciuokPlota(ilgis, plotis)}`);
} else {
  skaiciuokPlota();
}
// UZDUOTIS 6
function isSeven(x) {
  return x === "7" ? true : false;
}
let x = "7";
console.log(isSeven(x));
//  UZDUOTIS 7

function isEqual(param1, param2) {
  return param1 === param2;
}

console.log(isEqual(1, true));
console.log(isEqual(1, 1));
//  UZDUOTIS 8

function oblivion(prob, prize, pay) {
  return prob * prize > pay;
}
let result = oblivion(0.5, 50, 40);
console.log(result);

//  UZDUOTIS 9
function minsToSec(minutes) {
  let seconds = minutes * 60;
  return seconds;
}
let X = 5;
let Y = minsToSec(X);
console.log(`${X} min = ${Y} s`);

//  UZDUOTIS 10
function skaiciuotuvas() {
  let sk1 = parseFloat(prompt("Įveskite pirmą skaičių:"));
  let veiksmas = prompt("Įveskite veiksmą (+, -, *, /):");
  let sk2 = parseFloat(prompt("Įveskite antrą skaičių:"));
  let rezultatas;
  switch (veiksmas) {
    case "+":
      rezultatas = sk1 + sk2;
      break;
    case "-":
      rezultatas = sk1 - sk2;
      break;
    case "*":
      rezultatas = sk1 * sk2;
      break;
    case "/":
      rezultatas = sk1 / sk2;
      break;
    default:
      alert("Netinkamas veiksmas.");
      return;
  }
  alert(`Rezultatas: ${rezultatas}`);
  return rezultatas;
}
skaiciuotuvas();
