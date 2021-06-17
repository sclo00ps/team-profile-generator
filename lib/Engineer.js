//const Employee = require('./lib/employee');

class Engineer {
  constructor(name, id, email, GitHubUser) {
       this.id = id;
       this.email = email;
      this.github = GitHubUser;
      
    }
/*
// extend statement and super stmt allow Engineer child class inheritance of Employee parent class 
   class Engineer extends Employee {
        constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        }
    }
    
    const engineer = new Engineer ();
    console.log(engineer)
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
   
    getGithub() {
        return this.github
    }

    getRole() {
        return this.role = ("Engineer")
    }
}
module.exports = {
    Engineer
};


