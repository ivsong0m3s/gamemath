var entrada = require ("readline-sync");

// Exemplo de valores para teste
var num1 = parseFloat(entrada.question(`Escolha o primerio numero: `)); // Primeiro número
var num2 = parseFloat(entrada.question(`Escolha o segundo numero: `));  // Segundo número
var operador = entrada.question(`Qual operação voce deseja fazer? adicao,subtracao,divisao,multiplicacao, raiz ou potencia? `); // Operador pode ser "add", "subtract", "multiply" ou "divide"

// Verifica se os números são válidos
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
            if (num2 === 0) {
                result = "Erro: Divisão por zero.";
            } else {
                result = num1 / num2;
            }
            break;
        case "potencia":
            result = Math.pow(num1,num2)
        case "raiz":
            result = Math.sqrt(num1,num2)
        default:
            result = "Operação inválida.";
            break;
    }

    // Exibe o resultado
    console.log("Resultado: " + result);
}
