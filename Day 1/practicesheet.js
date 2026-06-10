// 1. Create a variable using const and store your college name. Print it. 
const collegeName = "Geeta University";
console.log(collegeName);

//2. Create a variable using let and update its value three times. 
let score = 10;

console.log(score);

score = 20;
console.log(score);

score = 30;
console.log(score);

score = 40;
console.log(score);

//3. Block scope demo
{
    let x = 10;
    console.log(x);
}

//4. Swap two numbers using array destructuring. 
let a1 = 1, b1 = 2;
[a1, b1] = [b1, a1];

console.log(a1);
console.log(b1);

//5. Cube function
const cube = (num) => num * num * num;

console.log(cube(4));

//6. Even or Odd
const checkEvenOdd = (num) => {
    return num % 2 === 0 ? "Even" : "Odd";
};

console.log(checkEvenOdd(7));
console.log(checkEvenOdd(10));

//7. Maximum of three numbers
const getMaximum = (p, q, r) => {
    if (p >= q && p >= r) return p;
    else if (q >= p && q >= r) return q;
    else return r;
};

console.log(getMaximum(15, 25, 10));

//8. Destructuring array
const numsArr = [10, 20, 30, 40, 50];

const [x1, y1, ...remaining] = numsArr;

console.log(x1);
console.log(y1);
console.log(remaining);

//9. Template literal greeting
function greetUser(name, age) {
    return `Hello ${name}, you are ${age} years old.`;
}

console.log(greetUser("Ram", 25));

//10. Dynamic URL
const userId1 = 101;
const url1 = `/api/users/${userId1}`;

console.log(url1);

//11. Object destructuring
const userObj = {
    userName: "Nera",
    userAge: 20,
    userCourse: "Btech"
};

const { userName, userAge, userCourse } = userObj;

console.log(userName);
console.log(userAge);
console.log(userCourse);

//12. Rename course to technology
const studentObj = {
    studentName: "Ram",
    studentAge: 25,
    course: "MERN"
};

const {
    course: technology
} = studentObj;

console.log(technology);

//13. Default parameter function
function createUser(name, role = "Student") {
    return `Name: ${name}, Role: ${role}`;
}

console.log(createUser("Ram"));
console.log(createUser("Shyam", "Admin"));

//14. Calculator function
function calc(a, b, operation = "add") {
    if (operation === "add") return a + b;
    else if (operation === "subtract") return a - b;
    else if (operation === "multiply") return a * b;
    else if (operation === "divide") return a / b;
}

console.log(calc(8, 4, "add"));

//15. Sum using rest
function sumAllNums(...nums) {
    return nums.reduce((sum, num) => sum + num, 0);
}

console.log(sumAllNums(1, 2, 3));
console.log(sumAllNums(10, 20, 30, 40));

//16. Max using rest
function findMaximum(...nums) {
    return Math.max(...nums);
}

console.log(findMaximum(1, 5, 3));
console.log(findMaximum(10, 20, 7, 99));

//17. Merge arrays
const frontendTech = ["HTML", "CSS"];
const backendTech = ["Node", "Express"];

const mergedTech = [...frontendTech, ...backendTech];

console.log(mergedTech);

//18. Copy array + extra value
const originalArr = [1, 2, 3];
const copiedArr = [...originalArr, 4];

console.log(copiedArr);

//19. Copy object + update email
const userInfo = {
    name: "Ram",
    email: "ram@gmail.com"
};

const updatedUserInfo = {
    ...userInfo,
    email: "newmail@gmail.com"
};

console.log(updatedUserInfo);

//20. Product + discount
const productItem = {
    name: "Laptop",
    price: 50000
};

const productWithDiscount = {
    ...productItem,
    discount: "10%"
};

console.log(productWithDiscount);

//21. map names
const usersList = [
{ name: "Ram", age: 25 },
{ name: "Mohan", age: 30 },
{ name: "Amit", age: 22 }
];

const namesList = usersList.map(u => u.name);

console.log(namesList);

//22. filter age > 24
const filteredList = usersList.filter(u => u.age > 24);

console.log(filteredList);

//23. reduce total age
const totalAgeValue = usersList.reduce((sum, u) => sum + u.age, 0);

console.log(totalAgeValue);

//24. invoice function
function createInvoice(customer, amount) {
    return `Customer: ${customer}, Amount: ₹${amount}`;
}

console.log(createInvoice("Ram", 1200));

//25. Mini challenge
const studentData = {
    studentName: "Ram",
    marks: [80, 90, 70, 85]
};

const { studentName, marks } = studentData;

const totalMarks = marks.reduce((sum, m) => sum + m, 0);
const averageMarks = totalMarks / marks.length;

console.log(`Student: ${studentName}`);
console.log(`Total: ${totalMarks}`);
console.log(`Average: ${averageMarks}`);