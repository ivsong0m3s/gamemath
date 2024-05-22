var entrada = require ("readline-sync");

var numb = Math.floor(Math.random() *100);

var tentativa = 0;
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

var resposta = entrada.question(`Voce quer jogar novamente? Digite S ou N: `)
    if (resposta.toUpperCase() === 'N') {
        console.log("Você saiu do jogo.");

    } else if (resposta.toUpperCase() !== 'S') {
        console.log("Palavra inválida. Digite S ou N.");



   }

}

    
    
