export function constroiCard(id, name, description, price, image) {
    const produto = document.createElement("li");
    produto.className = "product-item";
    produto.innerHTML = `
    <img class="product_image" src="${image}" alt="${name}">
    <div class="product_info">
        <h3 class="product_name">${name}</h3>
        <p class="product_description">${description}</p>
        <p class="product_price">R$ ${price}</p>
        <button class="delete-button" data-id="${id}">
            <img src="./assets/excluir.png" class="trash-icon" alt="Um ícone de lixeira">
        </button>
    </div>`;
    return produto;
}