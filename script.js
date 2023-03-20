let body = document.getElementById("body");
let board = 0;
let square = 0;
let container = document.getElementById("buttonContainer")
let start = document.getElementById("startBttn")
let user1= 0
let user2=0
let nameContainer = 0;
let congratulationsContainer = 0;
let congratulationsCounter = 0;
let restartBttn = 0;

                                                //let signPlaceholder = "" 
//TIC TAC TOE =>
//CREATE A WAY TO MAKE PLAYERS
const playerFactory = {
    create: function(name,sign){
       return {name,sign}
   }
}

//CREATE A GAMEBOARD
const GameBoard = (function(){
     board = []
    
    return  board
}())
//FOR EVERY ARRAYELEMENT CREATE A SQUARE TILE WITH HTML
for(let i = 0; i < 9;i++){
    //create a square div
     square = document.createElement("div")
     //create space for O and X
                                                                //signPlaceholder = document.createElement("div")
    //add a class
    square.classList.add("square")

    //THIS CLASS GETS DELETED WHEN A PLAYER CLICKS ON THE SQUARE
    square.classList.add("unmarked")
    square.classList.add("hidden")
    square.setAttribute("id",`${i + 1}`)
                                                                    //square.append(signPlaceholder)

    //append the square to the body
   body.append(square)
}
function displayName(name){
    nameContainer = document.createElement("div")
    nameContainer.classList.add("nameContainer")
    let displayedName = document.createTextNode(name)
    nameContainer.append(displayedName)
    container.append(nameContainer)
}
let counter = 0
let squareNodeList = document.getElementsByClassName("unmarked")
let squareArray = Array.from(squareNodeList)
start.addEventListener("click",()=>{
    //if the game has already started block the button
    if(square.classList.contains("hidden") == false){
        return
    }
    //if this game was never restarted
    if(square.classList.contains("restarted") == false && congratulationsCounter == 0){
    counter = 0;
    let username1 = prompt("Player1: ")
    let username2 = prompt("Player2: ")
    user1 = playerFactory.create(username1,"X")
    user2 = playerFactory.create(username2,"O")
    displayName(user1.name)
    displayName(user2.name)
    //reveal all the squares
    squareArray.forEach(square => square.classList.remove("hidden"))
    //create a restart button
    let restartBttnContainer = document.createElement("div")
    restartBttnContainer.classList.add("restartBttnContainer")
    restartBttn = document.createElement("button")
    let restartBttnText = document.createTextNode("Restart")
    restartBttnContainer.append(restartBttn)
    restartBttn.append(restartBttnText)
    container.append(restartBttnContainer)
    squareArray.forEach(square => square.classList.add("unmarked"))
    restartBttn.addEventListener("click",()=>{
        squareArray.forEach(square => square.innerHTML = "")
        squareArray.forEach(square => square.classList.add("hidden"))  
        squareArray.forEach(square => square.classList.add("restarted"))
        squareArray.forEach(square => square.classList.add("unmarked"))
        if(congratulationsCounter > 0){
            congratulationsContainer.remove()   
        }
        let nameContainerNodeList = document.getElementsByClassName("nameContainer")
    let nameContainerArray = Array.from(nameContainerNodeList)
    nameContainerArray.forEach(element => element.innerHTML="")
    })
    }
    //if the game was restarted or was over
    if(square.classList.contains("restarted") == true || congratulationsCounter > 0){
        counter = 0;
    let nameContainerNodeList = document.getElementsByClassName("nameContainer")
    let nameContainerArray = Array.from(nameContainerNodeList)
    nameContainerArray.forEach(element => element.innerHTML="")
    let username1 = prompt("Player1: ")
    let username2 = prompt("Player2: ")
    
    if(congratulationsCounter > 0){
        congratulationsContainer.remove()   
    }
    user1 = playerFactory.create(username1,"X")
    user2 = playerFactory.create(username2,"O")
    displayName(user1.name)
    displayName(user2.name)
    //reveal all the squares
    squareArray.forEach(square => square.classList.remove("hidden"))
    restartBttn.addEventListener("click",()=>{
        squareArray.forEach(square => square.innerHTML = "")
        squareArray.forEach(square => square.classList.add("hidden"))  
        squareArray.forEach(square => square.classList.add("restarted"))
        squareArray.forEach(square => square.classList.add("unmarked"))
        congratulationsContainer.remove()
        let nameContainerNodeList = document.getElementsByClassName("nameContainer")
    let nameContainerArray = Array.from(nameContainerNodeList)
    nameContainerArray.forEach(element => element.innerHTML="")
    })
    }

})
//for every element of the array
const gameLogic = (function(){
    squareArray.forEach
    //add an event listener so that when clicked
    ( square => square.addEventListener("click",() => {
        //WHEN CLICKED
        //Create an O on the square
        //IF THE PLAYER PRESSES ON ALREADY TAKEN SQUARE - IGNORE
        if(square.classList.contains("unmarked") == true){
            counter++
            if(counter % 2 != 0){
                //Add an x to a clicked square
                let signContainer = document.createElement("div")
                signContainer.id = "signContainer"
                let signssss = document.createTextNode("X")
                signContainer.append(signssss)
                square.append(signContainer)    
                console.log(square.id)
                board[square.id -1] = "X"
            }
            if(counter % 2 == 0){
                 //Add an o to a clicked square
                let signContainer = document.createElement("div")
                let signssss = document.createTextNode("O")
                signContainer.id = "signContainer"
                signContainer.append(signssss)
                square.append(signContainer)
                board[square.id -1] = "O"    
            }
            let checker = 0
            for(let i = 0; i < 9;i++){
                if(board[i]==undefined){
                    checker++
                }
            }
            //FOR EVERY CLICK CHECK IF THE SQUARES 1,2,3
            if(board[0] == "O"&& board[1] == "O" && board[2] == "O"){
                //Add the congratulations message
                congratulationsContainer = document.createElement("div")
                let congratulations = document.createTextNode(`Game over! ${user2.name} won!`)
                //restart the game
                squareArray.forEach(square => square.innerHTML = "")
                squareArray.forEach(square => square.classList.add("hidden"))
                congratulationsContainer.classList.add("congratulationsContainer")
                congratulationsContainer.append(congratulations)
                body.append(congratulationsContainer)
                congratulationsCounter++
                board = []
                squareArray.forEach(square =>square.classList.add("unmarked"))

            } 
            else if(board[0] == "X" && board[1] == "X" && board[2] == "X"){
                congratulationsContainer = document.createElement("div")
                let congratulations = document.createTextNode(`Game over! ${user1.name} won!`)
                squareArray.forEach(square => square.innerHTML = "")
                squareArray.forEach(square => square.classList.add("hidden"))
                congratulationsContainer.classList.add("congratulationsContainer")
                congratulationsContainer.append(congratulations)
                body.append(congratulationsContainer)
                congratulationsCounter++
                board = []
                squareArray.forEach(square =>square.classList.add("unmarked"))
                
            }
             // 1,4,7
            else if(board[0] == "O"&& board[3] == "O" && board[6] == "O"){
                congratulationsContainer = document.createElement("div")
                squareArray.forEach(square => square.classList.add("hidden"))
                let congratulations = document.createTextNode(`Game over! ${user2.name} won!`)
                squareArray.forEach(square => square.innerHTML = "")
                congratulationsContainer.classList.add("congratulationsContainer")
                congratulationsContainer.append(congratulations)
                body.append(congratulationsContainer)
                congratulationsCounter++
                board = []
                squareArray.forEach(square =>square.classList.add("unmarked"))
             } 
            else if(board[0] == "X" && board[3] == "X" && board[6] == "X"){
                congratulationsContainer = document.createElement("div")
                squareArray.forEach(square => square.classList.add("hidden"))
                let congratulations = document.createTextNode(`Game over! ${user1.name} won!`)
                squareArray.forEach(square => square.innerHTML = "")
                congratulationsContainer.classList.add("congratulationsContainer")
                congratulationsContainer.append(congratulations)
                body.append(congratulationsContainer)
                congratulationsCounter++
                board = []
                squareArray.forEach(square =>square.classList.add("unmarked"))
            } 
            else if(board[2] == "O"&& board[4] == "O" && board[6] == "O"){
                congratulationsContainer = document.createElement("div")
                squareArray.forEach(square => square.classList.add("hidden"))
                let congratulations = document.createTextNode(`Game over! ${user2.name} won!`)
                squareArray.forEach(square => square.innerHTML = "")
                congratulationsContainer.classList.add("congratulationsContainer")
                congratulationsContainer.append(congratulations)
                body.append(congratulationsContainer)
                congratulationsCounter++
                board = []
                squareArray.forEach(square =>square.classList.add("unmarked"))
             } 
            else if(board[2] == "X" && board[4] == "X" && board[6] == "X"){
                congratulationsContainer = document.createElement("div")
                squareArray.forEach(square => square.classList.add("hidden"))
                let congratulations = document.createTextNode(`Game over! ${user1.name} won!`)
                squareArray.forEach(square => square.innerHTML = "")
                congratulationsContainer.classList.add("congratulationsContainer")
                congratulationsContainer.append(congratulations)
                body.append(congratulationsContainer)
                congratulationsCounter++
                board = []
                squareArray.forEach(square =>square.classList.add("unmarked"))
            } 
             // 1,5,9
            else if(board[0] == "O"&& board[4] == "O" && board[8] == "O"){
                congratulationsContainer = document.createElement("div")
                squareArray.forEach(square => square.classList.add("hidden"))
                let congratulations = document.createTextNode(`Game over! ${user2.name} won!`)
                squareArray.forEach(square => square.innerHTML = "")
                congratulationsContainer.classList.add("congratulationsContainer")
                congratulationsContainer.append(congratulations)
                body.append(congratulationsContainer)
                congratulationsCounter++
                board = []
                squareArray.forEach(square =>square.classList.add("unmarked"))
             } 
            else if(board[0] == "X" && board[4] == "X" && board[8] == "X"){
                congratulationsContainer = document.createElement("div")
                let congratulations = document.createTextNode(`Game over! ${user1.name} won!`)
                squareArray.forEach(square => square.innerHTML = "")
                squareArray.forEach(square => square.classList.add("hidden"))
                congratulationsContainer.classList.add("congratulationsContainer")
                congratulationsContainer.append(congratulations)
                body.append(congratulationsContainer)
                congratulationsCounter++
                board = []
                squareArray.forEach(square =>square.classList.add("unmarked"))
            }
              // 4,5,6
            else if(board[3] == "O"&& board[4] == "O" && board[5] == "O"){
               congratulationsContainer = document.createElement("div")
                let congratulations = document.createTextNode(`Game over! ${user2.name} won!`)
                squareArray.forEach(square => square.innerHTML = "")
                congratulationsContainer.classList.add("congratulationsContainer")
                congratulationsContainer.append(congratulations)
                squareArray.forEach(square => square.classList.add("hidden"))
                body.append(congratulationsContainer)
                congratulationsCounter++
                board = []
                squareArray.forEach(square =>square.classList.add("unmarked"))
    
              } 
            else if(board[3] == "X" && board[4] == "X" && board[5] == "X"){
                congratulationsContainer = document.createElement("div")
                let congratulations = document.createTextNode(`Game over! ${user1.name} won!`)
                squareArray.forEach(square => square.innerHTML = "")
                congratulationsContainer.classList.add("congratulationsContainer")
                congratulationsContainer.append(congratulations)
                squareArray.forEach(square => square.classList.add("hidden"))
                body.append(congratulationsContainer)
                congratulationsCounter++
                board = []
                squareArray.forEach(square =>square.classList.add("unmarked"))
            }
              //7,8,9
            else if(board[6] == "O"&& board[7] == "O" && board[8] == "O"){
                congratulationsContainer = document.createElement("div")
                squareArray.forEach(square => square.classList.add("hidden"))
                let congratulations = document.createTextNode(`Game over! ${user2.name} won!`)
                squareArray.forEach(square => square.innerHTML = "")
                congratulationsContainer.classList.add("congratulationsContainer")
                congratulationsContainer.append(congratulations)
                body.append(congratulationsContainer)
                congratulationsCounter++
                board = []
                squareArray.forEach(square =>square.classList.add("unmarked"))
              } 
            else if(board[6] == "X" && board[7] == "X" && board[8] == "X"){
                congratulationsContainer = document.createElement("div")
                squareArray.forEach(square => square.classList.add("hidden"))
                let congratulations = document.createTextNode(`Game over! ${user1.name} won!`)
                squareArray.forEach(square => square.innerHTML = "")
                congratulationsContainer.classList.add("congratulationsContainer")
                congratulationsContainer.append(congratulations)
                body.append(congratulationsContainer)
                congratulationsCounter++
                board = []
                squareArray.forEach(square =>square.classList.add("unmarked"))
            }
              //2,5,8
            else if(board[1] == "O"&& board[4] == "O" && board[7] == "O"){
                congratulationsContainer = document.createElement("div")
                squareArray.forEach(square => square.classList.add("hidden"))
                let congratulations = document.createTextNode(`Game over! ${user2.name} won!`)
                squareArray.forEach(square => square.innerHTML = "")
                congratulationsContainer.classList.add("congratulationsContainer")
                congratulationsContainer.append(congratulations)
                body.append(congratulationsContainer)
                congratulationsCounter++
                board = []
                squareArray.forEach(square =>square.classList.add("unmarked"))
              } 
            else  if(board[1] == "X" && board[4] == "X" && board[7] == "X"){
                congratulationsContainer = document.createElement("div")
                squareArray.forEach(square => square.classList.add("hidden"))
                let congratulations = document.createTextNode(`Game over! ${user1.name} won!`)
                squareArray.forEach(square => square.innerHTML = "")
                congratulationsContainer.classList.add("congratulationsContainer")
                congratulationsContainer.append(congratulations)
                body.append(congratulationsContainer)
                congratulationsCounter++
                board = []
                squareArray.forEach(square =>square.classList.add("unmarked"))
            }//3,6,9
            else if(board[2] == "O"&& board[5] == "O" && board[8] == "O"){
                congratulationsContainer = document.createElement("div")
                let congratulations = document.createTextNode(`Game over! ${user2.name} won!`)
                squareArray.forEach(square => square.innerHTML = "")
                squareArray.forEach(square => square.classList.add("hidden"))
                congratulationsContainer.classList.add("congratulationsContainer")
                congratulationsContainer.append(congratulations)
                body.append(congratulationsContainer)
                congratulationsCounter++
                board = []
                squareArray.forEach(square =>square.classList.add("unmarked"))
            }
            else if(board[2] == "X" && board[5] == "X" && board[8] == "X"){
                congratulationsContainer = document.createElement("div")
                let congratulations = document.createTextNode(`Game over! ${user1.name} won!`)
                squareArray.forEach(square => square.innerHTML = "")
                congratulationsContainer.classList.add("congratulationsContainer")
                congratulationsContainer.append(congratulations)
                squareArray.forEach(square => square.classList.add("hidden"))
                body.append(congratulationsContainer)
                congratulationsCounter++
                board = []
                squareArray.forEach(square =>square.classList.add("unmarked"))
            }
            else if(board.length == 9 && checker == 0){
                congratulationsContainer = document.createElement("div")
                let congratulations = document.createTextNode(`Game over!It's a Tie!`)
                squareArray.forEach(square => square.innerHTML = "")
                congratulationsContainer.classList.add("congratulationsContainer")
                congratulationsContainer.append(congratulations)
                squareArray.forEach(square => square.classList.add("hidden"))
                body.append(congratulationsContainer)
                congratulationsCounter++
                board = []
                squareArray.forEach(square =>square.classList.add("unmarked"))
            }
            //ARE FILLED WITH THE SAME SIGNS - OTHERWISE TIE
            //REMOVE THE SQUARE FROM THE POOL OF CHOICES
            square.classList.remove("unmarked")
        }
    }))
})()
//ALLOW PLAYERS TO PUT IN THEIR NAMES, INCLUDE A START/RESTART BUTTON
//CONGRATULATE THE WINNER






// squareArray.forEach( square => square.addEventListener("click",() => {
//     let signssss = document.createTextNode("O")
//     square.append(signssss)
//     square.classList.remove("unmarked")
//                                                                 // console.log(square.signPlaceholder)
// }))