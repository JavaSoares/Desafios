// Cálculo de IMC

const nome = "Carlos";
const peso = 284;
const altura = 1.88;

const imc = peso / (altura * altura);

if (imc >= 30) {
    console.log(`${nome} você está acima do peso`)
}else {
    console.log(`${nome} você não está acima do peso`)
}

// Cálculo de aposentadoria

const name = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;
const regra = idade + contribuicao;

if ((sexo ==="F" && contribuicao >= 30) || (regra >= 85)) {
    console.log(`${name}, você pode se aposentar.`)
} else if ((sexo ==="M" && contribuicao >= 35) || (regra >= 95)){
    console.log(`${name}, você pode se aposentar.`)
} else {
    console.log(`${name}, você ainda não pode se aposentar.`)
}