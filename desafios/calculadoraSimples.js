function calculadora(valor1, operacao, valor2){
    if (operacao === '+'){
        return valor1 + valor2
    } else if(operacao === '-'){
        return valor1 - valor2
    } else if(operacao === '/'){
        return valor1 / valor2
    }else if(operacao === '*'){
        return valor1 * valor2
    } else{
        return 'insira um valor válido'
    }
}

console.log(calculadora(999879, '*', 835268))