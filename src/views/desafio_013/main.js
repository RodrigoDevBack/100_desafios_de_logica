function verificarVogais() {
    const input = document.getElementById('palavras');
    const palavras = input.value.toLowerCase()
    const resultado = document.getElementById('resultado');
    const vogais = ['a', 'e', 'i', 'o', 'u', 'á', 'à', 'ã', 'é', 'è', 'í', 'ì', 'ĩ', 'ò', 'ó', 'õ', 'ú', 'ù', 'ũ'];
    let vogaisPalavra = [];
    for (let i = 0; i <= (input.value).length; i++) {
        if (vogais.includes(palavras.charAt(i))) {
            vogaisPalavra.push((input.value).charAt(i));
        }
    }
    if (vogais.length > 0) {
        resultado.textContent = vogaisPalavra
    } else {
        resultado.textContent = 'Não existe vogais no que você digitou.'
    }
}