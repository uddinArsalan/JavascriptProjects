const input = document.getElementById("input__speed")
const heading = document.getElementsByClassName("heading")
const text = "Practicing HTML, CSS and JavaScript"

// let speed = 5
// input.addEventListener("input",() => {
//         const part = heading[0].innerText.split(" ")

//         // for(let i = 0; i< part.length ; i++  ){
//         //     heading[0].innerText === part[i]
//         // }

//         speed++
//         heading[0].style.animation += `${speed/2}`
// })
let idx = 0
let speed = 2
function writeText(){
        heading.innerHTML = text.slice(0,idx)
        idx++
        if(idx > text.length){
                idx = 1
        }
        setTimeout(() => {
               writeText(); 
        }, speed);
}

input.addEventListener("input" ,(e) => {
        speed = 300 / e.target.value
        console.log(e.target.value)
        console.log(speed)
})