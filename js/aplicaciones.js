document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.getElementById("buscadorApps");
  const formulario = document.getElementById("formBusquedaApps");
  const tarjetas = document.querySelectorAll("#lista-aplicaciones .col");

  const filtrarTarjetas = () => {
    const filtro = buscador.value.toLowerCase();
    tarjetas.forEach((tarjeta) => {
      const titulo = tarjeta
        .querySelector(".card-title")
        .textContent.toLowerCase();
      tarjeta.style.display = titulo.includes(filtro) ? "" : "none";
    });
  };

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    filtrarTarjetas(); // Buscar solo cuando se da clic al botón o se presiona Enter
  });

  // Si se borra todo (incluyendo con la equis), se muestran todas las tarjetas
  buscador.addEventListener("input", () => {
    if (buscador.value.trim() === "") {
      tarjetas.forEach((tarjeta) => {
        tarjeta.style.display = "";
      });
    }
    // No se filtra mientras se escribe, solo al enviar el formulario
  });
});
