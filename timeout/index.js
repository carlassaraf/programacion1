document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", () => {

      // Chequeo que ya no haya una publicidad
      if(document.querySelector("main .container")) { return; }

      const publicidades = [
        "Solo por hoy, 2x1 en Airpods",
        "Lunes y jueves 20% off con Banco Santander",
        "15% off en efectivo",
        "Hasta 9 cuotas sin interés con Banco Francés"
      ];

      const modal = document.createElement("div");
      modal.setAttribute("class", "container");
      modal.setAttribute("tabindex", "-1");

      const modalDialog = document.createElement("div");
      modalDialog.setAttribute("class", "modal-dialog");

      const modalContent = document.createElement("div");
      modalContent.setAttribute("class", "modal-content");

      const modalHeader = document.createElement("div");
      modalHeader.setAttribute("class", "modal-header");

      const modalTitle = document.createElement("h5");
      modalTitle.setAttribute("class", "modal-title");
      modalTitle.innerText = "Ofertón!";

      const modalButton = document.createElement("button");
      modalButton.setAttribute("type", "button");
      modalButton.setAttribute("class", "btn-close");
      modalButton.setAttribute("aria-label", "Close");
      modalButton.addEventListener("click", (e) => {
        // Me voy al abuelo del abuelo del button que es el div (modal)
        e.target.parentElement.parentElement.parentElement.parentElement.remove();
      })

      const modalBody = document.createElement("div");
      modalBody.setAttribute("class", "modal-body");

      const p = document.createElement("p");
      p.innerText = publicidades[Math.floor(publicidades.length * Math.random())];

      modalBody.append(p);
      modalHeader.append(modalTitle, modalButton);

      modalContent.append(modalHeader, modalBody);
      modalDialog.append(modalContent);
      modal.append(modalDialog);
      document.querySelector("main").append(modal);

      setTimeout(() => {
        // A los 3 segundos se dispara este callback

        // Busca la modal y se borra
        document.querySelector("main .container").remove();

      }, 3000);
    });

  });

});

/*
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Ofertón!</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>${texto}</p>
      </div>
    </div>
  </div>
</div>
*/