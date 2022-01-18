const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, office) {
        super(name, id, email);
        this.office = office;
        this.role = 'Manager';
    }

    getOfficeNumber() {
        return this.office;
    }

    getRole() {
        return this.role;
    }

}

module.exports = Manager;