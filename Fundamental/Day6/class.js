/* class Declaration */

class user{
    greeting(){
        console.log("yooooo");
    }
}

const Geust = class{
    greeting(){
        console.log("tooooo");   
    }
} 

const user1 = new user();
user1.greeting();

const guest1 = new Geust();
user1.greeting();

class Student {
    constructor(_fullname, _program){
        this.fullname = _fullname;
        this.program = _program;
    }
}

const student1 = new Student('Adiikfini','web dev');
console.log(student1);
