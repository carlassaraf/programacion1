const ids = [123, 444, 236, 98, 1, 45];

document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("form").addEventListener("submit", (e) => {
    // Evita el redireccionamiento que genera el formulario
    e.preventDefault();

    // Valido campo de disco
    const inputDisc = document.querySelector("#input-disc");
    if(inputDisc.value.trim() === "") {
      inputDisc.setCustomValidity("El nombre del disco es obligatorio");
      // Hace aparecer la cajita de error
      inputDisc.reportValidity();
      return;
    }

    // Valido campo de artista
    const inputArtist = document.querySelector("#input-artist");
    if(inputArtist.value.trim() === "") {
      inputArtist.setCustomValidity("Falta el nombre del artista!");
      inputArtist.reportValidity();
      return;
    }

    // Valido campo de ID
    const inputId = document.querySelector("#input-id");
    if(inputId.value === "") {
      inputId.setCustomValidity("Falta el ID del disco!");
      inputId.reportValidity();
      return;
    }
    else if(parseInt(inputId.value) < 1 || parseInt(inputId.value) > 999) {
      inputId.setCustomValidity("El rango de IDs de discos es de 1 a 999");
      inputId.reportValidity();
      return;
    }
    else if(ids.includes(parseInt(inputId.value))) {
      inputId.setCustomValidity("El ID ya existe");
      inputId.reportValidity();
      return;
    }

    // Valido campo de portada
    const inputCover = document.querySelector("#input-cover");
    if(inputCover.value === "") {
      inputCover.setCustomValidity("Falta la portada del disco");
      inputCover.reportValidity();
      return;
    }

    document.querySelectorAll("input").forEach(input => input.value = "");
    alert("Disco cargado con éxito!");

  });

  // Agarro todos los input de la pagina
  document.querySelectorAll("input").forEach(input => {
    // Agrego un evento que se dispara al momento de cambiar input.value
    input.addEventListener("input", (e) => {
      // Reinicio mensaje de validacion para poder liberar el form submit
      e.target.setCustomValidity("");
    });
  });

});