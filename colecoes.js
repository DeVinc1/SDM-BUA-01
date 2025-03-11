let anosTitulos = [2008, 2014, 2015, 2017, 2018, 2019, 2020];
let rivaisDerrotados = [
  "Felipe Massa",
  "Nico Rosberg",
  "Nico Rosberg",
  "Sebastian Vettel",
  "Sebastian Vettel",
  "Valtteri Bottas",
  "Valtteri Bottas",
];

let index = 2;
console.log(
  `Em ${anosTitulos[index]}, Lewis venceu o campeonato após derrotar ${rivaisDerrotados[index]}. \n`
);

let mapa = new Map();
mapa.set("Lewis Hamilton", 44);
mapa.set("Charles Leclerc", 16);
mapa.set("Lando Norris", 4);
mapa.set("Oscar Piastri", 81);

console.log(mapa);

let hamburgers = [
  "Big Mac",
  "Quarter Pounder",
  "McChicken",
  "Cheeseburger",
  "Filet-O-Fish",
];
let precos = [5.99, 6.99, 4.99, 2.99, 3.99];

/* Adicionar ao final */
hamburgers.push("Double Quarter Pounder");
precos.push(7.99);

/* Adicionar no início */
hamburgers.unshift("McDouble");
precos.unshift(1.99);

console.log("\n");
hamburgers.forEach((hamburger, index) => {
  console.log(`O hambúrguer ${hamburger} custa US$${precos[index]}.`);
});

console.log("\n" + hamburgers);

/* Remover do final */
hamburgers.pop();
precos.pop();

console.log("\n" + hamburgers);

/* Remover do início */
hamburgers.shift();
precos.shift();

console.log("\n" + hamburgers);

/* Remover pela posição */
let posicao = 2;
let quantosDeletados = 1;
hamburgers.splice(posicao, quantosDeletados);

console.log("\n" + hamburgers);
