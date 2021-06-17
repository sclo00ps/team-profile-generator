class Manager {
    constructor(name, id, email, officeNumber) {
       this.name = name,
       this.id = id;
       this.email = email; 
       this.officeNumber = officeNumber;
    } 


/*extend statement allows Manager to inherit parent class employee properties
   class Manager extends Employee {
       constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        }
    }
*/
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

