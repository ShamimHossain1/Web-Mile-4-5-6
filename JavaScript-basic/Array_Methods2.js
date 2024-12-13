const numbers = [4, 6, 3, 54, 4, 4,5];

function doubleIt(num){
    console.log('num now', num);
    return num*2;
}

const result = numbers.map(doubleIt);
console.log(result);

// const Result2 = numbers.map((num)=>{
//     console.log('num now', num);
//     return num*2;
// })

const Result2 = numbers.map(n=>n+5)
console.log(Result2);

numbers.forEach(n=>n*2);
// console.log(numbers);

const result3 = numbers.filter(n=>n%2 == 0);
console.log(result3);
const result4 = numbers.find(n=>n == 54);
console.log(result4);

