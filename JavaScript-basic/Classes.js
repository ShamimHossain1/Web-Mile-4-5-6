
class Toyota{
    
    constructor(name, model){
        console.log("new object created");
        this.name = name;
        this.model = model;

    }
    start(){
        console.log("Toyota is starting");
    }
    stop(){
        console.log("Toyota is stopping");
    }
}

class Offroad extends Toyota{}

let SUV = new Offroad("Defender","AWD");


let  Camry = new Toyota("Camry", "AWD");

console.log(Camry.name);
console.log(SUV.name);

















