
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

class Offroad extends Toyota{
    constructor(name, model){
      
        super(name, model);
    }
    start(){
        super.start();
        console.log("Offroad is starting");
        }
    
}

let SUV = new Offroad("Defender","AWD");


// let  Camry = new Toyota("Camry", "AWD");

// console.log(Camry.nam);
console.log(SUV.name);
SUV.start();

















