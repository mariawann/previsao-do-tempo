let key = "9060de375d1f9b3ddb9f2386f227d38a"

function colocarNaTela(dados){
    console.log(dados)
   document.querySelector(".cidade").innerHTML = "Tempo em" +dados.name
document.querySelector(".temp").innerHTML= Math.floor(dados.main.temp)+"°C"
document.querySelector(".texto-previsao").innerhtml=dados.weather[0].description
document.querySelector(".umidade").innerhtml=dados.main.humidity+ "%"
document.querySelector(".img-previsao"). src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){


    let dados= await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt-br_&units=metric`).then(resposta=>resposta.json())
    
   colocarNaTela(dados)
}
function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}

