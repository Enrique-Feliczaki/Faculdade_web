const titulo = document.getElementById("titulo")
const mensagem = document.querySelector("mensagem")
const paragrafos = document.querySelectorAll("p")
const botao = document.getElementById("botao")
addEventListener("click", function(){
    titulo.innerText = "Você clicou no botão!"
    document.body.style.backgroundColor = "#ffa500"
    mensagem.classList.add("destaque")
    paragrafos.forEach(function(p){
        p.innerText += "palmeiras"
    })
})