function substituirEspaco() {
    const resultado = document.getElementById("resultado");
    const frase = document.getElementById('frase').value;
    let espacoSub =  frase.trim().replace(/[ ]/g, '-');
    resultado.textContent = espacoSub
}