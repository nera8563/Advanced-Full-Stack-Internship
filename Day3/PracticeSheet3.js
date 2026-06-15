// Q1. Ek student object banao jisme name, age, city store ho.

const student = {
    name: "Ram",
    age: 20,
    city: "Delhi"
};

// Q2. Upar wale object ka name print karo.

console.log(student.name);

// Q3. Object me greet() method add karo.

student.greet = function () {
    console.log(`Hello I am ${this.name}`);
};
student.greet();

// Q4. Object me isAdult() method banao.

student.isAdult = function () {
    return this.age >= 18;
};

console.log(student.isAdult());

// Q5. Object ki sabhi keys print karo.

console.log(Object.keys(student));

// Q6. Object ki sabhi values print karo.

console.log(Object.values(student));

// Q7. Check karo ki object me email property hai ya nahi.

console.log("email" in student);

// Q8. Object me dynamically property add karo.

student.course = "MERN";

console.log(student);

// Q9. Object se age property delete karo.

delete student.age;

console.log(student);

// Q10. Ek object ka clone banao.

const cloneStudent = { ...student };

console.log(cloneStudent);

// Q11. Ek object banao jisme showName() method ho aur this.name print kare.

const user1 = {
    name: "Ram",
    showName() {
        console.log(this.name);
    }
};

user1.showName();

// Q12. Ek object me name = "Ram" store karo aur method se uppercase print karo.

const user2 = {
    name: "Ram",
    showUpperCase() {
        console.log(this.name.toUpperCase());
    }
};

user2.showUpperCase();

// Q13. Object me do methods banao: deposit() withdraw()
// Aur balance update karo.

const account = {
    balance: 1000,

    deposit(amount) {
        this.balance += amount;
    },

    withdraw(amount) {
        this.balance -= amount;
    }
};

account.deposit(500);
account.withdraw(200);

console.log(account.balance);

// Q14. Predict Output

const user3 = {
    name: "Ram",

    show() {
        console.log(this.name);
    }
};

user3.show(); 
// the output of this code will be Ram

// Q15. Predict Output

const user4 = {
    name: "Ram",

    show: () => {
        console.log(this.name);
    }
};

user4.show();
 // the output of this code will be undefined


// Q16. Student constructor function banao.
// Parameters: name, age

function Student(name, age) {
    this.name = name;
    this.age = age;
}

const st1 = new Student("Nera", 20);

console.log(st1);

// Q17. 3 student objects create karo constructor se.

const st2 = new Student("Nera", 20);
const st3 = new Student("Priya", 21);
const st4 = new Student("Mohan", 22);

console.log(st2);
console.log(st3);
console.log(st4);

// Q18. Constructor function me greet() method add karo.

function StudentWithGreet(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function () {
        console.log(`Hello I am ${this.name}`);
    };
}

const st5 = new StudentWithGreet("Nera", 20);

st5.greet();

// Q19. Predict Output

function User(name) {
    this.name = name;
}

const u1 = new User("Ram");

console.log(u1.name); 
// the output of this code will be Ram


// Q20. Car constructor function banao.
// Properties: brand, price

function Car(brand, price) {
    this.brand = brand;
    this.price = price;
}

const car1 = new Car("Toyota", 1000000);

console.log(car1);

// Q21. Student constructor banao aur prototype me greet() method add karo.

function StudentProto(name, age) {
    this.name = name;
    this.age = age;
}

StudentProto.prototype.greet = function () {
    console.log(`Hello I am ${this.name}`);
};

const st6 = new StudentProto("Nera", 20);

st6.greet();

// Q22. Check karo: obj.__proto__ === Student.prototype

console.log(st6.__proto__ === StudentProto.prototype);

// Q23. Prototype me isAdult() method add karo.

StudentProto.prototype.isAdult = function () {
    return this.age >= 18;
};

console.log(st6.isAdult());

// Q24. Predict Output

function UserProto() {}

UserProto.prototype.sayHi = function () {
    console.log("Hi");
};

const u2 = new UserProto();

u2.sayHi();

// Q25. Prototype me course property add karo.

UserProto.prototype.course = "MERN";

console.log(u2.course);

// Q26. Check karo: u2.hasOwnProperty("course")

console.log(u2.hasOwnProperty("course"));

// Q27. Check karo: "course" in u2

console.log("course" in u2);

// Q28. Prototype chain draw karo:

const arr = [];

console.log(arr.__proto__ === Array.prototype);
console.log(Array.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);

// Q29. Animal object banao.
// Method: eat()

const animal = {
    eat() {
        console.log("Eating");
    }
};

animal.eat();

// Q30. Animal se dog object create karo using Object.create()

const dog = Object.create(animal);

console.log(dog);

// Q31. Dog me bark() method add karo.

dog.bark = function () {
    console.log("Barking");
};

dog.bark();

// Q32. Predict Output

const animal2 = {
    eat() {
        console.log("Eating");
    }
};

const dog2 = Object.create(animal2);

dog2.eat(); // Eating

// Q33–Q35. Student class + greet() function  + isAdult()

class StudentClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello I am ${this.name}`);
    }

    isAdult() {
        return this.age >= 18;
    }
}

// Q36. 3 objects create karo class se.

const cs1 = new StudentClass("Nera", 20);
const cs2 = new StudentClass("Priya", 17);
const cs3 = new StudentClass("Mohan", 22);

console.log(cs1);
console.log(cs2);
console.log(cs3);

cs1.greet();
console.log(cs1.isAdult());

// Q37. Animal class banao.
// Method: eat()

class Animal {
    eat() {
        console.log("Eating");
    }
}

// Q38–Q39. Dog class banao jo Animal ko inherit kare aur bark() method add karo.

class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}

// Q40. Create:
// const d = new Dog();
// Call:
// d.eat();
// d.bark();

const d = new Dog();

d.eat();
d.bark();

/*
Output:

Eating
Barking

explaination - Dog object parent class (Animal) aur apni class dono ke methods access kar sakta hai.
*/