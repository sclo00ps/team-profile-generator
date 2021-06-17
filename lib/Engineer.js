class Employee {
  constructor(name, id, email, github)
       this.id = id;
       this.email = email;
       this.github = github;
       
    }

// extend statement and super stmt allow Engineer child class inheritance of Employee parent class 
   class Engineer extends Employee {
        constructor(name, id, email, github) {
        super(name, id, email);
        this.Github = username;
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

    getGithub() {
        return this.Github
    }

    getRole() {
        return this.role = ("Engineer");
    }
}
module.exports = {
    Engineer
};


