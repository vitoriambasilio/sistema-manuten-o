# Projeto: Sistema de Controle de Manutenção (SCM)

Projeto desenvolvido para a disciplina de Desenvolvimento WEB (Professor JOHN), do 3º ano INTIN do IFPB.

## 1. 🚀 Sobre o Projeto

O SCM é um site estático (HTML/CSS) que simula a interface de uma empresa de manutenção de tecnologia. O site permite que usuários visualizem serviços, consultem uma loja de hardware e abram chamados de manutenção.

**Link do Site (GitHub Pages):** https://vitoriambasilio.github.io/sistema-manuten-o/

## 2. 🛠️ Tecnologias Utilizadas

* **HTML5** (Semântico)
* **CSS3**
    * Variáveis CSS
    * Flexbox
    * Grid Layout
    * Media Queries (Responsividade)

## 3. 🖥️ Como Rodar Localmente

Este é um projeto estático. Não há necessidade de instalação.

1.  Clone o repositório:
    ```sh
    git clone https://github.com/vitoriambasilio/sistema-manuten-o.git
    ```
2.  Navegue até a pasta do projeto:
    ```sh
    cd projeto-manutencao
    ```
3.  Abra o arquivo `index.html` diretamente no seu navegador.

### Observações sobre testes locais
- Algumas funcionalidades (carrinho, filtros) funcionam totalmente no front-end e dependem apenas do navegador.
- O formulário de chamados é estático no protótipo; para envio real é preciso integrar um backend.

## 4. 📄 Documentação

O manual de uso do sistema, detalhando as funcionalidades de cada tela, está localizado em:
`/docs/manual-uso.pdf`

## 5. 🧭 Estrutura do Projeto (resumo)

/ (raiz do projeto)
├─ index.html
├─ servicos.html
├─ chamado.html
├─ loja.html
├─ css/style.css
├─ js/script.js
├─ js/cart.js
├─ assets/
└─ docs/manual-uso.pdf

## 6. 🛒 Loja e Carrinho (detalhes)

- A loja está em `loja.html` e lista os produtos em cards com meta-dados (`data-id`, `data-name`, `data-price`).
- O carrinho foi implementado em `js/cart.js` e usa `localStorage` para persistência local.
- A ação de checkout é simulada no protótipo (exibe alerta e limpa o carrinho).

## 8. 📜 Licença

Projeto sob licença MIT. Veja o arquivo `LICENSE` para detalhes.

## 9. 👨‍💻 Autor

* **Vitoria Maria Basilio Bezerra**
* **Carol Alexandre Querino**
* **Maria Eduarda Pinheiro Calixto**
* **Lourena Feitosa Barbosa**
* **Turma:** 3º INTIN