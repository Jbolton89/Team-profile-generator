const Employee = require("./employee")

class Intern extends Employee { 
    constructor( id, name, email, school) { 
        super(id, name, email, "Intern");
        this.school = school;
        this.email = email;
    }

    getSchool() { 
        return this.school;
    }

    getRole() { 
        return "Intern";
    }

    getEmail() { 
        return this.email
    }
}

module.exports = Intern;