cardArr = []; 

generateCard = (EmployeeArr) => {
    for (let i=0; i<EmployeeArr.length; i++) { 
        const id = employeeArr[i].getId(); 
        const name =employeeArr[i].getName(); 
        const email =employeeArr[i].getEmail(); 
        const role = employeeArr[i].getRole(); 
        if (role === 'Engineer') { 
            const github = employeeArr[i].getGithub(); 
            cardArr.push(engineerCard (id, name, role, email, github ));
        } else if (role === 'Manager') { 
            const officeNo = employeeArr[i].getOffice(); 
            cardArr.push(managerCard (id, name, email, role, officeNo))
        } else { 
            const school = EmployeeArr[i].getSchool();
            cardArr.push(internCard (id, name, role, school ));
        }
        console.log(cardArr);
    }
    return cardArr.join(''); 
 }

 //manager's card

 const managerCard = (id, name, email, role, officeNo) =>
    `<div class="card" id="manager" style="width:500px">
        <div class="card-header bg-primary">
             <h4 class="card-title">${name}</h4>
            <p class="card-text">${role}</p>
        </div>
    <div class="card-body bg-light text-center">
     <p class="card-text" id="id">ID Number: ${id}</p>
     <p class="card-text" id="email">Email Address: <a href="mailto:${email}">${email}</a></p>
     <p class="card-text" id="office">Office Number: ${officeNo}</p>
 </div>
</div>`
;

const engineerCard = (id, name, email, role, github) =>
`<div class="card" id="manager" style="width:500px">
  <div class="card-header bg-primary">
      <h4 class="card-title">${name}</h4>
      <p class="card-text">${role}</p>
  </div>
  <div class="card-body bg-light text-center">
      <p class="card-text" id="id">ID Number: ${id}</p>
      <p class="card-text" id="email">Email Address: <a href="mailto:${email}">${email}</a></p>
      <p class="card-text" id="github">Github: <a href="https://github.com/${github}">${github}</a></p>
  </div>
</div>`
;

const internCard = (id, name, email, role, school) =>
`<div class="card" id="manager" style="width:500px">
  <div class="card-header bg-primary">
      <h4 class="card-title">${name}</h4>
      <p class="card-text">${role}</p>
  </div>
  <div class="card-body bg-light text-center">
      <p class="card-text" id="id">ID Number: ${id}</p>
      <p class="card-text" id="email">Email Address: <a href="mailto:${email}">${email}</a></p>
      <p class="card-text" id="school">School: ${school}</p>
  </div>
</div>`
;

// The sample HTML which will contain the cards above 

const exampleHTML = (CardArr) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee tracker</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</head>
<body>
    
</body>
</html>`

module.exports = exampleHTML; 