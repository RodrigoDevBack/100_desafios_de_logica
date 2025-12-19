const resultado = document.getElementById('resultado')

function evitarFloat(evento) {
    const entrada = evento.target
    const valor = entrada.value

    if (!Number.isInteger(Number(valor))) {
        entrada.value = parseInt(valor)
    }
}

function verificarParImpar() {
    let input_valor = document.getElementById('input_valor').value
    
    if (parseInt(input_valor) % 2 == 0) {
        resultado.textContent = `O valor ${input_valor} é PAR`
        return NaN
    }
    resultado.textContent = `O valor ${input_valor} é ÍMPAR`
    return  NaN
}