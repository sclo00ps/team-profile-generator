class Engineer {
    constructor(name, id, email, Github) {
        this.name = name,
        this.id = id;
        this.email = email;
        this.Github = Github;
    }
//include extend statement and super stmt
   // class Engineer extends Employee {
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
    getRole() {
        return this.role = ("Engineer");
    }
}
module.exports = {
    Engineer
};


