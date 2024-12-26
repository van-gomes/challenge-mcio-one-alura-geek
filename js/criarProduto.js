import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista-produtos]");
const formulario = document.querySelector("[data-formulario]");

// Função para criar o card do produto
function constroiCard(name, description, price, image) {
    const produto = document.createElement("li");
    produto.className = "product-item";
    produto.innerHTML = `
    <img class="product_image" src="${image}" alt="${name}">
    <div class="product_info">
        <h3 class="product_name">${name}</h3>
        <p class="product_description">${description}</p>
        <p class="product_price">R$ ${price}</p>
        <img src="./assets/excluir.png" class="trash-icon" alt="Um ícone de lixeira">
    </div>`;
    return produto;
}

// Função para listar produtos
async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        lista.innerHTML = ""; // Limpa a lista antes de renderizar
        listaApi.forEach((elemento) =>
            lista.appendChild(
                constroiCard(
                    elemento.name,
                    elemento.description,
                    elemento.price,
                    elemento.image
                )
            )
        );
    } catch (error) {
        console.error("Erro ao listar produtos:", error);
    }
}

// Função para criar um novo produto
async function criaProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const descricao = document.querySelector("[data-descricao]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try {
        await conectaApi.criaProduto(nome, descricao, preco, imagem);
        alert("Produto cadastrado!");
        listaProdutos(); // Atualiza a lista sem recarregar a página
        formulario.reset(); // Limpa o formulário após o envio
    } catch (error) {
        console.error("Erro ao criar produto:", error);
    }
}

// Event listener para o formulário
formulario.addEventListener("submit", criaProduto);

// Chamada inicial para listar produtos
listaProdutos();
