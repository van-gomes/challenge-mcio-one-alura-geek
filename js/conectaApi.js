async function listaProdutos(params) {
    const conexao = await fetch('http://localhost:3000/products');
    const produtos = await conexao.json();
    return produtos;
}

async function criaProduto(name, description, price, image) {
    const conexao = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            description: description,
            price: price,
            image: image
        })
    });

    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaProdutos,
    criaProduto
}