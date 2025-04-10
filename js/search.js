const input = document.getElementById("searchInput");
const button = document.getElementById("searchButton");

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    fazerBusca();
  }
});

button.addEventListener("click", function () {
  fazerBusca();
});

function fazerBusca() {
  const termo = input.value.trim();
  if (termo) {
    window.location.href = `resultados.html?busca=${encodeURIComponent(termo)}`;
  }
}
