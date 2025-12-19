const form = document.getElementById("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const viewResult = document.getElementById("viewResult");
  const firstValue = document.getElementById("firstValue").value;
  const secondValue = document.getElementById("secondValue").value;
  const thirdvalue = document.getElementById("thirdvalue").value;

  const body = {
    firstValue: parseInt(firstValue),
    secondValue: parseInt(secondValue),
    thirdValue: parseInt(thirdvalue),
  };

  const request = await fetch("http://localhost:3040/desafios_01_10/001/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const response = await request.json();
  viewResult.textContent = response.result.toFixed(2);
});
async function calcularMedia(e) {
  e.preventDefault();
}
