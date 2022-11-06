var dialog = window.document.getElementById('msg')
function enviar() {
    var user = window.document.getElementById('login')
    var pass = window.document.getElementById('pass')
    if (user.value == '' && pass.value == '') {
        dialog.showModal()
        dialog.innerHTML = '<h1>Não foi possível acessar sua conta :(</h1><h2>Preencha os campos: <strong>Login</strong> e <strong>Senha</strong><h2><button id="beforeBtn" onclick="before()">Voltar</button>'
        
    } else if (user.value == '') {
        window.alert('Preencha o campo "Login"')
    } else if (pass.value == '' && pass.value == '') {
        window.alert('Preencha o campo "Senha"')
    }
}

function before() {
    dialog.close()
}