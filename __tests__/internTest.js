const Intern = require("../lib/intern.js");
const Employee = require("../lib/employee.js");

describe('Intern', () => { 
    it('will set school account via constructor argument', () => { 
        const employee = new Intern( "3", "Biggie", "biggie@gmail.com", "USYD");
        expect(employee.school).toBe("USYD"); 
    });

    it('will get school via getSchool()', () => { 
        const employee = new Intern("3", "Biggie", "biggie@gmail.com", "USYD");
        expect(employee.getSchool()).toBe("USYD");
    });

    it('getRole() will return "Intern"', () => { 
        const eomployee = new Intern("3","Biggie","biggie@gmail.com", "USYD");
        expect(eomployee.getRole()).toBe("Intern");
    });
})