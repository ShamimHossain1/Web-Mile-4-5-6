const  student  ={
    name: 'John',
    age : 10,
    grade : 'A'

}

const {name, age, grade} = student;
// console.log(name, age, grade);


const number = [10, 430];

const [first, second] = number;
// console.log(first, second);


function doubleThem(a, b){
    return[a*2, b*2];
}

const [prothom, ditiyo] = doubleThem(6, 9);
// console.log(prothom, ditiyo);


const numbers = [0, 343, 3, 234, 67823, 4784];
const num = numbers;
const newNum = [...numbers];
newNum[3] = 6969;
num[1] = 420;
numbers[0] = 69;
console.log(num);
console.log(numbers);
console.log(newNum);