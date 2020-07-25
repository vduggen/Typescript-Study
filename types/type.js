"use strict";
// string
var nome = 'Vitor';
console.log(nome);
// number
var idade = 17;
console.log(idade);
// boolean
var possuiHobbies = false;
console.log(possuiHobbies);
// tipos explícitos => Neste caso ele fica flexível sendo do tipo any
var minhaIdade;
minhaIdade = 27;
minhaIdade = '27';
// array
var hobbies = ["cozinhar", "correr"];
// tuplas => Array definido com tipos explícitos
var endereço = ["Rua Mondaí", 99, 123];
console.log(endereço);
// enums => valores para ficarem numerados
var diasSemana;
(function (diasSemana) {
    diasSemana[diasSemana["Segunda"] = 0] = "Segunda";
    diasSemana[diasSemana["Ter\u00E7a"] = 1] = "Ter\u00E7a";
    diasSemana[diasSemana["Quarta"] = 2] = "Quarta";
    diasSemana[diasSemana["Quinta"] = 3] = "Quinta";
    diasSemana[diasSemana["Sexta"] = 4] = "Sexta";
})(diasSemana || (diasSemana = {}));
var segunda = diasSemana.Segunda;
console.log(segunda);
var terça = diasSemana.Terça;
console.log(terça);
// any => evitar utilizar
var carro = 'BMW';
console.log(carro);
carro = ['fiat', 'bmw'];
console.log(carro);
// funções
// Para definir o tipo do retorno da função
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
// Quando a função não retorna nada você pode definir o tipo dela com void
function digaOi() {
    console.log('oi');
}
digaOi();
// Fazendo tipagem dos parâmetros
function multiplicar(a, b) {
    return a * b;
}
console.log(multiplicar(2, 1));
