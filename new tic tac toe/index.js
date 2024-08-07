
const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("text")
const resetbutton = document.getElementById("reset")

const winner = document.getElementById("winner")
newgamebutton = document.getElementById("new")


let turnO = true




function newgame(){


    cells.forEach((cell=> 
        newgamebutton.addEventListener("click",()=>{
           cell.innerHTML = ""
            winner.innerHTML = ""
        })
    ))

  
}
newgame()

const winconditions = [


    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function win(xyz){

   return winner.innerHTML =`congratulatios winner is ${xyz}`
}
function reset(){


     cells.forEach((cell=> 
        resetbutton.addEventListener("click",()=>{
           cell.innerHTML = ""
            winner.innerHTML = ""
        })
    ))

  
}

   reset()    
   


 




cells.forEach((cell)=>{

    cell.addEventListener("click",()=>{
if(turnO){

    cell.innerHTML = "O";
    turnO = false
}
else{

    cell.innerHTML = "X"
    turnO = true
}



checkwinner()


    })
})



function disablebox(){

    for (let cell of cells){
        cell.disabled = true
  
    }
}


const checkwinner=()=>{


    for(let wins of winconditions){
       

        if(cells[wins[0]].innerHTML !=="" && cells[wins[1]].innerHTML !=="" &&  cells[wins[2]].innerHTML !==""){


            if(cells[wins[0]].innerHTML === cells[wins[1]].innerHTML && cells[wins[2]].innerHTML === cells[wins[1]].innerHTML){

            winner.innerHTML = `${cells[wins[0]].innerHTML}'won`
            disablebox()
            }
        } 

   
}
}



