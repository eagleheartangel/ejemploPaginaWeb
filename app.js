"use strict";
// Modo Oscuro
const botonSwitch = document.getElementById("checkbox");
const temaActual = localStorage.getItem("tema");

if (temaActual) {
  document.documentElement.setAttribute("tema", temaActual);

  if (temaActual === "negro") {
    botonSwitch.checked = true;
  }
}

function cambiarTema(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("tema", "negro");
    localStorage.setItem("tema", "negro");
  } else {
    document.documentElement.setAttribute("tema", "blanco");
    localStorage.setItem("tema", "blanco");
  }
}

botonSwitch.addEventListener("change", cambiarTema, false);
// Termina Modo Oscuro
