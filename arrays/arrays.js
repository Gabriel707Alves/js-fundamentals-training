// Array é um grupo de valores geralmente relacionados que servem para guardarmos diferentes valores em uma variável 

var consoles = ['Xbox', 'Nintendo', 'PS5'] 

// para acessar algum valor de um array sempre começamos do 0 
consoles[0] //saida: Xbox


//existem alguns metodos mais usados de um array, para facilicar a entrada e saída dos dados dentro dele.

consoles.pop() // Remove o último item e retorna ele
consoles.push() // Adiciona ao final da array
consoles.length // conta quantos itens tem no array

// Também tem outros: map, reduce e forEach que veremos mais a frente


// Também temos os loops que fazem algo repetidamente até que uma condição seja atingida.
for (var numero = 0; numero <= 10;  numero++){
    console.log(numero) 
}
// retorna de 0 a 10 no console


//este é o while loop, porém o for é o mais usado
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
// Retorna de 0 a 9 no console


//Também é possivel interagir com o array usando for loops
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}
//Mostra todos os itens do array


//forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
var videoGames = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames.forEach(function(item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente
