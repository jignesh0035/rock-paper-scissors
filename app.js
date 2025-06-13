let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#result");
const user = document.querySelector("#userScore");
const comp = document.querySelector("#compScore");
choices.forEach((choice) =>
{
    choice.addEventListener("click", () =>
    {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
const playGame = (userChoice) =>
{
    const compChoice = genCompChoice();
    //Game was draw 
    if(userChoice === compChoice)
    {
        gameDraw();
    }
    else
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            //paper,scissor
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            //rock,scissor'
            userWin = compChoice === "scissor" ? false : true;
        }
        else
        {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        return showWinner(userWin, userChoice, compChoice);
    }
};
const showWinner = (userWin,userChoice,compChoice)=>
{
   if(userWin)
   {
    userScore++;
    user.innerText = userScore;
    msg.innerText = `You won !! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
   }
   else
   {
    compScore++;
    comp.innerText = compScore;
    msg.innerText = `You lose !! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
   }
};
const gameDraw = ()=>
{
    msg.innerText = "Game was draw!!";
    msg.style.backgroundColor = "black";
};
const genCompChoice = () =>
{
    const option = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};
