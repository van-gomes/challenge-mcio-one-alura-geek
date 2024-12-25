async function criarProduto(evento) {
    evento.preventDefault();
    console.log("Função criarProduto foi chamada");

    const nome = document.querySelector("[data-nome]").value;
    const descricao = document.querySelector("[data-descricao]").value;
    const preco = document.querySelector("[data-preco]").value;
    const inputImagem = document.querySelector("[data-imagem]");
    const arquivoImagem = inputImagem.files[0];

    // Captura o nome do arquivo ou uma string vazia
    const imagem = arquivoImagem ? arquivoImagem.name : "";

    console.log("Dados capturados:", { nome, descricao, preco, imagem });

    try {
        if (await conectaApi.criaProduto(nome, descricao, preco, imagem)) {
            window.location.href = "./envio-concluido.html";
        } else {
            alert("Erro ao cadastrar o produto. Tente novamente.");
        }
    } catch (error) {
        console.error("Erro ao criar produto:", error);
    }
}