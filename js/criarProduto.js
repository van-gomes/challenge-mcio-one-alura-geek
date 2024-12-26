import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criaProduto(evento) {
    evento.preventDefault();
    console.log("Função criarProduto foi chamada");

    const nome = document.querySelector("[data-nome]").value;
    const descricao = document.querySelector("[data-descricao]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;
   
    try {
        await conectaApi.criaProduto(nome, descricao, preco, imagem);
        alert ("Produto cadastrado!");

    } catch (error) {
        console.error("Erro ao criar produto:", error);
    }

    window.location.reload(true);
}

formulario.addEventListener("submit", evento => criaProduto(evento));
