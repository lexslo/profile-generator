const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

function generateTeam(teamMembers) {

  return new Promise((resolve, reject) => {

    let teamObj = teamMembers.map((employee) => {
      switch (employee.role) {
        case 'Manager':
          return new Manager(employee.name, employee.id, employee.email, employee.office);
        case 'Engineer':
          return new Engineer(employee.name, employee.id, employee.email, employee.github);
        case 'Intern':
          return new Intern(employee.name, employee.id, employee.email, employee.school);
      }
    });
    resolve({
      ok: true,
      message: 'Team Member object successfully created',
      data: teamObj
    });
  });

}

function generateHTML(teamObj) {

    // declare variable to hold detail that differs for each role (office, school, github)
    var employeeDetail;

    // create array of HTML
    const html = [
    `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>My Team - Portfolio</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" integrity="sha512-UJfAaOlIRtdR+0P6C3KUoTDAxVTuy3lnSXLyLKlHYJlcSU8Juge/mjeaxDNMlw9LgeIotgz5FP8eUQPhX1q10A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>a
  
    <body>
      <div class="container">
        <header>
            <h1>My Team</h1>
        </header>
        <main>
        <div class="row">
      `,
    ];
      
      // loop through teamMembers object and check for each type of role and write appropriate HTML
      for (const employee of teamObj) {
        switch (employee.role) {
          case 'Manager':
            employeeDetail = `<li>Office Number: ${employee.office}</li>`;
            break;
          case 'Engineer':
            employeeDetail = `<li>Git Hub: <a href="github.com/${employee.github}">${employee.github}</a></li>`;
            break;
          case 'Intern':
            employeeDetail = `<li>School: ${employee.school}</li>`;
            break;
        }
      // add employee cards one by one with their corresponding information
        html.push(`
          <div class="card medium cyan ligthen-5 z-depth-3 z-depth-3 col s12 m6 l4 xl3">
            <div class="card-content">
              <span class="card-title"><h2>${employee.name}</h2></span>
              <span class="card-title subtitle"><h4>${employee.role}<h4></span>
              <ul>
                <li>ID: ${employee.id}</li>
                ${employeeDetail}
              </ul>
            </div>
            <div class="card-action grey darken-3">
              <p><a href="mailto:${employee.email}">${employee.email}</a></p>
            </div>
          </div>  
        `);
      }
      // close HTML document with appropriate tags and footer
      html.push(
      `
        </div>
      </main>
      <footer class="footer-copyright center-align amber lighten-5">
        <h5>&copy; ${new Date().getFullYear()} by Lex Slovik</h5>
      </footer>
      </div>
      </body>
      </html>
    `);

    return html.join('');

}

module.exports = { generateTeam, generateHTML };