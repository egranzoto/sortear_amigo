//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problem

let amigos = [];
let listaAmigos = 0;
let amigoAdicionado = "";

function adicionarAmigo(){

    addAmigo = capturaAmigo();
    
    if (addAmigo != ""){

if (amigos.includes(addAmigo)){
        alert("Você adicionou: " + addAmigo);
}
    else {listaAmigos += 1;
        amigos.push(addAmigo);
        document.getElementById("amigo").value = '';
}
    document.getElementById("amigo").value = '';
    };
    atualizaListaDeAmigos(amigos);
};

function capturaAmigo(){
    let letraMaiuscula ="";
    let captura = document.getElementById("amigo").value;
    letraMaiuscula = captura.toUpperCase();
    if (captura != "" ){
        return(letraMaiuscula);
        }
    else {
        alert("Por favor, insira um nome!");
        return("");
         };
    }

function atualizaListaDeAmigos(lista){
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";
    lista.forEach(elemento => {
        const li = document.createElement("li");
        li.textContent = elemento;
        listaHTML.appendChild(li);
    });
}

function sortearAmigo(){
if (listaAmigos == 0){
    let limpaLista = document.getElementById("listaAmigos");
        limpaLista.innerHTML = "";
        alert("Insira o nome de um amigo");
    return;
   }
let amigoSorteado =  Math.floor(Math.random()*listaAmigos);
    let listaHTML = document.getElementById("listaAmigos");
   listaHTML.innerHTML = `Seu amigo secreto é: ${amigos[amigoSorteado]}`;
   listaAmigos = 0;
   amigos = [];
}
