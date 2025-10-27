function trocarPalavras() {
    const resultado = document.getElementById('resultado');
    const texto = document.getElementById('texto').value;
    const palavraATrocar = document.getElementById('palavra-a-trocar').value;
    const palavraNoLugar = document.getElementById('palavra-no-lugar').value;
    let textoResultado = texto.trim().split(' ');
        
    if (!textoResultado.includes(palavraATrocar)) {
        resultado.textContent = 'A palavra para trocar não existe'
        return;
    }

    for (let i = 0; i < textoResultado.length; i++) {
        if (textoResultado[i] === palavraATrocar) {
            textoResultado[i] = palavraNoLugar;
        }
    }

    resultado.textContent = textoResultado.join(' ');
}