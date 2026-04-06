// funções são blocos de códigos reutilizaveis que facilitam a organização do código, é uma das partes mais importantes da lógica de Javascript

//Exemplo:

function saudacao(){
    return 'Olá';
}

// Está é uma função de retorno que quando eu executá-lá, me retornará uma saudação

//para executar uma função, é necessario escrever o nome da função seguida por (). Exemplo: saudacao()
console.log(saudacao()) //Saída: Olá

//Algumas funções podem vir com Parâmetros, que é basicamente a variável que a função espera receber para iniciar o bloco de código. Exemplo:

function verificarValor(valor){
    return typeof valor
}

console.log(verificarValor(3)) // o valor adicionado na hora de executar a função é o argumento da função.