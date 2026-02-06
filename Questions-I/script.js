//1. Print numbers from 1 to 10
console.log("1. Print numbers from 1 to 10");
for(let i = 1; i < 11; i++){
    console.log(i);
}

//2. Print only even numbers from 1 to 20
console.log("2. Print only even numbers from 1 to 20");
for(let i = 1; i < 21; i++){
    if(i%2 === 0){
        console.log(i);
    }
}

//3. Print numbers from 10 to 1
console.log("3. Print numbers from 10 to 1.");
for(let i = 10; i > 0; i--){
    console.log(i);
}

//4. Print the word "Yes" 5 times
console.log("4. Print the word Yes 5 times");
for(let i = 1; i < 6; i++){
    console.log("Yes");
}

//5. Print whether numbers from 1 to 10 are even or odd.
console.log("5. Print whether numbers from 1 to 10 are even or odd.");
for(let i = 1; i < 11; i++){
    if(i%2 === 0){
        console.log(`${i} is EVEN`);
    }
    else{
        console.log(`${i} is ODD`)
    }
}

//8. Print multiplication table of 5
console.log("8. Print multiplication table of 5");
for(let i = 1; i < 11; i++){
    console.log(`5 * ${i} = ${5*i}`);
}

//9. Count how many numbers between 1 and 15 are greater than 8
console.log("9. Count how many numbers between 1 and 15 are greater than 8");
let count = 0;
for(let i = 1; i < 16; i++){
    if(i>8){
        console.log(i);
        count++;
    }
}
console.log(`${count} numbers are greater than 8, between 1 to 15`);

