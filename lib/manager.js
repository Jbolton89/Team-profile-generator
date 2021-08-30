const Employee = require("./employee"); 

class Manager extends Employee { 
    constructor (id, name, email, officeNo) { 
        super(name, id, email); 
        this.officeNo = officeNo; 
    }

    getOffice() { 
        return this.officeNo; 
    }
}

Module.exports = Manager; 