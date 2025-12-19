function avoidFloat(evento) {
  const input = evento.target;
  const value = input.value;

  if (!Number.isInteger(Number(value))) {
    input.value = parseInt(value);
  }
}

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  await checkEvenOdd();
});

async function checkEvenOdd() {
  const viewResult = document.getElementById("viewResult");
  const value = document.getElementById("value").value;

  const body = {
    value: parseInt(value),
  };

  const request = await fetch("http://localhost:3040/desafios_01_10/002/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const response = await request.json();

  viewResult.textContent = response.result;
}
