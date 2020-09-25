let botButton = document.querySelector(".bot__button");

let botContainer = document.querySelector(".bot__container");
let botCardOne = document.querySelector(".bot__card-1");
let botCardContainer = document.querySelector(".bot__card-container");
let botCardTwo = document.querySelector(".bot__card-2");
let botItem = document.querySelectorAll(".bot__item");
let btn = document.querySelector(".btn");

botButton.addEventListener("click", () =>{
    botContainer.classList.toggle("active");

    if(botCardOne.style.animation || botCardContainer.style.animation){
        botCardOne.style.animation="";
        botCardContainer.style.animation="";
        botCardTwo.style.animation = "";
        btn.style.animation = "";


        for(let i=0; i<botItem.length; i++){
            botItem[i].style.animation = "";
        }
    }
    else{
        botCardOne.style.animation = `load 1s linear forwards .4s`;
        botCardContainer.style.animation = `load 1.2s ease-in forwards 1.6s`;
        botCardTwo.style.animation = `load 1.5s ease-in forwards 2.5s`;
        btn.style.animation = `load 1.2s ease-in forwards 10s`;

        for(let i=0; i<botItem.length; i++){
            botItem[i].style.animation = `load 1.5s ease-in forwards ${4.1+(1.5*i)}s`;
        }
    }

});