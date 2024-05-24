var entrada = require ("readline-sync");

var numb = Math.floor(Math.random() *100);
var tentativa=0;
var contador=1;

var novamente = true;
while (novamente) {
  
console.log(numb);
var tentativa = entrada.question(`Advinhe qual e o numero? `);

while(tentativa<=100){
   
    if (tentativa<numb){
        console.log(`Você errou! Seu numero é menor`);
        break
    }

    if(tentativa>numb){
        console.log(`Voce errou! Seu numero é maior`);
        break
    }
    if(tentativa = numb){
        console.log(`Voce Acertou!!!, Voce tentou, ${contador} vezes`);
        break
    }
    contador++;
}
var resposta = entrada.question(`Você quer jogar novamente? Digite S ou N: `);
if (resposta.toUpperCase() === 'N') {
    console.log("Você saiu do jogo.");
    novamente = false;
} else if (resposta.toUpperCase() !== 'S') {
    console.log("Palavra inválida. Digite S ou N.");
    break
}
}