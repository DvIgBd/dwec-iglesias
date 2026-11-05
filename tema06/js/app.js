// Tarea 6 · DWEC · David Iglesias Borland · Objetos y arrays

console.log("app.js cargado");

// Devuelve un array como texto: [1, 2, 3]
function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// Ejercicio 1 · Ficha de estudiante

const estudiante = {
  Nombre: "David",
  Apellidos: "Iglesias Borland",
  Edad: 26,
  Curso: "2º DAW",
  presentarse: function() {
    return "Soy " + this.Nombre + " " + this.Apellidos + ", tengo " + this.Edad + " años y estudio " + this.Curso + ".";
  }
};

// Pinta la lista de propiedades y la frase de presentación
function verFicha() {
  const salida1 = document.getElementById("salida1");
  const lista = document.createElement("ul");
  /* 
    Idea original:
      const claves = Object.keys(estudiante).slice(0, -1);

      Así eliminaba la función para que no se mostrara
      pero no se mostraba curso si hacemos el delete estudiante["Curso"].
  */
  const claves = ["Nombre", "Apellidos", "Edad", "Curso"];
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
  });

  salida1.appendChild(lista);
  salida1.appendChild(mensaje);

  console.log(estudiante);
}

// Suma un año a la edad y vuelve a pintar
function cumplirAnios() {
  if (estudiante["Edad"] < 100) {
    estudiante["Edad"] += 1;
  } else {
    estudiante["presentarse"] = function() {return "Dudo mucho que esta persona sea un alumno."};
  }
  
  console.log("El estudiante ha cumplido " + estudiante["Edad"] + " años.");

  verFicha();
}

// Borra el curso con delete y vuelve a pintar
function quitarCurso() {
  delete estudiante["Curso"];

  console.log("Curso: " + estudiante["Curso"]);

  verFicha();
}


// Ejercicio 2 · Colores

const colores = ["rojo", "verde", "azul"];

// Pinta la lista de colores y el contador
function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;

  console.log("Colores mostrados.");
}

// Muestra un aviso en #aviso2
function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

// Añade el color escrito al final
function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);
  casilla.value = "";

  document.querySelector("#aviso2").classList.add("d-none");

  mostrarColores();

  console.log("Ejercicio 2: push →", comoTexto(colores));
}

// Quita el último color con pop
function quitarUltimo() {
  if (colores.length === 0) {
    avisar2("No hay colores que quitar dentro de la lista.");
  } else {
    const color = colores.pop();
    mostrarColores();
    console.log("Color eliminado: " + color);
  }
}

// Quita el primer color con shift
function quitarPrimero() {
  if (colores.length === 0) {
    avisar2("No hay colores que quitar dentro de la lista.");
  } else {
    const color = colores.shift();
    mostrarColores();
    console.log("Color eliminado: " + color);
  }
}

mostrarColores();


// Ejercicio 3 · Catálogo de productos

const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Pinta en la tabla la lista de productos que recibe
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

// Pinta todos los productos
function mostrarProductos() {
  const mensaje = document.getElementById("mensaje3");

  mensaje.textContent = "Hay " + productos.length + " productos disponibles.";
  pintarProductos(productos);

  console.log("Productos mostrados: " + productos.length);
}

// Ordena una copia de más barato a más caro
function ordenarPorPrecio() {
  const lista = [...productos];
  const mensaje = document.getElementById("mensaje3");

  lista.sort(function(a, b) {
    return a.precio - b.precio;
  });

  pintarProductos(lista);
  mensaje.textContent = "Productos ordenados de más barato a más caro.";

  console.log("Productos ordenados por precio.");
}

// Muestra los productos de más de 50 €
function filtrarCaros() {
  const lista = [...productos];
  const mensaje = document.getElementById("mensaje3");
  const productosCincuenta = lista.filter(function(a) {
    return a.precio > 50;
  });
  
  pintarProductos(productosCincuenta);
  mensaje.textContent = "Hay " + productosCincuenta.length + " productos que cuestan más de 50€.";

  console.log("Productos de más de 50€: " + productosCincuenta.length);
}

// Busca el primer producto cuyo nombre contiene el texto escrito
function buscarProducto() {
  const producto = document.getElementById("buscarProducto");
  const resultadoProd  = producto.value.trim().toLowerCase();
  const mensaje = document.getElementById("mensaje3");

  if (resultadoProd === "") {
    mensaje.textContent = "No has buscado ningún producto.";
    pintarProductos([]);
  } else {
    const resultadoBusqueda = productos.find(function (prod) {
      return prod.nombre.toLowerCase().includes(resultadoProd)
    });
    if (resultadoBusqueda === undefined) {
      mensaje.textContent = "No existe el producto que has buscado.";
      pintarProductos([]);
    } else {
      mensaje.textContent = "Se ha encontrado " + resultadoBusqueda.nombre.toLowerCase() + ".";
      pintarProductos([resultadoBusqueda]);
    }
  }

  console.log("Producto buscado: " + resultadoProd);
}

mostrarProductos();


// Ejercicio 4 · Notas

const alumno = {
  nombre: "David",
  notas: [],
  // Guarda la nota si es un número entre 0 y 10
  anadirNota: function(nota) {
    if (Number.isNaN(Number(nota)) || nota < 0 || nota > 10) {
      return false;
    } else {
      this.notas.push(nota);
      return true;
    }
  },
  // Devuelve la media de las notas, o 0 si no hay
  media: function() {
    const longitudNotas = this.notas.length;

    if (longitudNotas === 0) {
      return 0;
    }

    const notaMedia = (this.notas.reduce(function (total, n) {return total + n}, 0) / longitudNotas).toFixed(2);

    return notaMedia;
  }
};

// Pinta las notas como badges y la media
function mostrarNotas() {
  
  const notas = document.getElementById("notas");
  const media = document.getElementById("media");
  const notaMedia = alumno.media();
  const longitudNotas = alumno.notas.length;

  notas.textContent = "";
  
  for (const nota of alumno.notas) {
    const txt = nota >= 5 ? "text-bg-success" : "text-bg-danger";
    const span = document.createElement("span");

    span.classList.add("badge", txt, "mx-1");
    span.textContent = nota; 

    notas.appendChild(span);
  }

  longitudNotas !== 0 ? media.textContent = "Media de " + longitudNotas + " notas: " + notaMedia : media.textContent = "Todavía no hay notas.";

  console.log("Notas mostradas: " + comoTexto(alumno.notas));
}

// Lee la nota, la valida y la añade
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

  console.log("Añadir nota: " + comoTexto(alumno.notas));
}

// Deja la lista de notas vacía
function borrarNotas() {
  alumno.notas = [];
  mostrarNotas();

  console.log("Notas borradas.");
}

mostrarNotas();


// Ejercicio 5 · map, filter y reduce

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Dobles con map
function verDobles() {
  const salida = document.getElementById("salida5");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const numerosDoble = numeros.map(function (n) { return n * 2});

  salida.textContent = "";

  p.textContent = "Lista editada: " + comoTexto(numerosDoble);
  p2.textContent = "Lista original: " + comoTexto(numeros);

  salida.appendChild(p);
  salida.appendChild(p2);

  console.log("Ver dobles: " + comoTexto(numerosDoble));
}

// Pares con filter
function verPares() {
  const salida = document.getElementById("salida5");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const numerosPares = numeros.filter(function (n) {return n % 2 === 0});

  salida.textContent = "";

  p.textContent = "Lista editada: " + comoTexto(numerosPares);
  p2.textContent = "Lista original: " + comoTexto(numeros);

  salida.appendChild(p);
  salida.appendChild(p2);

  console.log("Ver pares: " + comoTexto(numerosPares));
}

// Suma con reduce
function verSuma() {
  const salida = document.getElementById("salida5");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const sumaTotal = numeros.reduce(function (total, n) {return total + n}, 0);

  salida.textContent = "";

  p.textContent = "Suma total: " + sumaTotal;
  p2.textContent = "Lista original: " + comoTexto(numeros);

  salida.appendChild(p);
  salida.appendChild(p2);

  console.log("Ver suma: " + sumaTotal);
}

// Pares, sus dobles y la suma de los dobles
function verCadena() {
  const salida = document.getElementById("salida5");
  const pares = numeros.filter(function (n) {return n % 2 === 0});
  const dobles = pares.map(function (n) {return n * 2});
  const sumaTotal = dobles.reduce(function (total, n) {return total + n}, 0);

  salida.textContent = "";
  
  const diccionarioFunciones = {
    "Pares": comoTexto(pares),
    "Dobles de los pares": comoTexto(dobles),
    "Suma Total": sumaTotal
  }

  for (const [clave, funcion] of Object.entries(diccionarioFunciones)) {
    const p = document.createElement("p");
    p.textContent = clave + ": " + funcion;
    salida.appendChild(p);
  }

  console.log("Ver cadena: " + sumaTotal);
}


// Ejercicio 6 · Ciudades

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];

// Pinta un badge por ciudad con su posición
function mostrarCiudades() {
  const ciu = document.getElementById("ciudades");

  ciu.textContent = "";

  ciudades.forEach(function (ciudad, posicion) {
    const span = document.createElement("span");
    
    span.textContent = posicion + " · " + ciudad;
    span.classList.add("badge", "bg-secondary", "mx-1");

    ciu.appendChild(span);
  });

  console.log("Ciudades mostradas: " + comoTexto(ciudades));
}

// Muestra lo que devuelve slice(2, 5)
function verSlice() {
  const salida = document.getElementById("salida6");
  const p = document.createElement("p");
  const p2 = document.createElement("p");

  salida.textContent = "";

  p.textContent = "La función slice(2, 5) devuelve: " + comoTexto(ciudades.slice(2, 5));
  p2.textContent = "Ciudades en el array: " + comoTexto(ciudades);

  p2.classList.add("mb-0");

  salida.appendChild(p);
  salida.appendChild(p2);

  mostrarCiudades();

  console.log("Ver slice: " + comoTexto(ciudades.slice(2, 5)));
}

// Quita dos ciudades con splice(2, 2)
function hacerSplice() {
  const salida = document.getElementById("salida6");
  const p = document.createElement("p");
  const p2 = document.createElement("p");

  salida.textContent = "";

  if (ciudades.length < 3) {
    p.textContent = "Debes restaurar la lista debido a ciudades insuficientes.";
    p.classList.add("text-danger", "mb-0");

    salida.appendChild(p);
  } else {
    p.textContent = "Ciudades que han sido eliminadas de la lista: " + comoTexto(ciudades.splice(2, 2));
    p2.textContent = "Ciudades restantes: " + comoTexto(ciudades) + " (" + ciudades.length + " ciudades restantes).";

    p2.classList.add("mb-0");

    salida.appendChild(p);
    salida.appendChild(p2);
  }

  mostrarCiudades();

  console.log("Hacer splice: " + comoTexto(ciudades));
}

// Vuelve a copiar las ciudades originales
function restaurarCiudades() {
  const buscar = document.getElementById("buscarCiudad");
  const salida = document.getElementById("salida6");
  
  buscar.value = "";
  salida.textContent = "Pulsa un botón para ver el resultado.";

  ciudades = [...ciudadesOriginal];

  mostrarCiudades();

  console.log("Ciudades restauradas.");
}

// Muestra lo que devuelven includes() e indexOf()
function buscarCiudad() {
  const buscar = document.getElementById("buscarCiudad");
  const salida = document.getElementById("salida6");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const resultadoBusqueda = ciudades.includes(buscar.value.trim());
  const indice = ciudades.indexOf(buscar.value.trim());

  salida.textContent = "";

  if (buscar.value.trim() === "") {
    p.textContent = "El campo de búsqueda está vacio.";
    p.classList.add("text-danger", "mb-0");
    salida.appendChild(p);
  } else {
    p.textContent = "La función includes() devuelve " + resultadoBusqueda + ".";
    p2.textContent = "La función indexOf() devuelve " + indice + ".";

    p2.classList.add("mb-0");

    salida.appendChild(p);
    salida.appendChild(p2);
  }

  console.log("Buscar ciudad: " + buscar.value.trim());
}

mostrarCiudades();