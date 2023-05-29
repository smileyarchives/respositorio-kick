var div = document.getElementById("visualizarMedia")
var statusAluno = document.getElementById("statusAluno") 
var mediaAluno = document.getElementById("media")


function calcularMedia(){
    statusAluno.innerHTML = ""
    mediaAluno.innerHTML = ""

    var n1 = document.getElementById("nota1").value
    var n2 = document.getElementById("nota2").value
    var n3 = document.getElementById("nota3").value
    n1 = parseFloat(n1)
    n2 = parseFloat(n2)
    n3 = parseFloat(n3)
    
    var media = (n1 + n2 + n3) / 3
    
    div.style.display = "block"
    
    if(media >= 6){
        statusAluno.innerHTML = "STATUS DO ALUNO: <span id='aprov'>APROVADO</span>"
    } else{
        statusAluno.innerHTML = "STATUS DO ALUNO: <span id='rep'>REPROVADO</span>"
    }
    mediaAluno.innerHTML = "MÉDIA FINAL: " + media
}