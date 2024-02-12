const pertenceFibonacci = (num) => {

    fibonacci = [0, 1]

    for (let i = 2; i < num; i++) {
        let soma = fibonacci[i - 1] + fibonacci[i - 2]
        fibonacci.push(soma)

        if (fibonacci.includes(num)) {
            break
        }
    }

    fibonacci.includes(num) ? console.log(`O número ${num} pertence à sequencia Fibonacci.`) : console.log(`O número ${num} não pertence à sequencia Fibonacci.`)
}

pertenceFibonacci(28657)

