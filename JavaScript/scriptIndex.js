function enviar() {
    var user = window.document.getElementById('login')
    var pass = window.document.getElementById('pass')
    if (user.value == '' && pass.value == '') {
        window.alert('Preencha os campos: "Login" e "Senha"')
    } else if (user.value == '') {
        window.alert('Preencha o campo "Login"')
    } else if (pass.value == '' && pass.value == '') {
        window.alert('Preencha o campo "Senha"')
    }
}