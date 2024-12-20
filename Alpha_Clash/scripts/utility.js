function hideElement(elementID){
    document.getElementById(elementID).classList.add("hidden");
};

function showElement(elementID){
    document.getElementById(elementID).classList.remove("hidden");
};

function getARandomAlphabet(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const index = Math.round(Math.random() *25);
    return alphabetString[index];
};

function addBackgroundColorById(id){
    document.getElementById(id).classList.add('bg-orange-400');
};
function removeBackgroundColorById(id){
    document.getElementById(id).classList.remove('bg-orange-400');
};

function getElementValueById(id){
    const element = document.getElementById(id);
    const value = parseInt(element.innerText);
    return value;

}
function setTextElementValueById(id, value){
    const element = document.getElementById(id);
    element.innerText = value;
}

