function register(){
    let nome = document.getElementById("userName")
    let sobrenome = document.getElementById("userLastName")
    let email = document.getElementById("userEmail")
    let telefone = document.getElementById("userPhone")
    let senha = document.getElementById("userPassword")
    let confirmarSenha = document.getElementById("userConfirmPassword")

    registerStyle(nome, "#ff0000", "#008000")
    registerStyle(sobrenome, "#ff0000", "#008000")
    registerStyle(email, "#ff0000", "#008000")
    registerStyle(telefone, "#ff0000", "#008000")
    registerStyle(senha, "#ff0000", "#008000")
    registerStyle(confirmarSenha, "#ff0000", "#008000")
}

function registerStyle(input, colorOne, colorTwo){
    if(!input.checkValidity()){
        document.getElementById('obrig-t').style.display = 'block'
        return input.style.border = `1px solid ${colorOne}`
    }
    else{
        return input.style.border = `1px solid ${colorTwo}`
    }
}