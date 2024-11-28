
let n = 5, arr = [];

for (let index = 0; index < n; index++) {
 arr[index] = index + 1;
}
 console.log(arr);

const factorial = arr.reduce((a, b)=>{
    return a * b;
})

console.log(factorial);