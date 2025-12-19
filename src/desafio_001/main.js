const test = document.getElementById("test");
test.addEventListener("submit", async (e) => {
  e.preventDefault();
  const tela_resultado = document.getElementById("resultado");
  const primeiro_valor = document.getElementById("primeiro_valor").value;
  const segundo_valor = document.getElementById("segundo_valor").value;
  const terceiro_valor = document.getElementById("terceiro_valor").value;

  const body = {
    "numero1": parseInt(primeiro_valor),
    "numero2": parseInt(segundo_valor),
    "numero3": parseInt(terceiro_valor),
  };

  const request = await fetch("http://localhost:3040/desafios_01_10/001/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  
  const response = await request.json();
  tela_resultado.textContent = response.result.toFixed(2);
});
async function calcularMedia(e) {
  e.preventDefault();
}
