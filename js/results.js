window.addEventListener("DOMContentLoaded", () => {
  const texto = document.getElementById("resultado-texto");
  const container = document.getElementById("produtos-container");
  const inputBusca = document.getElementById("searchInput");

  const palavrasChave = ["camiseta", "camisetas", "camisa", "camisas", "roupa", "roupas", "blusa", "blusas"];

  function exibirResultados(termo) {
    const termoLower = termo.toLowerCase();
    const temResultado = palavrasChave.some(palavra => termoLower.includes(palavra));

    texto.textContent = `Resultados para: "${termo}"`;

    if (temResultado) {
      container.innerHTML = `
        <div class="swiper-wrapper">
          <div class="swiper-slide product-card">
            <div class="novo-badge">Novo</div>
            <img src="src/produto.png" alt="Produto 1" />
            <h3 class="product-description">
              Lorem ipsum dolor sit amet consectetuer adipiscing elit
            </h3>
            <p class="old-price"><span>R$ 100,00</span></p>
            <div class="price-container">
              <span class="new-price">R$ 79,90</span>
              <span class="discount">10% OFF</span>
            </div>
            <p class="installment">
              Ou em até <span class="installment-highlight">10x de R$ 7,90</span>
            </p>
            <button class="buy-button">Comprar</button>
          </div>
        </div>
      `;
    } else {
      container.innerHTML = `<p class='resultado-texto'>Nenhum resultado encontrado para "${termo}".</p>`;
    }
  }

  const urlParams = new URLSearchParams(window.location.search);
  const termoInicial = urlParams.get("busca") || "";
  if (inputBusca) inputBusca.value = termoInicial;
  exibirResultados(termoInicial);

  if (inputBusca) {
    inputBusca.addEventListener("input", () => {
      const novoTermo = inputBusca.value.trim();
      exibirResultados(novoTermo);
    });
  }
});
