document.addEventListener("DOMContentLoaded", () => {

  const modal = document.createElement("div");
  modal.setAttribute("class", "modal fade");

  const dialog = document.createElement("div");
  dialog.setAttribute("class", "modal-dialog");

  const content = document.createElement("div");
  content.setAttribute("class", "modal-content");

  const header = document.createElement("div");
  header.setAttribute("class", "modal-header");

  const title = document.createElement("h1");
  title.setAttribute("class", "modal-title fs-5");
  title.innerText = "Demo Modal";

  const close = document.createElement("button");
  close.setAttribute("type", "button");
  close.setAttribute("class", "btn-close");
  close.addEventListener("click", () => {
    document.querySelector(".modal-body p").innerText = "Bye bye 👋";
    setTimeout(() => {

      document.querySelector(".modal").remove();
      document.querySelector(".modal-backdrop").remove();
    }, 2000);
  });

  const body = document.createElement("div");
  body.setAttribute("class", "modal-body");

  const text = document.createElement("p");
  text.innerText = "Ejemplo de modal de Bootstrap";

  const footer = document.createElement("div");
  footer.setAttribute("class", "modal-footer");

  const btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.setAttribute("class", "btn btn-secondary");
  btn.innerText = "Close";
  btn.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    // Agrego class show a la modal
    modal.classList.remove("show");
    // Agreo display: block;
    modal.setAttribute("style", "display: none;");
    // Elimino el backdrop
    document.querySelector(".modal-backdrop").remove();
  });

  footer.append(btn);
  body.append(text);
  header.append(title, close);

  content.append(header, body, footer);
  dialog.append(content);
  modal.append(dialog);

  document.querySelector("body").prepend(modal);

  // Evento para hacer aparecer la modal con un click
  document.querySelector("#open").addEventListener("click", () => {
    
    const modal = document.querySelector(".modal");
    // Agrego class show a la modal
    modal.classList.add("show");
    // Agreo display: block;
    modal.setAttribute("style", "display: block;");
    // Creo el backdrop
    const backdrop = document.createElement("div");
    backdrop.setAttribute("class", "modal-backdrop fade show");
    document.querySelector("body").append(backdrop);
  })

});

// <div class="modal-backdrop fade show"></div>

/*
<div class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5">Modal title</h1>
        <button type="button" class="btn-close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary">Close</button>
      </div>
    </div>
  </div>
</div>
*/