const titulo = document.getElementById("titulo")
const mensagem = document.querySelector("mensagem")
const paragrafos = document.querySelectorAll("p")
const botao = document.getElementById("botao")
const inputNome = document.getElementById("nome")
const enviar = document.getElementById("enviar")
const saudacao = document.getElementById("saudacao")
addEventListener("click", function(){
    titulo.innerText = "Você clicou no botão!"
    document.body.style.backgroundColor = "#ffa500"
    mensagem.classList.add("destaque")
    paragrafos.forEach(function(p){
        p.innerText += "palmeiras"
    })
})

function exibirSaudacao(){
    const nome = inputNome.value
    saudacao.innerText = `Olá, ${nome}!`
}

enviar.addEventListener("click", exibirSaudacao)