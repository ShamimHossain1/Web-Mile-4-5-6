// Main class
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

// Inherited class
class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} says: Woof! Woof!`);
    }
}


const myDog = new Dog("Buddy", "Golden Retriever");
myDog.eat();
myDog.bark();
console.log(`Name: ${myDog.name}, Breed: ${myDog.breed}`);

