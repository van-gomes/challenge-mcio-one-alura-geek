import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista-produtos]");

function constroiCard(name, description, price, image) {
  const produto = document.createElement("li");
  produto.className = "product-item";
  produto.innerHTML = `<img class="product_image"
                src="${image}" alt="">
                <div class="product_info">
                    <h3 class="product_name">${name}</h3>
                    <p class="product_description">
                        ${description}
                    </p>
                    <p class="product_price">R$ ${price}</p>
                    <img
                      class="trash"
                      src="assets/three_ hearts.svg"
                      alt="Icone de lixeira" >
                  </div>`;

  return produto;
}

async function listaProdutos() {
  const listaApi = await conectaApi.listaProdutos();
  listaApi.forEach((elemento) =>
    lista.appendChild(
      constroiCard(
        elemento.name,
        elemento.description,
        elemento.price,
        elemento.image
      )
    )
  );
}

listaProdutos();