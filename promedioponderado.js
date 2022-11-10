const notas = [
  {
    curso: "Educación Física",
    nota: 10,
    creditos: 2,
  },
  {
    curso: "Programación",
    nota: 8,
    creditos: 5,
  },
  {
    curso: "Finanzas personales",
    nota: 7,
    creditos: 5,
  },
];

const notasConCreditos = notas.map(function (objetoNotas) {
  return objetoNotas.nota * objetoNotas.creditos;
});

const sumDeNotasConCreditos = notasConCreditos.reduce(function (
  sum = 0,
  newVal
) {
  return sum + newVal;
});

const creditos = notas.map(function (objetoNotas) {
  return objetoNotas.creditos;
});

const sumDeCreditos = creditos.reduce(function (sum = 0, newVal) {
  return sum + newVal;
});

const promedioPonderadoNotasConCreditos = sumDeNotasConCreditos / sumDeCreditos;

console.log(promedioPonderadoNotasConCreditos);
