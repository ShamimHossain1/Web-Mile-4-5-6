function hideElement(elementID){
    document.getElementById(elementID).classList.add("hidden");
};

function showElement(elementID){
    document.getElementById(elementID).classList.remove("hidden");
};

function getARandomAlphabet(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    // const alphabets = alphabetString.split('');
    // console.log(alphabets);
    const index = Math.round(Math.random() *25);
    return alphabetString[index];
}
const  getARandomAlphabet()