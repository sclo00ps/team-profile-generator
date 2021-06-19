/* class Manager {
    constructor(name, id, email, officeNumber) {
       this.name = name,
       this.id = id;
       this.email = email; 
       this.officeNumber = officeNumber;
    } 
    */
    const Employee = require("./lib/Employee.js")

//extend statement allows Manager to inherit parent class employee properties
   class Manager extends Employee {
       constructor(officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        }
    }
    const manager = new Manager();
    console.log(manager)  

   /* getName() {//dont need for mgr
       return this.name
    }

    getId() {//dont need for mgr
        return this.id
    }
    getEmail() {//dont need for mgr
        return this.email
    }
    */
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

