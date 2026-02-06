// //6. Ask user for a number and say if it's positive or negative
// console.log("6. Ask user for a number and say if it's positive or negative");
// let num = +prompt("Enter a number : ");
// if(num>0){
//     console.log(`${num} is positive`);
// }
// else{
//     console.log(`${num} is negative`);
// }


// //10. Ask user for password and print access status
// console.log("10. Ask user for password and print access status");
// let password = "abc#123";
// let userInput = prompt("Enter password : ");
// if(userInput === password){
//     console.log("Successfully logged in");
// }
// else{
//     console.log("Incorrect password. Please eneter correct password");
// }


// //7. Ask user’s age and check if eligible to vote
// console.log("7. Ask user’s age and check if eligible to vote");
// let age = +prompt("Enter your age : ");
// if(age >= 18){
//     console.log("Eligible");
// }
// else{
//     console.log("Not eligible");
// }

// let age = +prompt("Enter your age : ");
// if(age === null){
//     console.error("You pressed cancel");
// }
// else{
//     if(age.trim() === ""){
//         console.error("Please enter some value");
//     }
//     else{
//         age = Number(age);
//         if(isNaN(age)){
//             console.error("Please enter a number..");
//         }
//         else{
//             if(age < 0){
//                 console.error("Invalid input");
//             }
//             else if(age >= 18){
//                 console.log("You can vote");
//                 console.log(`Your age is ${age}`);
//             }
//             else{
//                 console.log("You can not vote");
//                 console.log(`Your age is ${age}`);
//             }
            
//         }
//     }
// }



// //11. Allow only 3 attempts to enter correct password
// console.log("11. Allow only 3 attempts to enter correct password");
// let password = "Aadi$19";
// for(let i = 1; i < 4; i++){
//     let userInput = prompt("Enter password : ");
//     if(userInput === password){
//         console.log("Successfully logged in");
//         break;
//     }
//     console.log("Account Locked !");
// }


// //13. Print numbers divisible by 7 from 1 to 50
// console.log("13. Print numbers divisible by 7 from 1 to 50");
// for(let i = 1; i < 51; i++){
//     if(i%7 === 0){
//         console.log(i);
//     }
// }


// //14. Sum of all odd numbers from 1 to 30
// console.log("14. Sum of all odd numbers from 1 to 30");
// let sum = 0;
// for(let i = 1; i < 31; i++){
//     if(i%2 === 1){
//         sum = sum + i;
//     }
// }
// console.log(sum);


// //15. Keep asking number until user enters an even number
// console.log("15. Keep asking number until user enters an even number");
// let num = 1;
// while(num%2 !== 0){
//     let userInput = +prompt("Enter a number :");
//     num = userInput;
// }
// console.log("Even Number");


// //16. Print numbers between two user inputs
// console.log("16. Print numbers between two user inputs");
// let start = +prompt("Enter start number : ");
// let end = +prompt("Enter end numebr :");
// for(let i = start ; i < end; i++){
//     console.log(i);
// }


// //17. Print only first 3 odd numbers from 1 to 20
// console.log("17. Print only first 3 odd numbers from 1 to 20");
// let count = 0;
// for(let i = 1; i < 21; i++){
//     if(i%2 === 1){
//         console.log(i);
//         count++;
//     }
//     if(count===3) break;
// }


// //18. Ask user 5 numbers. Count how many are positive
// console.log("18. Ask user 5 numbers. Count how many are positive");
// let count = 0;
// for(let i = 1; i < 6; i++){
//     let userInput = +prompt("Enter number "+ i);
//     if(userInput > 0){
//         count++;
//     }
//     console.log(userInput);
// }
// console.log(`You have entered ${count} positive numbers`);


// //12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// console.log("12. Ask user for words until they type STOP. Count how many times they typed YES");
// let count = 0;
// let userInput = prompt("Enter a word ");
// while(userInput !== "stop"){
//     if(userInput === "yes"){
//         ++count;
//     }
//     userInput = prompt("Enter a word");
// }
// console.log(`You typed "yes" ${count} times`);


//19. ATM Simulator – Allow 3 withdrawals Start with ₹1000 balance. Ask withdrawal amount 3 times. If enough balance → deduct Else → print “Insufficient balance”
console.log("19. ATM Simulator – Allow 3 withdrawals Start with ₹1000 balance. Ask withdrawal amount 3 times. If enough balance → deduct Else → print Insufficient balance");
let balance = 1000;
let counter = 0;
let flag = false;
while(balance > 0 && counter !== 3){
    let withdraw = +prompt("Amount you wish to withdraw");
    counter++;
    if(withdraw <=balance) balance -= withdraw;
    else{
        flag = true;
        break;
    }
}
if(flag === true){
    console.log("Insufficient balance");
}
console.log(`Balance : ${balance}`);