/* FILTROS */
const botoesFiltro = document.querySelectorAll("[data-filter]");
const produtos = document.querySelectorAll(".produto");

botoesFiltro.forEach(botao => {
  botao.addEventListener("click", () => {
    const categoria = botao.dataset.filter;

    produtos.forEach(produto => {
      if (categoria === "all" || produto.dataset.category === categoria) {
        produto.style.display = "block";
      } else {
        produto.style.display = "none";
      }
    });
  });
});

// O comportamento de adicionar ao carrinho foi movido para js/cart.js