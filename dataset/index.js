document.addEventListener("DOMContentLoaded", () => {

  fetch("./productos.json")
  .then(response => response.json())
  .then(productos => {

    productos.forEach(producto => {

      const card = document.createElement("div");
      card.setAttribute("class", "card");
      card.setAttribute("style", "width: 18rem;");
      card.dataset.id = producto.id;

      const cardBody = document.createElement("div");
      cardBody.setAttribute("class", "card-body");

      const productName = document.createElement("h5");
      productName.setAttribute("class", "card-title");
      productName.innerText = producto.nombre;

      const productPrice = document.createElement("p");
      productPrice.setAttribute("class", "card-text");
      productPrice.innerText = `\$${producto.precio}`;

      const detallesBtn = document.createElement("button");
      detallesBtn.setAttribute("class", "btn btn-primary");
      detallesBtn.innerText = "Ver detalles";
      detallesBtn.addEventListener("click", (e) => {
        // Voy del boton a la tarjeta (abuelo)
        const card = e.target.parentElement.parentElement;
        // Obtener el ID del producto a partir del dataset
        const id = card.dataset.id;
        // Leo el archivo de detalles y busco los detalles del producto que tenga este ID
        fetch("./detalles.json")
        .then(response => response.json())
        .then(detalles => {
          // Me quedo unicamente con el producto que tiene el ID de la tarjeta
          const producto = detalles.filter(producto => producto.id == id)[0];

          // Visualizar detalles como mejor les plazca
          console.table(producto);

        });

      });

      cardBody.append(productName, productPrice, detallesBtn);
      card.append(cardBody);
      document.querySelector("main").append(card);
    });

  })
})

/*

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/