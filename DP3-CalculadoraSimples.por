// DP3-KICK......: calculadora simples em portugol
// OPERAÇÕES.....: soma, subtração, multiplicação e divisão
// OBSERVAÇÕES...: menu de seleção de operação
//                 opção "sair" ou "cancelar"
//                 usuário deverá escolher se irá realizar outra operação

programa {
  funcao inicio() {

    inteiro primeiroNumero, segundoNumero, resultado, operador
    caracter repete

    faca {
      escreva("Digite um valor para o primeiro número: ")
      leia(primeiroNumero)

      escreva("Digite um valor para o segundo número: ")
      leia(segundoNumero)

      escreva("------ OPERADORES ------")
      escreva("\n1 - soma")
      escreva("\n2 - subtração")
      escreva("\n3 - multiplicação")
      escreva("\n4 - divisão")
      escreva("\n5 - cancelar")
      escreva("\n------------------------")
      escreva("\nDigite o número do operador desejado: ")
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
          escreva("Opção inválida!")
          pare
      }

      se (operador != 5){
        escreva("\nDeseja realizar outra operação? (s/ n): ")
        leia(repete)
      } senao{
        repete = 'n'
      }

    } enquanto (repete == "s")
  }
}