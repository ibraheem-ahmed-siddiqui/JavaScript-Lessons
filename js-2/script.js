
let username = prompt("Enter your username: ");
let password = prompt("Enter your password: ");

if (username === "" || username === null || password === "" || password === null) {
    alert("Please enter both username and password.");
    
} else {

    if (username === "admin" && password === "12345") {

        alert("Welcome Admin!");
        console.log("Logged in as admin");

    } else if (username === "admin" && password !== "12345") {

        alert("Incorrect password. Please try again.");
        console.log("Access denied")

    } else if (username !== "admin") {

        alert("User not found");
        console.log("Access denied");
    }
}