class Employee {
    constructor(name, id, email, officeNumber) {
        this.name = name,
            this.id = id;
        this.email = email;
        
    }
//extend statement allows Manager
   class Manager extends Employee {
   //   class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        }
    }

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

