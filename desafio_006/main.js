const resultado = document.getElementById('resultado')

function fatorial() {
    let input_value = parseInt(document.getElementById('input_value').value)
    let aux = input_value

    for (let i = input_value-1; i > 0; i--) {
        aux = aux * i
    }

    resultado.textContent = `O fatorial de ${input_value} É ${aux}`

}