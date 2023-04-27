



const curso1 = {
    idCurso: 1,
    curso: "HTML e CSS",
    descricao: "Aprenda a estrutura e a estilização",
    duracaoMeses: 6,
    valorNormal: 800,
    requisitos: "NAO REQUER Conhecimentos Previos de Programacao",
}

let c1 =  { idCurso, curso, descricao, duracaoMeses, valorNormal, requisitos } = curso1
let idC1 = idCurso;
let nC1 = curso1.curso;
let t1 = curso1.duracaoMeses
let dC1 = c1.descricao;
let vNC1 = c1.valorNormal;
let rC1 = c1.requisitos;
console.log(c1);
console.log(idC1);
console.log(nC1);
console.log(dC1);
console.log(vNC1);
console.log(rC1);
console.log(t1)


/*  {
    idCurso: 2,
    curso: "Especializacao DOM",
    descricao:
      "Aprofunde seus conhecimentos em DOM para melhor manipulacao da logica e aplicacao de JS e frameworks derivados",
    duracao: "3 meses",
    valorNormal: 1200,
    requisitos:
      "REQUER Conhecimentos Previos de JAVASCRIPT en FRONT-END e de estruturacao de paginas web com CSS e JS",
  },
  {
    idCurso: 3,
    curso: "Especializacao REACT",
    descricao:
      "Construa paginas com a metodologia SPA e o framework queridinho das empresas na ESPECIALIZACAO REACT PLENO",
    duracao: "4 meses",
    valorNormal: 1600,
    requisitos:
      "REQUER Conhecimentos Previos de JAVASCRIPT en FRONT-END e de estruturacao de paginas web com CSS e JS e nocoes de SPA",
  },
  {
    idCurso: 4,
    curso: "API REST PLENO",
    descricao: "FOCADO EM FULLSTACK DEVLOPERS JR",
    duracao: "4 meses",
    valorNormal: 2400,
    requisitos: "Programador FULLSTACK JR",
  },

let { idCurso, curso, duracao, valorNormal, requisitos } = curso

console.log(curso)*/

const c2 = {
    ...c1,
    idCurso: 2,
    curso: "Especializacao DOM",
    descricao:
        "Aprofunde seus conhecimentos em DOM para melhor manipulacao da logica e aplicacao de JS e frameworks derivados",
    duracaoMeses: 3,
    valorNormal: 1200,
    requisitos:
        "REQUER Conhecimentos Previos de JAVASCRIPT en FRONT-END e de estruturacao de paginas web com CSS e JS",
}

const listaCursos = []
listaCursos.push(c1, c2)
console.log(listaCursos)

const c3 = {
    ...c2,
    idCurso:3,
    curso: "Especializacao REACT",
    descricao:
        "Construa paginas com a metodologia SPA e o framework queridinho das empresas na ESPECIALIZACAO REACT PLENO",
    duracaoMeses: 4,
    valorNormal: vNC1 * 2,
    requisitos:
        "REQUER Conhecimentos Previos de JAVASCRIPT en FRONT-END e de estruturacao de paginas web com CSS e JS e nocoes de SPA",
}
const c4 = {
    ...c3,
    idCurso: 4,
    curso: "API REST PLENO",
    descricao:
        "FOCADO EM FULLSTACK DEVLOPERS JR",
    duracaoMeses: 4,
    valorNormal: vNC1 * 2,
    requisitos:
        "conocimento equivalente a desenvolvedor web fullstack JR",
}

listaCursos.push(c3, c4)
console.log(listaCursos)





document.addEventListener('DOMContentLoaded', () => {
    let artC1 = document.getElementById('d1')

    for (let i = 0; i < listaCursos.length; i++)
        artC1.innerHTML += `<article class="card"> <p>Curso #00${listaCursos[i].idCurso}</p>
          <img src="../IMG/cursos/tipo-${listaCursos[i].idCurso}.png" alt="Imagem card curso ${nC1}">
          <h3>${listaCursos[i].descricao}</h3>
            <p>${listaCursos[i].requisitos}</p>
            <a class="card__botao" href="../bra-dev/cursos/tipo-${listaCursos[i].idCurso}">ver más</a>

</article>`
})
