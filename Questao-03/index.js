const faturamento = require('./faturamentoMensal')

const calculoMensal = () => {
    let soma = 0
    let arrayValores = []

    for (const data of faturamento) {
        let valorDiario = data.valor

        if (valorDiario > 0) {
            arrayValores.push(valorDiario)
        }
    }

    arrayValores.forEach(valor => {soma += valor});

    const menorValor = Math.min(...arrayValores)
    const maiorValor = Math.max(...arrayValores)

    const mediaMensal = ((soma / 30))
    const diasFaturamentoSuperior = arrayValores.filter(valor => valor > mediaMensal)

    return {
        menorValor: menorValor,
        maiorValor: maiorValor,
        diasFaturamentoSuperior: diasFaturamentoSuperior.length
    }
}

console.log(calculoMensal())