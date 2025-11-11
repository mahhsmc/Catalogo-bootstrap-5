const CATALOG_ITEMS = [
    {
        id: 1 ,
        titulo: "Coraline",
        categoria: "Livros",
        detalhes: "No livro Coraline, de Neil Gaiman, a jovem Coraline se muda com os pais para um antigo casarão e descobre uma porta que a leva a um mundo paralelo idêntico ao seu, mas mais perfeito.",
        preco: "R$:40,90",
        estoque: 35,
        autor: "Neil Galman",
        lancamento: "02/07/2002",
    },
        {
        id: 2 ,
        titulo: "Raposa de crochê",
        categoria: "Artesanato",
        detalhes: "Um bichinho de pelucia de raposa com aproximadamente 30cm",
        preco: "R$25,50",
        estoque: 10,
        material: "Lã de cor laranja e algodão por dentro",
        dimensoes: "30cm x 15cm",
    },
        {
        id: 3 ,
        titulo: "A Bilioteca da Meia Noite",
        categoria: "Livros",
        detalhes: "A Biblioteca da Meia-Noite é um romance de Matt Haig sobre Nora Seed, uma mulher de 35 anos que, arrependida de suas escolhas, tenta suicídio e se encontra em uma biblioteca mágica entre a vida e a morte.",
        preco: "R$40,82",
        estoque: 49,
        autor: "Matt Haig",
        lancamento: "13/08/2020",
    },
        {
        id: 4,
        titulo: "Bolsa de crochê - Hello kitty",
        categoria: "Artesanato",
        detalhes: "Bolsa adulto/infantil Sanrio Hello Kitty",
        preco: "R$50,00",
        estoque: 29,
        material: "Lã colorida",
        tamanho: "Médio/Grande",
    },
]
/**
 * Adiciona listeners aos botões "Ver Detalhes" para popular o modal dinamicamente.
 */
const modalElement = document.querySelector('#detalheModal');
const modalTitle = modalElement.querySelector('.modal-title');
const modalBody = modalElement.querySelector('.modal-body');
const modalAction = modalElement.querySelector('.btn-success');


modalElement.addEventListener('show.bs.modal', function(event) {

    const button = event.relatedTarget;
    const itemId = parseInt(button.getAttribute('data-item-id'));
    
    const item = CATALOG_ITEMS.find(i => i.id === itemId);

    if (item) {

        modalTitle.textContent = item.titulo;

        let detailsHTML = `
        <p class="mb-1"><strong>Categoria:</strong> <span class="badge bg-secondary">${item.categoria}</span></p>
        <p class="fs-4 fw-bold text-success mb-3">Preço: ${item.preco}</p>
        <hr>
        <p>${item.detalhes}</p>
        `;

        if(item.categoria === 'Livros') {
            detailsHTML += `<p><strong>Autor:</strong> ${item.autor}</p>`;
            detailsHTML += `<p><strong>Lancamento:</strong> ${item.lancamento}</p>`;
            detailsHTML += `<p class="text-info"><strong>Estoque Disponivel:</strong> ${item.estoque} unidades</p>`;
        } else if (item.categoria === 'Artesanato') {
            detailsHTML += `<p><strong>Material</strong> ${item.material}</p>`;
            detailsHTML += `<p><strong>Dimensões/Comprimento:</strong> ${item.dimensoes || item.comprimento}</p>`;
            detailsHTML += `<p class="text-info"><strong>Peças Exclusivas em Estoque:</strong> ${item.estoque}</p>`;
        }

        modalBody.innerHTML = detailsHTML

        modalAction.onclick = () => {
            console.log(`Ação: Item '${item.titulo}' (ID: ${item.id}) adicionado ao carrinho.`);

            const bsModal = bootstrap.Modal.getInstance(modalElement);
            if(bsModal) bsModal.hide();

        };

    }
});

const searchInput = document.getElementById('search-input');
const searchButoon = getElementById('search-button');
const items = document.querySelectorAll('.item-catalogo');

function executarPesquisA(event) {

}

searchButton.addEventListener('click', executarPesquisa);

searchInput.addEventListener('keyup', (event) => {

    if (event.key === 'Enter') {
        executarPesquisa(event);
    } else if (searchInput.ariaValueMax.trim() === "") {

        executarPesquisa(event);
    }
});