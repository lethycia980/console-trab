/*let numeroSecreto = gerarNumeroAlea();

function exibirText(tag,texto) {
  let campo = document.querySelector(tag);
   campo.innerHTML = texto;
}
exibirText('h1','Jogo do numero secreto');
exibirText('p','escolha um número entre 1 e 10');

function verificarChute() {
  let chute = document.querySelector('input').value;
  console.log(chute == numeroSecreto);
}

function gerarNumeroAlea(){
  return parseInt(Math.random()* 10 + 1 );
}
*/
function oLa(){
  console.log("Olá,visitantes!")
}


function exibNome(nome){
  console.log (`olá,${nome}`);
}
exibNome("lethycia")

function calTriplo(numero){
  return numero * 3;
}
let resulTri = calTriplo(6);
console.log(resulTri);

function meD(a,b,c){
  console.log("calcular media,resultado a seguir")
  return (a+b+c)/3;
}
let media = meD(5,8,10);
console.log("{",media,"}");

function menor(a,b){

  return a < b ? a : b;
}
let numMen = menor(9,30);
console.log(numMen);

function quadrado(numero){
  return numero**2
}
let result = quadrado(2);
console.log(result)
