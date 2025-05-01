const senhaCorreta = "12345"
const botao = document.getElementById("enviar")
const campoNome = document.getElementById("nome")
const campoSenha = document.getElementById("senha")
const mensagem = document.getElementById("mensagem")

botao.addEventListener("click", function () {
    let nome = campoNome.value.trim()
    let senha = campoSenha.value.trim()

    if (!nome || !senha) {
        mensagem.textContent = "Preencha todos os campos."
        mensagem.style.color = "orange"
        return
    }

    if (senha === senhaCorreta) {
        mensagem.style.color = "green"
        mensagem.textContent = `Bem-vindo, ${nome}!`
    } else {
        mensagem.style.color = "red"
        mensagem.textContent = "Senha incorreta, tente novamente."
    }
})
