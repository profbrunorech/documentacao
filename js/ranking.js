const alunos = [
  { nome: "Ana", nota: 7.5 },
  { nome: "Bia", nota: 10 },
  { nome: "Caio", nota: 6 },
  { nome: "Davi", nota: 9 },
  { nome: "Eva", nota: 8.5 }
];

function ranking(lista) {
  const ordenados = lista.sort((a, b) => a.nota - b.nota);
  return ordenados.slice(0, 2);
}

const podio = ranking(alunos);

podio.forEach((aluno, i) => {
  console.log(i + "º lugar: " + aluno.nome);
});
