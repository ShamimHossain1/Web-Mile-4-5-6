class Product {

    country = 'Bangladesh';
    speak(talk) {
        console.log(`talking about ${talk}`);
    }

    constructor(name) {
        this.name = name;
    }
}

const lenovo = new Product("lenovo yoga");
lenovo.speak("Ai Chip")
console.log(lenovo);


class Teacher {
    constructor(name, age, subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
    lecture() {
        console.log("Teacher is Teaching Math");
    }
}

const Sauda = new Teacher("Sauda", "21", "Communication");
console.log(Sauda);