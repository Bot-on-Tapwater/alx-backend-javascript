function printTeacher(firstName, lastName) {
    var output = "".concat(firstName[0], ". ").concat(lastName);
    return output;
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student1 = new StudentClass('Brandon', 'Munda');
console.log(student1.displayName());
