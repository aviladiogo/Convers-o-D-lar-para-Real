console.log('hello!');


var real = document.querySelector('#Real').value

function Disable(){
  document.getElementById("botao1").disabled = true;
  document.getElementById("botao2").disabled = false;
  document.getElementById("botao3").disabled = false;
  document.getElementById("botao4").disabled = false;

}

function DtoR() {
  var taxa = document.querySelector('#Taxa').value
  var dolar = document.querySelector('#Dolar').value
  var resultadoD = document.getElementById('name')
  resultadoD.innerHTML = parseFloat(dolar )* parseFloat(taxa)

}
function RtoD() {
  var taxa = document.querySelector('#Taxa').value
  var real = document.querySelector('#Real').value
  var resultadoR = document.getElementById('name2')
  resultadoR.innerHTML = parseFloat(real )/ parseFloat(taxa)
}
function Reset(){
  document.getElementById("botao1").disabled = false;
  document.getElementById("botao2").disabled = true;
  document.getElementById("botao3").disabled = true;
  document.getElementById("botao4").disabled = true;

  var resultadoD = document.getElementById('name')
  resultadoD.innerHTML = null

  var resultadoR = document.getElementById('name2')
  resultadoR.innerHTML = null
}
