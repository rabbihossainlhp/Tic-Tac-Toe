//First of all we will detect the all trigur(handler) by Dom manupolation..
let AllButtons = document.querySelectorAll(".button");
let ResetButton = document.querySelector("#reset-button");
let winnMsg = document.querySelector(".WinPara");
let winBox = document.querySelector(".winMsg");
let newGameButton = document.querySelector(".newGame");


let turnDecetion = true;
let count = 0;

const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Now try to add some action when the box will be click
AllButtons.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log('The button was clicked');
        if(turnDecetion){
            box.innerText = "O";
            turnDecetion = false;
        }else{
            box.innerText = "X";
            turnDecetion = true;
        }
        box.disabled = true;
        checkWinner();
        count++;

        //when all button is clicked and still match has no winner 
        //when it will be showing and this count method for counting when actually it will be 9 times clicked
        let iswin = checkWinner();
        if(count === 9 &&!iswin){
            winnMsg.innerText = `Match Draw`;
            winnMsg.classList.remove("hide");
        }
    });
});

//You have to disable when  anyone will be win....
const disableButton=()=>{
    for(box of AllButtons){
        box.disabled = true;
    };
};
//Now this is enable function for enable all game when anyone will click 'Reset Button'..
const enableButton = () =>{
    for(box of AllButtons){
        box.disabled = false;
        box.innerText = "";
    };
};

//This is just  a messge only for who has actually win..
const showWinner = (winner) =>{
    winnMsg.innerText = `Congrtatulations Player ${winner} is Win...`;
    winnMsg.classList.remove("hide");
    // disableButton();

}

//In this function we defined that, who will be win in this game by using 
//our previous winning pattern....
const checkWinner = () =>{
    for(let pattern of winningPattern){
        let first = AllButtons[pattern[0]].innerText;
        let second = AllButtons[pattern[1]].innerText;
        let third = AllButtons[pattern[2]].innerText;

        if(first!=""&&second!=""&&third!=""){
            if(first===second && second===third){
                console.log("win",second);
                showWinner(second);
                disableButton();
                return true;
            } 
    }
};
};

//This function will be use for Reset this Game...
const GameReset = () =>{
    turnDecetion = true;
    count = 0;
    enableButton();
    winnMsg.classList.add("hide");
}
//the function for enable the reset button by adding previous GameReset..
ResetButton.addEventListener("click",GameReset);
newGameButton.addEventListener("click",GameReset);
    

