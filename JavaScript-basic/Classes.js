
const print = {
    
    printt: ()=>{console.log("print here");}

}


const shamim = {
    name: "Shamim",
    age: 25,
    occupation: "Software Engineer",
    hobbies: ["reading", "hiking", "coding"],
    printHobbies(){
        for(const hobbie of shamim.hobbies){
            console.log(hobbie);
        };
    }
};

shamim.__proto__ = print;

shamim.printt();
// console.log(shamim.printt);