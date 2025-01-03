import { conectaApi } from "./conectaApi.js";
import { listaProdutos } from "./listaProdutos.js";
const formulario = document.querySelector("[data-formulario]");

async function criaProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const descricao = document.querySelector("[data-descricao]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try {
        await conectaApi.criaProduto(nome, descricao, preco, imagem);
        alert("Produto cadastrado!");
        listaProdutos();
        formulario.reset();
    } catch (error) {
        console.error("Erro ao criar produto:", error);
    }
}

formulario.addEventListener("submit", criaProduto);

listaProdutos();