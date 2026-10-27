/*
  Tarea 5 · DWEC · David Iglesias Borland
  Manipular el DOM: seleccionar, cambiar, crear y borrar elementos de la página,
  y consultar datos de la ventana y del navegador (BOM).
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

// Cambia los tres párrafos de #contenido, cada uno seleccionado de una forma distinta.
function aplicarCambios() {
  // getElementById: busca un elemento por su id (sin #). Devuelve null si no existe.
  const primero = document.getElementById("primero");
  // querySelector: devuelve el primer elemento que cumple el selector CSS (aquí, la clase .segundo).
  const segundo = document.querySelector(".segundo");
  // querySelectorAll: devuelve una lista (NodeList) con todos los <p> de #contenido.
  const tercero = document.querySelectorAll("#contenido p");

  // Si #primero existe, se cambia su texto; si no, se usa el primer <p> de la lista.
  // textContent cambia el texto del elemento (no interpreta HTML).
  if (primero) {
    primero.textContent = "Texto modificado por JavaScript.";
  } else {
    tercero[0].textContent = "Texto modificado por JavaScript.";
  }

  // classList.add añade una clase de Bootstrap: aquí, fondo amarillo suave.
  if (segundo) {
    segundo.classList.add("bg-warning-subtle");
  } else {
    tercero[1].classList.add("bg-warning-subtle");
  }

  // El tercer párrafo se selecciona por su posición en la lista (índice 2) y se pone en rojo.
  tercero[2].classList.add("text-danger");

  console.log("Los siguientes cambios se han aplicado:\n - Párrafo 1: Texto modificado.\n - Párrafo 2: Background cambiado.\n - Párrafo 3: Cambiado el color del texto");
}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

// Crea un párrafo nuevo y numerado al final de #contenido.
function anadirParrafo() {
  const aviso = document.getElementById("aviso2");
  const contenido = document.querySelector("#contenido");
  // children.length: cuántos elementos hijos tiene #contenido. +1 porque es el número del que vamos a añadir.
  const posicion = contenido.children.length + 1;
  // createElement crea un elemento nuevo, pero todavía no está en la página.
  const parrafo = document.createElement("p");

  parrafo.textContent = `Párrafo nuevo ${posicion}.`;

  // append lo cuelga al final de #contenido: a partir de aquí ya se ve.
  contenido.append(parrafo);

  // Si el aviso de "no quedan párrafos" estaba visible, se oculta con d-none.
  aviso.classList.add("d-none");

  console.log(`Nuevo párrafo añadido: nº ${posicion}.`);
}

// Borra el último párrafo de #contenido o avisa si ya no queda ninguno.
function eliminarUltimo() {
  const contenido = document.querySelector("#contenido");
  // Número del párrafo que se va a borrar (se cuenta antes de borrarlo).
  const posicion = contenido.children.length;
  const aviso = document.getElementById("aviso2");
  // lastElementChild: el último hijo de #contenido. Es null si no queda ninguno.
  const ultimoElemento = contenido.lastElementChild;

  if (!ultimoElemento) {
    // No hay párrafos: se muestra el aviso quitándole d-none (en vez de dar un error).
    aviso.classList.remove("d-none");

    console.log("No quedan párrafos que eliminar.");
  } else {
    console.log(`Párrafo eliminado: nº ${posicion}.`);

    // remove() quita el elemento de la página.
    ultimoElemento.remove();
  }
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

// Añade a cada párrafo existente un resaltado gris al pasar el ratón por encima.
function activarResaltado() {
  // Solo se seleccionan los párrafos que existen ahora: los que se añadan después
  // no tendrán el evento hasta que se vuelva a pulsar el botón.
  const parrafos = document.querySelectorAll("#contenido p");
  const parrafosAfectados = parrafos.length;

  // for…of recorre la lista de párrafos uno a uno.
  for (const parrafo of parrafos) {
    // addEventListener ejecuta la función cuando ocurre el evento indicado.
    // mouseenter: el ratón entra en el párrafo, así que se añade el fondo gris.
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    // mouseleave: el ratón sale del párrafo, así que se quita el fondo gris.
    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });
  }

  // Operador ternario: si no hay párrafos muestra un mensaje; si hay, cuántos.
  console.log(parrafosAfectados === 0 ? "No hay ningún párrafo." : `Párrafos resaltados: ${parrafosAfectados}.`);
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

// Pone lo que escribe el usuario en el primer párrafo, como texto plano.
function cambiarTexto() {
  const parrafo = document.getElementById("primero");
  const error = document.querySelector("#error4");
  // value: lo escrito en el input. trim() quita los espacios del principio y del final.
  const inputTexto = document.getElementById("nuevoTexto").value.trim();

  if (inputTexto === "") {
    // Campo vacío: se muestra el error y no se cambia nada.
    error.classList.remove("d-none");
  } else {
    // textContent muestra el texto tal cual: <b>hola</b> se ve con las etiquetas.
    parrafo.textContent = inputTexto;

    error.classList.add("d-none");

    console.log("Primer párrafo editado.");
  }
}

// Igual que cambiarTexto(), pero con innerHTML (para comparar las dos formas).
function cambiarConHtml() {
  const parrafo = document.getElementById("primero");
  const error = document.querySelector("#error4");
  const inputTexto = document.getElementById("nuevoTexto").value.trim();

  if (inputTexto === "") {
    error.classList.remove("d-none");
  } else {
    // innerHTML interpreta el texto como HTML: <b>hola</b> se ve en negrita.
    // Es peligroso con lo que escribe el usuario, porque podría meter código en la página.
    parrafo.innerHTML = inputTexto;

    error.classList.add("d-none");

    console.log("Html insertado en el primer párrafo.");
  }
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

// Crea una tarea nueva (casilla + texto) en la lista y actualiza el contador.
function anadirTarea() {
  const error = document.getElementById("error5");
  const tareaInput = document.getElementById("tareaInput");
  const listaTareas = document.getElementById("listaTareas");
  const totalTareas = document.getElementById("totalTareas");
  const valorInput = tareaInput.value.trim();
  // Los tres elementos que forman una tarea: el <li>, la casilla y el texto.
  const elementoLista = document.createElement("li");
  const inputCheckbox = document.createElement("input");
  const span = document.createElement("span");

  if (valorInput === "") {
    // #error5 está vacío en el HTML, así que primero se le pone el mensaje y luego se muestra.
    error.textContent = "Escribe una tarea antes de añadirla.";
    error.classList.remove("d-none");
  } else {
    // setAttribute da valor a un atributo: aquí convierte el input en una casilla de verificación.
    inputCheckbox.setAttribute("type", "checkbox");
    inputCheckbox.classList.add("form-check-input", "m-2");

    // El texto de la tarea va con textContent, nunca con innerHTML.
    span.textContent = valorInput;

    // Se monta el <li>: la casilla, un espacio y el texto.
    elementoLista.classList.add("list-group-item");
    elementoLista.append(inputCheckbox, " ", span);

    listaTareas.append(elementoLista);

    // El contador muestra cuántos <li> hay ahora en la lista.
    totalTareas.textContent = listaTareas.querySelectorAll("li").length;

    // Se vacía el input para escribir la siguiente tarea.
    tareaInput.value = "";

    error.classList.add("d-none");

    console.log(`Tarea añadida: ${valorInput}`);
  }
}

// Borra las tareas marcadas y actualiza el contador.
function borrarCompletadas() {
  const totalTareas = document.getElementById("totalTareas");
  const listaTareas = document.getElementById("listaTareas");
  // :checked selecciona solo las casillas que están marcadas.
  const casillasSeleccionadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.getElementById("error5");

  if (casillasSeleccionadas.length === 0) {
    error.textContent = "No hay ninguna tarea marcada.";

    error.classList.remove("d-none");
  } else {
    console.log("Tareas eliminadas: ");

    error.classList.add("d-none");

    for (const tarea of casillasSeleccionadas) {
      // nextElementSibling: el elemento que va justo después de la casilla, es decir, el <span> con el texto.
      console.log(" - " + tarea.nextElementSibling.textContent);

      // parentElement: el padre de la casilla, que es su <li>. Se borra el <li> entero.
      tarea.parentElement.remove();
    }

    totalTareas.textContent = listaTareas.querySelectorAll("li").length;
  }
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

// Rellena la tabla con datos de la ventana, la pantalla y el navegador.
function verDatosVentana() {
  // innerWidth / innerHeight: tamaño de la zona visible de la página (cambia al redimensionar).
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  // let porque se le da valor más abajo, dentro del if / else if.
  let corte;
  // screen: tamaño del monitor (no cambia aunque se haga la ventana más pequeña).
  const altoPantalla = screen.height;
  const anchoPantalla = screen.width;
  // location.href: la URL completa de la página.
  const url = location.href;
  // navigator.language: el idioma configurado en el navegador (por ejemplo, es-ES).
  const idioma = navigator.language;

  // Punto de corte de Bootstrap. Se comprueba de mayor a menor porque el if / else if
  // se para en la primera condición que se cumple.
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

  // Se escribe cada dato en su celda de la tabla.
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;
  document.querySelector("#datoPunto").textContent = corte;
  document.querySelector("#datoPantalla").textContent = `${anchoPantalla} × ${altoPantalla} px`;
  document.querySelector("#datoUrl").textContent = url;
  document.querySelector("#datoIdioma").textContent = idioma;

  console.log(`Ventana: ${ancho} × ${alto} px.\nPunto de corte: ${corte}.\nPantalla: ${anchoPantalla} × ${altoPantalla} px.\nUrl: ${url}.\nIdioma: ${idioma}.`);
}