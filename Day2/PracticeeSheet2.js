// 1. Predict Output
let a1 = 10;

function outer() {
    let a = 20;

    function inner() {
        console.log(a);
    }

    inner();
}

outer();

// The output of the above code will be 20


// 2. Predict Output
let count = 1;

function test() {
    console.log(count);
    let count = 2;
}

// test();
// This program will throw a ReferenceError


// 3. Create a nested function structure of 4 levels and print variables from all parent scopes.
function A() {
    let x = 2;
    function B() {
        let y = 3;
        function C() {
            let z = 4;
            function D() {
                let l = 10;
                console.log(x);
                console.log(y);
                console.log(z);
                console.log(l);
            }
            D();
        }
        C();
    }
    B();
}
A();


// 4. Write a function that returns another function and demonstrates lexical scope.
function outer2() {
    let username = "Praveen";

    return function inner2() {
        console.log("Hello " + username);
    };
}
const greetUser = outer2();
greetUser();


// 5. Predict output
var x1 = 100;
function a() {
    console.log(x);
    var x = 50;
}
a();
// The output will be undefined


// 6. Create a function where a child function can access grandparent variables.
function grandParent(){
    let name="Praveen";
    function parent(){
        let age=21;
        function child(){
            console.log(name);
            console.log(age);
        }
        child();
    }
    parent();
}
grandParent();


//7. Predict output
let name = "Ram";
function show() {
    let name = "Mohan";
    return function() {
        console.log(name);
    };
}
show()();
//the ouput of the above code will be -  Mohan


//8. Create a 3-level nested function and access all variables inside the innermost function. 
function outer(){
    let a=20
    function middle(){
        let b=30;
        function inner(){
            let c=40
            console.log(a);
            console.log(b);
            console.log(c);
        }
        inner()
    }
    middle()
}
outer()

// Q9. Can a parent access a child variable? Demonstrate using code.
function parent() {
    function child() {
        let secret = "Hello";
    }
    child();
    // console.log(secret); // Error: secret is not defined
}
parent();//it means a parent cannot access a child variable


// Q10. Create a private variable using lexical scope.
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter());
console.log(counter());


// Q11. Create a counter closure. Output: 1 2 3
function counterClosure() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
const counterFn = counterClosure();
counterFn();
counterFn();
counterFn();


// Q12. Create a reverse counter. Output: 10 9 8
function reverseCounter() {
    let num = 10;
    return function () {
        console.log(num--);
    };
}
const reverse = reverseCounter();
reverse();
reverse();
reverse();


// Q13. Create a closure-based bank account.
function bankAccount() {
    let balance = 0;
    return {
        deposit(amount) {
            balance += amount;
        },
        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
            }
        },
        checkBalance() {
            console.log(balance);
        }
    };
}
const account = bankAccount();
account.deposit(5000);
account.withdraw(1000);
account.checkBalance();


// Q14. Create a closure that remembers the username forever.
function rememberUser(username) {
    return function () {
        console.log(username);
    };
}
const user = rememberUser("Praveen");
user();


// Q15. Create a closure-based login attempt tracker.
function loginTracker() {
    let attempts = 0;
    return function () {
        attempts++;
        if (attempts >= 3) {
            console.log("Account Locked");
        } else {
            console.log("Failed Attempt:", attempts);
        }
    };
}
const login = loginTracker();
login();
login();
login();


// Q16. Build a closure that stores a secret password.
function passwordManager() {
    let password = "12345";
    return {
        getPassword() {
            return password;
        }
    };
}
const pass = passwordManager();
console.log(pass.getPassword());


// Q17. Build a shopping cart using closure.
function shoppingCart() {
    let items = [];
    return {
        addItem(item) {
            items.push(item);
        },
        removeItem(item) {
            items = items.filter(i => i !== item);
        },
        showItems() {
            console.log(items);
        }
    };
}
const cart = shoppingCart();
cart.addItem("Laptop");
cart.addItem("Mouse");
cart.removeItem("Mouse");
cart.showItems();


// Q18. Create a closure-based voting machine.
function votingMachine() {
    let voters = [];
    return function (user) {
        if (voters.includes(user)) {
            console.log("Already Voted");
        } else {
            voters.push(user);
            console.log("Vote Accepted");
        }
    };
}
const vote = votingMachine();
vote("Ram");
vote("Ram");


// Q19. Build a closure that counts function executions.
function executionCounter(fn) {
    let count = 0;
    return function () {
        count++;
        console.log("Executed:", count, "times");
        fn();
    };
}
function greetMessage() {
    console.log("Hello");
}
const tracked = executionCounter(greetMessage);
tracked();
tracked();


// Q20. Build a closure-based expense tracker.
function expenseTracker() {
    let total = 0;
    return {
        addExpense(amount) {
            total += amount;
        },
        getTotal() {
            return total;
        }
    };
}
const expense = expenseTracker();
expense.addExpense(500);
expense.addExpense(1000);
console.log(expense.getTotal());


// Q21. Create an IIFE that prints: Welcome to JavaScript
(function () {
    console.log("Welcome to JavaScript");
})();


// Q22. Pass arguments to an IIFE and calculate area of rectangle.
(function (length, width) {
    console.log("Area =", length * width);
})(10, 5);


// Q23. Create an arrow function IIFE.
(() => {
    console.log("Arrow Function IIFE");
})();


// Q24. Use IIFE to create private variables.
const privateData = (function () {
    let secret = "Private";

    return {
        getSecret() {
            return secret;
        }
    };
})();
console.log(privateData.getSecret());


// Q25. Create a module pattern using IIFE.
const modulePattern = (function () {
    let count = 0;
    return {
        increment() {
            count++;
        },

        decrement() {
            count--;
        },

        reset() {
            count = 0;
        }
    };
})();



// Q26. Create calculate(a,b,operation)
function calculate(a, b, operation) {
    return operation(a, b);
}
console.log(calculate(10, 5, (a, b) => a + b));
console.log(calculate(10, 5, (a, b) => a - b));
console.log(calculate(10, 5, (a, b) => a * b));
console.log(calculate(10, 5, (a, b) => a / b));


// Q27. Create custom HOF named repeat()
function repeat(times, fn) {
    for (let i = 0; i < times; i++) {
        fn();
    }
}
function sayHello() {
    console.log("Hello");
}
repeat(5, sayHello);


// Q28. Create a logger HOF.
function logger(message) {
    console.log(`[INFO] ${message}`);
}
logger("User Logged In");


// Q29. Create a function execution timer using HOF.
function timer(fn) {
    return function () {
        const start = Date.now();
        fn();
        const end = Date.now();
        console.log("Execution Time:", end - start, "ms");
    };
}
const testFunction = timer(() => {
    for (let i = 0; i < 1000000; i++) {}
});
testFunction();


// Q30. Function wrapper counting calls.
function callCounter(fn) {
    let count = 0;

    return function () {
        count++;
        console.log("Called:", count);

        fn();
    };
}


// Q31. Return names using map.
const users = [
    { name: "Ram", age: 25 },
    { name: "Mohan", age: 30 },
    { name: "Amit", age: 22 }
];
const names = users.map(user => user.name);
console.log(names);


// Q32. Convert [1,2,3,4,5] to squares.
const squares = [1, 2, 3, 4, 5].map(num => num * num);
console.log(squares);


// Q33. Product names array.
const products = [
    { name: "Laptop" },
    { name: "Mouse" },
    { name: "Keyboard" }
];
const productNames = products.map(product => product.name);
console.log(productNames);


// Q34. Filter even numbers.
const evenNumbers = [1, 2, 3, 4, 5, 6].filter(num => num % 2 === 0);
console.log(evenNumbers);


// Q35. Filter users age > 25.
const filteredUsers = users.filter(user => user.age > 25);
console.log(filteredUsers);


// Q36. Filter expensive products.
const productList = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];
const expensiveProducts = productList.filter(product => product.price > 1000);
console.log(expensiveProducts);


// Q37. Find total sum.
const sum = [10, 20, 30, 40].reduce((acc, curr) => acc + curr, 0);
console.log(sum);


// Q38. Find maximum value.
const max = [5, 12, 3, 45, 2].reduce((acc, curr) =>
    curr > acc ? curr : acc
);
console.log(max);


// Q39. Count total characters.
const totalCharacters = ["JavaScript", "React", "Node"]
    .reduce((acc, word) => acc + word.length, 0);
console.log(totalCharacters);


// Q40. Ultra Hard
const orders = [
    {
        id: 1,
        amount: 5000,
        status: "completed"
    },
    {
        id: 2,
        amount: 2000,
        status: "pending"
    },
    {
        id: 3,
        amount: 7000,
        status: "completed"
    },
    {
        id: 4,
        amount: 1000,
        status: "completed"
    }
];

// 1. Completed Orders
const completedOrders = orders.filter(order => order.status === "completed");

// 2. Total Revenue
const totalRevenue = completedOrders.reduce(
    (total, order) => total + order.amount,
    0
);

// 3. Average Revenue
const averageRevenue = totalRevenue / completedOrders.length;

// 4. Highest Order Amount
const highestOrderAmount = completedOrders.reduce(
    (max, order) => order.amount > max ? order.amount : max,
    0
);

// 5. Array of Order IDs
const orderIds = completedOrders.map(order => order.id);

console.log("Completed Orders:", completedOrders);
console.log("Total Revenue:", totalRevenue);
console.log("Average Revenue:", averageRevenue);
console.log("Highest Order Amount:", highestOrderAmount);
console.log("Order IDs:", orderIds);