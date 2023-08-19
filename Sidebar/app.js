const close = document.querySelector(".close")
const toggle = document.querySelector(".toggle")
const sidebar = document.querySelector(".sidebar")
const container = document.querySelector(".container")

close.addEventListener("click",()=>{
    sidebar.style.display = "none"
    const para = document.createElement("p")
    para.textContent = "Please Open sidebar from the toggle bar given above!"
    container.appendChild(para)
})



toggle.addEventListener("click",()=>{
    if(sidebar.style.display === "none"){
        sidebar.style.display = "block"
    }else{
        sidebar.style.display = "none"
    }
})