const Manager = require('../lib/manager.js');
const Employee = require('../lib/employee.js')

describe('Manager', () => {
    it('will set Office Number via constructor argument', () => {
        const employee = new Manager("4", "Joshua", "joshua@gmail.com", 55555);
        expect(employee.officeNo).toBe(55555);
    }); 

    it("getRole() will return 'Manager", () => {
        const employee = new Manager("4", "Joshua", "joshua@gmail.com", 55555);
        expect(employee.getRole()).toBe("Manager");
    });

    it("will get office number via getOffice()", () => {
        const employee = new Manager("4", "Joshua", "joshua@gmail.com", 55555);
      
        expect(employee.getOffice()).toBe(55555);

    });


});