const resultado = document.getElementById('resultado')

function verificarMaiorDeTres() {
    let valor1 = parseFloat(document.getElementById('input_value1').value)
    let valor2 = parseFloat(document.getElementById('input_value2').value)
    let valor3 = parseFloat(document.getElementById('input_value3').value)
    
    if (valor1 > valor2 && valor1 > valor3){
       resultado.textContent = `O maior valor entre ${valor1}, ${valor2} e ${valor3} É ${valor1}` 
    } else if (valor2 > valor1 && valor2 > valor3){
       resultado.textContent = `O maior valor entre ${valor1}, ${valor2} e ${valor3} É ${valor2}` 
    } else if (valor3 > valor1 && valor3 > valor2){
       resultado.textContent = `O maior valor entre ${valor1}, ${valor2} e ${valor3} É ${valor3}` 
    } else {
        resultado.textContent = `Os três valores são iguais`
    }
}