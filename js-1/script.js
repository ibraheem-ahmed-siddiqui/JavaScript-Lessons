
let validationError = true;

let name, age, programmingLanguage;


do {

    name = prompt("Please enter your username:").trim();

    if (name === null || name === "") {
        console.log("Invalid username");
    }

} while (name === null || name === "");

do {

    age = Number(prompt("Please enter your age:").trim());

    if (age === null || age === "" || Number.isNaN(age)) {
        console.log("Invalid age");
    }

} while (age === null || age === "" || Number.isNaN(age));

do {

    programmingLanguage = prompt("Please enter your favorite programming language:").trim();

    if (programmingLanguage === null || programmingLanguage === "") {
        console.log("Invalid programming language");
    }

} while (programmingLanguage === null || programmingLanguage === "");


console.log(`Hello, ${name.toUpperCase()}! You are ${age} years old and your favourite programming Language is ${programmingLanguage}.`);
console.log(`Your name has ${name.length} characters.`);
console.log(`The first three characters of your name are ${name.slice(0, 3)}`);
console.log(`A random number between 1 and 10 is : ${Math.floor(Math.random() * 10 + 1)}`);
console.log(`The rounded square root of your age is ${Math.round(Math.sqrt(age))}.`);

if (programmingLanguage.toLowerCase().includes("java")) {
    console.log("Seems like you like Java family of programming languages.");
} else {
    console.log("Interesting choice of programming language!");
}