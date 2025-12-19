function evitarFloatENegativo (evento) {
    let input = evento.target
    let value = input.value

    if (value < 0) {
        input.value = value * -1
    } else if (!Number.isInteger(Number(value))) {
        input.value = parseInt(value)
    }
}

function formatarHorario() {
    var segundos = 0 
    segundos = parseInt(document.getElementById('segundos').value)
    
    var minutos = 0
    minutos = parseInt(segundos / 60)
    
    segundos -= minutos * 60

    var horas = 0
    horas = parseInt(minutos / 60)
    
    minutos -= horas * 60

    document.getElementById('resultado').textContent = `${horas}:${minutos}:${segundos}` 
}