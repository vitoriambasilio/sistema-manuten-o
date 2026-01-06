// Cart logic: add, remove, update quantities, persist in localStorage
const CART_KEY = 'itens_carrinho_v1';

function formatBRL(value){
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function carregarCarrinho(){
  const raw = localStorage.getItem(CART_KEY);
  return raw ? JSON.parse(raw) : {};
}

function salvarCarrinho(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function atualizarContador(cart){
  const contadorSpan = document.getElementById('contador');
  const totalItens = Object.values(cart).reduce((s, it) => s + it.qtd, 0);
  if(contadorSpan) contadorSpan.textContent = totalItens;
}

function calcularTotal(cart){
  return Object.values(cart).reduce((s, it) => s + (it.price * it.qtd), 0);
}

// Render mini-cart
function renderCart(cart){
  let panel = document.getElementById('mini-cart');
  if(!panel){
    panel = document.createElement('aside');
    panel.id = 'mini-cart';
    panel.className = 'mini-cart';
    document.body.appendChild(panel);
  }

  const items = Object.values(cart);
  if(items.length === 0){
    panel.innerHTML = '<h3>Carrinho</h3><p>Seu carrinho está vazio.</p>';
    return;
  }

  const list = items.map(it => `
    <div class="cart-item" data-id="${it.id}">
      <div class="cart-item-info">
        <strong>${it.name}</strong>
        <div class="cart-qty">
          <button class="qty-decrease" data-id="${it.id}">-</button>
          <span class="qty">${it.qtd}</span>
          <button class="qty-increase" data-id="${it.id}">+</button>
        </div>
      </div>
      <div class="cart-item-right">
        <span class="cart-price">${formatBRL(it.price)}</span>
        <button class="remove-item" data-id="${it.id}">Remover</button>
      </div>
    </div>
  `).join('');

  const total = calcularTotal(cart);
  panel.innerHTML = `<h3>Carrinho</h3><div class="cart-list">${list}</div><div class="cart-total">Total: <strong>${formatBRL(total)}</strong></div><div class="cart-actions"><button id="checkout">Finalizar compra</button><button id="close-cart">Fechar</button></div>`;

  // attach events
  panel.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      delete cart[id];
      salvarCarrinho(cart);
      atualizarContador(cart);
      renderCart(cart);
    });
  });

  panel.querySelectorAll('.qty-increase').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      cart[id].qtd = (cart[id].qtd || 0) + 1;
      salvarCarrinho(cart);
      atualizarContador(cart);
      renderCart(cart);
    });
  });

  panel.querySelectorAll('.qty-decrease').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      cart[id].qtd = (cart[id].qtd || 0) - 1;
      if(cart[id].qtd <= 0) delete cart[id];
      salvarCarrinho(cart);
      atualizarContador(cart);
      renderCart(cart);
    });
  });

  const closeBtn = panel.querySelector('#close-cart');
  if(closeBtn) closeBtn.addEventListener('click', () => panel.classList.remove('open'));

  const checkout = panel.querySelector('#checkout');
  if(checkout) checkout.addEventListener('click', () => {
    alert('Simulação de checkout: dados do carrinho enviados.');
    // limpeza do carrinho após checkout simulado
    for(const k of Object.keys(cart)) delete cart[k];
    salvarCarrinho(cart);
    atualizarContador(cart);
    renderCart(cart);
    panel.classList.remove('open');
  });
}

// Add item to cart
function addToCart(item){
  const cart = carregarCarrinho();
  if(cart[item.id]){
    cart[item.id].qtd += 1;
  } else {
    cart[item.id] = { id: item.id, name: item.name, price: item.price, qtd: 1 };
  }
  salvarCarrinho(cart);
  atualizarContador(cart);
  renderCart(cart);
}

// Initialize bindings
document.addEventListener('DOMContentLoaded', () => {
  const cart = carregarCarrinho();
  atualizarContador(cart);
  renderCart(cart);

  // bind buy buttons
  document.querySelectorAll('.btn-comprar').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const article = e.currentTarget.closest('.produto');
      const id = article.dataset.id;
      const name = article.dataset.name;
      const price = parseFloat(article.dataset.price);
      addToCart({ id, name, price });
      const panel = document.getElementById('mini-cart');
      if(panel) panel.classList.add('open');
    });
  });

  // toggle cart
  const toggle = document.getElementById('cart-toggle');
  if(toggle) toggle.addEventListener('click', () => {
    const panel = document.getElementById('mini-cart');
    if(panel) panel.classList.toggle('open');
  });
});
