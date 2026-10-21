/*
  Tarea 4 · DWEC · David Iglesias Borland
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
}

function dividir() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Dividir: falta el divisor o el dividendo.");
  } else if (n2 === 0) {
    mostrar("No se puede dividir entre 0.", "danger");
    console.warn("Dividir: no se puede dividir entre 0.");
  } else {
    const resultado = n1 / n2;
    mostrar(`${n1} ÷ ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} ÷ ${n2} = ${resultado}`);  
  }
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
}

function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Módulo: falta algún número");
  } else if (n2 === 0) {
    mostrar("No se puede dividir entre 0.", "danger");
    console.warn("Módulo: no se puede dividir entre 0.");
  } else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Módulo de: ${n1} % ${n2} = ${resultado}`);  
  }
}


// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Par o impar: falta algún número");
  } else if (n1 > n2) {
    mostrar(`${n1} es mayor que ${n2}.`);
    console.log(`Cual es mayor: ${n1} > ${n2} → ${n1}`);
  }  else if (n1 < n2) {
    mostrar(`${n2} es mayor que ${n1}.`);
    console.log(`Cual es mayor: ${n2} > ${n1} → ${n2}`);
  } else {
    mostrar(`Ambos números son iguales (${n1}, ${n2}).`);
    console.log(`Cual es mayor: ${n1} === ${n2}`);
  }
}

function parOImpar() {
  const n1 = leerNumero("numero1");

  if (n1 % 1 !== 0) {
    mostrar(`${n1} es un número no es ni par ni impar.`, "danger");
    console.warn("Par o impar: número no válido.");
  } else {
    (n1 % 2 === 0) ? mostrar(`${n1} es un número par.`) : mostrar(`${n1} es un número impar.`);
  }
}


// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  const veces = leerNumero("numero1");
  let contador = 0;
  limpiarSalida();
  if (veces % 1 !== 0 || veces > MAXIMO_REPETICIONES || Number.isNaN(veces)) {
    mostrar("Escribe un número antes de operar.", "danger");
    console.warn("BucleFor: falta el número o es inválido.");
  } else {
    for (let i = 1; i <= veces; i++) {
      anadirLinea(`for · repetición ${i} de ${veces}`);
      contador++;
    }
     anadirLinea((contador !== 1) ? `Total: ${contador} repeticiones.` : `Total: ${contador} repetición.`);
  }
}

function bucleWhile() {
  const veces = leerNumero("numero1");
  let contador = 0;
  limpiarSalida();
  if (veces % 1 !== 0 || veces > MAXIMO_REPETICIONES || Number.isNaN(veces)) {
    mostrar("Escribe un número antes de operar.", "danger");
    console.warn("BucleWhile: falta el número o es inválido.");
  } else {
    while(contador < veces) {
      anadirLinea(`while · repetición ${contador + 1} de ${veces}`);
      contador++;
    }
    anadirLinea((contador !== 1) ? `Total: ${contador} repeticiones.` : `Total: ${contador} repetición.`);
  }
}

function bucleDoWhile() {
  const veces = leerNumero("numero1");
  let contador = 0;
  limpiarSalida();
  if (veces % 1 !== 0 || veces > MAXIMO_REPETICIONES || Number.isNaN(veces)) {
    mostrar("Escribe un número antes de operar.", "danger");
    console.warn("BucleDoWhile: falta el número o es inválido.");
  } else {
    do {
      anadirLinea(`while · repetición ${contador + 1} de ${veces}`);
      contador++;
    } while (contador < veces);
    anadirLinea((contador !== 1) ? `Total: ${contador} repeticiones.` : `Total: ${contador} repetición.`);
  }
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
