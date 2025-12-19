function transformarTitulo() {
    const string = document.getElementById('string').value;
    const resultado = document.getElementById('resultado');
    let lista = string.trim().toLowerCase().split(' ').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    resultado.textContent = lista.join(' ')
}