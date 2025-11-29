const tela_resultado = document.getElementById('resultado')

function calcularMedia() {
    const primeiro_valor = document.getElementById('primeiro_valor').value
    const segundo_valor = document.getElementById('segundo_valor').value
    const terceiro_valor = document.getElementById('terceiro_valor').value
    
    var resultado = (parseFloat(primeiro_valor) + parseFloat(segundo_valor) + parseFloat(terceiro_valor)) / 3;
    tela_resultado.textContent = resultado.toFixed(2);
}
