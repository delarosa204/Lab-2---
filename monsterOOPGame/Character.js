class Character {
    constructor(name, health, attackPower) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    }

    attack(target) {
        target.health -= this.attackPower;
        if (target.health < 0) {
            target.health = 0;
        }
    }

    showStatus() {
        console.log(`Ім'я: ${this.name}`);
        console.log(`Здоров'я: ${this.health} HP`);
        console.log(`Сила атаки: ${this.attackPower}`);
    }

    isAlive() {
        return this.health > 0;
    }
}

module.exports = Character;
