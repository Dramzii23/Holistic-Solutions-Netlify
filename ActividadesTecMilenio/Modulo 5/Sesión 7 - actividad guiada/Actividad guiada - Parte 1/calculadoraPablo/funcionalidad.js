document.addEventListener("DOMContentLoaded", function () {
  const resultado = document.getElementById("resultado");
  const botones = document.querySelectorAll(".calculadora button");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      if (boton.id === "igual") {
        try {
          resultado.textContent = eval(resultado.textContent);
        } catch (e) {
          resultado.textContent = "Error";
        }
      } else if (boton.id === "reset") {
        resultado.textContent = "";
      } else {
        resultado.textContent += boton.textContent;
      }
    });
  });
});
