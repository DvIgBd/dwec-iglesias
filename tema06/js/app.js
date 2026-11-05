/*
  Tarea 6 · DWEC · David Iglesias Borland
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

// TODO: completa el objeto literal con tus datos: nombre, apellidos, edad y curso.
// TODO: añádele el método presentarse(), que devuelve una frase con this.nombre, this.apellidos, this.edad y this.curso.
//       Por ejemplo: «Soy [nombre] [apellidos], tengo [edad] años y estudio [curso].»
const estudiante = {
  Nombre: "David",
  Apellidos: "Iglesias Borland",
  Edad: 26,
  Curso: "2º DAW",
  presentarse: function() {
    return "Soy " + this.Nombre + " " + this.Apellidos + ", tengo " + this.Edad + " años y estudio " + this.Curso + ".";
  }
};

function verFicha() {
  const salida1 = document.getElementById("salida1");
  const lista = document.createElement("ul");
  const claves = Object.keys(estudiante).slice(0, -1);
  const mensaje = document.createElement("p");


  salida1.textContent = "";
  lista.classList.add("list-group");
  mensaje.classList.add("m-3");
  mensaje.textContent = estudiante.presentarse();
  
  claves.forEach(function(clave) {
    const elementoLista = document.createElement("li");
    elementoLista.classList.add("list-group-item");
    elementoLista.textContent = clave + ": " + estudiante[clave];
    lista.appendChild(elementoLista);
  })

  salida1.appendChild(lista);
  salida1.appendChild(mensaje);

  console.log(estudiante);
  // TODO: vacía #salida1 (textContent = "").
  // TODO: crea un <ul class="list-group"> con un <li class="list-group-item"> por propiedad: «nombre: ...», «edad: ...».
  //       Pista: guarda las claves en un array, ["nombre", "apellidos", "edad", "curso"], recórrelo con forEach
  //       y lee cada valor con corchetes: estudiante[clave].
  // TODO: debajo, un <p> con la frase de estudiante.presentarse().
  // TODO: console.log() del objeto entero.
}

function cumplirAnios() {
  if (estudiante["Edad"] < 100) {
    estudiante["Edad"] += 1;
  } else {
    estudiante["presentarse"] = function() {return "Dudo mucho que esta persona sea un alumno."};
    verFicha();
  }
  verFicha();
}

function quitarCurso() {
  delete estudiante["Curso"];
  verFicha();
  // TODO: borra la propiedad curso con delete y vuelve a pintar la ficha.
  //       Fíjate en lo que sale ahora en el curso y explícalo en el README.
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  if (colores.length == 0) {
    avisar2("No hay colores que quitar dentro de la lista.");
  } else {
    const color = colores.pop();
    mostrarColores();
    console.log("Color eliminado: " + color);
  }
  // TODO: si la lista está vacía, avisa con avisar2() y no hagas nada más.
  // TODO: si no, saca el último con pop(), vuelve a pintar la lista y di en la consola qué color ha salido.
}

function quitarPrimero() {
  if (colores.length == 0) {
    avisar2("No hay colores que quitar dentro de la lista.");
  } else {
    const color = colores.shift();
    mostrarColores();
    console.log("Color eliminado: " + color);
  }
  // TODO: lo mismo que quitarUltimo(), pero sacando el primero con shift().
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {
  const mensaje = document.getElementById("mensaje3");

  mensaje.textContent = "Hay " + productos.length + " productos disponibles.";
  pintarProductos(productos);
  // TODO: pinta todos los productos con pintarProductos() y escribe en #mensaje3 cuántos hay.
}

function ordenarPorPrecio() {
  const lista = [...productos];
  const mensaje = document.getElementById("mensaje3");

  lista.sort(function(a, b) {
    return a.precio - b.precio;
  });

  pintarProductos(lista);
  mensaje.textContent = "Productos ordenados de más barato a más caro.";

  // TODO: haz una copia del array con [...productos] y ordénala con sort() de más barato a más caro.
  //       sort necesita una función de comparación: function (a, b) { return ... }.
  //       ¿Por qué una copia? Explícalo en el README.
  // TODO: pinta la copia y escribe en #mensaje3 cómo están ordenados.
}

function filtrarCaros() {
  const lista = [...productos];
  const mensaje = document.getElementById("mensaje3");
  const productosCincuenta = lista.filter(function(a) {
    return a.precio > 50;
  });
  
  pintarProductos(productosCincuenta);
  mensaje.textContent = "Hay " + productosCincuenta.length + " productos que cuestan más de 50€.";
  // TODO: con filter(), los productos de más de 50 €. Píntalos y escribe en #mensaje3 cuántos son.
}

function buscarProducto() {
  const producto = document.getElementById("buscarProducto");
  const resultadoProd  = producto.value.trim().toLowerCase();
  const mensaje = document.getElementById("mensaje3");

  if (resultadoProd === "") {
    mensaje.textContent = "No has buscado ningún producto.";
    pintarProductos([]);
  } else {
    const resultadoBusqueda = productos.find(prod=> prod.nombre.toLowerCase().includes(resultadoProd));
    if (resultadoBusqueda === undefined) {
      mensaje.textContent = "No existe el producto que has buscado.";
      pintarProductos([]);
    } else {
      mensaje.textContent = "Se ha encontrado " + resultadoBusqueda.nombre.toLowerCase() + ".";
      pintarProductos([resultadoBusqueda]);
    }
  }
  // TODO: lee #buscarProducto (value, trim y toLowerCase). Si está vacío, avisa en #mensaje3.
  // TODO: con find(), el primer producto cuyo nombre en minúsculas contenga ese texto (includes).
  // TODO: find devuelve undefined si no encuentra nada: en ese caso, dilo en #mensaje3 y vacía la tabla.
  //       Si lo encuentra, píntalo solo a él: pintarProductos([encontrado]).
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "[Tu nombre]",
  notas: [],
  anadirNota: function(nota) {
    if (Number.isNaN(Number(nota)) || nota < 0 || nota > 10) {
      return false;
    } else {
      this.notas.push(nota);
      return true;
    }
  }
  // TODO: método anadirNota(nota): si la nota no es un número (Number.isNaN) o no está entre 0 y 10, devuelve false;
  //       si es válida, la añade a this.notas con push y devuelve true.
  // TODO: método media(): si no hay notas devuelve 0; si hay, la suma (con reduce) dividida entre el número de notas.
  //       Recuerda la coma entre una propiedad y la siguiente.
};

function mostrarNotas() {
  const notas = document.getElementById("notas");
  const media = document.getElementById("media");
  notas.innerHTML = "";
  
  for (const nota of alumno.notas) {
    const txt = nota >= 5 ? "text-bg-success" : "text-bg-danger";
    const span = document.createElement("span");

    span.classList.add("badge", txt, "mx-1");
    span.textContent = nota; 

    notas.appendChild(span);
  }

  const longitudNotas = alumno.notas.length;

  notas.textContent !== "" ? media.textContent = "Media de " + longitudNotas + " notas: " + (alumno.notas.reduce((total, n) => total + n, 0) / longitudNotas).toFixed(2) : media.textContent = "Todavía no hay notas.";
  // TODO: vacía #notas y pon un badge (<span class="badge">) por nota: verde (text-bg-success) si es de 5 o más,
  //       rojo (text-bg-danger) si no.
  // TODO: en #media, «Media de N notas: X» con dos decimales (toFixed(2)), o «Todavía no hay notas.».
}

function anadirNota() {
  const nota = document.getElementById("nota");
  const error = document.getElementById("error4");

  if (nota.value === "") {
    error.textContent = "Escribe una nota.";
    error.classList.remove("d-none");
  } else {
    if (!alumno.anadirNota(Number(nota.value))) {
      error.textContent = "La nota debe ser entre 0 y 10.";
      error.classList.remove("d-none");
    } else {
      nota.value = "";
      error.classList.add("d-none");
      mostrarNotas();
    }
  }
  // TODO: si #nota está vacía, muestra un error en #error4 (quítale "d-none").
  //       Ojo: Number("") vale 0, así que esta comprobación va antes de convertir.
  // TODO: convierte el valor con Number() y llama a alumno.anadirNota(). Si devuelve false, muestra el error.
  // TODO: si ha ido bien, oculta el error, vacía la casilla y llama a mostrarNotas().
}

function borrarNotas() {
  alumno.notas = [];
  mostrarNotas();
  // TODO: deja alumno.notas vacío y vuelve a pintar.
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  const salida = document.getElementById("salida5");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const numerosDoble = numeros.map(n => n * 2);

  salida.innerHTML = "";

  p.textContent = "Lista editada: " + comoTexto(numerosDoble);
  p2.textContent = "Lista original: " + comoTexto(numeros);

  salida.appendChild(p);
  salida.appendChild(p2);
  // TODO: con map(), un array nuevo con el doble de cada número.
  // TODO: escribe en #salida5 el resultado y, debajo, numeros (para que se vea que no ha cambiado).
}

function verPares() {
  const salida = document.getElementById("salida5");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const numerosPares = numeros.filter(n => n % 2 === 0);

  salida.innerHTML = "";

  p.textContent = "Lista editada: " + comoTexto(numerosPares);
  p2.textContent = "Lista original: " + comoTexto(numeros);

  salida.appendChild(p);
  salida.appendChild(p2);
  // TODO: con filter(), los números pares (n % 2 === 0). Escríbelos en #salida5 como en verDobles().
}

function verSuma() {
  const salida = document.getElementById("salida5");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const sumaTotal = numeros.reduce((total, n) => total + n, 0);

  salida.innerHTML = "";

  p.textContent = "Suma total: " + sumaTotal;
  p2.textContent = "Lista original: " + comoTexto(numeros);

  salida.appendChild(p);
  salida.appendChild(p2);
  // TODO: con reduce(), la suma de todos los números (empieza en 0). Escríbela en #salida5.
}

function verCadena() {
  const salida = document.getElementById("salida5");
  const pares = numeros.filter(n => n % 2 === 0);
  const dobles = pares.map(n => n * 2);
  const sumaTotal = dobles.reduce((total, n) => total + n, 0);

  salida.innerHTML = "";
  
  const diccionarioFunciones = {
    "Pares": comoTexto(pares),
    "Dobles de los pares": comoTexto(dobles),
    "Suma Total": sumaTotal
  }

  for (const [clave, funcion] of Object.entries(diccionarioFunciones)) {
    const p = document.createElement("p");
    p.textContent = `${clave}: ${funcion}`;
    salida.appendChild(p);
  }
  // TODO: los tres seguidos: los pares, después sus dobles y al final la suma de esos dobles.
  //       Escribe en #salida5 una línea por paso.
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  const ciu = document.getElementById("ciudades");

  ciu.innerHTML = "";

  ciudades.forEach(function (ciudad, posicion) {
    const p = document.createElement("p");
    const span = document.createElement("span");
    
    span.textContent = `${posicion}`;
    p.textContent = ` · ${ciudad}`;

    span.classList.add("badge", "bg-secondary");
    p.prepend(span);
    ciu.appendChild(p);
  });
  // TODO: vacía #ciudades y pon un badge por ciudad con su posición: «0 · Granada», «1 · Sevilla»...
  //       Pista: forEach le pasa a tu función dos datos: function (ciudad, posicion) { ... }.
}

function verSlice() {
  const salida = document.getElementById("salida6");
  const p = document.createElement("p");
  const p2 = document.createElement("p");

  salida.innerHTML = "";

  p.textContent = comoTexto(ciudades.slice(2, 5));
  p2.textContent = "Ciudades disponibles: " + comoTexto(ciudades);

  p2.classList.add("mb-0");

  salida.appendChild(p);
  salida.appendChild(p2);

  mostrarCiudades();
  // TODO: guarda ciudades.slice(2, 5) y escribe en #salida6 qué devuelve y cuántas ciudades siguen en el array.
}

function hacerSplice() {
  const salida = document.getElementById("salida6");
  const p = document.createElement("p");
  const p2 = document.createElement("p");

  salida.innerHTML = "";

  if (ciudades.length < 3) {
    p.textContent = "Debes restaurar la lista debido a ciudades insuficientes.";
    p.classList.add("text-danger", "mb-0");

    salida.appendChild(p);
  } else {
    p.textContent = "Ciudades que han sido eliminadas de la lista: " + comoTexto(ciudades.splice(2, 2));
    p2.textContent = "Ciudades restantes: " + comoTexto(ciudades);

    p2.classList.add("mb-0");

    salida.appendChild(p);
    salida.appendChild(p2);
  }

  mostrarCiudades();
  // TODO: si quedan menos de 3 ciudades, avisa en #salida6 de que hay que restaurar y no hagas nada más.
  // TODO: si no, ciudades.splice(2, 2): escribe en #salida6 qué devuelve y cuántas quedan, y vuelve a pintar.
}

function restaurarCiudades() {
  const buscar = document.getElementById("buscarCiudad");
  const salida = document.getElementById("salida6");
  
  buscar.value = "";
  salida.textContent = "Pulsa un botón para ver el resultado.";

  ciudades = [...ciudadesOriginal];

  mostrarCiudades();
  // TODO: vuelve a copiar ciudadesOriginal en ciudades y pinta.
}

function buscarCiudad() {
  const buscar = document.getElementById("buscarCiudad");
  const salida = document.getElementById("salida6");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const resultadoBusqueda = ciudades.includes(buscar.value.trim());
  const indice = ciudades.indexOf(buscar.value.trim());

  salida.innerHTML = "";

  if (buscar.value.trim() === "") {
    p.textContent = "El campo de búsqueda está vacio.";
    p.classList.add("text-danger", "mb-0");
    salida.appendChild(p);
  } else if (!resultadoBusqueda) {
    p.textContent = "La ciudad que has buscado no se encuentra en la lista.";
    p.classList.add("text-danger", "mb-0");
    salida.appendChild(p);
  }  else {
    p.textContent = "La función includes() devuelve " + resultadoBusqueda + ".";
    p2.textContent = "La función indexOf() devuelve " + indice + ".";

    p2.classList.add("mb-0");

    salida.appendChild(p);
    salida.appendChild(p2);
  }
  // TODO: lee #buscarCiudad (value y trim). Si está vacío, avisa.
  // TODO: escribe en #salida6 lo que dan includes() e indexOf() con ese nombre. Si no está, indexOf da -1.
}

mostrarCiudades();
