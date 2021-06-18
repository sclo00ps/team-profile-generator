    class Intern {
        constructor(name, id, email) {
        this.name = name,
        this.id = id;
        this.email = email;
        this.school = school;
   }

 /*  const Employee = require("./lib/Employee.js") 
 
 include extend statement and super stmt
   class Intern extends Employee {
    constructor( school) {
        super(name, id, email);
        this.school = school;
        }
    }
    const intern = new Intern (school);
    console.log(intern) 
    */
    getName() {//don't need for int
        return this.name
    }

    getId() {//don't need for int
        return this.id
    }
    getEmail() {//don't need for int
        return this.email
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return this.role = ("Intern");
    }
}

module.exports = {
    Intern
};


