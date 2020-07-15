// Funções e Métodos
// Criar um programa que calcula a média
// das turmas de alunos e envia
// mensagem do cálculo da média

const alunosDaTurmaA = [
    {
        nome: "Jair",
        nota: 9.8
    },
    {
        nome: "Valéria",
        nota: 10
    },
    {
        nome: "Nina",
        nota: 10
    },
]

const alunosDaTurmaB = [
    {
        nome: "Mayk",
        nota: 1.8
    },
    {
        nome: "Diego",
        nota: 10
    },
    {
        nome: "Fulano",
        nota: 0
    },
]

function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3;
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

// Condicionais
// Se a média for maior que 5, parabenizar a turma

function enviaMesagem(media, turma) {
    if (media > 5) {
        console.log(`A média ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A média ${turma} é menor que 5`)
    }
}

// A média1 foi calculada na função acima e a Turma A e Turma B, informada aqui abaixo "Turma A", "Turma B"
enviaMesagem(media1, "Turma A");
enviaMesagem(media2, "Turma B");

// Marcar aluno como reprovdo se a nota
// for menor que 5
// e, também, enviar uma mensagem

// mostra o tipo de variavel
console.log(typeof alunosDaTurmaB[0].reprovado)

function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if (aluno.nota < 5) {
        // incui um objeto no array
        aluno.reprovado = true
    }
}


function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`aluno ${aluno.nome} foi reprovado`)

    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno)
    }
    //   console.table(alunos)

}

console.table(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaA)
console.table(alunosDaTurmaB)
alunoReprovado(alunosDaTurmaB)
