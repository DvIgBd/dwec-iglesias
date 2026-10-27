/*
  Tarea 5 · DWEC · [Tu nombre y apellidos]
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  // El modelo: el primer párrafo, por su id
  const primero = document.getElementById("primero");
  const segundo = document.querySelector(".segundo");
  const tercero = document.querySelectorAll("#contenido p");
  primero ? primero.textContent = "Texto modificado por JavaScript." : tercero[0].textContent = "Texto modificado por JavaScript.";
  segundo ? segundo.classList.add("bg-warning-subtle") : tercero[1].classList.add("bg-warning-subtle");
  tercero[2].classList.add("text-danger");
  console.log("Los siguientes cambios se han aplicado:\n - Párrafo 1: Texto modificado.\n - Párrafo 2: Background cambiado.\n - Párrafo 3: Cambiado el color del texto");
}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  const aviso = document.getElementById("aviso2");
  const contenido = document.querySelector("#contenido");
  let posicion = contenido.children.length + 1;
  const parrafo = document.createElement("p");
  parrafo.textContent = `Párrafo nuevo ${posicion}.`;
  contenido.append(parrafo);
  aviso.classList.add("d-none");
  console.log(`Nuevo párrafo aañadido: nº ${posicion}.`);
  // TODO: crea un <p> con document.createElement().
  // TODO: dale el texto «Párrafo nuevo N», donde N es el número de párrafos que habrá en #contenido
  //       (pista: document.querySelector("#contenido").children.length).
  // TODO: cuélgalo al final de #contenido con append().
}

function eliminarUltimo() {
  const contenido = document.querySelector("#contenido");
  let posicion = contenido.children.length + 1;
  const aviso = document.getElementById("aviso2");
  const ultimoElemento = contenido.lastElementChild;
  !ultimoElemento ? aviso.classList.remove("d-none") : ultimoElemento.remove();
  console.log(`Párrafo eliminado: nº ${posicion}.`);
  // TODO: busca el último párrafo de #contenido (lastElementChild).
  // TODO: si es null (ya no queda ninguno), muestra el aviso #aviso2 quitándole la clase "d-none".
  //       Si no, bórralo con remove().
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");
  let parrafosAfectados = parrafos.length;

  for (const parrafo of parrafos) {
    // addEventListener("mouseenter", ...) ejecuta la función cuando el ratón entra en el párrafo.
    // Los eventos los veremos a fondo en el tema 9: de momento, copia este modelo.
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });

    // TODO: lo mismo con "mouseleave" (cuando el ratón sale) para quitar la clase.
  }
   console.log(parrafosAfectados === 0 ? "No hay ningún párrafo." : `Párrafos resaltados: ${parrafosAfectados}.`);

  // TODO: un console.log() que diga en cuántos párrafos se ha activado (parrafos.length).
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  const parrafo = document.getElementById("primero");
  const error = document.querySelector("#error4");
  const inputTexto = document.getElementById("nuevoTexto").value.trim();

  if (inputTexto === "".trim()) {
    error.classList.remove("d-none");
  } else {
    parrafo.textContent = inputTexto;
    error.classList.add("d-none");
  }
  // TODO: lee lo escrito en #nuevoTexto con value y quítale los espacios de los extremos con trim().
  // TODO: si está vacío, muestra el error #error4 (quítale "d-none") y no cambies nada.
  // TODO: si no, pon ese texto en el primer párrafo de #contenido con textContent y oculta el error.
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
  }
  // TODO: lo mismo que cambiarTexto(), pero con innerHTML.
  //       Prueba las dos con <b>hola</b> y explica en el README qué diferencia ves y por qué es peligroso.
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
  }
  console.log(`Tarea añadida: ${valorInput}`);
  // TODO: lee el texto de #tareaInput (value + trim). Si está vacío, muestra un mensaje en #error5.
  // TODO: si no, crea un <li class="list-group-item"> con dos elementos dentro:
  //         · un <input> de tipo "checkbox" con la clase "form-check-input",
  //         · un <span> con el texto de la tarea (textContent).
  //       Cuelga el <li> de #listaTareas y vacía la casilla (value = "").
  // TODO: actualiza #totalTareas con el número de <li> que hay en la lista.
}

function borrarCompletadas() {
  const totalTareas = document.getElementById("totalTareas");
  const listaTareas = document.getElementById("listaTareas");
  const casillasSeleccionadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.getElementById("error5");
  
  if (casillasSeleccionadas.length === 0) {
    error.classList.remove("d-none");
  } else {
    console.log("Tareas eliminadas: ");
    for (const tarea of casillasSeleccionadas) {
      console.log(" - " + tarea.nextElementSibling.textContent);
      tarea.parentElement.remove();
    }
    totalTareas.textContent = listaTareas.querySelectorAll("li").length;
  }

  
  // TODO: selecciona las casillas marcadas: document.querySelectorAll("#listaTareas input:checked").
  // TODO: si no hay ninguna, avisa en #error5. Si hay, recórrelas con for…of y borra el <li> de cada una
  //       (el <li> es el padre de la casilla: parentElement).
  // TODO: actualiza #totalTareas.
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  // TODO: con if / else if, el punto de corte de Bootstrap según el ancho: xs (< 576), sm (≥ 576), md (≥ 768),
  //       lg (≥ 992), xl (≥ 1200) y xxl (≥ 1400). Escríbelo en #datoPunto.
  // TODO: el tamaño de la pantalla (screen.width y screen.height) en #datoPantalla.
  // TODO: la URL (location.href) en #datoUrl y el idioma del navegador (navigator.language) en #datoIdioma.
}
