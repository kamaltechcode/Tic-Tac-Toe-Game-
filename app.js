let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");

let newgamebtn = document.querySelector(".NewGame");
let msgcontainer = document.querySelector(".messcont");
let msg = document.querySelector("#mesg")

let turnO = true; //playerX, Player Y 

// lets make the posibilities of winning by using array index

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// this is reset button fucntion that will make resart the whole game 
const resetGame =()=>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

// lets check when someone clicks on the buttn by listing an event 
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("Box was clicked ")
        box.innerText = "O";// this is just filling the text into box 
        //we need to store X and O in the box while any user click on it 


        if (turnO === true) {
            box.innerText = "O";
            turnO = false;

        } else {
            box.innerText = "X";
            turnO = true;

        }
        // now here we can click dubble and the value get chenaged but we dont want this for this we can lock our button after clicked 
        box.disabled = true;


        checkwinner();
    });
});

// to end the game after one winner 
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

// this is to enable all the button after completing one game
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}




const checkwinner = () => {
    for (let patern of winPatterns) {
        // console.log(patern[0], patern[1], patern[2]);
        // console.log(boxes[patern[0]].innerText,
        //     boxes[patern[1]].innerText,
        //     boxes[patern[2]].innerText);
        let pos1Val = boxes[patern[0]].innerText;
        let pos2Val = boxes[patern[1]].innerText;
        let pos3Val = boxes[patern[2]].innerText;

        // these are all values which will be print while be clicked and we will get winning postion in this game
        // lets  check is there any box is empty 
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            // we must chech there is no one is empty 
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("winner", pos1Val);

                showwinner(pos1Val);
            }
        }


    }

}

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);










