function verify() {
    var nome = String(window.document.getElementById('user').value)
    var senha = String(window.document.getElementById('password').value)
    var email = String(window.document.getElementById('email').value)
    var res = window.document.getElementById('res')

    if (nome == '' || senha == '' || email == '') {
        res.innerHTML = 'Preencha os campos corretamente'
    } else {
        res.innerHTML = `Enviamos um email de confirmação para: ${email}`
    }
}