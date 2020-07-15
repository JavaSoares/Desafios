// ### Construção e impressão de objetos

//- Nome: Rocketseat
//- Cor: Roxo
//- Foco: Programação
//- Endereço:

//  - Rua: Rua Guilherme Gembala
//  - Número: 260

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereço: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
};

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}`);

// ### Vetores e objetos
// Crie um programa com um objeto para armazenar dados de um programador como `nome`,
// `idade` e `tecnologias` que trabalha.

const programador = {
    nome: "Carlos",
    idade: 32,
    tecnologias: [
        { nome: "Cobol", especialidade: "Desktop" },
        { nome: "C++", especialidade: "Desktop" },
        { nome: "Javascript", especialidade: "Web/Mobile" },
        { nome: "Python", especialidade: "Data Science" }
    ]
};

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[1].nome} com especialidade em ${programador.tecnologias[1].especialidade}`)
