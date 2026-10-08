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

  // const si no va a cambiar; let para al menos una a la que des valor más tarde.
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
  
  //       Number("123"), Number("12abc"), Number(""), Number(true),
  //       Boolean(0), Boolean("texto") y Boolean("").
}


// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  // Ejemplo: una expresión que mezcla tipos
  console.log('"5" - 2 →', "5" - 2);   // espero "5" - 2 → 3

  // Ejemplo: la misma pareja comparada con == y con ===
  console.log('5 == "5" →', 5 == "5");     // espero 5 == "5" → true
  console.log('5 === "5" →', 5 === "5");   // espero 5 === "5" → false
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

  // Un dato que cambia, con let
  let horasSemnales=10;

  horasSemnales+=5;

  // La ficha con plantilla de cadena: backticks () y ${ }
  const ficha = `Soy ${nombre}, estudio ${curso} de ${ciclo} en ${institucion} y mi afición es el ${aficion}.`;
  alert(ficha);

  const fichaConMas = "Soy " + nombre + ", estudio " + curso + " de " + ciclo + " en " + institucion + " y mi afición es el " + aficion + ".";
  console.log(fichaConMas);
  console.log(ficha === fichaConMas);
}
