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

    let btnGroup = document.createElement("div");
    btnGroup.setAttribute("class", "btn-group");
    btnGroup.setAttribute("role", "group");

    let btnDown = document.createElement("button");
    btnDown.setAttribute("type", "button");
    btnDown.classList.add("btn");
    btnDown.classList.add("btn-primary");
    btnDown.innerText = "Bajar";
    btnDown.addEventListener("click", (e) => {
      // Guardo el culpable del evento
      const target = e.target;
      // Voy hasta el li que quiero mover
      const li = target.parentElement.parentElement;
      const nextSibling = li.nextElementSibling;
      if(nextSibling) {
        nextSibling.after(li);
      }
      else {
        li.parentElement.firstElementChild.before(li);
      }
    });

    let btnDelete = document.createElement("button");
    btnDelete.classList.add("btn");
    btnDelete.classList.add("btn-danger");
    btnDelete.innerText = "Borrar";
    btnDelete.addEventListener("click", (e) => {
      // Guardo el culpable del evento (button que se clickeo)
      const target = e.target;
      // Busco el texto del li
      let text = target.parentElement.previousSibling.textContent;
      lis.splice(lis.indexOf(text), 1);
      localStorage.setItem("lis", JSON.stringify(lis));
      target.parentElement.parentElement.remove();
    });

    let btnUp = document.createElement("button");
    btnUp.setAttribute("type", "button");
    btnUp.classList.add("btn");
    btnUp.classList.add("btn-primary");
    btnUp.innerText = "Subir";
    btnUp.addEventListener("click", (e) => {
      // Guardo el culpable del evento
      const target = e.target;
      // Voy hasta el li que quiero mover
      const li = target.parentElement.parentElement;
      const prevSibling = li.previousElementSibling;
      if(prevSibling) {
        // Solo si existe el hermano anterior
        prevSibling.before(li);
      }
      else {
        // Si no existe, lo mandamos al final
        li.parentElement.lastElementChild.after(li);
      }
    });

    btnGroup.append(btnDown, btnDelete, btnUp);

    li.append(btnGroup);
    document.querySelector("ul").append(li);
}
