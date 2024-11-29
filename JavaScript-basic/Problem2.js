///////////Problem 2////////////////
function evenOdd(string){
    if (typeof string !== 'string') return 'input string';
    if (string.length % 2 === 0 ) {
        return('even');
    }
    else{
        return('odd');
    }
}
const result = evenOdd('Batch7');
console.log(result);