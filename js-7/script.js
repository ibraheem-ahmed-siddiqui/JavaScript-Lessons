
const students = [
    { name: "Ali", marks: 85 },
    { name: "Ibrahim", marks: 92 },
    { name: "Ahmed", marks: 67 },
    { name: "Usman", marks: 38 },
    { name: "Hamza", marks: 76 },
    { name: "Zain", marks: 95 }
];

function getPassingStudents() {

    return students.filter( student => student.marks >= 40);
}

function getStudentNames() {
    
    return students.map(student => student.name);
}

function getAStudents() {

    return students.filter(student => student.marks >= 90);
}

function hasPerfectStudent() {
    
    return students.some(student => student.marks === 100);
}

function everyonePassed () {

    return students.every(student => student.marks >= 40);
}

function getStudentByName(name) {

    return students.find(student => student.name === name);
}

function getStudentSummary() {

    return students.map((student) => {
        const isPassed = student.marks >= 40 ? "Pass" : "Fail";
        return `${student.name} -- ${student.marks} - ${isPassed}`;
    })
}