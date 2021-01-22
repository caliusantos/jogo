var pontuacaoatual = 0

function enviaResposta(){

    let resposta1 = document.getElementById("certa1").checked

    let resposta2 = document.getElementById("certa2").checked

    let resposta3 = document.getElementById("certa3").checked

    let resposta4 = document.getElementById("certa4").checked

    let resposta5 = document.getElementById("certa5").checked

    let resposta6 = document.getElementById("certa6").checked

    let resposta7 = document.getElementById("certa7").checked

    let resposta8 = document.getElementById("certa8").checked

    let resposta9 = document.getElementById("certa9").checked

    let resposta10 = document.getElementById("certa10").checked

    let resposta11 = document.getElementById("certa11").checked

    let resposta12 = document.getElementById("certa12").checked


if(resposta1 == true){
   
   pontuacaoatual = pontuacaoatual + 1;
   document.getElementById("resposta1").textContent = "você acertou! Você ganhou 10 pontos" 
}
else{
    
    document.getElementById("resposta1").textContent = "você errou"
}

if(resposta2 == true){
    pontuacaoatual = pontuacaoatual + 1;
    document.getElementById("resposta2").textContent = "você acertou! Você ganhou 10 pontos";
}
 else{
    document.getElementById("resposta2").textContent = "você errou";
}

 if(resposta3 == true){
    pontuacaoatual = pontuacaoatual + 1;
    document.getElementById("resposta3").textContent = "você acertou! Você ganhou 10 pontos";
}
 else{
    document.getElementById("resposta3").textContent = "você errou ";
}

 if(resposta4 == true){
    pontuacaoatual = pontuacaoatual + 1;
    document.getElementById("resposta4").textContent = "você acertou! Você ganhou 10 pontos";
}
 else{
    document.getElementById("resposta4").textContent = "você errou";
}
 
 if(resposta5 == true){
     pontuacaoatual = pontuacaoatual + 1;
     document.getElementById("resposta5").textContent = "você acertou! Você ganhou 10 pontos";
}
 else{
     document.getElementById("resposta5").textContent = "você errou";
}
 
 if(resposta6 == true){
    document.getElementById("resposta6").textContent = "você acertou! Você ganhou 10 pontos";
    pontuacaoatual = pontuacaoatual + 1;
}
 else{
     document.getElementById("resposta6").textContent = "você errou";
}

 if(resposta7 == true){
    document.getElementById("resposta7").textContent = "você acertou! Você ganhou 10 pontos";
    pontuacaoatual = pontuacaoatual + 1;
}
 else{
     document.getElementById("resposta7").textContent = "você errou";
}

 if(resposta8 == true){
    document.getElementById("resposta8").textContent = "você acertou! Você ganhou 10 pontos";
    pontuacaoatual = pontuacaoatual + 1;
}
 else{
     document.getElementById("resposta8").textContent = "você errou";
}

 if(resposta9 == true){
    document.getElementById("resposta9").textContent = "você acertou! Você ganhou 10 pontos";
    pontuacaoatual = pontuacaoatual + 1;
}
 else{
     document.getElementById("resposta9").textContent = "você errou";
}
 
 if(resposta10 == true){
    document.getElementById("resposta10").textContent = "você acertou! Você ganhou 10 pontos";
    pontuacaoatual = pontuacaoatual + 1;
}
 else{
     document.getElementById("resposta10").textContent = "você errou";
}

 if(resposta11 == true){
    document.getElementById("resposta11").textContent = "você acertou! Você ganhou 10 pontos";
    pontuacaoatual = pontuacaoatual + 1;
}
 else{
     document.getElementById("resposta11").textContent = "você errou";
}

if(resposta12 == true){
   document.getElementById("resposta12").textContent = "você acertou! Você ganhou 10 pontos";
   pontuacaoatual = pontuacaoatual + 1;
}
else{
    document.getElementById("resposta12").textContent = "você errou";
}
}