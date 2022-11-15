var dialog = window.document.getElementById('msg')
//var res = window.document.getElementById('res')
//const eyeSvg = window.document.getElementById('showPassUser')
//const password = window.document.getElementById('pass')
function enviar() {
    var user = window.document.getElementsById('login')
    var pass = window.document.getElementsById('pass')
    if (user.value == '' && pass.value == '') {
        dialog.showModal()
        dialog.innerHTML = '<h1>Não foi possível acessar sua conta :(</h1><h2>Preencha os campos: <strong>Login</strong> e <strong>Senha</strong></h2><button id="beforeBtn" onclick="before()">Voltar</button>'
        
    } else if (user.value == '') {
        dialog.showModal()
        dialog.innerHTML = '<h1>Não foi possível acessar sua conta :(</h1><h2>Preencha o campo: <strong>Login</strong></h2><button id="beforeBtn" onclick="before()">Voltar</button>'
    } else if (pass.value == '') {
        dialog.showModal()
        dialog.innerHTML = '<h1>Não foi possível acessar sua conta :(</h1><h2>Preencha o campo: <strong>Senha</strong></h2><button id="beforeBtn" onclick="before()">Voltar</button>'
    }
}

function before() {
    dialog.close()
}

function reveal() {
    let inputTypeIsPassWord = pass.type == "password"
    if (inputTypeIsPassWord) {
        showPassword()
    } else {
        hidePassword()
    }
}

function showPassword() {
    password.setAttribute("type", "text")
    eyeSvg.setAttribute("src", "../images/eye.png")
}

function hidePassword() {
    password.setAttribute("type", "password")
    eyeSvg.setAttribute("src", "../images/showeye.png")
}