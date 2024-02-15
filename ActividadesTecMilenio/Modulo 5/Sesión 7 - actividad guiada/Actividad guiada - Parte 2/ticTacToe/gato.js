document.addEventListener("DOMContentLoaded", function () {
  var lastused = "O";
  const botones = document.querySelectorAll(".gato button");
  const resultado = document.getElementById("resultado");
  const reiniciar = document.getElementById("reiniciar");
  let juegoTerminado = false;

  reiniciar.addEventListener("click", () => {
    // Reiniciar el tablero
    tablero = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];

    // Limpiar los botones
    botones.forEach((boton) => {
      boton.textContent = "-";
      boton.style.backgroundColor = ""; // Remover el color de fondo
    });

    // Limpiar el resultado
    resultado.textContent = "";
  });

  let tablero = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  function verificarGanador(tablero) {
    for (let i = 0; i < 3; i++) {
      if (
        tablero[i][0] !== 0 &&
        tablero[i][0] === tablero[i][1] &&
        tablero[i][0] === tablero[i][2]
      ) {
        return {
          ganador: tablero[i][0],
          linea: [
            [i, 0],
            [i, 1],
            [i, 2],
          ],
        };
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        tablero[0][i] !== 0 &&
        tablero[0][i] === tablero[1][i] &&
        tablero[0][i] === tablero[2][i]
      ) {
        return {
          ganador: tablero[0][i],
          linea: [
            [0, i],
            [1, i],
            [2, i],
          ],
        };
      }
    }

    if (
      tablero[0][0] !== 0 &&
      tablero[0][0] === tablero[1][1] &&
      tablero[0][0] === tablero[2][2]
    ) {
      return {
        ganador: tablero[0][0],
        linea: [
          [0, 0],
          [1, 1],
          [2, 2],
        ],
      };
    }
    if (
      tablero[0][2] !== 0 &&
      tablero[0][2] === tablero[1][1] &&
      tablero[0][2] === tablero[2][0]
    ) {
      return {
        ganador: tablero[0][2],
        linea: [
          [0, 2],
          [1, 1],
          [2, 0],
        ],
      };
    }

    return { ganador: 0, linea: [] };
  }

  botones.forEach((boton, index) => {
    boton.addEventListener("click", () => {
      if (juegoTerminado) {
        return;
      }

      if (boton.textContent === "-") {
        if (lastused === "X") {
          lastused = "O";
          tablero[Math.floor(index / 3)][index % 3] = 2;
        } else {
          lastused = "X";
          tablero[Math.floor(index / 3)][index % 3] = 1;
        }
        boton.textContent = lastused;
      }

      let resultadoVerificacion = verificarGanador(tablero);
      if (resultadoVerificacion.ganador !== 0) {
        resultadoVerificacion.linea.forEach(([fila, columna]) => {
          botones[fila * 3 + columna].style.backgroundColor = "lightgreen";
        });
        resultado.textContent =
          "El jugador " +
          (resultadoVerificacion.ganador === 1 ? "X" : "O") +
          " ha ganado!";
        juegoTerminado = true;
      }
    });
  });
  reiniciar.addEventListener("click", () => {
    // ...
    juegoTerminado = false;
  });
});
