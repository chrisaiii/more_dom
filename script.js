const pButton = document.getElementById("p-button");
const imgButton = document.getElementById("img-button");
const pDiv = document.getElementById("p-div");
const imgDiv = document.getElementById("img-div");

pButton.addEventListener("click", () => {
    pDiv.style.display = "block";
    imgDiv.style.display = "none";

    const newParagraph = document.createElement("p");
    
    newParagraph.textContent = "Hot chocolate is bad today";

    pDiv.appendChild(newParagraph);
});

imgButton.addEventListener("click", () => {
    imgDiv.style.display = "block";
    pDiv.style.display = "none";

    const newImage = document.createElement("img");
    
    newImage.src = "Pikachu.png"; 

    imgDiv.appendChild(newImage);
});
