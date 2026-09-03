
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

const html = document.createElement("li");
html.textContent = "HTML";
list.append(html);

const css = document.createElement("li");
css.textContent = "CSS";
list.append(css);

const js = document.createElement("li");
js.textContent = "JavaScript";
list.append(js);

const clearSkillsButton =document.createElement("button");
clearSkillsButton.textContent = "Clear Skills";
clearSkillsButton.classList.add("clearSkills-button");
document.body.append(clearSkillsButton);

clearSkillsButton.addEventListener("click", () => {

    const listElements = list.querySelectorAll("li");
    listElements.forEach((el) => {
        el.remove();
    });
})