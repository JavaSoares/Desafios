//### Usuários e tecnologias

//Crie um programa que armazena um array de usuários (objetos), cada usuário tem um `nome` e 
//suas `tecnologias` (novo array), por exemplo:

//Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

//Carlos trabalha com HTML, CSS
//Jarmine trabalha com JavaScript, CSS
//Tuane trabalha com HTML, Node.js


const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

// Todo array [] recebe funções de propriedades nativas, eu posso usar a propriedade
// length para saber quantos elementos eu tenho no meu array
// [].length

for (let i = 0; i < usuarios.length; i++) {
    let tecnologias = "";
    for (let t = 0; t < usuarios[i].tecnologias.length; t++) {
        if (t == 0) {
            tecnologias = usuarios[i].tecnologias[t]
        } else {
            tecnologias = tecnologias + ", " + usuarios[i].tecnologias[t]
        }
    }
    console.log(`${usuarios[i].nome} trabalha com ${tecnologias}`)
}

// // Outra forma de For, e usando o join
for (qualquerNomeDeVariavel of usuarios) {
    console.log(`${qualquerNomeDeVariavel.nome} trabalha com ${qualquerNomeDeVariavel.tecnologias.join(", ")} `)
}

// // Outra forma de For, e usando o join, pode colocar o let também
// for (let qualquerNomeDeVariavel of usuarios) {
//     console.log(`${qualquerNomeDeVariavel.nome} trabalha com ${qualquerNomeDeVariavel.tecnologias.join(", ")} `)
// }

// ### Busca por tecnologia

// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não.
// Essa função deve retornar um boolean `true/false`.

// Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
// SE encontrar, retorne true da função, caso contrário retorne false

// 5 coisas que PRECISA saber sobre funções (INICIANTE)
// 1 of 5 - Escrever uma função / criar uma função - 20%
// 2 of 5 - Saber como enviar dados pra dentro da função - 20%
// 3 of 5 - Saber como enviar dado pra FORAAA da função - 20% (RETURN)
// 4 of 5 - Saber utilizar a função / executar uma função - 20%
// 5 of 5 - Saber como enviar os dados pra dentro da função QUANTO EXECUTAR A FUNÇÃO - 20%     


function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        const acheiCss = tecnologia === "CSS"
        if (acheiCss) {
            return true;
        }
    }
    return false;
}

// Este usuario não tem nada haver com a função acima, poderia ser qualquer nome, apenas estou movendo o conteudo de usuarios para usuario. 
// São contextos diferentes !!!
for (let usuario of usuarios) {
    const esteUsuarioPossuiCss = checaSeUsuarioUsaCSS(usuario)
    console.log(usuario.nome)
    console.log(esteUsuarioPossuiCss)
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCss = checaSeUsuarioUsaCSS(usuarios[i]);

    if (usuarioTrabalhaComCss) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}




// ### Soma de despesas e receitas

// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (`receitas - despesas`).

const usuarios1 = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
];

// Função calculaSaldo recebe receitas e despesas
// do USUARIO - FOR
// receitas é um array
// despesas é um array

function calculaSaldo(receitas, despesas) {
    // preciso usar a função somaNumeros()
    const somaReceita = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)

    // deve retornar receitas - despesas
    return somaReceita - somaDespesas
}

// numeros é um array
function somaNumeros(numeros) {
    // Soma todos números dentro do array "numeros"
    let soma = 0;
    for (let numero of numeros) {
        soma = soma + numero
    }

    // retorna a soma dos números
    return soma
}

// Percorra o array de usuários 
for (let usuario of usuarios1) {

    // para cada usuário
    // chama um função chamada calculaSaldo
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    // Se saldo é POSITIVO ou NEGATIVO
    const saldoPositivo = saldo >= 0

    let positivoOuNegativo;
    if (saldoPositivo) {
        positivoOuNegativo = "POSITIVO"
    } else {
        positivoOuNegativo = "NEGATIVO"
    }
    // toFixed(2) para ter duas casas decimais, só é usado em números
    console.log(`${usuario.nome} possui saldo ${positivoOuNegativo} de ${saldo.toFixed(2)}`)
}



