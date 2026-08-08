
import readline from "readline/promises";

// for(let i = 1; i <= 20; i++) {
//     console.log(i);
// }

// for(let i = 1; i <= 20; i++) {

//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }

// for(let i = 10; i >= 1; i--) {
//     console.log(i);
// }


// let total = 0;
// for(let i = 1; total < 100; ) {
//     total += i;
// }
// console.log(total);


// let i = 1;
// while (let i <= 5) {
//     console.log(i);
//     i++;
// }

// for(let i = 1; i <= 10; i++){

//     if(i === 5){
//         continue;
//     }

//     console.log(i);
// }

// for(let i = 1; i <= 10; i++){

//     if(i === 7){
//         break;
//     }

//     console.log(i);
// }


// do {
//     console.log("Hello!");
// } while(false);

// for (let i = 1; i <= 5; i++) {

//     console.log("*".repeat(i));
// }

// for (let i = 1; i <= 2; i++) {

//     for(let w = 1; w <=3; w++){
//         console.log(i, w);
//     }
// }

const r = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

async function takeInput() {

    let inputNum = 0;

    do {

        inputNum = await r.question("Enter a number: ");

        if (inputNum === "" || inputNum === null) {
            console.log("Input can't be null");
        } else if (isNaN(inputNum)) {
            console.log("Invalid Number");
        } else if (inputNum < 1) {
            console.log("Input can't be lower than 1");
        } else if (inputNum > 1000) {
            console.log("Input is out of range");
        }

    } while (inputNum === "" || inputNum === null || inputNum < 1 || inputNum > 1000 || isNaN(inputNum));

    return Number(inputNum);
}

async function main() {

    let num = await takeInput();

    let sum = 0;
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 1; i <= num; i++) {

        console.log(i, "--", i % 2 === 0 ? "Even" : "Odd");
        sum += i;

        if (i % 2 === 0) {
            evenCount += 1;
        } else {
            oddCount += 1;
        }
    }

    console.log("\n");
    console.log(`Sum : ${sum}`);
    console.log(`Even Count : ${evenCount}`);
    console.log(`Odd Count : ${oddCount}`);

    r.close();
}

main();