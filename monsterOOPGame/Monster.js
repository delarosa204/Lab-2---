const Character = require('./Character');

class Monster extends Character {
    constructor(name, health, attackPower) {
        super(name, health, attackPower);
    }
}

module.exports = Monster;
