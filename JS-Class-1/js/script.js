// How to test your Js
 	// console.log("HELLO WORLD");
	 alert("Selam");

// Declaring Variables

	var a = 5;
  let b = 3;
   b =  10
//  console.log(b);

//  let example codewars

function helloworld() {
     let str = 'helloworld'
   console.log (str)
 }

//  helloworld()

 
	var fullName = "";
	var firstName = "Adem";
var lastName = " Wolde";
	fullName = firstName + lastName;
// 	console.log(fullName);



//  Comparision
console.log(2 == "2");
console.log(2 === "2");
console.log(2 !== "2");

//Logical Operators
var a = 4;
var d = 6;
var c = "5";
// console.log(a == d || d === c);

//  Weak Typing
// 	Don't worry about the if statment for now. Just focus on the out puts
//	Which one will print in the code below
//	if ("false") {
//console.log("Hello");
// }else {
// 	console.log("Olla");


let array = [80,90,'abebe', 30]

// practise array
let arr = [10, 20, 30, 40, 50];

//  console.log(arr.length);
// let add = 0

 arr.pop();
 arr.push(60)
 arr.unshift(5)
 arr.shift()
console.log(arr);

console.log(arr[arr.length - 1]);

console.log(araay[0] * araay [3])

function name(params) {

}

function adder(num1, num2) {
  return num1 + num2;
}
function average(num1, num2) {
  let sum = adder(num1, num2);
  return sum / 2;
}

let ava = average(20, 30);
console.log(ava);

let sum = (1 == 2) ? console.log('hay') : console.log('bad');
let passed = 55
let score =80
let result =(passed, score) => {
    if (score >= passed ){
        console.log("you are passed")
    } else {
        console.log("you are not passed")

     }
}

result(45, 80)
const output =
 (score >= passed) ? "nice" : "bad";

console.log(output);

// soccer- problem

// pseudo Code
// 1.define 3 arguments for the function
let calculateSoccerPoints = (wins, draws, losses) => {
     // 2. check if arguments valid number
    if (typeof wins !== 'number' || typeof draws !== 'number'  typeof losses !== 'number') {
        return 'please enter a valid number'
       // 3. check if arguments are positive numbers
    }
     // else (wins < 0 || draws < 0 || losses < 0) {

            return 'please enter positive numbers only'
        }
    
         // 4. calculate the total points
        let totalPoints = (wins * 3) + (draws * 1) + (losses * 0)
        return totalPoints
      

let points = calculateSoccerpoints(5, 3, 1)
console.log(points);

// 5. convert to the js function
let calculateSoccerPoints = (wins, draws, losses) => {
  if (
    !Number.isFinite(wins) ||
    !Number.isFinite(draws) ||
    !Number.isFinite(losses)
  ) {
    return "please enter a valid number";
  } else if (wins < 0 || draws < 0 || losses < 0) {
    return "please enter positive numbers only";
  } else {
    let totalPoints = wins * 3 + draws;
    return totalPoints;
  }
};

let points = calculateSoccerPoints(5, 3, 1);
console.log(points);
 

let convertMinutesToSeconds = (minutes) => {
  if (!Number.isFinite(minutes) || minutes < 0) {
     return "valid number"
  }
  else {
    return minutes * 60;
  }
}
let seconds = convertMinutesToSeconds(5);
console.log(seconds);

 // FREECODECAMP EXERCISES

let ourArray = ["jon" , 23 , true]
let mayArray ;

 mayArray = ourArray.pop();
console.log (mayArray)

// let whether = (condition) => {
//   switch (condition) {
//     case "sunny":
//       return "i waring sun glasses";

//     case "rainy":
//       return "i waring rain cot";

//     default:
//       return "t-shirt";
//   }
// };

// console.log(whether("sunny"));
// // practise swiche statement

function calculate(num1, num2, operators) {
  if (!Number.isFinite(num1) || !Number.isFinite(num2)) {
    return "please enter valid numbers";
  }
  switch (operators) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "cannot divide by zero";
      }
      return num1 / num2;
    default:
      return "invalid operators";
  }
}

// //. declare tehe function

// let trafficLight = (color) => {
//   if (typeof color !== "string") return "please enter a valid string";

//   switch (color) {
//     case "red":
//       return "STOP";
//     case "yellow":
//       return "GET READY";
//     case "green":
//       return "GO";

//     default:
//       return "Invalid color";
//   }
// };

// let result11 = trafficLight("red");
// console.log(result11);

// //
// function checkAccess(role, action) {
//   if (typeof role !== "string" || typeof action !== "string") {
//     return "Invalid role";
//   }

//   switch (role.toLowerCase()) {
//     case "admin":
//       switch (action.toLowerCase()) {
//         case "read":
//         case "write":
//         case "delete":
//           return "Access granted";
//         default:
//           return "Access denied";
//       }

//     case "user":
//       switch (action.toLowerCase()) {
//         case "read":
//         case "write":
//           return "Access granted";
//         default:
//           return "Access denied";
//       }

//     case "guest":
//       switch (action.toLowerCase()) {
//         case "read":
//           return "Access granted";
//         default:
//           return "Access denied";
//       }

//     default:
//       return "Invalid role";
//   }
// }

// // swchi statemen practise
// let grade = (level) => {
//   switch (level) {
//     case "A":
//       return "Excellent";
//     case "B":
//       return "Good";
//     case "C":
//       return "average";
//     default:
//       return "Fail";
//   }
// };
// // day
// let day = (n) => {
//   switch (n) {
//     case 1:
//       return "Monday";
//     case 2:
//       return "Tuesday";
//     case 3:
//       return "Wednesday";
//     case 4:
//       return "Thursday";
//     case 5:
//       return "Friday";
//     case 6:
//       return "Saturday";
//     case 7:
//       return "Sunday";

//     default:
//       return "Invalid day";
//   }
// };

// // practise for lop

// // 1. define the argumet
// let printNumbers = (n) => {
//   // 2.define for loop
//   for (let i = 1; i <= n; i++) {
//     // 3. calling the function
//     console.log(i);
//   }
// };


// const sumTo = (n) => {
//   if (!Number.isFinite(n) || n < 1) return "Enter a valid positive number";
//   return (n * (n + 1)) / 2;
// };

// console.log(sumTo(5)); // 15

// function filtEvens(arr) {
//   let num = [];
//   result = arr.filter((num) => num % 2 === 0);
//   num = result;
//   return num;
// }

let reverseString = (str) => {
  let arr = [];
  for (let i = str.length - 1; i >= 0; --i) {
    arr.push(str[i]);
  }
  return arr.join("");
};

let reversString = (str) => {
  if (typeof str !== "string") return "please enter a valid string";
  return str.split("").reverse().join("");
};

// find max number in array

let findMax = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
let hasNumber = (password) => {
  if (!Number.isFinite(password)) return "please enter a valid string";
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "0" && password[i] <= "9") {
      return "true";
    }
  }
  return "false";
};

let studentGrade = (mark) => {
  if (!Number.isFinite(mark)) return "please enter a valid number";
  let sum = 0;
  for (let i = 0; i < mark.length; i++) {
    sum += mark[i];
  }
  let average = sum / mark.length;
  return average;
};

// practise while loop

let addUppEvensWhile = (n) => {
    let sum = 0
    let i=1
    while ( i <= n) {
    if ( i % 2 === 0) {
        sum += i;;
        i++;
        }

    }
    return sum;
}

function count(n) {
  let i = 1;
  while (i <= 5) {
    i++;
  }
  return result;
}

function countEvenswhile(n) {
  let sum = 0;
  let i = 0;
  while (i <= n) {
    if (i % 2 === 0) {
      sum++;
    }
    i++;
  }
  return sum;
}

let result4 = countEvenswhile(10);
console.log(result4);

function uddUp(n) {
  let sum = 0;
  let i = 1;
  while (i <= 10) {
    sum += i;
    i++;
  }
  return sum;
}

let countEvensWhile = (n) => {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      sum++;
    }
  }
  return sum;
};

// calculate converts to dollars in to birr

// 1. define one argument for the function
let convertDollarstoBirr = (dollars) => {
  // 2. check if arguments valid number
  if (typeof dollars !== "number") {
    return "please enter a valid number";
  } else if (dollars < 0) {
    return "please the positive numbers only";
  } else {
    // 4. convert dollars to birr
    let birr = dollars * 54.5;
    return birr;
  }
};

// 5. call the function
let birr = convertDollarstoBirr(200);
console.log(birr);

//
function con(wins, draws, losses) {
  if (
    typeof wins !== "number" ||
    typeof draws !== "number" ||
    typeof losses !== "number"
  ) {
    return "please enter the valid number";
  } else if (wins < 0 || draws < 0 || losses < 0) {
    return "please enter the positive number";
  } else {
    let result = wins * 3 + draws;
  }
  return result;
}

// // let point = con(10, 2, 1);
// // console.log(point);

// // // for loop
// // // break and continue
// // let numbers = [1, 2, 3, 6, 8, 10, 12];

// // for (let i = 0; i < numbers.length; i++) {
// //   if (numbers[i] === 8) {
// //     continue;
// //   }
// //   console.log(numbers[i]);
// // }

// // // 1. define an aregument

// // let number = (n) => {
// //   if (typeof n !== "number" || n < 0) {
// //     return "please enter the valid input";
// //   }
// //   return (n * (n + 1)) / 2;
// // };

// // let x = number(4);
// // console.log(x);

// // // let loopFor =( n) => {
// // //     let sum = 0
// // //     for ( let i = 1; i <= n; i++){
// // //         sum += i
// // //     }
// // //     return sum

// // // }
// // // let result2 = loopFor(100)

// // let loopWhile = (n) => {
// //   let sum = 0;
// //   let i = 1;
// //   while (i <= n) {
// //     sum += i;
// //     i++;
// //   }
// //   return sum;
// // };
// // let result3 = loopWhile(1);

// // let printOdd = (arr) => {
// //   result5 = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] % 2 !== 0) {
// //       result5.push(arr[i]);
// //     }
// //   }
// //   return result5;
// // };

// // let dayName = (n) => {
// //   switch (n) {
// //     case 1:
// //       "Monday";
// //     case 2:
// //       "Tuesday";
// //     case 3:
// //       "Wednesday";
// //     case 4:
// //       "Thursday";
// //     case 5:
// //       "Friday";
// //     default:
// //       "invalid day";
// //   }
// //   return dayName;
// // };

// // let findFirstNegative = (arr) => {
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] < 0) {
// //       return arr[i];
// //     }
// //   }
// //   return null;
// // };

// // // let sumMultiples = (n) => {
// // //     let add = 0
// // //     for ( let i = 0; i <= n; i++){
// // //         if ( i % 3 === 0 || i % 5 === 0) {
// // //             add += i
// // //         }
// // //     }
// // //     return add
// // // }

// // // let reverseString = (str) => {
// // //     return `hello ${'str'}`
// // // }

// // // let result6 = reverseString('yared')
// // // console.log(result6);

// // let doubleOddNumbers = (arr) => {
// //   let result7 = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] % 2 !== 0) {
// //       result7.push(arr[i] * 2);
// //     }
// //   }
// //   return result7;
// // };

// // let collectItems = (items) => {
// //   let result8 = [];

// //   for (let i = 0; i < items.length; i++) {
// //     if (items[i] === 5) {
// //       break;
// //     }
// //     if (items[i] !== "gold" && items[i] !== "diamond") {
// //       result8.push(items[i]);
// //       continue;
// //     }
// //   }
// //   return result8;
// // };

// // let treasureHunt = (items) => {
// //   let result9 = [];
// //   for (let i = 0; i < items.length; i++) {
// //     if (items[i] === "trap") {
// //       break;
// //     }
// //     if (items[i] === "gold" || items[i] === "diamond") {
// //       result9.push(items[i]);
// //     }
// //     if (result9 === 4) {
// //       break;
// //     }
// //   }
// //   return result9;
// // };

// // let countVowels = (str) => {
// //   let count = 0;
// //   for (let i = 0; i < str.length; i++) {
// //     if (
// //       str[i] === "a" ||
// //       str[i] === "e" ||
// //       str[i] === "i" ||
// //       str[i] === "o" ||
// //       str[i] === "u"
// //     ) {
// //       count++;
// //     }
// //   }
// //   return count;
// // };

// // let fizzBuzzArray = (n) => {
// //   let res = [];
// //   for (let i = 1; i <= n; i++) {
// //     if (i % 3 === 0 && i % 5 === 0) {
// //       res.push("FizzBuzz");
// //     } else if (i % 3 === 0) {
// //       res.push("Fizz");
// //     } else if (i % 5 === 0) {
// //       res.push("Buzz");
// //     } else {
// //       res.push(i);
// //     }
// //   }
// //   return res;
// // };

// // // practise oop
// // //
// // // let student = {
// // //   FirstName: "yared",
// // //   LastName: "meklit",
// // //   Email: "yared@gmail.com",
// // //   abebe: {
// // //     group: [10, "alemu"],
// // //     bach: "april",
// // //   },
// // //   sumFunction: function () {
// // //     return `${this.FirstName} ${this.LastName}`;
// // //   },
// // // };

// // // console.log(student["FirstName"]);
// // // console.log(student.abebe.group[0]);
// // // console.log(student.someFunction());

// // class Student {
// //   constructor(Name, Email) {
// //     this.Name = Name;
// //     this.Email = Email;
// //   }
// //   result = function () {
// //     return this.Email;
// //   };
// // }

// // let student1 = new Student("meklit", "m@gmail.com");
// // console.log(student1.Email);

// // // oop

// // let parentName = {
// //   FirstName: "yared",
// //   LastName: "meklit",
// //   add: {
// //     email: "sumadd@gmail.com",
// //   },

// //   conns: function () {
// //     return `${this.LastName} ${this.FirstName}`;
// //   },
// // };

// // //
// // class Person {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }
// //   greet = function () {
// //     return `"Hi, my name is ${this.name} and I am ${this.age} years old"`;
// //   };
// // }

// // const person1 = new Person("Yared", 22);

// // //
// // class Car {
// //   constructor(brand, year) {
// //     this.brand = brand;
// //     this.year = year;
// //   }
// //   // return how old the car is
// //   getAge() {
// //     return `${2024 - this.year} years old`;
// //   }
// // }

// // // Incapsulation

// // // class BankAccount {
// // //   #balance; // must be private

// // //   constructor(initialbalance = 0) {
// // //     this.#balance = initialbalance;
// // //   }
// // //   deposit(amount) {
// // //     if (amount <= 0) {
// // //       return "deposit amount must be positive";
// // //     }
// // //     this.#balance += amount;
// // //     return `deposite ${amount}`;
// // //   }
// // //   withdraw(amount) {
// // //     if (amount > this.#balance) {
// // //       return "insufficient balance";
// // //     }
// // //     if (amount <= 0) {
// // //       return "withdraw amount must be positive";
// // //     }
// // //     this.#balance -= amount;
// // //     return `withdraw ${amount}`;
// // //   }
// // //   getBalance() {
// // //     return this.#balance;
// // //   }
// // // }

// // // practise bulit - in array

// // let me = [1, 2, 3, 4, 5];

// // // me.pop()
// // // console.log(me)
// // let doubled = me.map((x) => x * 2);
// // console.log(doubled);

// // me.forEach((item) => {
// //   console.log(item);
// // });

// // // oop practice

// // // let Name = {
// // //   elonmusk: "tesla",
// // //   step_jobs: "apple",
// // //   yared: {
// // //     name: "yared",
// // //     email: "best@gmail.com",
// // //   },
// // //   sumadd: function () {
// // //     return this.elonmusk + " " + step_jobs;
// // //   },
// // // };

// // // console.log(Name.sumadd);

// // // constructor

// // // class Companies {
// // //   constructor(name, companies, product) {
// // //     this.name = name;
// // //     this.companies = companies;
// // //     this.product = product;
// // //   }
// // //   add() {
// // //     return this.product;
// // //   }
// // // }

// // // const first = new Companies("elonmusk", "Spas_x", "tesla");
// // // const second = new Companies("step_jops", "Applle", "iphone");

// // // console.log(first);
// // // console.log(second);

// // // class Product {
// // //   constructor(product, brand, price) {
// // //     this.product = product;
// // //     this.brand = brand;
// // //     this.price = price;
// // //   }
// // //   display() {
// // //     return `the ${this.product} ${this.brand} cost  $${this.price}.`;
// // //   }
// // // }

// // // const product1 = new Product("Adidas", "Nike", 60);
// // // console.log(product1.display());

// // // class Properties {
// // //   constructor(brand, model, year) {
// // //     this.brand = brand;
// // //     this.model = model;
// // //     this.year = year;
// // //   }
// // //   getCarInfo() {
// // //     return `{this.brand} ${this.model} ${this.year}`;
// // //   }
// // // }

// // // let car1 = new Properties("Toyota", "Corolla", 2022);

// // // //
// // // class BankAccount {
// // //   #balance;
// // //   constructor(initialbalance = 0) {
// // //     this.#balance = initialbalance;
// // //   }
// // //   deposit(amount) {
// // //     if (amount <= 0) {
// // //       return "deposit amount must be positive";
// // //     }
// // //     this.balance += amount;
// // //     return `deposit: ${amount}`;
// // //   }
// // //   withdraw(amount) {
// // //     if (amount > this.balance) {
// // //       return "insuffitiont balance";
// // //     }
// // //     if (amount <= 0) {
// // //       return "withdraw amount must be positive";
// // //     }
// // //     amount -= this.balance;
// // //     return `withdraw ${amount}`;
// // //   }
// // //   getBalance() {
// // //     return this.#balance;
// // //   }
// // // }

// // //
// // class User {
// //   constructor(username, password) {
// //     this.username = username;
// //     this.password = password;
// //   }
// //   chackpassword(inputpassword) {
// //     return this.password === inputpassword;
// //   }
// // }

// // //

// // // class Person {
// // //   constructor(name, age, grade) {
// // //     this.name = name;
// // //     this.age = age;
// // //     this.grade = grade;
// // //   }
// // //   introduse() {
// // //     return `my name is ${this.name}, i am ${this.age} and grade ${this.grade}`;
// // //   }
// // // }

// // // let u = new Person("yared", 22, 12);
// // // console.log(u.introduse());

// // // //

// // // let text = "Hello World";

// // // console.log(text.length);

// // // text.slice(0, 5);

// // // find hidenworedes

// // let FindhidenWoreds = (str) => {
// //   let result = 0;
// //   for (let i = 0; i < str.length; i++) {
// //     if (str[i] >= "a" && str[i] <= "z") {
// //       result += str[i];
// //     }
// //   }
// //   return result;
// // };
// // // or
// // let findHidden = (str) => {
// //   let words = 0;
// //   for (let i = 0; i < str.length; i++) {
// //     if (str[i] !== str[i].toUpperCase()) {
// //       words += str[i];
// //     }
// //   }
// //   return words;
// // };

// // // practise nestedarray

// // let nestedArr = (arr1, arr2) => {
// //   let sortedarr1 = arr1.sort((a, b) => a - b);
// //   let sortedarr2 = arr2.sort((a, b) => a - b);

// //   let max1 = sortedarr1[sortedarr1.length - 1];
// //   let min1 = sortedarr1[0];

// //   let max2 = sortedarr2[sortedarr2.length - 1];
// //   let min2 = sortedarr2[0];

// //   return min1 > min2 && max1 < max2;
// // };

// // // practise math.min

// // let nestedArray = (arr1, arr2) => {
// //   let min1 = Math.min(...arr1);
// //   let max1 = Math.max(...arr1);

// //   let min2 = Math.min(...arr2);
// //   let max2 = Math.max(...arr2);
// //   if (min1 > min2 && max2 > max1) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // };

// // //filter method

// // let pickSum = (str) => {
// //   let result = "";
// //   for (let i = 0; i < str.length; i++) {
// //     if (str[i].toLowerCase && str[i].prototype.filter(a, i, o, u, v)) {
// //       result += str[1];
// //     } else {
// //       false;
// //     }
// //   }
// //   return result;
// // };

// // let addUp = (n) => {
// //   let sum = 0;
// //   for (let i = 0; i <= n; i++) {
// //     if (i % 2 === 0) {
// //       sum += i;
// //     }
// //   }
// //   return sum;
// // };

// // let test = (str) => {
// //   for (let i = 0; i < str.length; i++) {
// //     if (str[i] === str.LowerCase || str[i] === str.UpperCase) {
// //       return true;
// //     } else {
// //       return false;
// //     }
// //   }
// // };

// // // spred operater

// // // let arr4 = [1, 2, 3, 4, 5];

// // // let result14 = ([x, y, z] = arr4);
// // // console.log(x);

// // // practis rell world question

// // // 1.User Registration Validation (VERY COMMON)
// // let isValidUser = (user) => {
// //   // name check
// //   if (typeof user.name !== "string" || user.name.length < 3) {
// //     return false;
// //   }

// //   // email check
// //   if (!user.email.includes("@")) {
// //     return false;
// //   }

// //   // password length
// //   if (user.password.length < 6) {
// //     return false;
// //   }

// //   // password must contain at least one number
// //   let hasNumber = false;
// //   for (let chr of user.password) {
// //     if (chr >= "0" && chr <= "9") {
// //       hasNumber = true;
// //       break;
// //     }
// //   }

// //   return hasNumber;
// // };

// // // best

// // let ValidUser = (user) => {
// //   // name
// //   if (typeof user.name !== "string" || user.name.trim().length < 3) {
// //     return false;
// //   }

// //   // email validation
// //   if (
// //     typeof user.email !== "string" ||
// //     !user.email.includes("@") ||
// //     !user.email.includes(".") ||
// //     user.email.includes(" ")
// //   ) {
// //     return false;
// //   }

// //   // password validation
// //   if (typeof user.password !== "string" || user.password.length < 6) {
// //     return false;
// //   }

// //   let hasNumber = false;
// //   let hasLetter = false;

// //   for (let ch of user.password) {
// //     if (ch >= "0" && ch <= "9") hasNumber = true;
// //     if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")) hasLetter = true;
// //   }

// //   return hasNumber && hasLetter;
// // };

// // let validUser = (user) => {
// //   // chack user
// //   if (typeof user.name !== "string" && user.name.length < 3) false;

// //   // emailchack
// //   if (!user.email.includes("@")) false;

// //   // passwored chack
// //   if (user.paswored.length < 6) false;
// //   let hasNumber = false;
// //   for (let char of user.passwored) {
// //     if (char >= 0 && char <= 9) {
// //       hasNumber = true;
// //     }
// //   }
// //   return hasNumber;
// // };

// // // 2 — Shopping Cart Total (Real E-commerce)

// // let cartTotal = (cart) => {
// //   let total = 0;

// //   for (let item of cart) {
// //     let result = item.price * item.quantity;
// //     total += result;
// //   }

// //   return total;
// // };

// // let test5 = cartTotal(2, 50);
// // console.log(test5);

// // // TEST 4 — Password Strength Checker (Security)
// // let Checker = (passwored) => {
// //   let hasLetter = false;
// //   let num = false;

// //   for (let ch of passwored)
// //     if ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")) {
// //       hasLetter = true;
// //     }
// //   if (ch >= "0" && ch <= "9") {
// //     num = true;
// //   }
// //   return hasLetter && num;
// // };

// // // magical array practise

// // function isPrime(num) {
// //   if (num <= 1) return false;
// //   if (num === 2) return true;
// //   if (num % 2 === 0) return false;
// //   for (i = 3; i <= Math.sqrt(num); i += 2) {
// //     if (num % i === 0) return false;
// //   }
// // }

// // function magicalarra(array) {
// //   let sumofPrimes = 0;
// //   let hasprime = false;
// //   for (i = 0; i < array.length; i++) {
// //     let prime = isPrime(array[i]);
// //     if (prime) {
// //       sumofPrimes += array[i];
// //       hasprime = true;
// //     }
// //   }
// //   if (hasprime && sumofPrimes === array[0]) return 1;
// //   if (!hasprime && array[0] === 0) return 1;

// //   return 0;
// // }

// // // countes the digite

// // let num_of_digits = (num) => {
// //   return Math.abs(num).toString().length;
// // };

// // // sort
// // let bublesort = (arr) => {
// //   for (let i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr.length - 1; j++) {
// //       if (arr[j] > arr[j + 1]) {
// //         let temp = arr[j];
// //         arr[j] = arr[j + 1];
// //         arr[j + 1] = temp;
// //       }
// //     }
// //     return arr;
// //   }

// //   //

// //   let hiddenWords = (str) => {
// //     let add = "";
// //     for (let i = 0; (i = str.length); i++) {
// //       if (str[i] >= "a" && str[i] <= "z") {
// //         add += str[i];
// //       }
// //     }
// //     return add;
// //   };
// //   //
// //   let test = hiddenWords("cBJDUYFEUaHHSHJDCHNt");
// //   console.log(test);

// //   let collectstr = (str) => {
// //     let addUpp = "";
// //     for (let i = 0; i < str.length; i++) {
// //       if (str[i] !== str[i].toUpperCase()) {
// //         addUpp += str[i];
// //       }
// //     }
// //     return addUpp;
// //   };

// //   let result13 = collectstr("cBJDUYFEUaHHSHJDCHNt");
// //   console.log(result13);

// //   // interviwu question
// //   // 1. declare afunction
// //   let countTrue = (num) => {
// //     // 2.declare added value save
// //     let count = 0;
// //     // 3. declare for loop
// //     for (let i = 0; i < num.length; i++) {
// //       // 4. difin a condition
// //       if (num[i] === true) {
// //         count++;
// //       }
// //     }
// //     return count;
// //   };
// //   let value = [true, false, true];
// //   let final = countTrue(value);
// //   console.log(final);

// //   function reverseSt(str) {
// //     return str.split("").reverse().join("");
// //   }

// //   console.log(reverseSt("hello"));

// //   function maxNum(arr) {
// //     let max = arr[0];
// //     for (let i = 0; i < arr.length; i++) {
// //       if (arr[i] > max) {
// //         max = arr[i];
// //       }
// //     }
// //     return max;
// //   }

// //   // sumup
// //   // 1. declare a function
// //   function sumUpp(arr) {
// //     // sum value on save variable declare
// //     let sum = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //       sum += arr[i];
// //     }

// //     return sum;
// //   }

// //   let net = sumUpp([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// //   console.log(net);

// //   // while

// //   function sumadd(arr) {
// //     let add = 0;
// //     i = 0;
// //     while (i < arr.length) {
// //       add += arr[i];
// //       i++;
// //     }
// //     return add;
// //   }

// //   function isEvene(num) {
// //     if ((num & 1) === 0) {
// //       return true;
// //     }
// //     return false;
// //   }

// //   // dublicate

// //   function removeDuplicates(arr) {
// //     let dup = [];
// //     for (let i = 0; i < arr.length; i++) {
// //       if (!dup.includes(arr[i])) {
// //         dup.push(arr[i]);
// //       }
// //     }
// //     return dup;
// //   }
// //   // mergeSorted

// //   function mergeSorted(arr1, arr2) {
// //     let i = 0;
// //     let j = 0;
// //     let result = [];

// //     while (i < arr1.length && j < arr2.length) {
// //       if (arr1[i] <= arr2[j]) {
// //         result.push(arr1[i]);
// //         i++;
// //       } else {
// //         result.push(arr2[j]);
// //         j++;
// //       }
// //     }

// //     // remaining elements
// //     while (i < arr1.length) {
// //       result.push(arr1[i]);
// //       i++;
// //     }

// //     while (j < arr2.length) {
// //       result.push(arr2[j]);
// //       j++;
// //     }

// //     return result;
// //   }

// //   // soreted array
// //   function sorteArray(arr1, arr2) {
// //     let mereged = [...arr1, ...arr2];
// //     return mereged.sort((a, b) => a - b);
// //   }

// //   // toSum
// //   function toSum(arr, target) {
// //     let map = new Map();
// //     for (let i = 0; i < arr.length; i++) {
// //       let complement = target - arr[i];
// //       if (map.has(complement)) {
// //         return [map.get(complement), i];
// //       }
// //       map.set(arr[i], i);
// //     }
// //   }

// //   // interviwu question
// //   function reverseSt(str) {
// //     let left = 0;
// //     let right = str.length - 1;
// //     while (left < riht) {
// //       if (str[left] !== str[right]) {
// //         return false;
// //       }
// //       left++;
// //       right--;
// //     }
// //     return true;
// //   }

// //   // reverseString
// //   function reverseStr(str) {
// //     let reversed = str.split("").reverse().join("");
// //     return reversed === str;
// //   }

// //   let valu = ["hello"];
// //   let resul = reverseStr(valu);
// //   console.log(resul);

// //   // reverseNumber
// //   function reverseNumbers(num) {
// //     let reversed = 0;
// //     while (num > 0) {
// //       let digit = num % 10;
// //       reversed = reversed * 10 + digit;
// //       num = Math.floor(num / 10);
// //     }
// //     return reversed;
// //   }

// //   // find largest
// //   function findLargest(arr) {
// //     let largest = arr[0];
// //     for (let i = 0; i < arr.length; i++) {
// //       if (arr[i] > largest) {
// //         largest = arr[i];
// //       }
// //     }
// //     return largest;
// //   }

// //   // remove dublicates

// //   function removeDuplicates(arr) {
// //     let dublicate = [];
// //     for (i = 0; i < arr.length; i++) {
// //       if (!dublicate.includes(arr[i])) {
// //         dublicate.push(arr[i]);
// //       }
// //     }
// //     return dublicate;
// //   }

// //   // identify the secondLargest number

// //   function secondLargestnumber(arr) {
// //     let largest = -Infinity;
// //     let secondlargest = -Infinity;
// //     for (let i = 0; i < arr.length; i++) {
// //       if (arr[i] > largest) {
// //         secondlargest = largest;
// //         largest = arr[i];
// //       } else if (arr[i] > secondlargest && arr[i] < largest) {
// //         secondlargest = arr[i];
// //       }
// //     }
// //     return secondlargest;
// //   }

// //   // tosum
// //   function toSum(nums, target) {
// //     for (let i = 0; i < nums.length; i++) {
// //       for (let j = i + 1; j < nums.length; j++) {
// //         if (nums[i] + nums[j] === target) {
// //           return [i, j];
// //         }
// //       }
// //     }
// //   }

// //   // interviwu
// //   function twoSum(nums, target) {
// //     let map = {};

// //     for (let i = 0; i < nums.length; i++) {
// //       let need = target - nums[i];

// //       if (map[need] !== undefined) {
// //         return [map[need], i];
// //       }

// //       map[nums[i]] = i;
// //     }
// //   }

// //   // countEvene
// //   function isEvene(nums) {
// //     return Math.floor(nums / 2) * 2 === nums;
// //   }

// //   // countodd
// //   function countFalse(arr) {
// //     let count = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //       if (arr[i] === false) {
// //         count++;
// //       }
// //     }
// //     return count;
// //   }

// //   // // secondLargestnumber
// //   // let secondLargestnumber = (arr) => {
// //   //   let largest = -Infinity;
// //   //   let secondlargest = -Infinity;

// //   //   for (let i = 0; i < arr.length; i++) {
// //   //     if (arr[i] > largest) {
// //   //       secondlargest = largest;
// //   //       largest = arr[i];
// //   //     } else if (arr[i] > secondlargest && arr[i] < largest) {
// //   //       secondlargest = arr[i];
// //   //     }
// //   //   }
// //   //   return secondlargest;
// //   // };

// //   // ARRAY + HASH MAP
// //   function hasDiff(nums, k) {
// //     for (let i = 0; i < nums.length; i++) {
// //       for (let j = i + 1; j < nums.length; j++) {
// //         if (Math.abs(nums[i] - nums[j]) === k) {
// //           return true;
// //         }
// //       }
// //     }
// //     return false;
// //   }

// //   // validate string

// //   function isvalid(s) {
// //     let stack = [];
// //     let map = {
// //       ")": "(",
// //       "}": "{",
// //       "]": "[",
// //     };
// //     for (let char of s) {
// //       if (map[char]) {
// //         let last = stack.pop();

// //         if (last !== map[char]) {
// //           return false;
// //         }
// //       } else {
// //         stack.push(char);
// //       }
// //     }
// //     return stack.length === 0;
// //   }

// //   // sortArray
// //   let sortArray = (arr) => {
// //     let sorted = arr.sort((a, b) => a - b);
// //     return sorted;
// //   };

// //   // minMax
// //   function minMax(arr) {
// //     let min = Math.min(...arr);
// //     let max = Math.max(...arr);
// //     return [min, max];
// //   }

// //   // without math.min & max
// //   function minMax(arr) {
// //     let min = arr[0];
// //     let max = arr[0];
// //     for (let i = 0; i < arr.length; i++) {
// //       if (arr[i] < min) {
// //         min = arr[i];
// //       }
// //       if (arr[i] > max) {
// //         max = arr[i];
// //       }
// //     }
// //     return [min, max];
// //   }

// //   // Follow-Up
// //   function folloUp(nums, target) {
// //     for (let i = 0; i < nums.length; i++) {
// //       let need = target - nums[i];
// //       if (nums.includes(need)) {
// //         return [nums.indexOf(need), i];
// //       }
// //     }
// //   }
// //   // reverseNumber
// //   function reverseNumber(x) {
// //     let reversed = 0;
// //     while (x !== 0) {
// //       reversed = reversed * 10 + (x % 10);
// //       x = Math.floor(x / 10);
// //     }

// //     return reversed;
// //   }

// //   // countEven
// //   function countEven(arr) {
// //     let count = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //       if (arr[i] % 2 === 0) {
// //         count++;
// //       }
// //     }
// //     return count;
// //   }
// //   // sumArray
// //   function sumArray(arr) {
// //     let sum = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //       sum += arr[i];
// //     }
// //     return sum;
// //   }
// //   //removeDuplicates
// //   function removeDuplicates(arr) {
// //     let dublicate = [];
// //     for (let i = 0; i < arr.length; i++) {
// //       if (!dublicate.includes(arr[i])) {
// //         dublicate.push(arr[i]);
// //       }
// //     }
// //     return dublicate;
// //   }

// //   // Merge Two Sorted Arrays6

// //   function mergeSortedArrays(arr1, arr2) {
// //     let i = 0;
// //     let j = 0;
// //     let result = [];

// //     while (i < arr1.length && j < arr2.length) {
// //       if (arr1[i] <= arr2[j]) {
// //         result.push(arr1[i]);
// //         i++;
// //       } else {
// //         result.push(arr2[j]);
// //         j++;
// //       }
// //     }

// //     // remaing elements
// //     while (i < arr1.length) {
// //       result.push(arr1[i]);
// //       i++;
// //     }

// //     while (j < arr2.length) {
// //       result.push(arr2[j]);
// //       j++;
// //     }

// //     return result;
// //   }
// // };

// // // proplem solving

// // // FOR i from 0 to length of array
// // //     FOR j from i + 1 to length of array
// // //         IF array[i] + array[j] equals k
// // //             RETURN true
// // // RETURN false

// // let checkValue = (num, k) => {
// //   for (let i = 0; i < num.length; i++) {
// //     for (let j = i + 1; j < num.length; j++) {
// //       if (num[i] + num[j] === k) {
// //         return true;
// //       }
// //     }
// //   }
// //   return false;
// // };

// // // sliding window pattern

// // // IF array length < k
// // //     RETURN null

// // // SET currentSum = 0

// // // FOR i from 0 to k - 1
// // //     currentSum = currentSum + array[i]

// // // SET maxSum = currentSum

// // // FOR i from k to end of array
// // //     currentSum = currentSum + array[i]
// // //     currentSum = currentSum - array[i - k]
// // //     maxSum = maximum of maxSum and currentSum

// // // RETURN maxSum

// // let maximumSum = (num, k) => {
// //   if (nums.length < k) return null;
// //   let curentsum = 0;
// //   for (let i = 0; i < k; i++) {
// //     curentsum += num[i];
// //   }
// //   let maxsum = curentsum;

// //   for (let i = k; i < num.length; i++) {
// //     curentsum += num[i] - num[i - k];
// //     maxsum = Math.max(maxsum, curentsum);
// //   }
// //   return maxsum;
// // };

// // // most frequent element

// // // SET frequencyMap = empty map
// // // for each element in array
// // //    if element is in frequencyMap
// // //.    in crement its count by 1
// // //   else
// // //.  add element to frequencyMAP with count 1

// // // SET maxCount = 0
// // // set mostFrequentElemnt = null

// // // for each (elemnt, count) in frequencyMap
// // //   if count > maxCount
// // //.   maxCount = count
// // //    mostFrequentElement = elemnt

// // let mostFrequentElement = (arr) => {
// //   let frequencyMap = new Map();

// //   for (let element of arr) {
// //       frequencyMap.set(element, (frequencyMap.get(element)  || 0) + 1);
// //   }
// //   let maxCount = 0;
// //   let result = null;

// //   for (let [element, count] of frequencyMap) {
// //     if (count > maxCount) {
// //       maxCount = count;
// //       result = element;
// //     }
// //   }
// //   return result;
// // };

// // // toSumVariants

// // function toSumVariants(nums, k) {
// //   for (let i = 0; i < nums.length; i++) {
// //     for (let j = i + 1; j < nums.length; j++) {
// //       if (nums[i] + nums[j] === k || Math.abs(nums[i] - nums[j]) === k) {
// //         return true;
// //       }
// //     }
// //   }
// //   return false;
// // }

// // function toSumVariantes(nums, k) {
// //   const numSet = new Map(); // newu value set

// //   for (let num of nums) {
// //     if (numSet.has(num + k) || numSet.has(num - k)) {
// //       return true;
// //     }
// //   }
// //   return false;
// // }
// // // secondmaximum
// // function secondMaximum(arr) {
// //   let largest = -Infinity;
// //   let secondLargest = -Infinity;

// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > largest) {
// //       secondLargest = largest; // save the old largest value
// //       largest = arr[i];
// //     } else if (arr[i] > secondLargest && arr[i] < largest) {
// //       secondLargest = arr[i];
// //     }
// //   }
// //   return secondLargest;
// // }

// // // FizzBuzz

// // function fizzBuzz(n) {
// //   let result = [];
// //   for (let i = 1; i <= n; i++) {
// //     if (i % 3 === 0 && i % 5 === 0) {
// //       result.push("FizzBuzz");
// //     } else if (i % 3 === 0) {
// //       result.push("Fizz");
// //     } else if (i % 5 === 0) {
// //       result.push("Buzz");
// //     } else {
// //       result.push(i);
// //     }
// //   }
// //   return result;
// // }

// // // find the first non-repiting char
// // function firstNonRepitingChar(str) {
// //   let charCount = new Map(); // save the char and its count

// //   for (let char of str) {
// //     charCount.set(char, (charCount.get(char) || 0) + 1);
// //   }
// //   for (let char of str) {
// //     if (charCount.get(char) === 1) {
// //       return char;
// //     }
// //   }
// //   return null;
// // }

// // // first repiting element
// // function firstRepitingEllement(arr) {
// //   let repitingArr = new Map();

// //   for ( let element of arr) {
// //     repitingArr.set(element, (repitingArr.get(element) || 0) + 1);
// //   }
// //   for( let element of arr) {
// //     if (repitingArr.get(element) > 1) {
// //       return element;
// //     }
// //   }
// //   return null;
// // }

// // // sum array is equales to k

// // function sumArrayEqualsK(arr, k) {
// //   for (let i = 0; i < arr.length; i++) {
// //     let sum = 0;
// //     for (let j = i; j < arr.length; j++) {
// //       sum += arr[j];
// //       if (sum === k) return true;
// //     }
// //   }
// //   return false;
// // }

// // // Count Subarrays with Sum = K
// // function countSubarraysWithSumK(arr, k) {
// //   let count = 0;
// //    for ( let i = 0; i < arr.length; i++) {
// //     let sum = 0;
// //     for (let j = i; j < arr.length; j++) {
// //       sum += arr[j];
// //       if (sum === k) count++;
// //     }
// //    }
// //    return count;
// // }

// // // Longest Subarray with Sum = K
// // function longestSubarrayWithSumk(arr, k) {
// //   let maxlength = 0;

// //   for (let i = 0; i < arr.length; i++) {
// //     let sum = 0;
// //     for (let j = i; j < arr.length; j++) {
// //       sum += arr[j];
// //       if (sum === k) {
// //         let currentlength = j - i + 1; // Subarray: [1, -1, 5, -2]
// // // j - i + 1 = 3 - 0 + 1 = 4 ✅ correct length
// //         maxlength = Math.max(maxlength, currentlength)
// //       }
// //     }
// //   }
// //   return maxlength;
// // }

// // //

// // // give to sum give target
// // function twoSum(nums, target) {
// //   for (let i = 0; i < nums.length; i++) {
// //     for (let j = i+ 1; j < nums.length; j++) {
// //       if (nums[i] + nums[j] === target) {
// //         return [i, j];
// //       }
// //     }
// //   }
// //   return null;
// // }

// // function twoSum(nums, target) {
// //   let map = {};

// //   for (let i = 0; i < nums.length; i++) {
// //     let complement = target - nums[i]

// //     if (map[complement] !== undefined){
// //       return [map[complement], i]
// //   }
// //   map[nums[i]] = i;
// // }
// // return null
// // }

// // // longest substring without  repiting char
// // function longestSubstringWithoutRepitingChar(s) {
// //   let map = new Map();
// //   let maxLength = 0;
// //   let start = 0;

// //   for (let end = 0; end < s.length; end++) {
// //     let char = s[end];

// //     if(map.has(char) && map.get(char) >= start) {
// //       start = map.get(char) + 1;
// //     }

// //     map.set(char, end);
// //     maxLength = Math.max(maxLength, end - start + 1);
// //   }
// //   return maxLength;
// // }

// // another solve method
// function longestSubstringWithoutRepitingChar(s) {
//   let set = new Set();
//   let maxLength = 0;
//   let left = 0;

//   for (let right = 0; right < s.length; right++) {
//     while (set.has(s[right])) {
//       set.delete(s[left]);
//       left++;
//     }
//     set.add(s[right]);
//     maxLength = Math.max(maxLength, right - left + 1);
//   }
//   return maxLength;
// }

// // Longest Substring with At Most K Distinct Characters
function longestSubstringWithAtMostKDistinctCharacters(s, k) {
  let map = new Map();
  let maxLength = 0;
  let start = 0;

// //   for (let end = 0; end < s.length; end++) {
// //     let char = s[end];
// //     map.set(char, (map.get(char) || 0) + 1);

// //     while (map.size > k) {
// //       let startChar = s[start];
// //       map.set(startChar, map.get(startChar) - 1);
// //       if (map.get(startChar) === 0) {
// //         map.delete(startChar);
// //       }
// //       start++;
// //     }
// //     maxLength = Math.max(maxLength, end - start + 1);
// //   }
// //   return maxLength;
}

//

let lastcharacter = (s) => {
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") {
    i--;
  }
  return s[i];
};

let variable = lastcharacter("hello world");
// let result = variable.trim();
console.log(variable);

// new intervale
var insert = function (intervals, newInterval) {
  let result = [];
  let i = 0;
  // Add all intervals before newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }
  // Merge overlapping intervals

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  // Add remaining intervals
  while (i < intervals.length) {
    result.push(intervals[i]);
  }
  return result;
};

// add two numbers

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;

    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummy.next;
}

// median of sortted arrays

var findMedianSortedArrays = function (nums1, nums2) {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }
  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }
  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }
  let n = merged.length;
  if (n % 2 === 0) {
    return (merged[n / 2 - 1] + merged[n / 2]) / 2;
  } else {
    return merged[Math.floor(n / 2)];
  }
};

/// target numbers

function targetNumbers(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let nedeed = target - nums[i];

    if (map.hasOwnProperty(nedeed)) {
      return [map[nedeed], i];
    }
    map[nums[i]] = i;
  }
  return [];
}

/// max sum array

function maxSumArr(arr, k) {
  let n = arr.length;
  if (n < k) return null;

  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  let maxSum = windowSum;
  for (let i = k; i < n; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    // i = index of the substitut numbere
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

// binarry

function binary(num) {
  if (num === 0) return "0";
  let result = "";
  while (num > 0) {
    result = (num % 2) + result;
    num = Math.floor(num / 2);
  }
  return result;
}

// longest prifixes

var longestCommonPrefix = function (strs) {
  let result = "";

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return result;
      }
    }

    result += char;
  }

  return result;
};

// reverse the odd length woreds

function reverseOdd(str) {
  if (str.length % 2 === 0) return str;
  let value = "";
  for (let i = 0; i < str.length; i++) {
    if (str.length % 2 !== 0) {
      value += str.split("").rverse().join("");
    }
  }
  return value;
}

// maximum sum

let maximumSum = (num, k) => {
  if (num.length < k) return null;
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += num[i];
  }

  let maxSum = windowSum;
  for (let i = k; i < num.length; i++) {
    windowSum = windowSum - num[i - k] + num[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
};

function containsDuplicate(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    }
    map.set(nums[i], true);
  }
  return false;
}

//

function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    profit = prices[i] - minPrice;
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
  return maxProfit;
}

// is anagrame

let isAnagrame = (s, t) => {
  if (s.length !== t.length) return null;

  let count = {};

  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
};
//
function majorityElement(nums) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) > nums.length / 2) return num;
  }
}

// move zeros
let moveZeros = (num) => {
  let result = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== 0) result.push(num[i]);
  }
  for (let i = 0; i < num.length; i++) {
    if (num[i] === 0) result.push(num[i]);
  }
  return result;
};

// or

let moveZeroes = (nums) => {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
  return nums;
};

//longest conscutive numbers

function longestConsecutive(nums) {
  let numSet = new Set(nums);
  let maxLength = 0;

  for (let num of nums) {
    // only start at the beginning of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let length = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        length++;
      }

      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
}

//

const containsDuplicate = (nums) => {
  let set = new Set();

  for (let num of nums) {
    if (set.has(num)) return true;

    set.add(num);
  }
  return false;
};

//

let productOfArrayWithOutSellf = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    result.push(product);
  }
  return result;
};

//

let maxSumArr = (nums) => {
  let res = [0];
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let currentSum = 0;
    for (let j = i; j < n; j++) {
      currentSum += nums[j];
    }
    res = Math.max(res, currentSum);
  }
  return res;
};

//

let maxProfit = (prices) => {
  let res = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      res = Math.max(res, prices[j] - prices[i]);
    }
  }
  return res;
};

let longestConsecutiveSequence = (arr) => {
  if (arr.length === 0) return 0;
  let res = 0,
    count = 0;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) continue;
    if (arr[i] === arr[i - 1] + 1) {
      count++;
    } else {
      count = 1;
    }
    res = Math.max(res, count);
  }
  return res;
};

function sevenBoom(arr) {
  let nums = arr.toString();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === "7") return "Boom!";
  }
  return "No 7 in the array";
}

function towerHanoi(disks) {
  if (disks === 0) return 0;
  return 2 ** disks - 1;
}

// Number of Boomerangs
function countBoomerangs(arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
      count++;
    }
  }

  return count;
}

// oddish or evenish
function oddishOrEvenish(num) {
 let  sum = 0;
 let digits = num.toString();
 for ( let i = 0; i < digits.length; i++) {
  sum += Number(digits[i]);
 }
  return sum % 2 === 0 ? "Evenish" : "Oddish";
}

// length of nested array
function nestedArrayLength(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      count += nestedArrayLength(arr[i]);
    }
    else {
      count++;
    }
  }
  return count;

}