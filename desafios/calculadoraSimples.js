const operacoes = {
    soma: (a, b) => a + b,
    sub: (a, b) => a - b,
    div: (a, b) => a / b,
    mult: (a, b) => a *b,
}

function calculadora(a, b, operacao){
    return operacoes[operacao](a, b)
}

console.log(calculadora(5, 5, "mult"))


// sofri um pouco para melhorar a culculadora, mas estou começando a entender
