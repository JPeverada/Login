const dataNasc = document.getElementById('dataNasc')
const btnCriar = document.getElementById('btn-criar')
const password = document.getElementById('password')
const passwordConf = document.getElementById('passwordOk')
const user = document.getElementById('user')

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

function salvaDados(usuario, senha){
    if (verificarSenha(password, passwordConf) === true && maiorIdade() === true){
        usuarios.push({ nome: usuario.value, senha: senha.value }) // nome e senha no objeto
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        return true
    }
    return false
}

function maiorIdade(){
    const dateNasc = new Date(dataNasc.value)
    const hoje = new Date
    let idade = hoje.getFullYear() - dateNasc.getFullYear()

    const mesAtual = hoje.getMonth()
    const diaAtual = hoje.getDate()
    const mesNasc = dateNasc.getMonth()
    const diaNasc = dateNasc.getDate()

    if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)){
        idade--
    }

    if(idade >= 18){
        return true
    } else {
        alert('Você é menor de idade! Não pode criar a conta!')
        return false
    }
}

function verificarSenha(text1, text2){
    if(text1.value != text2.value){
        alert("ERRO! Senhas não conferem! Verifique novamente.")
        return false;
    }   
    return true;
}

function criarConta() {
    alert("Conta criada com sucesso!");
    window.location.href = "login.html";
}

dataNasc.addEventListener('keypress', function(e){
    if (e.key === 13) {
        if (salvaDados(user, password)) {
            criarConta()
        }
    }
})

btnCriar.addEventListener('click', function() {
    if (salvaDados(user, password)) {
        criarConta()
    }
})
