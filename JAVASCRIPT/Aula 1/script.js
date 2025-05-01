const botao = document.getElementById("enviar")
const campoNome = document.getElementById("nome")
const campoIdade = document.getElementById("idade")
const mensagem = document.getElementById("mensagem")

botao.addEventListener("click", function(){
    let nome = campoNome.value
    let idade = Number(campoIdade.value)
    if(nome==="" || isNaN(idade)){
        mensagem.textContent = "Por favor, preencha todos os campos corretamente!"
        mensagem.style.color = "red";
        return;
    }
    if(idade >= 18){
        mensagem.textContent = `Olá, ${nome}! Você é maior de idade`
        mensagem.style.color = "green";
    }
})
    
