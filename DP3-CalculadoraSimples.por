// DP3-KICK......: calculadora simples em portugol
// OPERA��ES.....: soma, subtra��o, multiplica��o e divis�o
// OBSERVA��ES...: menu de sele��o de opera��o
//                 op��o "sair" ou "cancelar"
//                 usu�rio dever� escolher se ir� realizar outra opera��o

programa {
  funcao inicio() {

    inteiro primeiroNumero, segundoNumero, resultado, operador
    caracter repete

    faca {
      escreva("Digite um valor para o primeiro n�mero: ")
      leia(primeiroNumero)

      escreva("Digite um valor para o segundo n�mero: ")
      leia(segundoNumero)

      escreva("------ OPERADORES ------")
      escreva("\n1 - soma")
      escreva("\n2 - subtra��o")
      escreva("\n3 - multiplica��o")
      escreva("\n4 - divis�o")
      escreva("\n5 - cancelar")
      escreva("\n------------------------")
      escreva("\nDigite o n�mero do operador desejado: ")
      leia(operador)

      escolha(operador){
        caso 1:
          resultado = primeiroNumero + segundoNumero
          escreva(primeiroNumero, " + ", segundoNumero, " = ", resultado)
          pare
        caso 2:
          resultado = primeiroNumero - segundoNumero
          escreva(primeiroNumero, " - ", segundoNumero, " = ", resultado)
          pare
        caso 3:
          resultado = primeiroNumero * segundoNumero
          escreva(primeiroNumero, " * ", segundoNumero, " = ", resultado)
          pare
        caso 4:
          resultado = primeiroNumero / segundoNumero
          escreva(primeiroNumero, " / ", segundoNumero, " = ", resultado)
          pare
        caso 5:
          escreva("Programa Encerrado.")
          pare
        caso contrario:
          escreva("Op��o inv�lida!")
          pare
      }

      se (operador != 5){
        escreva("\nDeseja realizar outra opera��o? (s/ n): ")
        leia(repete)
      } senao{
        repete = 'n'
      }

    } enquanto (repete == "s")
  }
}