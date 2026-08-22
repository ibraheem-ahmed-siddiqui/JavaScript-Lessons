
console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█                 P A S S W O R D - P R O T E C T E D E D          █");
console.log("█                                                                  █");
console.log("█                           V A U L T                              █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");

function createVault(password) {

    const pass = password;
    const secrets = [];
    let isLoggedInFlag = false;

    function login(checkpassword) {

        if (checkpassword === pass) {

            console.log("Logged In!");
            isLoggedInFlag = true;
            return checkAcces();

        } else {

            console.log("Invalid Password");
        }
    }

    function logout() {
        isLoggedIn = false;
        return checkAcces();
    }

    function addSecret(secret) {
        secrets.push(secret);
        console.log(`Secret Added`);
    }

    function getSecrets() {
        return secrets;
    }

    function isLoggedIn() {
        return isLoggedInFlag;
    }

    function checkAcces() {
        if (isLoggedInFlag === true) {

            return {
                addSecret,
                getSecrets,
                isLoggedIn,
                logout
            }

        } else {

            return { login };
        }
    }

    return checkAcces();
}


function main() {

    let vault = createVault("12345");

    // console.log(vault.isLoggedIn());

    // vault.addSecret("Secret 1");

    vault.login("wrong");            // Incorrect password

    vault = vault.login("12345");            // Login successful

    vault.addSecret("Secret 1");
    vault.addSecret("My API key");
    vault.addSecret("My private note");
    vault.addSecret("My account password");
    vault.addSecret("My bank account details");
    
    vault.getSecrets().forEach((secret) => console.log(`1. ${secret}`));

    vault.logout();

    console.log(vault.isLoggedIn()); // false

}

main();