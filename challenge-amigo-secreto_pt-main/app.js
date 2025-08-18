//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = []

function adicionarAmigo() {
  let amigo = document.getElementById('amigo').value
  //console.log(amigo)

  if (amigo !== "") {
    listaAmigos.push(amigo)
    console.log(listaAmigos)
    amigo == "";
    exibirAmigos()
  }else{
    let erro = document.getElementById("resultado")
    erro.innerHTML = 'Por favor, insira um nome.'
  }

}

function exibirAmigos() {
  let lista = document.getElementById('listaAmigos')
  lista.innerHTML = ''
  
  for (let i = 0; i < listaAmigos.length; i++) {
    const novoAmigo = document.createElement("li");
    novoAmigo.textContent = listaAmigos[i];
    lista.appendChild(novoAmigo)
  }
  
}

function sortearAmigo() {
  if (listaAmigos.length == 0){
    let erro = document.getElementById("resultado")
    erro.innerHTML = 'Por favor, insira um nome.'
  }

  let max = listaAmigos.length
  let min = 1
  let amigoSorteado = Math.floor(Math.random() * (max + 1))

  console.log(amigoSorteado)
  if(amigoSorteado !== 0){
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = listaAmigos[amigoSorteado]
  }else{
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = listaAmigos[amigoSorteado]
  }

  amigoSorteado = 0;
}