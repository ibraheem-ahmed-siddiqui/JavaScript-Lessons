
const paraList = ["Keep learning.",
    "You're making progress.",
    "Build something today.",
    "Never stop experimenting."
];

const darkModeButton = document.getElementById("darkMode-button");
const changeMessageButton = document.getElementById("messageChange-button");

darkModeButton.addEventListener("click", () => {

    const body = document.body;
    const isDark = body.classList.toggle("dark");
    darkModeButton.textContent = isDark? "Light Mode" : "Dark Mode";
});

let i = 0;
const message = document.getElementById("message");

changeMessageButton.addEventListener("click", () => {
    if (i > paraList.length - 1) {
        i = 0;
    }
    message.textContent = paraList[i];
    i++;
});

const list = document.getElementById("list");

const skillsList = ["HTML", "CSS", "JavaScript"]

skillsList.forEach((name) => {
    li = document.createElement("li");
    li.textContent = name;
    list.append(li);
});

const clearSkillsButton =document.createElement("button");
clearSkillsButton.textContent = "Clear Skills";
document.body.append(clearSkillsButton);

clearSkillsButton.addEventListener("click", () => {

    const listElements = list.querySelectorAll("li");
    listElements.forEach((el) => {
        el.remove();
    });
})