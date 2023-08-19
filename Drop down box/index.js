const box = document.querySelectorAll(".box")
const fill = document.querySelector(".fill")
// console.log(box)

for(const boxes of box){
    boxes.addEventListener("dragover",dragOver);
    boxes.addEventListener("dragenter",dragEnter);
    boxes.addEventListener("dragleave",dragLeave);
    boxes.addEventListener("drop",drop);
}

function dragStart() {
        this.className += " fill";
        setTimeout(() => (this.className = "box"),0);
        // console.log("dragStart")
}

function dragEnd(){
    this.className += 'fill'
    console.log("dragEnd")
}

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

function dragOver(e) {
    e.preventDefault()
    console.log("dragOver")
}

function dragEnter(e) {
    e.preventDefault()
    this.className += " hovered"
    console.log("dragEnter")
}

function dragLeave() {
    this.className = 'box'
    console.log("dragLeave")
}

function drop(e) {
    // console.log(e.target)
    this.className = ' box'
    this.append(fill)
    // console.log("drop")
}