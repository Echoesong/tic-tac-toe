// APP FUNCTIONALITY: 
    // As a user, I want to be able to click on a square and create either an X or an O, depending on whose turn it is
    // As a user, I want to be able to clear the board

// PSEUDOCODE:
    // 1. Basic data - playerNull playerX, playerO to be EMPTY, X, or O
    // 2. Target DOM attributes (array of buttons)
    // 3. 

// PLACING X OR O:
// On click, if element ID is undefined(Change element ID to X or O, and update element content to X or O)


const playerNull = ""
const playerX = "X"
const playerO = "O"

const squareEls = document.querySelectorAll(".square")
console.log(squareEls)


//below loop adds an event listener that calls an anonymous function that console.logs as test. Replace anonymous function with function that adds "777" to the clicked element
for(let i=0; i<squareEls.length; i++){
    squareEls[i].addEventListener("click", function(){
        console.log("Hello world")
    })

}



// squareEls.addEventListener('click', function(evt){
//     console.log(evt)
// })
// squareEls.addEventListener("click", function(){
//     console.log("Hello world")
// })

// function listeners(evt){
//     squareEls.addEventListener("click", function(){
//         console.log("Hello World")
//     })
// }

// listeners()

// squareEls.addEventListener("click", function(){
//     if(squareEls)
// })


// // functions vvvvvv
// function handleClick(evt){}

// squareEls.forEach ( function (btn){
//     const index = btn.target.index
//     console.log(index)
//     btn.addEventListener("click", handleClick)

// })




function init(){
    console.log('starting game')
    render()
}

function render(){
    console.log('rendering')
    
}

init()
