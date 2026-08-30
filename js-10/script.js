
const paraList = ["Keep learning.", "You're making progress.", "Build something today."];

const darkModeButton = document.getElementById("darkMode-button");
const changeMessageButton = document.getElementById("messageChange-button");

darkModeButton.addEventListener("click", () => {

    const body = document.body;
    const isDark = body.classList.toggle("dark");
    darkModeButton.textContent = isDark? "Light Mode" : "Dark Mode";
});

let i = 0;

changeMessageButton.addEventListener("click", () => {
    if (i > 2) {
        i = 0;
    }
    const message = document.getElementById("message");
    message.textContent = paraList[i];
    i++;
});

const list = document.getElementById("list");


list.append(document.createElement("li").textContent = "HTML");
list.append(document.createElement("li").textContent = "CSS");
list.append(document.createElement("li").textContent = "JavaScript");

const clearSkillsButton = document.body.append(document.createElement("button").textContent = "Clear Skills".classList.add("clearSkills-button"));

clearSkillsButton.addEventListener("click", () => {

    const listElements = list.querySelectorAll("li");
    listElements.forEach((el) => {
        el.remove();
    });
})