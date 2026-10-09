const presencas = [true, true, false, true, false, true, true, true];

function calcularFrequencia(lista) {
  let total = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] = true) {
      total++;
    }
  }
  return total / lista.length * 10;
}

const frequencia = calcularFrequencia(presencas);

if (frequencia > 75) {
  console.log("Frequência suficiente: " + frequencia + "%");
} else {
  console.log("Reprovado por falta: " + frequencia + "%");
}