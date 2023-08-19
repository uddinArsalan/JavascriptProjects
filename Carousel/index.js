const img_tag = document.getElementsByClassName("img")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

const img_Array = [{id: 1, src : "./img/1.png"},{id: 2, src: "./img/2.png"},{id: 3, src: "./img/3.png"},{id: 4, src: "./img/4.png"}]

function findCurrentId(){
    return img_tag[0].id
}

prev.addEventListener('click',()=>{
    
    let id =  findCurrentId()
    id--
    if(id === 0){
    id = img_Array.length 
    img_tag[0].src = img_Array[id-1].src
    }
    
    img_tag[0].id = id 
    img_tag[0].src = img_Array[id-1].src 
            
})

next.addEventListener('click',()=>{
    let id =  findCurrentId() // 3
    id++ // 1
    if(id > img_Array.length ){
    id = 1 // 0 
    }
        
       console.log(id) // 1


       img_tag[0].id = id  // 1
       img_tag[0].src = img_Array[id-1].src //1
})

