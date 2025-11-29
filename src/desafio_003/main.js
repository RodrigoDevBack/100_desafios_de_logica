const resultado = document.getElementById('resultado')

function conversaoCelsius() {
    const input_value = document.getElementById('a_converter').value
    var conversao = (parseFloat(input_value) * 1.8) + 32
    resultado.textContent = conversao
}