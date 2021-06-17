    class Employee {
        constructor(name, id, email, school) {
        this.name = name,
        this.id = id;
        this.email = email;
   }

 //   include extend statement and super stmt
   class Engineer extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        }
    }
    
    /*getName() {
        return this.name
    }

    getId() {
        return this.id
    }
    getEmail() {
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


