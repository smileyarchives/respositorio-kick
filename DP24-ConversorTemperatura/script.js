function converterTemperatura(){
    var div = document.getElementById("convertido")

    let celsius = parseFloat(document.getElementById("gCelsius").value)
    let unidade = document.getElementById("unidade").value
    let gConvertido
    
    switch(unidade){
        case "fahrenheit":
            gConvertido = `<p>${celsius}° Celsius = ${celsius * (9/5) + 32}° Fahrenheit`
            break
        default:
            gConvertido = `<p>${celsius}° Celsius = ${celsius + 273}° Kelvin`
    }

    div.innerHTML = gConvertido
}