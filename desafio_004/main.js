const resultado = document.getElementById('resultado')

function verificarPrimo() {
    let input_valor = document.getElementById('input_value').value

    input_valor = parseInt(input_valor)

    let count_divisor = 0

    for (let i = 0; i <= input_valor; i++) {
        if (input_valor % i == 0) {
            count_divisor = count_divisor + 1
        }
    }

    if (count_divisor == 2){
        resultado.textContent = `O valor ${input_valor} é PRIMO`
        return NaN
    } 

    resultado.textContent = `O valor ${input_valor} NÃO é PRIMO`
}