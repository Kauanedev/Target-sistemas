const faturamento = require('./faturamentoMensal')
const faturamentoEstados = require('./faturamentoPorEstados.json')


const calculoFaturamento = () => {
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

    const percentual = () => {

        for (const data of faturamentoEstados) {
            let valorEstado = data.valor
            percentualEstado = ((valorEstado / soma) * 100).toFixed(2)

            console.log(`${data.estado}: ${percentualEstado}`)
        }
    }

    percentual()

    return {
        menorValor: menorValor,
        maiorValor: maiorValor,
        diasFaturamentoSuperior: diasFaturamentoSuperior.length
    }

}

console.log(calculoFaturamento())