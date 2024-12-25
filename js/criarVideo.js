import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const descricao = document.querySelector("[data-descricao]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;
   
    await conectaApi.criaVideo(nome, descricao, preco, imagem);
    window.location.href = "../pages/envio-concluido.html";
}

formulario.addEventListener("submit", evento => criarProduto(evento))