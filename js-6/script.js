
// const book = {
//     title: "JavaScript",
//     author: "John Doe",
//     pages: 350
// }


// console.log(book.title);
// console.log(book["author"]);

// const updatedbook = {
//     ...book,
//     pages: 400,
//     isAvialable: true
// }

// console.log(updatedbook);

// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2025
// };

// const property = "model";
// console.log(car[property]);

// const user = {
//     name: "Ibrahim",
//     age: 18,
//     city: "Lahore",
//     skilss: ["HTML", "CSS", "JavaScript"],
//     sports: ["Football", "Basketball", "Badminton"]
// }

// const students = [
//     {name: "Ibrahim", marks: 90},
//     {name: "Ali", marks: 68},
//     {name: "Abdullah", marks: 98}
// ]

// console.log(students[1].marks);

// const product = {
//     name: "Gaming Mouse",
//     price: 5000,
//     category: "Accessories"
// };

// const { name, price, category} = product;
// console.log(name);
// console.log(price);
// console.log(category);


function printStudentMarks(students) {

    for (student of students) {
        console.log(`The marks of ${student.name} are : ${student.marks}`);
    }
}

function printHighestStudent(students) {

    let highestMark = 0;

    for (student of students) {

        if (student.marks > highestMark) {
            highestMark = student.marks;
        }
    }

    return students.find((student) => student.marks === highestMark);
}

function printLowestStudent(students) {

    let lowestMark = Infinity;

    for (student of students) {

        if (student.marks < lowestMark) {
            lowestMark = student.marks;
        }
    }

    return students.find((student) => student.marks === lowestMark);
}

function printStudentsAbove70(students) {

    return students.filter((student) => {
        student.marks >= 70;
    })
}

function printStudentData(student) {

    console.log(`${student.name} — ${student.marks} — ${student.skills}`);
}

function main() {

    const students = [
        {
            name: "Ali",
            age: 17,
            marks: 85,
            skills: ["HTML", "CSS"]
        },
        {
            name: "Ibrahim",
            age: 18,
            marks: 92,
            skills: ["HTML", "CSS", "JavaScript"]
        },
        {
            name: "Ahmed",
            age: 17,
            marks: 67,
            skills: ["Python", "C++"]
        }
    ];

    console.log(students[1].skills);
    students[1].skills.push("React");

    const updatedIbrahimUser = {
        ...students[1],
        passed: true
    }

    const { name, marks } = students[1];

    printStudentData(students[1]);

}

main();