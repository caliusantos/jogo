
var titulos = [
  
    {
        id: 1,
        imgSrc : "imagens_time_europeus/liverpool.png",
        Altenativa1 : "Card1 - Alt 1",
        Altenativa2 : "Card1 - Alt 2",
        Altenativa3 : "Card1 - Alt 3",
    },
    {
        id: 2,
        imgSrc : "imagens_time_europeus/liverpool.png",
        LetraA : "Card2 - Alt 1",
        LetraB : "Card2 - Alt 2",
        LetraC : "Card2 - Alt 3",
    },
    {
        id: 3,
        imgSrc : "imagens_time_europeus/liverpool.png",
        Altenativa1 : "Card3 - Alt 1",
        Altenativa2 : "Card3 - Alt 2",
        Altenativa3 : "Card3 - Alt 3",
    },
    {
        id: 4,
        imgSrc : "imagens_time_europeus/liverpool.png",
        LetraA : "Card4 - Alt 1",
        LetraB : "Card4 - Alt 2",
        LetraC : "Card4 - Alt 3",
    },
    {
        id: 5,
        imgSrc : "imagens_time_europeus/liverpool.png",
        Altenativa1 : "Card5 - Alt 1",
        Altenativa2 : "Card5 - Alt 2",
        Altenativa3 : "Card5 - Alt 3",
    },
    {
        id: 6,
        imgSrc : "imagens_time_europeus/liverpool.png",
        LetraA : "Card6 - Alt 1",
        LetraB : "Card6 - Alt 2",
        LetraC : "Card6 - Alt 3",
    },
    {
        id: 7,
        imgSrc : "imagens_time_europeus/liverpool.png",
        Altenativa1 : "Card7 - Alt 1",
        Altenativa2 : "Card7 - Alt 2",
        Altenativa3 : "Card7 - Alt 3",
    },
    {
        id: 8,
        imgSrc : "imagens_time_europeus/liverpool.png",
        LetraA : "Card8 - Alt 1",
        LetraB : "Card8 - Alt 2",
        LetraC : "Card8 - Alt 3",
    },
    {
        id: 9,
        imgSrc : "imagens_time_europeus/liverpool.png",
        Altenativa1 : "Card9 - Alt 1",
        Altenativa2 : "Card9 - Alt 2",
        Altenativa3 : "Card9 - Alt 3",
    },
    {
        id: 10,
        imgSrc : "imagens_time_europeus/liverpool.png",
        LetraA : "Card10 - Alt 1",
        LetraA : "Card10 - Alt 2",
        LetraA : "Card10 - Alt 3",
    },
    {
        id: 11,
        imgSrc : "imagens_time_europeus/liverpool.png",
        Altenativa1 : "Card11 - Alt 1",
        Altenativa2 : "Card11 - Alt 2",
        Altenativa3 : "Card11 - Alt 3",
    },
    {
        id: 12,
        imgSrc : "imagens_time_europeus/liverpool.png",
        LetraA : "Card12 - Alt 1",
        LetraB : "Card12 - Alt 2",
        LetraC : "Card12 - Alt 3",
    }
]



function iniciaJogo(){
    let card = document.getElementById("card-1");
    card.innerHTML = 
    `
    Quantas troféus de premier league tem o Liverpool? <br>
    <img id= "escudo" src="${titulos[0].imgSrc} " alt="Liverpool"> <br>
    <input type="radio" name="resp-1" id="alt11"><label>${titulos[0].Alternativa1}</label> <br>
    <input type="radio" name="resp-1" id="alt12"><label>${titulos[0].Alternativa2}</label> <br>  
    <input type="radio" name="resp-1" id="alt13"><label>${titulos[0].Alternativa3}</label> <br>
    `
    
}
       
