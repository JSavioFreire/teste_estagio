var primeiro = 0
var segundo = 1
var numeroEscolhido = 55
while (segundo <= numeroEscolhido){
    var soma = primeiro + segundo
    primeiro = segundo
    segundo = soma
}

if(primeiro == numeroEscolhido){
    console.log(`O número informado (${numeroEscolhido}) pertence a sequência de Fibonacci.`)
}else{
    console.log(`O valor informado (${numeroEscolhido}) não pertence a sequência de Fibonacci.`)
}