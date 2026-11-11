console.log("app.js cargado");


// ============================================================
// Ayuda: pinta una lista de textos en un <ul class="list-group">
// (ya está hecha, y su forEach ya lleva una flecha: es el modelo)
// ============================================================

function pintarLista(selector, textos) {
  const lista = document.querySelector(selector);
  lista.textContent = "";

  textos.forEach((texto) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = texto;
    lista.append(li);
  });
}


// ============================================================
// Ejercicio 1 · Precio final
// ============================================================

// Solo calcula y devuelve el precio final: primero resta el descuento y después suma el IVA.
// calcularPrecio(100) → 121 (usa los valores por defecto: IVA 21 % y sin descuento)
function calcularPrecio(base, iva = 21, descuento = 0) {
  const precioDescontado = (base * descuento) / 100;
  const precioIva = ((base - precioDescontado) * iva) / 100;
  const precioFinal = base - precioDescontado + precioIva;

  console.log("El precio final es: " + formatearEuros(precioFinal));

  return precioFinal;
}

// Ya está hecha: 74.8 → "74.80 €"
function formatearEuros(cantidad) {
  return cantidad.toFixed(2) + " €";
}

// Botón «Calcular»: lee el formulario, valida y pinta el desglose
function mostrarPrecio() {
  const error = document.getElementById("error1");

  const base = document.getElementById("base").value;
  const iva = Number(document.getElementById("iva").value);
  const descuento = document.getElementById("descuento").value;

  // La base se comprueba como texto: Number("") daría 0 y no detectaríamos que está vacía
  if (base < 0 || base === "") {
    error.textContent = "La base no puede estar vacía o ser negativa.";
    error.classList.remove("d-none");
    return;
  }

  let precioFinal;

  if (descuento === "") {
    // Sin tercer argumento: se usa el descuento por defecto (0)
    precioFinal = calcularPrecio(Number(base), iva);
  } else if (Number(descuento) >= 0 && Number(descuento) <= 100) {
    precioFinal = calcularPrecio(Number(base), iva, Number(descuento));
  } else {
    error.textContent = "El descuento tiene que estar entre 0 y 100.";
    error.classList.remove("d-none");
    return;
  }

  error.classList.add("d-none");
  pintarLista("#salida1", [
    `Precio sin IVA: ${formatearEuros(Number(base))}`,
    `Descuento: ${descuento === "" ? 0 : descuento} %`,
    `IVA: ${iva} %`,
    `Precio final: ${formatearEuros(precioFinal)}`
  ]);

  console.log("Ejercicio 1: precio final →", precioFinal);
}


// ============================================================
// Ejercicio 2 · Películas: de function a flecha
// ============================================================

const peliculas = [
  { titulo: "El laberinto del fauno", anio: 2006, duracion: 118 },
  { titulo: "Coco", anio: 2017, duracion: 105 },
  { titulo: "Interstellar", anio: 2014, duracion: 169 },
  { titulo: "Regreso al futuro", anio: 1985, duracion: 116 },
  { titulo: "Parásitos", anio: 2019, duracion: 132 },
  { titulo: "Toy Story", anio: 1995, duracion: 81 }
];

// Ya está hecha: una película como texto, «Coco (2017) · 105 min»
function comoTexto(pelicula) {
  return `${pelicula.titulo} (${pelicula.anio}) · ${pelicula.duracion} min`;
}

// Callbacks pasados de function a flecha: como el cuerpo es una sola expresión, van sin llaves ni return

function verTitulos() {
  const titulos = peliculas.map((pelicula) => pelicula.titulo);
  pintarLista("#salida2", titulos);
  document.querySelector("#mensaje2").textContent = `${titulos.length} títulos.`;
  console.log("Ejercicio 2: map →", titulos);
}

function verLargas() {
  const largas = peliculas.filter((pelicula) => pelicula.duracion > 120);
  pintarLista("#salida2", largas.map(comoTexto));   // comoTexto ya es una función: se pasa sin paréntesis
  document.querySelector("#mensaje2").textContent = `${largas.length} películas duran más de 2 horas.`;
  console.log("Ejercicio 2: filter →", largas);
}

function ordenarPorAnio() {
  const ordenadas = [...peliculas].sort((a, b) => a.anio - b.anio);   // una copia: sort cambia el original
  pintarLista("#salida2", ordenadas.map(comoTexto));
  document.querySelector("#mensaje2").textContent = "De la más antigua a la más reciente.";
  console.log("Ejercicio 2: sort →", ordenadas);
}

function verDuracionTotal() {
  const minutos = peliculas.reduce((total, pelicula) => total + pelicula.duracion, 0);
  pintarLista("#salida2", [`${minutos} minutos de películas`]);
  document.querySelector("#mensaje2").textContent = "La suma de las seis duraciones.";
  console.log("Ejercicio 2: reduce →", minutos);
}

// find devuelve la primera que cumple la condición, o undefined si no hay ninguna
function buscarAntigua() {
  const antigua = peliculas.find((pelicula) => pelicula.anio < 1990);

  if (antigua === undefined) {
    pintarLista("#salida2", []);
    document.querySelector("#mensaje2").textContent = "No hay ninguna película anterior a 1990.";
  } else {
    pintarLista("#salida2", [comoTexto(antigua)]);
    document.querySelector("#mensaje2").textContent = "La primera película anterior a 1990.";
  }
  console.log("Ejercicio 2: find →", antigua);
}


// ============================================================
// Ejercicio 3 · Tu propio callback
// ============================================================

const numeros = [3, -1, 4, -1, 5, 9];
document.querySelector("#numeros3").textContent = `const numeros = [${numeros.join(", ")}];`;

// Hace a mano lo mismo que map: operacion es el callback que se aplica a cada elemento.
// Devuelve un array nuevo, así que la lista original no cambia.
function transformar(lista, operacion) {
  const resultado = [];
  for (const elemento of lista) {
    resultado.push(operacion(elemento));
  }
  console.log("Ejercicio 3: transformar →", resultado);
  return resultado;
}

// Ya está hecha: escribe en #salida3 tu resultado, el de map y numeros
function mostrar3(nombre, resultado, conMap) {
  const salida = document.querySelector("#salida3");
  salida.textContent = "";
  const lineas = [
    `${nombre} → [${resultado.join(", ")}]`,
    `con map → [${conMap.join(", ")}]`,
    `numeros → [${numeros.join(", ")}] (no cambia)`
  ];
  lineas.forEach((linea) => {
    const p = document.createElement("p");
    p.classList.add("mb-1");
    p.textContent = linea;
    salida.append(p);
  });
}

// El modelo
function verDobles() {
  const resultado = transformar(numeros, (n) => n * 2);
  mostrar3("dobles", resultado, numeros.map((n) => n * 2));
  console.log("Ejercicio 3: dobles →", resultado);
}

function verCuadrados() {
  const resultado = transformar(numeros, (n) => n ** 2);
  mostrar3("cuadrados", resultado, numeros.map((n) => n ** 2));
  console.log("Ejercicio 3: cuadrados →", resultado);
}

function verAbsolutos() {
  const resultado = transformar(numeros, Math.abs);   // Math.abs ya es una función: va sin paréntesis
  mostrar3("absolutos", resultado, numeros.map(Math.abs));
  console.log("Ejercicio 3: absolutos →", resultado);
}


// ============================================================
// Ejercicio 4 · Dos contadores con closure
// ============================================================

// Closure: la función devuelta recuerda su propia cuenta y su paso.
// Cada llamada a crearContador() crea una cuenta nueva, por eso los dos contadores no se mezclan.
function crearContador(paso = 1) {
  let cuenta = 0;
  return () => {
    cuenta = cuenta + paso;
    console.log("Ejercicio 4: cuenta →", cuenta);
    return cuenta;
  };
}

const contarDeUno = crearContador();
const contarDeCinco = crearContador(5);

// El modelo
function sumarUno() {
  const valor = contarDeUno();
  document.querySelector("#cuenta1").textContent = valor;
  console.log("Ejercicio 4: de 1 en 1 →", valor);
}

function sumarCinco() {
  const valor = contarDeCinco();
  document.querySelector("#cuenta5").textContent = valor;
  console.log("Ejercicio 4: de 5 en 5 →", valor);
}


// ============================================================
// Ejercicio 5 · Clases
// ============================================================

class Alumno {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
    this.notas = [];
  }

  // Los métodos van con la forma corta, nunca con flecha: una flecha no tendría su propio this
  anadirNota(nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  }

  media() {
    if (this.notas.length === 0) {
      return 0;
    }
    const suma = this.notas.reduce((total, nota) => total + nota, 0);
    return suma / this.notas.length;
  }

  presentarse() {
    return `${this.nombre}, de ${this.curso}`;
  }
}

class AlumnoFCT extends Alumno {
  constructor(nombre, curso, empresa) {
    super(nombre, curso);   // primero el constructor de Alumno, antes de usar this
    this.empresa = empresa;
  }

  // Aprovecha la frase de Alumno y le añade la empresa
  presentarse() {
    return `${super.presentarse()}, en prácticas en ${this.empresa}`;
  }
}

const alumnos = [];

// Alumnos de partida: uno de cada clase

const david = new Alumno("David Martín Martí", "2.º DAW");
david.anadirNota(7);
david.anadirNota(9);

const david2 = new AlumnoFCT("David Iglesias Borland", "2.º DAW", "Trevenque");
david2.anadirNota(6.5);
david2.anadirNota(8);

alumnos.push(david, david2);
console.log("Ejercicio 5: alumnos de partida →", alumnos);

// Ya está hecha: pinta una tarjeta por alumno en #listaAlumnos y actualiza #totalAlumnos
function pintarAlumnos() {
  const contenedor = document.querySelector("#listaAlumnos");
  contenedor.textContent = "";

  alumnos.forEach((alumno) => {
    const columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-xl-4");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("border", "rounded", "p-2", "h-100");

    const frase = document.createElement("p");
    frase.classList.add("mb-1");
    frase.textContent = alumno.presentarse();

    const media = document.createElement("span");
    media.classList.add("badge", "me-1");
    if (alumno.notas.length === 0) {
      media.classList.add("text-bg-secondary");
      media.textContent = "Sin notas";
    } else {
      media.classList.add(alumno.media() >= 5 ? "text-bg-success" : "text-bg-danger");
      media.textContent = `Media ${alumno.media().toFixed(2)}`;
    }

    tarjeta.append(frase, media);

    if (alumno instanceof AlumnoFCT) {
      const fct = document.createElement("span");
      fct.classList.add("badge", "text-bg-info");
      fct.textContent = "FCT";
      tarjeta.append(fct);
    }

    columna.append(tarjeta);
    contenedor.append(columna);
  });

  document.querySelector("#totalAlumnos").textContent = alumnos.length;
}

// Botón «Crear»: con empresa crea un AlumnoFCT y, sin ella, un Alumno
function crearAlumno() {
  const error = document.querySelector("#error5");
  const nombre = document.querySelector("#nombre5").value.trim();
  const curso = document.querySelector("#curso5").value.trim();
  const empresa = document.querySelector("#empresa5").value.trim();
  const textoNotas = document.querySelector("#notas5").value.trim();

  if (nombre === "") {
    error.textContent = "Escribe el nombre del alumno.";
    error.classList.remove("d-none");
    return;
  }

  let alumno;
  if (empresa === "") {
    alumno = new Alumno(nombre, curso);
  } else {
    alumno = new AlumnoFCT(nombre, curso, empresa);
  }

  if (textoNotas !== "") {
    // "7, 8.5, 6" → ["7", " 8.5", " 6"] → [7, 8.5, 6]
    const notas = textoNotas.split(",").map((texto) => Number(texto.trim()));
    const hayNotaMala = notas.some((nota) => Number.isNaN(nota) || nota < 0 || nota > 10);
    if (hayNotaMala) {
      error.textContent = "Las notas tienen que ser números entre 0 y 10 separados por comas.";
      error.classList.remove("d-none");
      return;
    }
    notas.forEach((nota) => alumno.anadirNota(nota));
  }

  alumnos.push(alumno);
  error.classList.add("d-none");
  document.querySelector("#nombre5").value = "";
  document.querySelector("#empresa5").value = "";
  document.querySelector("#notas5").value = "";
  pintarAlumnos();
  console.log("Ejercicio 5: alumno creado →", alumno);
}

pintarAlumnos();


// ============================================================
// Ejercicio 6 · Fechas y textos
// ============================================================

// Días desde hoy hasta fecha (negativo si ya pasó).
// Math.round porque con el cambio de hora un día puede durar 23 o 25 horas.
function diasHasta(fecha) {
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  const milisegundosDia = 1000 * 60 * 60 * 24;
  const dias = Math.round((fecha - hoy) / milisegundosDia);
  console.log("Ejercicio 6: días hasta la fecha →", dias);
  return dias;
}

function mostrarDias() {
  const valor = document.querySelector("#fecha6").value;        // "2026-12-25", o "" si está vacía
  const salida = document.querySelector("#salida6a");

  if (valor === "") {
    salida.textContent = "Elige una fecha.";
    return;
  }

  // Ya está hecho: de "2026-12-25" a un Date. Fíjate en el mes - 1: el mes va de 0 a 11
  const [anio, mes, dia] = valor.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);
  const dias = diasHasta(fecha);
  const nombreFecha = fecha.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  console.log("Ejercicio 6: fecha →", nombreFecha);

  if (dias > 0) {
    salida.textContent = `Faltan ${dias} días: será ${nombreFecha}.`;
  } else if (dias === 0) {
    salida.textContent = `Es hoy: ${nombreFecha}.`;
  } else {
    salida.textContent = `Fue hace ${Math.abs(dias)} días: fue ${nombreFecha}.`;
  }
}

// «lucía martín ortega» → «LMO». El filter quita las palabras vacías que dejan los espacios dobles.
function iniciales(nombreCompleto) {
  const resultado = nombreCompleto.trim().split(" ").filter((palabra) => palabra !== "").map((palabra) => palabra[0].toUpperCase()).join("");
  console.log("Ejercicio 6: iniciales →", resultado);
  return resultado;
}

// Iniciales en minúsculas y tres cifras al azar: «lmo042» (padStart rellena con ceros)
function crearUsuario(nombreCompleto) {
  const numero = Math.floor(Math.random() * 1000);
  const cifras = String(numero).padStart(3, "0");
  const usuario = iniciales(nombreCompleto).toLowerCase() + cifras;
  console.log("Ejercicio 6: usuario →", usuario);
  return usuario;
}

function mostrarIniciales() {
  const nombre = document.querySelector("#nombre6").value;
  const salida = document.querySelector("#salida6b");

  if (nombre.trim() === "") {
    salida.textContent = "Escribe un nombre completo.";
    return;
  }

  salida.textContent = `Iniciales: ${iniciales(nombre)} · usuario: ${crearUsuario(nombre)}`;
  console.log("Ejercicio 6: nombre →", nombre);
}