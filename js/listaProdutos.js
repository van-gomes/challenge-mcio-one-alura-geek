import { conectaApi } from "./conectaApi.js";
import { constroiCard } from "./constroiCard.js";
import { adicionarListenersDeletar } from "./excluirProduto.js";

const lista = document.querySelector("[data-lista-produtos]");

export async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        lista.innerHTML = "";
        listaApi.forEach((elemento) =>
            lista.appendChild(
                constroiCard(
                    elemento.id,
                    elemento.name,
                    elemento.description,
                    elemento.price,
                    elemento.image
                )
            )
        );

        adicionarListenersDeletar();

    } catch (error) {
        console.error("Erro ao listar produtos:", error);
    }
}