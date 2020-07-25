// string
let nome: string = 'Vitor';
console.log(nome);

// number
let idade: number = 17;
console.log(idade);

// boolean
let possuiHobbies: boolean = false;
console.log(possuiHobbies);

// tipos explícitos => Neste caso ele fica flexível sendo do tipo any
let minhaIdade;
minhaIdade = 27;
minhaIdade = '27';

// array
let hobbies: any[] = ["cozinhar", "correr"];

// tuplas => Array definido com tipos explícitos
let endereço: [string, number, number] = ["Rua Mondaí", 99, 123];
console.log(endereço);

// enums => valores para ficarem numerados
enum diasSemana {
  Segunda,
  Terça,
  Quarta,
  Quinta,
  Sexta
}

let segunda: diasSemana = diasSemana.Segunda
console.log(segunda);

let terça: diasSemana = diasSemana.Terça
console.log(terça);

// any => evitar utilizar
let carro: any = 'BMW'
console.log(carro);

carro = ['fiat', 'bmw'];
console.log(carro);

// funções

// Para definir o tipo do retorno da função
function retornaMeuNome(): string {
  return nome;
}
console.log(retornaMeuNome());

// Quando a função não retorna nada você pode definir o tipo dela com void
function digaOi(): void {
  console.log('oi');
}
digaOi();

// Fazendo tipagem dos parâmetros
function multiplicar(a: number, b: number): number {
  return a * b;
}
console.log(multiplicar(2,1));