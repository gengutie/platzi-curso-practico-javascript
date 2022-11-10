function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

//let lista1 = [500, 300, 100, 400, 800];

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function ordenarLista(lista) {
  lista = lista.sort(function (a, b) {
    return a - b;
  });
  return lista;
}

function calcularMediana(lista) {
  lista = ordenarLista(lista);

  let mediana;
  const mitadLista = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;
  } else {
    mediana = lista[mitadLista];
  }

  return mediana;
}

function ordenarLista1(lista) {
  let cambios = false;
  do {
    cambios = false;
    for (let i = 0; i < lista.length - 1; i++) {
      if (lista[i] > lista[i + 1]) {
        listaAuxiliar = lista[i];
        lista[i] = lista[i + 1];
        lista[i + 1] = listaAuxiliar;

        cambios = true;
      }
    }
  } while (cambios === true);

  return lista;
}
