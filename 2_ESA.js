const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let result

rl.question('Masukan angka pertama', (f) => {
    rl.question('Masukan operator', (operator) => {
        rl.question('Masukan angka kedua', (s) => {

            let first = parseInt(f)
            let second = parseInt(s)

            switch (operator) {
                case '+':
                    result = first + second
                    break
                case '-':
                    result = first - second
                    break
                case '/':
                    result = first / second
                    break
                case '*':
                    result = first * second
                    break
            }

            if (typeof result === 'undefined') {
                console.log('Maaf operator yang anda masukan tidak valid')
            } else {
                console.log('Hasil: ' + result)
            }

            rl.close()
        })
    })
})