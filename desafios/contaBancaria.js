let conta = {
    usuario: 'Gabriel',
    saldo: 1000,

    depositar(valor){
        let depositoCalc = this.saldo += valor
        return `Depósito de R$${valor} efetuado com sucesso, o valor atual da conta é de R$${this.saldo}.`
    },

    verSaldo(){
        return `O saldo atual da conta é de R$${this.saldo}.`
    },

    saque(valor){
        if(valor <= this.saldo){
            let saqueCalc = this.saldo - valor
            return `Saque de R$${valor} efetuado com sucesso, o saldo atual da conta é R$${saqueCalc}`
        } else {
            return 'Saldo Inficiente, escolha outro valor'
        }
    },
}



