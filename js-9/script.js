
const displayPara = "Hi my name would be Ibrahim"

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
// const wordlist = displayPara.trim();
const wordlist = ["Hi", "My", "Name", "Would", "Be", "Ibrahim", "And", "I", "Am", "Trying", "To", "Become", "A", "Software", "Developer"];
const colorList = ["f72585", "b5179e", "7209b7", "560bad", "480ca8", "3a0ca3",
    "3f37c9", "4361ee", "4cc9f0"
];

const title = document.getElementById("title");
const loopButton = document.getElementById("loopButton");

loopButton.addEventListener("click", function () {

    let w = 0;
    for (let i = 0; i < wordlist.length; i++) {

        setTimeout(() => {

            title.textContent = wordlist[i];
            if(w > colorList.length) {
                w = 0;
            }
            title.style.color = "#" + colorList[w];
            w++;

        }, 300 * i);
    }

});
