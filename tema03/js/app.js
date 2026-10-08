/*
  Tarea 3 · DWEC · [Tu nombre y apellidos]
  Variables, tipos y conversiones.

  Cómo usar esta plantilla:
  · Hay una función por ejercicio. Cada una se ejecuta al pulsar su botón «Ejecutar» de index.html.
  · Escribe tu código DENTRO de cada función, donde pone TODO. Cuando lo hagas, borra el TODO.
  · Solo console.log() y alert(): el JavaScript no escribe nada dentro de la página.
  · let y const, nunca var. Comillas rectas (" o ').
*/

console.log("app.js cargado: pulsa «Ejecutar» en cada ejercicio");


// Ejercicio 1 · Variables y typeof
function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  // Ejemplo: una variable y su typeof en la consola
  const edad = 20;   // number
  const texto = "hola";
  const bool = false;
  let nulo = null;
  let indefinido;
  const numGrande = 231312312312414134324234234234234234234234n;

  console.log("edad =", edad, "→", typeof edad);
  console.log("texto =", texto, "→", typeof texto);
  console.log("bool =", bool, "→", typeof bool);
  console.log("nulo =", nulo, "→", typeof nulo);
  console.log("indefinido =", indefinido, "→", typeof indefinido);
  console.log("numGrande =", numGrande, "→", typeof numGrande);
  indefinido = 13;
  console.log("Variable let (indefinido) =", indefinido,  "→", typeof indefinido);

  // TODO: declara una variable de cada tipo que falta: string, boolean, null, undefined y bigint (como 10n).
  //       const si no va a cambiar; let para al menos una a la que des valor más tarde.
  // TODO: muestra en la consola el valor y el typeof de cada una, como en el ejemplo.
  // TODO: da valor a tu variable let y vuelve a mostrar su typeof.
}


// Ejercicio 2 · Conversiones explícitas
// Escribe el comentario «espero …» ANTES de ejecutar. Si fallas, no lo cambies: márcalo en la tabla de la página.
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  // Ejemplo: una conversión, tu predicción y el resultado con su tipo
  const a = String(123);   // espero "String(123) →123string"
  console.log("String(123) →", a, typeof a);
  const b = Number("123");
  console.log("Number(\"123\") →", b, typeof b); // espero "Number("123") → 123 number"
  const c = Number("12abc");
  console.log("Number(\"12abc\") →", c, typeof c); // espero "Number("12abc") → cannot convert string to number"
  const d = Number("");
  console.log("Number(\"\") →", d, typeof d); // espero "Number("") → 0 number"
  const e = Number(true);
  console.log("Number(true) →", e, typeof e); // espero "Number(true) → 1 number"
  const f = Boolean(0);
  console.log("Boolean(0)  →", f, typeof f); // espero "Boolean(0) → false boolean"
  const g = Boolean("texto");
  console.log("Boolean(\"texto\")  →", g, typeof g); // espero "Boolean("texto") → true boolean"
  const h = Boolean("");
  console.log("Boolean(\"\")  →", h, typeof h); // espero "Boolean("") → false boolean"
  
  
  // TODO: el resto de conversiones obligatorias, cada una con su «espero …»:
  //       Number("123"), Number("12abc"), Number(""), Number(true),
  //       Boolean(0), Boolean("texto") y Boolean("").
  // TODO: muestra en la consola el resultado y el typeof de cada una.
}


// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  // Ejemplo: una expresión que mezcla tipos
  console.log('"5" - 2 →', "5" - 2);   // espero "5" - 2 → 3

  // TODO: cinco expresiones más que mezclen tipos (al menos dos inventadas por ti), cada una con su «espero …».

  // Ejemplo: la misma pareja comparada con == y con ===
  console.log('5 == "5" →', 5 == "5");     // espero 5 == "5" → true
  console.log('5 === "5" →', 5 === "5");   // espero 5 === "5" → false

  // TODO: haz lo mismo con 0 y false, y con null y undefined.
  console.log(`0 == null`, 0 == null); // espero 0 == null → true
  console.log(`0 === null`, 0 === null); // espero 0 === null → false
}


// Ejercicio 4 · Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  // Tus datos, con const
  const nombre = "David";
  const ciclo = "DAW";
  const curso = "2º";
  const institucion = "MEDAC";
  const aficion = "Deporte";
  // TODO: ciclo, curso y una afición, también con const.

  // Un dato que cambia, con let
  let horasSemnales=10;

  horasSemnales+=5;
  // TODO: por ejemplo, las horas que has estudiado esta semana. Después súmale algo con +=.

  // La ficha con plantilla de cadena: backticks () y ${ }
  const ficha = `Soy ${nombre}, estudio ${curso} de ${ciclo} en ${institucion} y mi afición es ${aficion}.`;
  // TODO: completa la ficha con todos tus datos y muéstrala con alert() y en la consola.
  alert(ficha);

  const fichaConMas = "Soy " + nombre + ", estudio " + curso + " de " + ciclo + " en " + institucion + " y mi afición es " + aficion + ".";
  console.log(fichaConMas);
  console.log(ficha === fichaConMas);
  // TODO: escribe la misma ficha concatenando con + en una constante fichaConMas y muéstrala en la consola.
  // TODO: compara las dos con === y muestra el resultado en la consola: tiene que salir true.

  // Recuerda: el error de dar otro valor a una const se provoca en la consola del navegador, no aquí.
}
