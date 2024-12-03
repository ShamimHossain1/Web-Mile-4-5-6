// Select elements
const title = document.getElementById('title');
const description = document.getElementById('description');
const button = document.getElementById('changeButton');

// Add an event listener to the button
button.addEventListener('click', () => {
    // Change the content of the title and description
    title.textContent = 'You Clicked the Button!';
    description.textContent = 'The text has been updated successfully.';
    button.textContent = 'Clicked!';
});

let para = document.querySelector("p");
console.log(para.setAttribute("id","hero"));

console.log(para.getAttribute("id"));

let h1 = document.querySelector("h1");

h1.style.color ="red";


let newBtn = document.createElement("button");
newBtn.textContent = "Click me";
newBtn.style.backgroundColor = "blue";
newBtn.style.padding = "10px";
newBtn.style.margin = "10px";
newBtn.style.borderRadius = "10px";
newBtn.style.cursor = "pointer";
newBtn.style.color = "white";

let div = document.getElementById("new-button");
div.append(newBtn);


// Add various events to the button
newBtn.onclick = function() {
    console.log("Button clicked!");
};

newBtn.ondblclick = function() {
    console.log("Button was double clicked!");
};

newBtn.onmouseover = function() {
    console.log("Mouse is over the button!");
};

newBtn.onmouseout = function() {
    console.log("Mouse left the button!");
};

newBtn.onmousedown = function() {
    console.log("Mouse button is pressed down on the button!");
};

newBtn.onmouseup = function() {
    console.log("Mouse button is released on the button!");
};
