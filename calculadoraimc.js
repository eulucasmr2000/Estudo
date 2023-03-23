function calcularImc(){

    var nome = document.getElementById('nome').value
    var peso = document.getElementById('peso').value
    var altura = document.getElementById('altura').value
    var resultado = document.getElementById('resultado')
    var calcular = document.getElementById('calcular')
    var valorImc = (peso / (altura * altura)).toFixed(1)

    var classificacao = ''

    if(valorImc < 18.5){
        classificacao = 'abaixo do peso ideal'
    }else if (valorImc < 25){
        classificacao =  'no peso ideal'
    } else if (valorImc < 30){
        classificacao = 'levemente acima do peso'
    } else if (valorImc < 35){
        classificacao = 'com obesidade grau 1'
    } else if (valorImc < 40){
        classificacao = 'com obesidade grau 2'
    } else if (valorImc > 40){
        classificacao = 'com obesidade grau 3'
    }

    resultado.textContent =  `${nome}, seu IMC é de ${valorImc}, e você está ${classificacao}` 
}