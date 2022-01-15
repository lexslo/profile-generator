const Intern = require('../lib/Intern');

test('Creates an Intern object', () => {
    const intern = new Intern('Erin', 222, 'email2@email.com', 'University of Oregon');

    expect(intern.name).toBe('Erin');
    expect(intern.id).toBe(222);
    expect(intern.email).toBe('email2@email.com');
    expect(intern.school).toBe('University of Oregon');
});

test('Prints requested property', () => {
    const intern = new Intern('Erin', 222, 'email2@email.com', 'University of Oregon');

    const printedName = intern.getName();
    const printedId = intern.getId();
    const printedEmail = intern.getEmail();

    expect(printedName).toBe('Erin');
    expect(printedId).toBe(222);
    expect(printedEmail).toBe('email2@email.com');
});

test('Prints role, says Intern', () => {
    const intern = new Intern('Erin', 222, 'email2@email.com', 'University of Oregon');

    const role = intern.getRole();

    expect(role).toBe('Intern');
});