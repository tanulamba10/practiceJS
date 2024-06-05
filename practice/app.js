// let quarter = 0;
// switch (quarter) {
//   case 1:
//     console.log("January, February, March");
//     break;
//   case 2:
//     console.log("April, May, June");
//     break;
//   case 3:
//     console.log("July, August, September");
//     break;
//   case 4:
//     console.log("October, November, December");
//     break;
//   default:
//     console.log("error!");
// }

// let str = "A Workplace";
// if ((str[0] === "a" || str[0] === "A") && str.length > 5) {
//   console.log("golden string");
// } else {
//   console.log("a regular string");
// }

// let num1 = 2;
// let num2 = 5;
// let num3 = 1;
// if (num1 > num2 && num1 > num3) {
//   console.log(`${num1} is the greatest of the numbers`);
// } else if (num2 > num1 && num2 > num3) {
//   console.log(`${num2} is the greatest of the numbers`);
// } else {
//   console.log(`${num3} is the greatest of the numbers`);
// }

// let num = "243";
// let num2 = "456373";
// if (num[num.length - 1] === "3" && num2[num2.length - 1] === "3") {
//   console.log("same last digits");
// } else {
//   console.log("different last digits");
// }

// for (let i = 1; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 15; i = i + 2) {
//   console.log(i);
// }

// let num = prompt("enter your number:");
// num = parseInt(num);
// for (let i = num; i <= num * 10; i += num) {
//   console.log(i);
// }

// let i = 2;
// console.log(`original value of ${i}`);
// while (i <= 20) {
//   console.log(i);
//   i = i + 2;
// }
// console.log(`last value of ${i}`);

// let favMovie = "aashiqui2";

// let guess = prompt("For quitting just write 'quit'. Guess my favorite movie: ");

// while (guess !== favMovie && guess !== "quit") {
//   guess = prompt("try guessing again: ");
// }

// if (guess === favMovie) {
//   alert("Yepp that's the one!");
// } else {
//   alert("you quit!");
// }

// let todo = [];

// let req = prompt("enter your request");

// while (true) {
//   if (req === "quit") {
//     alert("you quit!");
//     break;
//   }

//   if (req === "list") {
//     console.log("my todo list of today-");
//     for (let i = 0; i < todo.length; i++) {
//       console.log(i, todo[i]);
//     }
//     console.log("ends here.");
//   } else if (req === "add") {
//     let task = prompt("enter the task you want to add");
//     todo.push(task);
//     alert("task added");
//   } else if (req === "delete") {
//     let idx = prompt("enter the index of task you want to remove");
//     todo.splice(idx, 1);
//     alert("task deleted");
//   } else {
//     alert("wrong request");
//   }

//   req = prompt("enter your request");

// }

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == num) {
//     arr.splice(i, 1);
//     console.log(arr);
//   }
// }
// console.log(`final arr : ${arr}`);

// let number = 5612980;
// let count = 0;

// let copy = number;

// while (copy > 0) {
//   count++;
//   copy = Math.floor(copy / 10);
// }
// console.log(count);

// let number = 3324678;
// let sum = 0;

// let copy = number;

// while (copy > 0) {
//   digit = copy % 10;
//   sum = sum + digit;
//   copy = Math.floor(copy / 10);
// }

// console.log(sum);

// let number = 4;
// let fact = 1;

// let copy = number;

// while (copy > 0) {
//   fact = fact * copy;
//   copy--;
// }

// console.log(`Factorial of ${number} is ${fact}`);

// let arr = [2, 7, 8, 9, 4, 1, 6, 5, 8];
// let largest = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (largest < arr[i]) {
//     largest = arr[i];
//   }
// }

// console.log(largest);

// const obj = {
//   1: "tanu",
//   2: "sagar",
//   null: "distance",
//   full: "friendship",
//   whole: "love"
// };

//GUESSING RANDOM NUMBER
// const range = prompt("enter the max range:");

// const random = Math.floor(Math.random() * range) + 1;
// alert("for quitting the game, enter 'quit'.");

// let guess = prompt("Guess the random number");

// while (true) {
//   if (guess == "quit") {
//     alert("you quit!");
//     break;
//   }

//   if (guess == random) {
//     alert("YAY! you guessed the right number!");
//     break;
//   } else if (guess > random) {
//     guess = prompt("THE NUMBER IS ACTUALLY SMALLER! Try again:");
//   } else {
//     guess = prompt("THE NUMBER IS ACTUALLY LARGER! Try again:");
//   }
// }

//ROLLING THE DICE
// const range = 6;
// let play = prompt("enter play to start the game:");
// while (true) {
//   if (play == "quit") {
//     alert("you quit");
//     break;
//   }
//   if (play == "play") {
//     alert("Rolling the dice...");
//     const random = Math.floor(Math.random() * range) + 1;
//     alert(`the dice says ${random}`);
//     play = prompt("enter play to roll the dice again");
//   }
// }

// const car = [
//   {
//     name: "Tata",
//     model: "Altroz iTurbo",
//     color: "Harbor Blue"
//   },
//   {
//     name: "Maruti",
//     model: "S-Cross",
//     color: "Nexa Blue"
//   },
//   {
//     name: "Hyundai",
//     model: "i20",
//     color: "Fiery Red"
//   },
//   {
//     name: "Volkswagen",
//     model: "Polo",
//     color: "Flash Red"
//   }
// ];

// const person = {
//   name: "Tanu",
//   age: 20,
//   city: "Delhi"
// };

// let str = ["tanu", "smriti", "vaishnavi", "chesta"];
// function concat(str) {
//   let allStr = "";
//   for (let i = 0; i < str.length; i++) {
//     allStr = allStr + str[i];
//   }
//   return allStr;
// }

// let arr = [2, 5, 4, 3, 8, 1, 6, 9, 7];
// let num = 6;
// function element(arr, num) {
//   let newArr = [];;
//   for (let i = 0; i < arr.length; i++) {
//     if (num < arr[i]) {
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(newArr);
// }

// element(arr, num);

// let arr = [2, 4, 3, 6, 9, 8, 7, 5];
// let num = 5;
// function getElement(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > num) {
//       console.log(arr[i]);
//     }
//   }
// }

// getElement(arr, num);

// let str = "abcdeabcdeffghheijji";
// let ans = "";

// function getUnique(str) {
//   for (let i = 0; i < str.length; i++) {
//     let currChar = str[i];
//     if (ans.indexOf(currChar) == -1) {
//       ans = ans + currChar;
//     }
//   }
//   return ans;
// }

// getUnique(str)

// let country = ["malaysia", "india", "united states of america", "england"];

// function longestName(country) {
//   let ansIdx = 0;
//   for (let i = 0; i < country.length; i++) {
//     let ansLen = country[ansIdx].length;
//     let currLen = country[i].length;
//     if (currLen > ansLen) {
//       ansIdx = i;
//     }
//   }
//   return country[ansIdx];
// }

// let answer = longestName(country);
// console.log(answer);

// let str = "Namrata";

// function vowelCount(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === "a" || str.charAt(i) === "e" || str.charAt(i) === "i" || str.charAt(i) === "o" || str.charAt(i) === "u") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(`The number of vowels in the ${str} are ${vowelCount(str)}`);

// let str = "Namrata";
// let count = 0;
// let vowels = "aeiou";

// function vowelCount(str) {
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vowels.length; j++) {
//       if (str[i] === vowels[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// console.log(`The number of vowels in the ${str} are ${vowelCount(str)}`);

// let start = 200;
// let end = 350;

// function randomNum(start, end) {
//   let diff = end - start;
//   return Math.floor(Math.random() * diff) + start;
// }

// let id = setInterval(() => {
//   console.log("hello world!");
// }, 2000);

// setTimeout(() => {
//   clearInterval(id);
//   console.log("clear interval ran!");
// }, 10000);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arrayAvg = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(arrayAvg(arr));

// let num = 20;

// const isEven = (num) => {
//   if (num % 2 === 0) {
//     return "the number is even";
//   } else {
//     return "the number is odd";
//   }
// };

// console.log(isEven(num));

// let length = 4;
// function callback() {
//       console.log(this.length);
// };

// const object = {
//       length: 5,
//       method(callback) {
//             callback();
//       }
// };

// object.method(callback, 1, 2);

// let arr = [2, 3, 15, 5, 7, 3, 2, 1, 0];

// let min = arr.reduce((res, val) => {
//       console.log(res);
//       if (res < val) {
//             return res;
//       } else {
//             return val;
//       }
// });

// console.log(min);

// let arr = [1, 2, 3, 4, 5];

// let square = arr.map((num) => {
//       return num * num;
// });
// console.log(square);

// let sum = square.reduce((res, val) => {
//       return res + val;
// }, 0);
// console.log(sum);

// let avg = sum / arr.length;
// console.log(avg);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArr = arr.map((el) => {
//       return el + 5;
// });

// console.log(newArr);

// let arr = ["tanu", "namu", "kunal", "dharmender", "renu"];
// let upper = arr.map((name) => {
//       return name.toUpperCase();
// });

// console.log(upper);

// let arr = [1, 2, 3, 4, 5];

// function doubleAndReturnArgs(arr, ...args) {
//       console.log(arr, ...args.map(el => el * 2));
// }

// const siblings = {
//       name1: "tanu",
//       age1: 20,
//       name2: "namrata",
//       age2: 15
// };

// const sibling2 = {
//       name3: "kunal",
//       age3: 13
// };

// function mergeObjects(siblings, sibling2) {
//       const newObj = { ...siblings, ...sibling2 };
//       return newObj;
// };

// console.log(mergeObjects(siblings, sibling2));