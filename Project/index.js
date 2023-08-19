const notesTemplate = document.querySelector("[noteTemplate]");
const notesContainer = document.querySelector(".notesContainer");
// const description = document.querySelector(".de")
const TitleArr = ["Note 1", "Note 2", "Note 3","Notes 4"];

TitleArr.map((text) => {
    const noteCard = notesTemplate.content.cloneNode(true).children[0];
    const title = noteCard.querySelector(".title");
    title.textContent = text;
    notesContainer.appendChild(noteCard);
}
)