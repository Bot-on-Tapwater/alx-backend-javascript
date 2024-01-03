interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

function printTeacher (firstName, lastName) {
    let output = `${firstName[0]}. ${lastName}`;

    return output;
}

interface StudentClassInterface {
    firstName: string;
    lastName: string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface{
    firstName: string;
    lastName: string;
     
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayName() {
        return this.firstName
    }
}

const student1: StudentClassInterface = new StudentClass('Brandon', 'Munda')

console.log(student1.displayName())