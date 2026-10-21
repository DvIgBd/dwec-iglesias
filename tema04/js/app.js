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

// Aviso en consola de que el archivo se ha cargado bien
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

// Resta el número 2 al número 1
function restar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  // Si falta alguno, aviso y no opero
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Restar: falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

// Multiplica los dos números
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

// Divide el número 1 entre el número 2
function dividir() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Dividir: falta el divisor o el dividendo.");
  } else if (n2 === 0) {
    // Entre 0 no se divide
    mostrar("No se puede dividir entre 0.", "danger");
    console.warn("Dividir: no se puede dividir entre 0.");
  } else {
    const resultado = n1 / n2;
    mostrar(`${n1} ÷ ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} ÷ ${n2} = ${resultado}`);  
  }
}

// Eleva el número 1 (base) al número 2 (exponente)
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

// Saca el resto de dividir el número 1 entre el número 2
function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Módulo: falta algún número");
  } else if (n2 === 0) {
    // Con 0 no hay resto posible
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

// Compara los dos números y dice cuál es mayor o si son iguales
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
    // Si no es mayor ni menor, es que son iguales
    mostrar(`Ambos números son iguales (${n1}, ${n2}).`);
    console.log(`Cual es mayor: ${n1} === ${n2}`);
  }
}

// Dice si el número 1 es par o impar
function parOImpar() {
  const n1 = leerNumero("numero1");

  // Si tiene decimales (o está vacío) no puede ser par ni impar
  if (n1 % 1 !== 0) {
    mostrar(`${n1} es un número no es ni par ni impar.`, "danger");
    console.warn("Par o impar: número no válido.");
  } else {
    // Si el resto entre 2 es 0, es par; si no, impar
    (n1 % 2 === 0) ? mostrar(`${n1} es un número par.`) : mostrar(`${n1} es un número impar.`);
  }
}


// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

// Escribe una línea por repetición usando for
function bucleFor() {
  const veces = leerNumero("numero1");
  let contador = 0;
  limpiarSalida();

  // Tiene que ser un entero, no estar vacío y no pasar del máximo
  if (veces % 1 !== 0 || veces > MAXIMO_REPETICIONES || Number.isNaN(veces)) {
    mostrar((veces > MAXIMO_REPETICIONES) ? "El número no debe superar el máximo de repeticiones (20)." : "Escribe un número válido.", "danger");
    console.warn("BucleFor: falta el número o es inválido.");
  } else {
    for (let i = 1; i <= veces; i++) {
      anadirLinea(`for · repetición ${i} de ${veces}`);
      contador++;
    }
    // Total final, en singular o plural según haga falta
    anadirLinea((contador !== 1) ? `Total: ${contador} repeticiones.` : `Total: ${contador} repetición.`);
  }
}

// Lo mismo, pero con while: comprueba la condición antes de cada vuelta
function bucleWhile() {
  const veces = leerNumero("numero1");
  let contador = 0;
  limpiarSalida();

  if (veces % 1 !== 0 || veces > MAXIMO_REPETICIONES || Number.isNaN(veces)) {
    mostrar((veces > MAXIMO_REPETICIONES) ? "El número no debe superar el máximo de repeticiones (20)." : "Escribe un número válido.", "danger");
    console.warn("BucleWhile: falta el número o es inválido.");
  } else {
    while(contador < veces) {
      anadirLinea(`while · repetición ${contador + 1} de ${veces}`);
      contador++;
    }
    anadirLinea((contador !== 1) ? `Total: ${contador} repeticiones.` : `Total: ${contador} repetición.`);
  }
}

// Lo mismo, pero con do...while: primero hace la vuelta y luego comprueba
function bucleDoWhile() {
  const veces = leerNumero("numero1");
  let contador = 0;
  limpiarSalida();

  if (veces % 1 !== 0 || veces > MAXIMO_REPETICIONES || Number.isNaN(veces)) {
    mostrar((veces > MAXIMO_REPETICIONES) ? "El número no debe superar el máximo de repeticiones (20)." : "Escribe un número válido.", "danger");
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

// Pinta un badge rojo por repetición usando for
function badgesFor() {
  const veces = leerNumero("numero1");
  let contador = 0;
  limpiarSalida();

  if (veces % 1 !== 0 || veces > MAXIMO_REPETICIONES || Number.isNaN(veces)) {
    mostrar("Escribe un número antes de operar.", "danger");
    console.warn("BucleFor: falta el número o es inválido.");
  } else {
    for (let i = 1; i <= veces; i++) {
      anadirBadge(i, "danger");
      contador++;
    }
    anadirLinea((contador !== 1) ? `Total: ${contador} repeticiones.` : `Total: ${contador} repetición.`);
  }
}

// Pinta un badge azul por repetición usando while
function badgesWhile() {
  const veces = leerNumero("numero1");
  let contador = 0;
  limpiarSalida();

  if (veces % 1 !== 0 || veces > MAXIMO_REPETICIONES || Number.isNaN(veces)) {
    mostrar("Escribe un número antes de operar.", "danger");
    console.warn("BucleWhile: falta el número o es inválido.");
  } else {
    while(contador < veces) {
      anadirBadge(contador + 1, "primary");
      contador++;
    }
    anadirLinea((contador !== 1) ? `Total: ${contador} repeticiones.` : `Total: ${contador} repetición.`);
  }
}

// Pinta un badge verde por repetición
function badgesDoWhile() {
  const veces = leerNumero("numero1");
  let contador = 0;
  limpiarSalida();

  if (veces % 1 !== 0 || veces > MAXIMO_REPETICIONES || Number.isNaN(veces)) {
    mostrar("Escribe un número antes de operar.", "danger");
    console.warn("BucleWhile: falta el número o es inválido.");
  } else {
    while(contador < veces) {
      anadirBadge(contador + 1, "success");
      contador++;
    }
    anadirLinea((contador !== 1) ? `Total: ${contador} repeticiones.` : `Total: ${contador} repetición.`);
  }
}