function melhoresAlunos(listaAlunos) {
  let maiorMedia = 0;
  let melhorAluno = "";
  Object.keys(listaAlunos).forEach((aluno) => {
    let media = 0;
    let total = 0;
    listaAlunos[aluno].forEach((nota) => {
      total += nota;
    });
    media = total / listaAlunos[aluno].length;
    if (media >= maiorMedia) {
      maiorMedia = media;
      melhorAluno = aluno;
    }
  });
  return melhorAluno;
}

console.log(
  melhoresAlunos({
    Augusto: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9],
  })
);
