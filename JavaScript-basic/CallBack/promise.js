
function asyncFunc(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data")
            resolve("success");
        }, 3000);
    });
}
function asyncFunc2(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data 2")
            resolve("success");
        }, 3000);
    });
}



console.log("Fetching data......");
asyncFunc().then((res)=>{
    
console.log("Fetching data 2......");
asyncFunc2().then((res)=>{
        
    });
});









// const getPromise = () =>{
//     return new Promise((resolve, reject)=>{
//         console.log("I am a promise");
//         resolve("Success");
        // reject("Error");
//     })
// }

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("Promise resolved", res);
// });

// promise.catch((error)=>{
//     console.log("Promise rejected", error);
    
//     });

// let promise = new Promise((resolve, reject)=>{
//  console.log("I am a promise");
//  resolve("Succeed");
// //  reject("Rejected");
// })

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log(dataId);
//             // resolve("Success");
//             reject("Error");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// let promise = getData(21);
// console.log(promise);
// console.log(promise);


// getData(1, () => {
//      getData(2, () => {
//          getData(3, () => {
//              getData(4) 
//             }) 
//         }) 
//     });

// console.log(promise);