const Employee = require("./employee"); 

class Engineer extends Employee { 
    constructor (name, email, id, github) {
        super (name, email, id, "Engineer"); 
        this.github = github; 
    }
    getGithub() { 
        return this.github;
    }
}

module.exports = Engineer; 