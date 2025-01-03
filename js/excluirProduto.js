export async function excluirProduto(id) {
    try {
        const conexao = await fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
        });

        if (!conexao.ok) {
            throw new Error("Não foi possível deletar o produto!");
        }

        console.log(`Produto ${id} deletado com sucesso!`);
        listaProdutos();
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
    }
}

export function adicionarListenersDeletar() {
    const botoesDeletar = document.querySelectorAll(".delete-button");
    botoesDeletar.forEach((botao) => {
        const id = botao.dataset.id;
        botao.addEventListener("click", () => excluirProduto(id));
    });
}