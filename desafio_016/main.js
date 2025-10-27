function contarPalavras() {
    const resultado = document.getElementById('resultado');
    const frase = document.getElementById('frase').value;
    let qtd = frase.trim().split(' ').length;

    resultado.textContent = `Quantidade de palavras: ${qtd}`;
}