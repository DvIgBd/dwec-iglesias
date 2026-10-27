console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  const primero = document.getElementById("primero");
  const segundo = document.querySelector(".segundo");
  const tercero = document.querySelectorAll("#contenido p");

  if (primero) {
    primero.textContent = "Texto modificado por JavaScript.";
  } else {
    tercero[0].textContent = "Texto modificado por JavaScript.";
  }

  if (segundo) {
    segundo.classList.add("bg-warning-subtle");
  } else {
    tercero[1].classList.add("bg-warning-subtle");
  }

  tercero[2].classList.add("text-danger");

  console.log("Los siguientes cambios se han aplicado:\n - Párrafo 1: Texto modificado.\n - Párrafo 2: Background cambiado.\n - Párrafo 3: Cambiado el color del texto");
}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  const aviso = document.getElementById("aviso2");
  const contenido = document.querySelector("#contenido");
  const posicion = contenido.children.length + 1;
  const parrafo = document.createElement("p");

  parrafo.textContent = `Párrafo nuevo ${posicion}.`;

  contenido.append(parrafo);

  aviso.classList.add("d-none");

  console.log(`Nuevo párrafo añadido: nº ${posicion}.`);
}

function eliminarUltimo() {
  const contenido = document.querySelector("#contenido");
  const posicion = contenido.children.length;
  const aviso = document.getElementById("aviso2");
  const ultimoElemento = contenido.lastElementChild;

  if (!ultimoElemento) {
    aviso.classList.remove("d-none");

    console.log("No quedan párrafos que eliminar.");
  } else {
    console.log(`Párrafo eliminado: nº ${posicion}.`);

    ultimoElemento.remove();
  }
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");
  const parrafosAfectados = parrafos.length;

  for (const parrafo of parrafos) {
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });
  }
  console.log(parrafosAfectados === 0 ? "No hay ningún párrafo." : `Párrafos resaltados: ${parrafosAfectados}.`);
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  const parrafo = document.getElementById("primero");
  const error = document.querySelector("#error4");
  const inputTexto = document.getElementById("nuevoTexto").value.trim();

  if (inputTexto === "") {
    error.classList.remove("d-none");
  } else {
    parrafo.textContent = inputTexto;

    error.classList.add("d-none");

    console.log("Primer párrafo editado.");
  }
}

function cambiarConHtml() {
  const parrafo = document.getElementById("primero");
  const error = document.querySelector("#error4");
  const inputTexto = document.getElementById("nuevoTexto").value.trim();

  if (inputTexto === "") {
    error.classList.remove("d-none");
  } else {
    parrafo.innerHTML = inputTexto;

    error.classList.add("d-none");

    console.log("Html insertado en el primer párrafo.");
  }
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {
  const error = document.getElementById("error5");
  const tareaInput = document.getElementById("tareaInput");
  const listaTareas = document.getElementById("listaTareas");
  const totalTareas = document.getElementById("totalTareas");
  const valorInput = tareaInput.value.trim();
  const elementoLista = document.createElement("li");
  const inputCheckbox = document.createElement("input");
  const span = document.createElement("span");

  if (valorInput === "") {
    error.textContent = "Escribe una tarea antes de añadirla.";
    error.classList.remove("d-none");
  } else {
    inputCheckbox.setAttribute("type", "checkbox");
    inputCheckbox.classList.add("form-check-input", "m-2");

    span.textContent = valorInput;

    elementoLista.classList.add("list-group-item");
    elementoLista.append(inputCheckbox, " ",span);

    listaTareas.append(elementoLista);

    totalTareas.textContent = listaTareas.querySelectorAll("li").length;

    tareaInput.value = "";

    error.classList.add("d-none");

    console.log(`Tarea añadida: ${valorInput}`);
  }
}

function borrarCompletadas() {
  const totalTareas = document.getElementById("totalTareas");
  const listaTareas = document.getElementById("listaTareas");
  const casillasSeleccionadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.getElementById("error5");
  
  if (casillasSeleccionadas.length === 0) {
    error.textContent = "No hay ninguna tarea marcada.";

    error.classList.remove("d-none");
  } else {
    console.log("Tareas eliminadas: ");

    error.classList.add("d-none");

    for (const tarea of casillasSeleccionadas) {
      console.log(" - " + tarea.nextElementSibling.textContent);

      tarea.parentElement.remove();
    }
    totalTareas.textContent = listaTareas.querySelectorAll("li").length;
  }
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  let corte;
  const altoPantalla = screen.height;
  const anchoPantalla = screen.width;
  const url = location.href;
  const idioma = navigator.language;

  if (ancho >= 1400) {
    corte = "xxl → desde 1400 px";
  } else if (ancho >= 1200) {
    corte = "xl → desde 1200 px";
  } else if (ancho >= 992) {
    corte = "lg → desde 992 px";
  } else if (ancho >= 768) {
    corte = "md → desde 768 px";
  } else if (ancho >= 576) {
    corte = "sm → desde 576 px";
  } else {
    corte = "xs → menos de 576 px";
  }

  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;
  document.querySelector("#datoPunto").textContent = corte;
  document.querySelector("#datoPantalla").textContent = `${anchoPantalla} × ${altoPantalla} px`;
  document.querySelector("#datoUrl").textContent = url;
  document.querySelector("#datoIdioma").textContent = idioma;

  console.log(`Ventana: ${ancho} × ${alto} px.\nPunto de corte: ${corte}.\nPantalla: ${anchoPantalla} × ${altoPantalla} px.\nUrl: ${url}.\nIdioma: ${idioma}.`);
}
