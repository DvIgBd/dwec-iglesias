/*
  Tarea 4 · DWEC · [Tu nombre y apellidos]
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Restar: falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
  // TODO: como sumar(), con el operador -
}

function multiplicar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Multiplicar: falta el multiplicando o el multiplicador.");
  } else {
    const resultado = n1 * n2;
    mostrar(`${n1} x ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} x ${n2} = ${resultado}`);
  }
  // TODO: como sumar(), con el operador *
}

function dividir() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Dividir: el divisor o el dividendo.");
  } else if (n2 === 0) {
    mostrar("No se puede dividir entre 0.", "danger");
  } else {
    const resultado = n1 / n2;
    mostrar(`${n1} ÷ ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} ÷ ${n2} = ${resultado}`);  
  }
  // TODO: como sumar(), con el operador /
  // TODO: si el número 2 es 0, muestra un error en rojo. Ojo: en JavaScript, 5 / 0 no da error, da Infinity.
}

function potencia() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Potencia: falta la base o el exponente.");
  } else {
    const resultado = n1 ** n2;
    mostrar(`${n1}^${n2} = ${resultado}`);
    console.log(`Potencia: ${n1}^${n2} = ${resultado}`);  
  }
  // TODO: como sumar(), con el operador **
}

function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Módulo: falta algún número");
  } else if (n2 === 0) {
    mostrar("No se puede dividir entre 0.", "danger");
  } else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Módulo de: ${n1} % ${n2} = ${resultado}`);  
  }
  // TODO: el resto de la división, con el operador %
  // TODO: si el número 2 es 0, muestra un error en rojo (5 % 0 da NaN).
}


// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (n1 > n2) {
    mostrar(`${n1} es mayor que ${n2}.`);
    console.log(`Cual es mayor: ${n1} > ${n2} → ${n1}`);
  } else if (n1 < n2) {
    mostrar(`${n2} es mayor que ${n1}.`);
    console.log(`Cual es mayor: ${n2} > ${n1} → ${n2}`);
  } else {
    mostrar(`Ambos números son iguales (${n1}, ${n2}).`);
    console.log(`Cual es mayor: ${n1} === ${n2}`);
  }
  // TODO: con if, else if y else, di cuál de los dos números es mayor o si son iguales.
}

function parOImpar() {
  const n1 = leerNumero("numero1");

  (n1 % 2 === 0) ? mostrar(`${n1} es un número par.`) : mostrar(`${n1} es un número impar.`);
  // TODO: solo con el número 1. Usa el operador % y el ternario ( condición ? "par" : "impar" ).
  // TODO: si el número tiene decimales, avisa de que no es ni par ni impar.
}


// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  // TODO: si el número falta, tiene decimales o pasa de MAXIMO_REPETICIONES, muestra un error en rojo.
  // TODO: si no, repite con un for tantas veces como diga «veces». En cada vuelta:
  //         anadirLinea(`for · repetición ${i} de ${veces}`);
  //       y cuenta las vueltas en una variable contador.
  // TODO: al terminar, añade una línea con el total: «Total: 5 repeticiones» o «Total: 1 repetición».
}

function bucleWhile() {
  // TODO: lo mismo que bucleFor(), con un while.
}

function bucleDoWhile() {
  // TODO: lo mismo que bucleFor(), con un do…while. Pruébalo con 0 y con un negativo: ¿qué pasa?
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
  // TODO: como bucleFor(), pero cada vuelta añade un badge con el número de la repetición:
  //         anadirBadge(i, "primary");
  // TODO: los pares, de un color y los impares, de otro. Elige el color con el operador ternario.
}

function badgesWhile() {
  // TODO: lo mismo que badgesFor(), con un while.
}

function badgesDoWhile() {
  // TODO: lo mismo que badgesFor(), con un do…while.
}
