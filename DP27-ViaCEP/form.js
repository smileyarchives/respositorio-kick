function limpaForm(){
    document.getElementById("rua").value = ("")
    document.getElementById("bairro").value = ("")
    document.getElementById("cidade").value = ("")
    document.getElementById("estado").value = ("")
}

function atualizaForm(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById("rua").value = (conteudo.logradouro)
        document.getElementById("bairro").value = (conteudo.bairro)
        document.getElementById("cidade").value = (conteudo.localidade)
        document.getElementById("estado").value = (conteudo.uf)
    } else{
        limpaForm()
        alert("Não encontrado")
    }
}

function pesquisaCep(valor){
    var cep = valor.replace(/\D/g, "")

    if(cep != ""){
        var validaCep = /^[0-9]{8}$/
        if(validaCep.test(cep)){
            document.getElementById("rua").value = "buscando"
            document.getElementById("bairro").value = "buscando"
            document.getElementById("cidade").value = "buscando"
            document.getElementById("estado").value = "buscando"

            var script = document.createElement("script")
            script.src = "https://viacep.com.br/ws/"+cep+"/json/?callback=atualizaForm"

            document.body.appendChild(script)
        } else{
            limpaForm()
            alert("Formato inválido")
        }
    } else{
        limpaForm()
    }
}