
console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█                 S T U D E N T   G R A D E                        █");
console.log("█                                                                  █");
console.log("█                         M A N A G E R                            █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");

let marks = [78, 92, 65, 88, 45, 71, 33, 96];

function markFuncition() {

    let totalMarks = 0;
    let highestMark = 0;
    let lowestMark = 100;

    let studentPassCount = 0;
    let studentFailCount = 0;

    let fullMarkCount = 0;
    
    for (let mark of marks) {

        console.log(`Marks of student [${marks.indexOf(mark) + 1}] are (${mark}/100)`);

        totalMarks += mark;
        
        if(mark > highestMark) {
            highestMark = mark;
        }

        if(mark < lowestMark) {
            lowestMark = mark;
        }

        if( mark >= 40) {
            studentPassCount += 1;
        } else {
            studentFailCount += 1;
        }

        if( mark === 100) {
            fullMarkCount += 1;
        }

    }

    const averageMarks = Math.round(totalMarks/(marks.length + 1));

    console.log("\n");

    console.log(`The Sum of all the marks is: [${totalMarks}]`);
    console.log(`The Average of all the marks is: [${averageMarks}]`);
    console.log(`The Highest of all the marks is: [${highestMark}]`);
    console.log(`The Lowest of all the marks is: [${lowestMark}]`);
    console.log(`The Number of students whom got full marks are: [${fullMarkCount}]`);

    console.log("\n");

}

function main() {

    markFuncition();
}

main();