const studentsData = [
    { Name: "Imanuel Janis", Email: "imanuel@gmail.com", Age: "2000-05-20", Score: 80 },
    { Name: "Aviaman", Email: "aviaman@gmail.com", Age: "1995-12-10", Score: 75 },
    { Name: "Mawar Bunga", Email: "mawar@gmail.com", Age: "1997-10-01", Score: 100 },
];

class StudentData {
    constructor(name, email, birthdate, score) {
        this.name = name;
        this.email = email;
        this.birthdate = birthdate;
        this.score = score;
    }

    convertBirthDateToAge() {
        return new Date().getFullYear() - new Date(this.birthdate).getFullYear();
    }
}

const students = [
    new StudentData("Imanuel Janis", "imanuel@gmail.com", "2000-05-20", 80),
    new StudentData("Aviaman", "aviaman@gmail.com", "1995-12-10", 75),
    new StudentData("Mawar Bunga", "mawar@gmail.com", "1997-10-01", 100),
];

function calculateStudentData(arrStudents) {
    const arrStudentsScore = [];
    const arrStudentsAge = [];

    for (let item of arrStudents) {
        arrStudentsScore.push(item.score);
        arrStudentsAge.push(item.convertBirthDateToAge());
    }

    return {
        score: {
            highest: Math.max(...arrStudentsScore),
            lowest: Math.min(...arrStudentsScore),
            average: arrStudentsScore.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
            ) / arrStudentsScore.length,
        },
        age: {
            highest: Math.max(...arrStudentsAge),
            lowest: Math.min(...arrStudentsAge),
            average: arrStudentsAge.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
            ) / arrStudentsAge.length,
        },
    };
}

console.log(calculateStudentData(students));
