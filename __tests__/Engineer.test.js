const Engineer = require('../lib/Engineer');

test('Creates an Engineer object', () => {
    const engineer = new Engineer('Erin', 222, 'email2@email.com', 'ehubb');

    expect(engineer.name).toBe('Erin');
    expect(engineer.id).toBe(222);
    expect(engineer.email).toBe('email2@email.com');
    expect(engineer.github).toBe('ehubb');
});

test('Prints requested property', () => {
    const engineer = new Engineer('Erin', 222, 'email2@email.com', 'ehubb');

    const printedName = engineer.getName();
    const printedId = engineer.getId();
    const printedEmail = engineer.getEmail();

    expect(printedName).toBe('Erin');
    expect(printedId).toBe(222);
    expect(printedEmail).toBe('email2@email.com');
});

test('Prints role, says Engineer', () => {
    const engineer = new Engineer('Erin', 222, 'email2@email.com', 'ehubb');

    const role = engineer.getRole();

    expect(role).toBe('Engineer');
});