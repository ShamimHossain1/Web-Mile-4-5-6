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