  /*  class Intern {
        constructor(name, id, email) {
        this.name = name,
        this.id = id;git 
        this.email = email;
        this.school = school;
   }
   */
  //Intern  Class
    const Employee = require("./Employee"); 
 
 //include extend statement and super stmt
   class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        }
    
   /* const intern = new Intern (school);
    console.log(intern) 
    
    getName() {//don't need for int
        return this.name
    }

    getId() {//don't need for int
        return this.id
    }
    getEmail() {//don't need for int
        return this.email
    }
    */
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


