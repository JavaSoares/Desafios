/* ===================================================
    OPERADORES DE COMPARAÇÃO

    >       Maior
    <       Menor
    >=      Maior igual a
    <=      Menor igual a
    ==      Igual a
    ===     Igual e do mesmo tipo
    !=      Diferente de
    !===    Diferente, inclusive tipo

=======================================================*/

//console.log( 5 > 4 ) // true
//console.log( 5 >= 4 ) // true
//console.log( 5 < 4 ) // false
//console.log( 5 <= 4 ) // false

//console.log( 4 == "4" ) // true
//console.log( 4 === "4" ) // false
//console.log( 4 != "5" ) // true
//console.log( 4 !== "5" ) // true

// DESAFIO 1
//const idade = 17
// verificar se a pessoa é maior ou igual a 18 anos
// se sim, deixar entrar, se não, bloquear entrada
//if(idade >= 18) {
//    console.log("Deixar entrar")
//} else {
//    console.log("Bloquear entrada")
//}

// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos
//if(idade === 17){
//    console.log('Volte qunando tiver 18 anos')
//}

/*====================================================
    OPERADORES LÓGICOS

    && "E" As duas condições devem ser verdadeiras
       para que a condição final seja verdadeira.
    || "OU" Uma das condições deve ser verdadeira
       para que a condição final seja verdadeira.
    !  "NÃO" Nega uma condição
    
===================================================*/

//console.log( 5 == 5 && 6 == 6 ) // true
//console.log( 5 == 5 && 6 != 6 ) // false

//console.log( 5 != 5 || 6 == 6 ) // true
//console.log( 5 != 5 || 6 != 6 ) // false

//console.log(!(5 > 6)) // true
//console.log(!(5 < 6)) // false


// DESAFIO 1
const idade = 19
// verificar se a pessoa é maior ou igual a 18 anos
// se sim, deixar entrar, se não, bloquear entrada
// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos
if(!(idade >= 18) && idade === 17) {
    console.log("Bloquear entrada")
} else {
    console.log("Deixar entrar")
}

if(!(idade >= 18) || idade === 17) {
    console.log("Bloquear entrada")
} else {
    console.log("Deixar entrar")
}

/*=====================================================
    OPERADORES ARITMÉTICOS

    *   Multiplicação
    /   Divisão
    %   Resto da Divisão
    +   Adição
    -   Subtração

=====================================================*/

console.log( 2 * 2 ) // 4
console.log( 2 / 2 ) // 1
console.log( 2 % 1.5 ) // 0.5
console.log( 2 + 2 ) // 4
console.log( 2 - 2 ) // 0

