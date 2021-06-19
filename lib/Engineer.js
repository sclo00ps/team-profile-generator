const Employee = require("./lib/Employee.js");

/*class Engineer {
  constructor(name, id, email, GitHubUser) {
       this.id = id;
       this.email = email;
       this.GitHubUser = GitHubUser
    }
*/
//start code with this statement below and 
// extend statement and super stmt allow Engineer child class inheritance of Employee parent class 
   class Engineer extends Employee {
        constructor(name, id, email, GitHubUser) {
        super(name, id, email);
        this.GitHubUser = GitHubUser;
        }
   
    
   /*const engineer = new Engineer (GitHubUser);
    console.log(engineer);
    
   getName() {//dont need for eng
      return this.name
   }

    getId() {//dont need for eng
        return this.id
    }
   getEmail() {//dont need for eng
       return this.email
    }
   */
    getGithubUser() {
        return this.github
    }

    getRole() {
        return this.role = ("Engineer")
    }
}
module.exports = {
    Engineer
};


