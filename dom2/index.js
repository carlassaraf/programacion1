let lis = [];

document.addEventListener("DOMContentLoaded", () => {

  if(localStorage.getItem("lis")) {
    lis = JSON.parse(localStorage.getItem("lis"));
    lis.forEach(li => createLi(li));
  }

  document.querySelector("button").addEventListener("click", () => {
    // Funcion que se llama cuando se clickea el boton

    // Busco el input
    const input = document.querySelector("input");
    const compra = input.value;
    // Limpio el input
    input.value = "";

    createLi(compra);

    // Guardar en localStorage el texto
    lis.push(compra);
    localStorage.setItem("lis", JSON.stringify(lis));

  });

});

function createLi(text) {

    let li = document.createElement("li");
    li.innerText = text;
    li.setAttribute("class", "list-group-item");

    let btn = document.createElement("button");
    btn.classList.add("btn");
    btn.classList.add("btn-danger");
    btn.innerText = "Borrar";
    btn.addEventListener("click", (e) => {
      // Guardo el culpable del evento (button que se clickeo)
      const target = e.target;
      target.parentElement.remove();
    });

    li.append(btn);
    document.querySelector("ul").append(li);
}