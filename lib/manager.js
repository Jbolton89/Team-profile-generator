const Employee = require("./employee"); 

class Manager extends Employee { 
    constructor (id, name, email, officeNo) { 
        super( id, name, email); 
        this.officeNo = officeNo; 
    }

    getOffice() { 
        return this.officeNo; 
    }
    getRole() { 
        return "Manager";
    }
}

module.exports = Manager; 