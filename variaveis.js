var titulos = 7; //obsoleto
let equipe = "Scuderia Ferrari"; // pode ser alterada
const piloto = "Lewis Hamilton"; // não pode ser alterada
let temporadaEmAndamento = true;

/* Conversões String -> Número */
let vitorias = Number("104");
let pontos = parseFloat("4862.5");

/* Conversões Número -> String */
let corridas = String(356);
let polePositions = toString(104);

let pilotoRival; // variaveis podem ser inicializadas vazias e definidas posteriormente

if (temporadaEmAndamento) {
    pilotoRival = "Max Verstappen";
    console.log(`
        O rival de ${piloto} nesta temporada é ${pilotoRival}
        `);
} else {
    console.log(`
        A temporada ainda não começou, logo, ${piloto} não tem rival.
        `);
}

if(temporadaEmAndamento){
    let cidade = "Vargem City";
    console.log(`
        Você está vendo F1 direto de ${cidade}, torcendo para a ${equipe} por conta do ${piloto}.
        `);
    
    /* 
    piloto = "Max Vestappen" // isso vai dar erro porque a variável piloto é constante (e você não pode mudar o piloto que você torce assim, né?)
    */    
}

/* 
console.log(cidade); // isso vai dar erro porque tá fora do escopo da variável cidade
*/

console.log(`
        ${piloto} tem ${vitorias} vitórias e ${pontos} pontos na F1.
        `);
