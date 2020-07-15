// Comentário, strings e number
// strings (texto) pode ser com "", '' e template string ``
// se pode colocar um variável na string.
// const é constante não pode mudar, diferente de variável
const nome = "Jair";
const nome2 = 'Valéria';
const nome3 = `Jair e ${nome2}`

//console.log(nome3)

// Desafio
// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média

// Para saber qual o tipo de variável
// console.log(typeof notaAluno01)

const aluno01 = "Jair"
const notaAluno01 = 9.8

const aluno02 = "Nina"
const notaAluno02 = 10

const aluno03 = "Valéria"
const notaAluno03 = 8

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3
//console.log(media)

// Condicionais
// Se a média for maior que 5, parabenizar a turma
if (media > 5) {
    console.log(`A média foi de ${media}. Parabéns`)
} else {
    console.log('A média é menor que 5')
}
