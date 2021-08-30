const Engineer = require("../lib/engineer.js");
const Employee = require("../lib/employee.js");

describe('Engineer', () => { 
    it('will set Github account via constructor argument', () => { 
        const employee = new Engineer( 
            "simon",
            "simon@gmail.com",
            "2",
            "simon999"
        ); 
        expect(employee.github).toBe("simon999");
    });

    it('will get github via getGitHub()', () => { 
        const github = 'simon999'; 
        const engineer = new Engineer('simon', 'simon@gmail.com', '2', github)
        expect(engineer.getGithub()).toBe('Engineer')
    }); 

    it('getRole() should return "Engineer"', () => {
        let engineer = new Engineer();
        expect(engineer.getRole()).toBe('Engineer')
    })
})

