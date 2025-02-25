let boxes = document.querySelectorAll('.box')
let resestBtn = document.querySelector('#reset-btn')
let newGameBtn = document.querySelector('#new-btn')
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector("#msg")
let turn0 = true

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

const resetGame = () =>{
    turn0= true
    enableBoxes()
    msgContainer.classList.add("hide")
}



console.log(boxes)
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('Box was clicked')

        if (turn0) {
            box.innerHTML = 'X'
            turn0 = false
        }
        else {
            box.innerHTML = 'O'
            turn0 = true
        }

        box.disabled = true
        checkWinner();
    })
})

const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true
    }
}

const enableBoxes = ()=>{
    for (const box of boxes) {
        box.disabled= false
        box.innerText=""
    }
}



const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
}

const checkWinner = () => {
    for (const pattern of winPatterns) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);

        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val)
            }
        }

    }
}

newGameBtn.addEventListener('click',resetGame)
resestBtn.addEventListener('click',resetGame)
