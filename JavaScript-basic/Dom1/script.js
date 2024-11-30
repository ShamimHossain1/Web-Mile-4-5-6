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
