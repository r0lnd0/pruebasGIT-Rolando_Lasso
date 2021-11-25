//Ejercicio #1
var numero1 = 5;
var numero2 = 8;
if (numero1 < numero2) {
  console.log("numero1 no es mayor que numero2");
}
if (numero2 > 0) {
  console.log("numero2 es positivo");
}
if (numero1 * -1 <= 0) {
  console.log("numero1 es negativo o distinto de cero");
}
if (numero1 + 1 <= numero2) {
  console.log(
    "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2"
  );
}


//Ejercicio #2
const factorial = (n) => {
  let total = 1;
  for (let i = n; i > 1; i--) {
    total *= i;
  }
  return total;
};
console.log(factorial(5));


//Ejercicio #3
const isPar = (n) => {
  if (n % 2 === 0) {
    return `${n} es un numero par.`;
  }
  return `${n} es un numero impar.`;
};
console.log(isPar(4));
console.log(isPar(5));


//Ejercicio #4
const isPalindrome = (str) => {
  const formatedStr = str.replaceAll(" ", "").toLowerCase();
  let reverse = formatedStr.split("").reverse().join("");
  return formatedStr === reverse;
};
console.log(isPalindrome("La ruta nos aporto otro paso natural"));


//Ejercicio #5
class Persona {
  nombre;
  edad;
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  obtDetalles() {
    console.log(`${this.nombre} tiene ${this.edad} años.`);
  }
}
class Estudiante extends Persona {
  calificacion;
  constructor(nombre, edad, calificacion) {
    super(nombre, edad);
    this.calificacion = calificacion;
  }
  obtDetalles() {
    super.obtDetalles();
    console.log(
      `${this.nombre} tiene ${this.edad} años y su calificación es: ${this.calificacion}.`
    );
  }
}
class Profesor extends Persona {
  asignatura;
  nivel;
  constructor(nombre, edad, asignatura = "JS", nivel = "básico") {
    super(nombre, edad);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  obtDetalles() {
    super.obtDetalles();
    console.log(
      `${this.nombre} tiene ${this.edad} años y es un profesor de ${this.asignatura} y tiene un nivel de ${this.nivel}.`
    );
  }
}
class Grupo {
  profesor;
  estudiantes;
  promedio;
  constructor(profesor, estudiantes, promedio) {
    this.profesor = profesor;
    this.estudiantes = estudiantes;
    this.promedio = promedio;
  }
  calcularPromedio() {
    return (
      this.estudiantes.reduce((ac, cv) => ac + cv.calificacion, 0) /
      this.estudiantes.length
    );
  }
  calificar() {
    this.estudiantes.forEach(
      (e) => (e.calificacion = Math.floor(Math.random() * 10))
    );
    return "Se realizo la calificación del grupo";
  }
}
const estudiantes = [
  new Estudiante("Diego", 18),
  new Estudiante("Pedro", 21),
  new Estudiante("Pablo", 17),
  new Estudiante("Maria", 23),
  new Estudiante("Laura", 22),
  new Estudiante("Isis", 19),
];
const profesor = new Profesor("Juan", 40);
const grupo = new Grupo(profesor, estudiantes);
console.log(grupo.calificar());
console.log(grupo.calcularPromedio());


//Ejercicio #6
const combinacionStr = (str) => {
  let resultado = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      resultado.push(str.slice(i, j + 1));
    }
  }
  const resultadoInvertido = resultado.map((r) =>
    r.split("").reverse().join("")
  );
  return [...new Set([resultado, resultadoInvertido])].join(",");
};
console.log(combinacionStr("casa"));
