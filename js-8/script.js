
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
                isLoggedIn
            }
        } else {

            return {login};
        }
    }

    return checkAcces();
}


function main() {

    let vault1 = createVault(123);
    vault1 = vault1.login(123);
    vault1.addSecret("My API key");
    vault1.addSecret("My private note");
    vault1.addSecret("My account password");
    vault1.addSecret("My bank account details");
    vault1.getSecrets().forEach((secret) => console.log(`1. ${secret}`));

}

main();