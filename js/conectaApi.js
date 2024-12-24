async function listaProdutos(params) {
    const conexao = await fetch('http://localhost:3000/products');
    const produtos = await conexao.json();
    return produtos;
}

export const conectaApi = {
    listaProdutos
}