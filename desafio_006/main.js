const resultado = document.getElementById('resultado')

function evitarSimbolos(evento) {
    const simbolos = ['-', '+', 'e']
    if (simbolos.includes(evento.key)) {
        evento.preventDefault()
    }
}

function evitarFloatENegativo (evento) {
    let input = evento.target
    let value = input.value

    if (value < 0) {
        input.value = value * -1
    } else if (!Number.isInteger(Number(value))) {
        input.value = parseInt(value)
    }
}

function fatorial() {
    let input_value = parseInt(document.getElementById('input_value').value)
    let aux = input_value

    for (let i = input_value-1; i > 0; i--) {
        aux = aux * i
    }

    if (input_value == 0){
        resultado.textContent = `O fatorial de ${input_value} É ${aux+1}`
    } else {
        resultado.textContent = `O fatorial de ${input_value} É ${aux}`
    }

}