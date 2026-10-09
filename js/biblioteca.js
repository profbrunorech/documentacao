const emprestimos = [
  { aluno: "Ana", diasAtraso: "3" },
  { aluno: "Caio", diasAtraso: "0" },
  { aluno: "Bia", diasAtraso: "5" }
];

const MULTA_POR_DIA = 2.5;

function listarAtrasados(lista) {
  return lista.filter(e => e.diasatraso > 0);
}

function calcularMulta(lista) {
  let dias = 0;
  for (const e of lista) {
    dias += e.diasAtraso;
  }
  dias * MULTA_POR_DIA;
}

console.log("Atrasados:", listarAtrasados(emprestimos).length);

console.log("Multa total: R$", calcularMulta(emprestimos));