const Employee = require('../lib/Employee');

test('Creates an Employee object', () => {
    const employee = new Employee('Lex', 333, 'email@email.com');

    expect(employee.name).toBe('Lex');
    expect(employee.id).toBe(333);
    expect(employee.email).toBe('email@email.com');
});

test('Prints requested property', () => {
    const employee = new Employee('Lex', 333, 'email@email.com');

    const printedName = employee.getName();
    const printedId = employee.getId();
    const printedEmail = employee.getEmail();

    expect(printedName).toBe('Lex');
    expect(printedId).toBe(333);
    expect(printedEmail).toBe('email@email.com');
    
});

test('Prints role', () => {
    const employee = new Employee('Lex', 333, 'email@email.com');

    const role = employee.getRole();

    expect(role).toBe('Employee');
});

