
function calcularFibonacci() {
    const limite = parseInt(document.getElementById('limite').value)
    let valores = []
    let valor = 0

    for (let i = 0; i < limite; i++) {
        if (i == 0) {
            valores.push(0)
        } else if (i == 1) {
            valores.push(1)
        } else {
            valor = valores[(valores.length-1)]
            valor += valores[(valores.length-2)]
            valores.push(valor)
        }
    }
    document.getElementById('resultado').textContent = valores
}