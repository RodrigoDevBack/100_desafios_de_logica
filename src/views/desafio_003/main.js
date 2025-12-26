const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  await converterScale();
});

async function converterScale() {
  const viewResult = document.getElementById("viewResult");
  const value = document.getElementById("value").value;

  const body = {
    value: parseFloat(value),
  };

  const request = await fetch("http://localhost:3040/desafios_01_10/003/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const response = await request.json();
  viewResult.textContent = response.result;
}
