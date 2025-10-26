
function verificarPalindromo() {
    const palavraFrase = document.getElementById('palavra-texto');
    const resultado = document.getElementById('resultado');
    if ((palavraFrase.value.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('')) === (palavraFrase.value.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join(''))){
        resultado.textContent = 'É um palíndromo';
        palavraFrase.value = ' ';
    } else {
        resultado.textContent = `Não é um palíndromo ${palavraFrase.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('')} != ${palavraFrase.toLowerCase().replace(/[^a-z0-9]/g, '').split('').join('')}`;
        palavraFrase.value = ' ';
    }
}