// Esta é uma função que verifica a maioridade de uma pessoa 

function maioridade(idade){
    if(idade >= 18){
        return `Você é maior de idade e tem ${idade} anos`;
    } else{
        return `Você é menor de idade e tem ${idade} anos`;
    }
}

console.log(maioridade(11)) // saida: Você é menor de idade e tem 11 anos
