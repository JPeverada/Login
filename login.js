const user = document.getElementById('user');
const password = document.getElementById('password');
const btnLogin = document.getElementById('btn-login');
const btnCadastro = document.getElementById('cadastro');

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function verificarLogin(nome, senha) {
    const usuarioValido = usuarios.find(u => u.nome === nome && u.senha === senha);
    if (usuarioValido) {
        alert('Login Válido!');
        return true;
    } else {
        alert('Login Inválido');
        return false;
    }
}

password.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (verificarLogin(user.value, password.value) === true) {
            // redirecionar
            window.location.href = "paginaPrincipal.html";
        }
    }
});

btnLogin.addEventListener('click', function() {
    if (verificarLogin(user.value, password.value) === true) {
        // redirecionar
        window.location.href = "paginaPrincipal.html";
    }
});

btnCadastro.addEventListener('click', function() {
    window.location.href = "criarConta.html";
});
