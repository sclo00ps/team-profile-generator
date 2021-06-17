class Employee {
    constructor(name, id, email) {
        this.name = name,
        this.id = id;
        this.email = email;
        
    }
//include extend statement and super stmt
   class Engineer extends Employee {
        constructor(name, id, email, Github) {
        super(name, id, email);
        this.Github = username;
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

    getEmail() {
        return this.Github
    }

    getRole() {
        return this.role = ("Engineer");
    }
}
module.exports = {
    Engineer
};


