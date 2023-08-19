const bin = document.querySelector(".bin")
const container = document.querySelector(".container")
const darkMode = document.querySelector(".dark--mode")
const trash_container = document.querySelector(".trash__flex")
const trash = document.querySelector(".trash")
const score = document.querySelector(".score--value")

const trash_Img = [
                {id: 1,src : "./img/1.png"},
                {id: 2,src : "./img/2.png"},
                {id: 3,src : "./img/3.png"},
                {id: 4,src : "./img/4.png"}
]

function moveRight(right){
        trash.style.left = (right + 40) +"px"
        // console.log(right)
}

function moveLeft(left){
        trash.style.left = (left - 60) +"px"
        // console.log(left)
    }
    
function random(){
        let x = 0
        x = x + Math.round(Math.random() * 800)
        return x
    }

    
    // function moveStart(){
        //     let rand = random()
//     // let left = moveLeft(random)
//     // let right = moveRight(random)
//     moveLeft(rand)
//     moveRight(rand)
//     trash.classList.add("animation")
//     trash.classList.remove("trash")
// }

document.onkeydown = (e) => {
    e = e || window.event;
   
    if(e.keyCode === 37){
        let left = random()
        moveLeft(left)
    }
    else if(e.keyCode === 39){
        let right = random()
        moveRight(right)
    }
    // else if(e.keyCode === 32){
        //     moveStart()
        // }
        
    }
    

bin.addEventListener("click",()=>{
    if(bin.src === "http://127.0.0.1:5500/Trash/img/bin.png"){
        bin.src = "http://127.0.0.1:5500/Trash/img/trash-can.png"
        bin.style.width = "200px"
        bin.style.height = "180px"
    }else{
        bin.src = "http://127.0.0.1:5500/Trash/img/bin.png"
    }
})

// console.log(bin.clientHeight)
//     console.log(screen.height)
//     console.log(bin.offsetLeft)
    

    // setInterval(() => {
    //     console.log(trash.offsetLeft)
    // },500)

const repeat = setInterval(()=>{
    
    if(trash.offsetTop === 500 ){
    trash.classList.add("trash__hidden")
    bin.src = "http://127.0.0.1:5500/Trash/img/trash-can.png"
    bin.style.width = "200px"
    bin.style.height = "180px"
    score.textContent ++
    setTimeout(() => {
        trash.classList.remove("trash__hidden")
    },500)
    }
},50)


darkMode.addEventListener("click",() => {
    if(document.body.style.backgroundColor === "White")
    {
        document.body.style.backgroundColor = "Black"
        darkMode.style.backgroundColor = "White"
        darkMode.style.color = "Black"
        darkMode.textContent= "Light Mode"
    }
    else if (document.body.style.backgroundColor === "Black"){
        document.body.style.background = "White"
        darkMode.style.backgroundColor = "Black"
        darkMode.textContent= "Dark Mode"
        darkMode.style.color = "White"
        
    }
    else
    {
        document.body.style.backgroundColor = "Black"
        darkMode.style.backgroundColor = "White"
        darkMode.style.color = "Black"
        darkMode.textContent= "Light Mode"
    }
})


// console.log(bin.clientWidth)