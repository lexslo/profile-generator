//const fs = require('fs');

function generateHTML(teamMembers) {
    // declare variable to hold detail that differs for each role (office, school, github)
    var employeeDetail;
    // create array of HTML
    const html = [`
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
  
    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        </div>
      </header>
      <main class="container my-5">`];
      
      // loop through teamMembers array and check for each type of role and write appropriate HTML
      teamMembers.forEach(employee => {
        switch (employee.role) {
          case 'Manager':
            employeeDetail = `<li>Office Number: ${employee.officeNumber}</li>`;
            break;
          case 'Engineer':
            employeeDetail = `<li>Git Hub: <a href="github.com/${employee.gitHub}">${employee.gitHub}</a></li>`;
            break;
          case 'Intern':
            employeeDetail = `<li>School: ${employee.school}</li>`;
            break;
        }
        // add employee cards one by one with their corresponding information
        html.push(`
          <div class="card">
            <div class="card-title">
              <h3>${employee.name}</h3>
              <h4>${employee.role}<h4>
            </div>
            <div class="card-body>
              <ul>
                <li>ID: ${employee.id}</li>
                <li>Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                ${employeeDetail}
              </ul>
            </div>
          </div>  
        `);
      });
      // close HTML document with appropriate tags and footer
      html.push(`</main>
      <footer class="container text-center py-3">
        <h3 class="text-dark">&copy; ${new Date().getFullYear()} by Lex Slovik</h3>
      </footer>
    </body>
    </html>
    `);
    // join HTML together and return
    return html.join('');
}

module.exports = generateHTML;