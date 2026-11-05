const Character = require('./Character');

class Player extends Character {
    constructor(name, health, attackPower, inventory) {
        super(name, health, attackPower);
        this.inventory = inventory;
    }

    showInventory() {
        console.log("\nІнвентар:");
        this.inventory.forEach(item => {
            console.log(`- ${item}`);
        });
    }
}

module.exports = Player;
