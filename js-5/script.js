

console.log("\n");
console.log("████████████████████████████████████████████████████████████████████");
console.log("█                                                                  █");
console.log("█                 S T U D E N T   G R A D E                        █");
console.log("█                                                                  █");
console.log("█                         M A N A G E R                            █");
console.log("█                                                                  █");
console.log("████████████████████████████████████████████████████████████████████");
console.log("\n");
console.log("Learning Functions");
console.log("\n");

const Class_A = [
    { name: "Ali", marks: 85 },
    { name: "Ibrahim", marks: 92 },
    { name: "Ahmed", marks: 67 },
    { name: "Usman", marks: 38 },
    { name: "Hamza", marks: 76 }
];

function getGrade(student) {

    let mark = student.marks;

    if(mark >= 90) {
        return "A";
    } else if (mark >= 80) {
        return "B"
    } else if (mark >= 70) {
        return "C"
    } else if (mark >= 60) {
        return "D";
    } else if (mark >= 40) {
        return "E";
    } else {
        return "U";
    }
}

function isPassed(student) {

    let mark = student.marks;
    return (mark >= 40) ? "Pass" : "Fail";
}

function getAverage(students) {

    let totalMarks = 0;
    let markCount = 0;

    for(student of students) {
        
        totalMarks += student.marks;
        markCount += 1;
    }

    const average = Math.round(totalMarks / markCount);

    return (average);
}

function getHighestStudent(students) {

    let highestMark = 0;

    for(student of students) {

        if(student.marks > highestMark) {
            highestMark = student.marks;
        }
    }
    
    const highestStudent = students.find((student) => student.marks === highestMark);
    return highestStudent.name;
    
}

function getLowestStudent(students) {
    
    let lowestMark = 100;
    
    for(student of students) {
        if(student.marks < lowestMark) lowestMark = student.marks;
    }
    
    const lowestStudent = students.find((student) => student.marks === lowestMark);
    return lowestStudent.name;

}

function printStudent(student) {
    studentGrade = getGrade(student);
    passCheck = isPassed(student);
    return `${student.name} — ${student.marks} marks — ${studentGrade} — ${passCheck}`;
}

function main() {
    console.log(`The average marks of the class are : ${getAverage(Class_A)}`)
    console.log(`The highest marks of the class are : ${getHighestStudent(Class_A)}`)
    console.log(`The lowest marks of the class are : ${getLowestStudent(Class_A)}\n`)

    console.log(`Student AlI's Data : \n${printStudent(Class_A[0])}`)
}

main();