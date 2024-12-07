function getData(dataId){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(dataId);
            resolve("Success");
        }, 1000);
    });
}

///--------- Normal way-----------

(async function(){
   
    async function getAllData(){
        console.log("get Data 1..........");
        await getData(1);
        console.log("get Data 2..........");
        await getData(2);
        console.log("get Data 3..........");
        await getData(3);
        console.log("get Data 4..........");
        await getData(4);
        console.log("get Data 5..........");
        await getData(5);
    }
    
  
    // ---------IIFE method to use async - await--------------
    
 const IIFeMethod = ()=>{
    (async function (){
        console.log("get Data 1..........");
        await getData(1);
        console.log("get Data 2..........");
        await getData(2);
        console.log("get Data 3..........");
        await getData(3);
        console.log("get Data 4..........");
        await getData(4);
        console.log("get Data 5..........");
        await getData(5);
    })();
 };

    await getAllData();;
    await IIFeMethod(); 
})();
