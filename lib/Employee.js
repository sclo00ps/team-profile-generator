class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }

  //const employee = new Employee(role);

  getName() {
    return this.name
  }

  getId() {
    return this.id
  }
  getEmail() {
    return this.email
  }

  getRole() {
    return this.role = ("Employee");
  }
}
module.exports = Employee;

