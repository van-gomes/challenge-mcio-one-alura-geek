// async function excluirProduto(id) {
//     try {
//         const conexao = await fetch(`http://localhost:3000/products/${id}`, {
//             method: "DELETE",
//         });
//         const data = await conexao.json();
//         console.log(data); 
//     } catch (error) { 
//         console.error("Erro ao deletar produto:", error);
//         throw error;
//     }  
// }