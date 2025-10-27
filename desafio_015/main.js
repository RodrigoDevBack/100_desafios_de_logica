function inverterString() {
    const resultado = document.getElementById('resultado');
    const string = document.getElementById('palavra').value;
    palavraInvertida = string.trim().split('').reverse().join('');
    resultado.textContent = palavraInvertida;
}