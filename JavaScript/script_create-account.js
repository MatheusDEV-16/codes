var nome = window.document.getElementById('user')
var senha = window.document.getElementById('password')
var confirm = window.document.getElementById('confirm')
var res = window.document.getElementById('res')
var dialog = window.document.getElementById('msg')
var email = window.document.getElementById('email')
function verify() {
    if (nome.value == '' || senha.value == '' || email.value == '' || confirm.value == '') {
        dialog.showModal()
        dialog.innerHTML = '<h2>Não foi possível criar sua conta :/</h2><h3>Preencha os campos corretamente</h3><button id="beforeBtn" onclick="closeModal()">Voltar</button>'
    } else if (senha.value != confirm.value) {
        dialog.showModal()
        dialog.innerHTML = '<h2>Não foi possível criar sua conta :/</h2><h3>As senhas não coincidem... Certifique-se de que suas senhas são iguais.</h3><button onclick="closeModal()" id="beforeBtn">Voltar</button>'
    }
}

function closeModal() {
    dialog.close()
}