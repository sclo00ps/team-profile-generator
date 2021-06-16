class Intern {
    constructor(name, id, email, school) {
        this.name = name,
            this.id = id;
        this.email = email;
        this.school = school;
    }

    //include extend statement and super stmt
   // class Intern extends Employee {
   //     constructor( )
   // }
    getName() {
        return this.name
    }

    getId() {
        return this.id
    }
    getEmail() {
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


