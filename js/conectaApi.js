async function listaProdutos(params) {
    const conexao = await fetch('http://localhost:3000/products');
    const produtos = await conexao.json();
    return produtos;
}

// async function criaProduto(name, description, price, image) {
//     try {
//         const conexao = await fetch("http://localhost:3000/products", {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json"
//             },
//             body: JSON.stringify({ name, description, price, image })
//         });
        
//         if (!conexao.ok) {
//             throw new Error('Erro ao criar produto');
//         }

//         return await conexao.json();
//     } catch (error) {
//         console.error('Erro:', error);
//         throw error;
//     }
// }

async function criaProduto(evento) {
    evento.preventDefault();
    console.log("Função criarProduto foi chamada");

    const nome = document.querySelector("[data-nome]").value;
    const descricao = document.querySelector("[data-descricao]").value;
    const preco = document.querySelector("[data-preco]").value;
    const inputImagem = document.querySelector("[data-imagem]");
    const arquivoImagem = inputImagem.files[0];

    if (!arquivoImagem) {
        alert("Por favor, selecione uma imagem.");
        return;
    }

    // Criação do FormData para envio do arquivo
    const formData = new FormData();
    formData.append("name", nome);
    formData.append("description", descricao);
    formData.append("price", preco);
    formData.append("image", arquivoImagem);

    try {
        const response = await fetch("http://localhost:3000/products", {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error("Erro ao criar produto");
        }

        console.log("Produto criado com sucesso!");
        window.location.href = "./envio-concluido.html";
    } catch (error) {
        console.error("Erro ao criar produto:", error);
        alert("Erro ao cadastrar o produto. Tente novamente.");
    }
}

export const conectaApi = {
    listaProdutos,
    criaProduto
}