     const conversorbutton = document.querySelector(".converter");
     const moedaSelect = document.querySelector(".moeda");
     
         
function conversor(){

    const valorInput = document.querySelector(".valor-input").value;
    const moedaSelect = document.querySelector(".moeda").value
    const blastoide = document.querySelector(".blastoide");
    const pikachu = document.querySelector(".pikachu");


    console.log(moedaSelect);
    const dolarToday = 4.97;
    const euroToday = 6.2;

    

    if(moedaSelect=='dolar'){
            blastoide.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD"
    }).format(valorInput/dolarToday);
    }

    if(moedaSelect =='euro'){
         blastoide.innerHTML = new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency:"EUR"
    }).format(valorInput/euroToday);
    }

   pikachu.innerHTML = new Intl.NumberFormat("pt-BR",{
    style:"currency",
    currency:"BRL"
   }).format(valorInput);

   



 }
  
    function changecurrency(){

        const charizard = document.querySelector(".transacao .charizard");
        const image= document.querySelector(".currency-img")

          if(moedaSelect.value == "dolar"){

        charizard.innerHTML ="Dólar americano"
        image.src = "./Dólar.png"

          }

        if(moedaSelect.value == "euro"){

         charizard.innerHTML = "Euro";
            image.src = "./Euro.png"

          }
          
          
          conversor()

     

    }


    moedaSelect.addEventListener("change", changecurrency )
    conversorbutton.addEventListener ("click", conversor);