     const conversorbutton = document.querySelector(".converter");
     const moedaSelect = document.querySelector(".moeda").value
     
         
function conversor(){

    const valorInput = document.querySelector(".valor-input").value;
    const moedaSelect = document.querySelector(".moeda").value
    const blastoide = document.querySelector(".blastoide");
    const pikachu = document.querySelector(".pikachu");


    console.log(moedaSelect);
    const dolarToday = 5.2;
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
  
    conversorbutton.addEventListener ("click", conversor);