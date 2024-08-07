let userscore = 0
let compscore = 0
 let score = 0
let userwin = true;

let selected = document.querySelectorAll(".choose")
  let draw = document.querySelector(".winner")
  let winner = document.getElementById("text")
  let userscored = document.getElementById("user")
  let compscored = document.getElementById("comp")

  function play(user){
  return  console.log('user selected =',user)
}


  function drawgame(){

   return  winner.innerHTML = "game is drawn",console.log("draw")

  }

function champion(userwin,user,compselected){
if(userwin) winner.innerHTML = `Congratulations user!! you have won your ${user} beats ${compselected}`,
winner.style.width = "300px",
winner.style.backgroundColor = "green",
userscore++,userscored.innerHTML = userscore;
  else winner.innerHTML = `YOU have lost!!:( ${compselected} beats your ${user}`,
  winner.style.width = "250px",winner.style.backgroundColor = "red" ,
  compscore ++, compscored.innerHTML = compscore ;
}
function compchoice(){

    let options =["stone","paper","scissor"]
  let index =  Math.floor(Math.random() * 3 )


  return options[index]
}


function playbutton(){
  winner.style.width = "350px"
winner.innerText = "press the icons above to play" ;



  selected.forEach((item)=>{

    item.addEventListener("click",()=>{

        const user = item.getAttribute("id")
play(user)
let compselected = compchoice()
console.log("computer selected =", compselected)

if(user === compselected){
drawgame()
}

else {

if(user=== "paper"){
userwin = compselected === "scissor"? false:true

}
else if(user === "stone"){

  userwin = compselected === "paper"? false:true


}
else{
userwin  =  compselected === "stone"? false:true; 

}
champion(userwin,user,compselected)
}


    })
})



}

