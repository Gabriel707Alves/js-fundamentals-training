let frutas = [
    {
        quantidade: 23,
        nome: 'Bananas',
        preco: 10
    },
    {
        quantidade: 12,
        nome: 'Maçãs',
        preco: 5
    },
    {
        quantidade: 76,
        nome: 'Laranjas',
        preco: 2
    },
    {
        quantidade: 98,
        nome: 'Uvas',
        preco: 8
    },
    {
        quantidade: 41,
        nome: 'Pêras',
        preco: 3
    }
]

function verEstoque() {
    for (let i = 0; i < frutas.length; i++) {
        console.log(`Em nosso estoque temos: ${frutas[i].quantidade} ${frutas[i].nome}`)
    }
}

function addItem(item){
    frutas.push(item)
    verEstoque()
}
