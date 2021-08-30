const Employee = require("../lib/employee.js");

describe('Employee', () => {
    it("Will instantiate the instance of Eomployee", () => {
        const employee = new Employee('1','Jason', 'jason@gmail.com', 'Manager');
        expect(employee.id).toBe('1');
        expect(employee.name).toBe('Jason'); 
        expect(employee.email).toBe('jason@gmail.com'); 
        expect(employee.role).toBe('Manager');
        expect(typeof employee).toBe("object");
    });

    it("Will set name via constructor arguments", () => {
        const employee = new Employee("Jason");

        expect(employee.name).toBe("Jason");
    });

    it("Will set id via constructor argument", () => {
        const employee = new Employee("Jason", 1);

        expect(employee.id).toBe(1);
    });

    it("Will set email via constructor argument", () => {
        const employee = new Employee("Jason", 1, "jason@gmail.com");

        expect(employee.email).toBe("jason@gmail.com");
    });

    it("Will get name via getName()", () => {
        const employee = new Employee("Jason", 1, "jason@gmail.com");

        expect(employee.getName()).toBe("Jason");
    });

    it("Will get id via getId()", () => {
        const employee = new Employee("Jason", 1, "Jason@gmail.com");

        expect(employee.getId()).toBe(1);
    });

    it("Will get email via getEmail()", () => {
        const employee = new Employee("Jason", 1, "jason@gmail.com");

        expect(employee.getEmail()).toBe("jason@gmail.com");
    });

    it("getRole() should return 'Employee'", () => {
        const employee = new Employee("Jason", 1, "jason@gmail.com");

        expect(employee.getRole()).toBe("Employee");
    })
});