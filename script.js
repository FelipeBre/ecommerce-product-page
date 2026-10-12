// Selecionar os elementos do html

const btnMenus = document.querySelector('.quantity-selector .btn-qty:first-child');
const btnMais = document.querySelector('.quantity-selector .btn-qty:last-child');
const btnQuantidade = document.querySelector('.qty-value');


// 2. Variável de estado

let quantidade = 0;

// 3. Açães para os botões

btnMais.addEventListener('click', () => {
    quantidade++; // Aumenta a quantidade em 1
    btnQuantidade.textContent = quantidade;
}) 

btnMenus.addEventListener('click', () => {
    if (quantidade > 0) {
        quantidade--; // Diminui a quantidade em 1
        btnQuantidade.textContent = quantidade; 
    }
});

const imagemPrincipal = document.querySelector('.main-image img');
const miniaturas = document.querySelectorAll('.thumbnails img');

miniaturas.forEach((miniatura, indice) => {
    miniatura.addEventListener('click', () => {
        // Atualiza a imagem grande com base na miniatura clicada
        imagemPrincipal.src = `images/image-product-${indice + 1}.jpg`;

        // Remove a borda/destaque de todas
        miniaturas.forEach(m => m.classList.remove('active'));

        // Adiciona a borda/destaque apenas na clicada
        miniatura.classList.add('active');
    });
});


const btnAdicionar = document.querySelector('.add-cart');
const badgeCarrinho = document.querySelector('.cart-badge');

let totalNoCarrinho = 0;

btnAdicionar.addEventListener('click', () => {
    if (quantidade > 0) {
        totalNoCarrinho += quantidade; // Soma à quantidade total
        badgeCarrinho.textContent = totalNoCarrinho; // Atualiza a badge
        
        // Opcional: Resetar o contador de seleção para 0 após adicionar
        quantidade = 0;
        btnQuantidade.textContent = 0;
    }
});