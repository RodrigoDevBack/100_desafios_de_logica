
function verificarPalindromo() {
    const numero = document.getElementById('numero').value
    let numeroAoContrario = numero.split('').reverse().join('')
    if (parseInt(numero) == parseInt(numeroAoContrario)) {
        document.getElementById('resultado').textContent = 'E um palíndromo'
    } else {
        document.getElementById('resultado').textContent = 'Não é um palíndromo'
    }
}