const Manager = require('../lib/Manager');

test('Creates an Manager object', () => {
    const manager = new Manager('Erin', 222, 'email2@email.com', 616);

    expect(manager.name).toBe('Erin');
    expect(manager.id).toBe(222);
    expect(manager.email).toBe('email2@email.com');
    expect(manager.officeNumber).toBe(616);
});

test('Prints requested property', () => {
    const manager = new Manager('Erin', 222, 'email2@email.com', 616);

    const printedName = manager.getName();
    const printedId = manager.getId();
    const printedEmail = manager.getEmail();

    expect(printedName).toBe('Erin');
    expect(printedId).toBe(222);
    expect(printedEmail).toBe('email2@email.com');
});

test('Prints role, says Manager', () => {
    const manager = new Manager('Erin', 222, 'email2@email.com', 616);

    const role = manager.getRole();

    expect(role).toBe('Manager');
});