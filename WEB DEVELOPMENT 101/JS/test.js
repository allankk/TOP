
function createParagraph(color) {
    const div = document.createElement('div');
    div.style.color = color;
    div.textContent = "Hey I'm " + color + "!";
    div.classList = "addedDiv"

    const container = document.querySelector(".test");
    container.appendChild(div);
}

function createH3(color) {
    const h3 = document.createElement("h3");
    h3.style.color = color;
    h3.textContent = "I'm a " + color + " h3!";
    h3.classList = "addedH3";

    const container = document.querySelector(".test");
    container.appendChild(h3);
}

function createNewDiv(borderColor, backgroundColor) {
    const addedDiv = document.createElement("div");
    addedDiv.classList = "addedDiv";
    addedDiv.style.border = "1px solid " + borderColor;
    addedDiv.style.backgroundColor = backgroundColor;
    
    const h1 = document.createElement("h1");
    h1.classList = "addedH1";
    h1.textContent = "I'm in a div";
    
    const addedParagraph = document.createElement("p");
    addedParagraph.textContent = "ME TOO!";
     
    addedDiv.appendChild(h1);
    addedDiv.appendChild(addedParagraph);

    const container = document.querySelector("body");
    const addBefore = document.querySelector(".test");
    container.insertBefore(addedDiv, addBefore);
}

createH3("blue");
createParagraph("red");
createNewDiv("black", "pink");