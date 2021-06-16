class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name,
            this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
//include extend statement and super stmt
   // class Manager extends Employee {
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

    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return this.role = ("Manager");
    }
}
module.exports = {
    Manager
};

