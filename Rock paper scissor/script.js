let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
   const randomId=  Math.floor(Math.random()*3)
   return options[randomId];
}

const draw =()=>{
    console.log("Game is Draw");
    msg.innerText= "Game Draw"
    
}

const showwinner=(userWin)=>{
    if(userWin){
        userScore++;
       userScorePara.innerText=userScore; 
        msg.innerText="You Win";
        msg.style.backgroundColor="black"
        
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="You Lose";
        msg.style.backgroundColor="green"
        
    }
};

const playGame=((userChoice)=>{
    console.log("User Choice is =" , userChoice);
     // generate computer choics
     const compChoice = genCompChoice();
     console.log("computer choice =",compChoice );

     if(userChoice===compChoice){
        draw();
     }
     else{
         let userWin=true;
         if(userChoice==="rock"){
            // scissor,paper
            userWin = compChoice===paper?false:true;
         }
         else if(userChoice==="paper"){
            // scissor,rock
            userWin=compChoice==="scissor"?false:true;
         }
         else{
            userWin=compChoice==="rock"?false:true;
         }
         showwinner(userWin);
     }
     
})

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
        console.log("choices was clicked",userChoice);
        playGame(userChoice);
    });
});