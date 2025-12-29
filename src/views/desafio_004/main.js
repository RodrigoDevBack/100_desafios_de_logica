const form = document.getElementById("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  await checkFirst();
});

async function checkFirst() {
  const viewResult = document.getElementById("viewResult");
  let value = parseInt(document.getElementById("value").value);

  const body = {
    value: value,
  };
  const request = await fetch("http://localhost:3040/desafios_01_10/004/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await request.json();

  viewResult.textContent = result.result;
}
