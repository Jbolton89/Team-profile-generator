const Employee = require("./employee")

class Intern extends Employee { 
    constructor( id, name, email, school) { 
        super(name, id, email, "Intern");
        this.school = school;
    }

    getSchool() { 
        return this.school;
    }
}

module.exports = Intern