const Player = require('./Player');
const Monster = require('./Monster');

// Створення екземплярів класів через new
const player = new Player("Герой", 100, 20, ["Меч", "Щит", "Зілля здоров'я"]);
const monster = new Monster("Гоблін", 80, 15);

console.log("===== БИТВА З МОНСТРОМ =====");
console.log("");
player.showStatus();
player.showInventory();
console.log("");
monster.showStatus();

let round = 1;

// Цикл битви
while (player.isAlive() && monster.isAlive()) {
    console.log(`\n===== РАУНД ${round} =====\n`);

    // Гравець атакує монстра
    console.log(`${player.name} атакує ${monster.name}!`);
    player.attack(monster);
    console.log(`Здоров'я монстра: ${monster.health} HP`);

    // Перевірка, чи живий монстр
    if (!monster.isAlive()) {
        break;
    }

    // Монстр атакує гравця
    console.log(`\n${monster.name} атакує ${player.name}!`);
    monster.attack(player);
    console.log(`Здоров'я гравця: ${player.health} HP`);

    round++;
}

console.log("\n==========================");
if (player.isAlive()) {
    console.log("🏆 ПЕРЕМОГА!");
    console.log(`${player.name} переміг ${monster.name}!`);
} else {
    console.log("💀 ПОРАЗКА!");
    console.log(`${monster.name} переміг ${player.name}...`);
}
