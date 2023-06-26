function proximo(){
    var nome = document.getElementById("nome").value
    var sobrenome = document.getElementById("sobrenome").value
    var email = document.getElementById("email").value
    var mensagem = document.getElementById("mensagem")

    if(nome && sobrenome && email){
        var endereco = document.createElement("div")
        endereco.innerHTML = `
            <div class="content">
                <label>CEP</label>
                <input type="text" id="cep" onblur="pesquisaCep(this.value)">
            </div>
            <div class="content">
                <label>Rua</label>
                <input type="text" id="rua">
            </div>
            <div class="content">
                <label>Bairro</label>
                <input type="text" id="bairro">
            </div>
            <div class="content">
                <label>Cidade</label>
                <input type="text" id="cidade">
            </div>
            <div class="content">
                <label>UF</label>
                <input type="text" id="estado">
            </div>         

            <button onclick="finalizar()">Finalizar</button>
            <p id="mensagem" class="mensagem"></p>
        `

        var form = document.querySelector(".container")
        form.innerHTML = ""
        form.appendChild(endereco)
    }
    else{
        mensagem.textContent = "* Preencha todos os campos."
    }
}