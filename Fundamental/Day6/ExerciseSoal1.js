const studentsData = [
  {
    Name: "Adi",
    Email: "adi@mail.com",
    Age: new Date("2003-04-12"), // Format: YYYY-MM-DD
    Score: 85,
    Program: "Data Analyst"
  },
  {
    Name: "Budi",
    Email: "budi@mail.com",
    Age: new Date("2001-10-20"),
    Score: 92,
    Program: "Ui/Ux"
  },
  {
    Name: "Cinta",
    Email: "cinta@mail.com",
    Age: new Date("2004-01-30"),
    Score: 78,
    Program: "Web Developer"
  },
];

class Student {
    constructor(_name, _email, _age, _score){
        this.Name = _name;
        this.Email = _email;
        this.Age = _age;
        this.Score = _score;
    }

    getAgeInYear(){
        const today = new Date();
        const ageInMillis = today - this.Age;
        return Math.floor(ageInMillis / 31557600000);//31557600000 adalah jumlah milisecond dalam setahun
    }
}

class altSchoolStudent extends Student {
    constructor(_name, _email, _age, _score, _program) {
        super(_name, _email, _age, _score,);
        this.Program = _program;
    }

    getProgramInfo(){
        return `${this.Name} Terdaftar di program ${this.Program}`;
    }

}

class StudentAnalyst {
    constructor(studentArray) {
        this.students = studentArray;
    }

    getScoreStudent(){
        if (this.students.length === 0) {
            return { Highest: null, Lowest: null, Average: null}
        }
        const score = this.students.map(student => student.Score);
        //Highest, Lowest and AVG 
        let topScore = 0; //asumsi score Terendah 0
        let lowScore = 100; //asumsi score tertinggi 100
        let result =0;
        for (const element of score) {
            if (topScore < element) {
                topScore = element;
            }
            if (lowScore > element) {
                lowScore = element;
            }
            result += element;
        }
        const Avg = result / score.length;
        return{
            Highest : topScore,
            Lowest  : lowScore,
            Average : parseFloat(Avg.toFixed(2)),  
        }   
    }

    getAgeStat(){
        if (this.students.length === 0) {
            return { Highest: null, Lowest: null, Average: null}
        }
        const ages = this.students.map(student => student.getAgeInYear());
         //Highest, Lowest and AVG 
        let topScore = 0; //asumsi score Terendah 0
        let lowScore = 100; //asumsi score tertinggi 100
        let result = 0;
        for (const element of ages) {
            if (topScore < element) {
                topScore = element;
            }
            if (lowScore > element) {
                lowScore = element;
            }
            result += element;
        }
        const Avg = result / ages.length;
        return{
            Highest : topScore,
            Lowest  : lowScore,
            Average : parseFloat(Avg.toFixed(2)),  
        }   
    }

    getFullReport(){
        return{
            Score : this.getScoreStudent(),
            Age   : this.getAgeStat(),
        };
    }

}

const StudentObj = studentsData.map(data =>
    new altSchoolStudent(data.Name, data.Email, data.Age, data.Score, data.Program)
)


const analystStudent = new StudentAnalyst(StudentObj);
console.log(`ini adalah Data Score :`);
console.log(analystStudent.getScoreStudent());

console.log(`\nini adalah Data Age :`);
console.log(analystStudent.getAgeStat());

console.log(`\nIni adalah Full Report :`);
console.log(analystStudent.getFullReport());









/* 
Cara Dapakan umur dari tanggal lahir
let today = new Date();
let Age = new Date("2001-10-20");
let result = today - Age;
let umurSekarang = result/31557600000;
console.log(today);
console.log(Age);
console.log(result);
console.log(Math.floor(umurSekarang)); 
*/



