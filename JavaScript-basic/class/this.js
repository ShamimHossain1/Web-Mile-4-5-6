class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
    activity(){
        this.sleep();
    }
}

const jhankar = new Person("Jhankar bhai", 21);
console.log(jhankar);
jhankar.sleep();
jhankar.activity();