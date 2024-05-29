var entrada = require ("readline-sync");
<<<<<<< HEAD


var num1 = parseFloat(entrada.question(`Escolha o primerio numero: `)); // Primeiro número
=======
while( decisao != "N"){
var num1 = parseFloat(entrada.question(`Escolha o primeiro numero: `)); // Primeiro número
>>>>>>> 7e7ce104d3d21d84ba219094582a7931d3028f51
var num2 = parseFloat(entrada.question(`Escolha o segundo numero: `));  // Segundo número
var operador = entrada.question(`Qual operação voce deseja fazer? adicao,subtracao,divisao,multiplicacao, raiz ou potencia? `); 

if (isNaN(num1) || isNaN(num2)) {
    console.log("Por favor, insira números válidos.");
} else {
    // Utiliza a instrução switch para realizar a operação apropriada
    var result;
    switch (operador) {
        case "adicao":
            result = num1 + num2;
            break;
        case "subtracao":
            result = num1 - num2;
            break;
        case "multiplicacao":
            result = num1 * num2;
            break;
        case "divisao":
            if (num2 === 0 || num1 === 0) {
                result = "Erro: Divisão por zero.";
            } else {
                result = num1 / num2;
            }
            break;
        case "potencia":
            result = Math.pow(num1,num2)
            break;
        case "raiz":
            result = Math.sqrt(num1,num2)
            break;
        default:
            result = "Operação inválida.";
            break;
    }
console.log("Resultado: " + result);
 
var decisao = ''
while(decisao !== `S` && decisao !== `N`){
    decisao = entrada.question(`Voce quer continuar? digite S ou N: `).toUpperCase();
    
if(decisao == `S`){
    console.log(`Voce decidiu continuar!`);
    
}

else if(decisao == `N`){
    console.log(`Voce parou!`);
    break;
}
else{
    console.log(`Palavra invalida!`);
  
}

}
   
}

}