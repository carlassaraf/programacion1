document.addEventListener("DOMContentLoaded", () => {

  document.querySelector("select").addEventListener("change", (e) => {

    // Si se seleccionó tarjeta de crédito, agregamos la alternativa de cuotas
    if(e.target.value === "credito") {
      // Creo otro select de cuotas
      const select = document.createElement("select");
      select.setAttribute("id", "select-cuotas");

      const def = document.createElement("option");
      def.innerText = "Seleccione la cantidad de cuotas";

      const opt1 = document.createElement("option");
      opt1.setAttribute("value", "1");
      opt1.innerText = "Una cuota de $180.000";

      const opt2 = document.createElement("option");
      opt2.setAttribute("value", "3");
      opt2.innerText = "Tres cuotas de $60.000";

      const opt3 = document.createElement("option");
      opt3.setAttribute("value", "6");
      opt3.innerText = "Seis cuotas de $30.000";

      select.append(def, opt1, opt2, opt3);
      document.querySelector("form").append(select);
    }
    else {
      // Si está el select de las cuotas, lo borra
      const select = document.querySelector("#select-cuotas");
      if(select) {
        select.remove();
      }
    }
  });

  // Obtengo la fecha actual
  const now = new Date(Date.now());
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  // Muevo tres dias la fecha
  now.setDate(now.getDate() + 3);
  const date = now.getDate();
  // Seteo el minimo del calendario
  document.querySelector("input").setAttribute("min", `${year}-${month}-${date}`);

});