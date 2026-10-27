// 1. Об'єкт гравця
const player = {
    name: "Герой",
    health: 100,
    attackPower: 20
};

// 2. Об'єкт монстра
const monster = {
    name: "Гоблін",
    health: 80,
    attackPower: 15
};

// 3. Масив інвентарю
const inventory = ["Меч", "Щит", "Зілля здоров'я"];

// 4. Функція атаки гравця
function attack(attacker, defender) {
    defender.health -= attacker.attackPower;
    if (defender.health < 0) {
        defender.health = 0;
    }
}

// 5. Функція атаки монстра
function monsterAttack(attacker, defender) {
    defender.health -= attacker.attackPower;
    if (defender.health < 0) {
        defender.health = 0;
    }
}

// 6. Функція виведення статусу
function showStatus(round) {
    console.log(`\n=== Раунд ${round} ===`);
    console.log(`${player.name} здоров'я: ${player.health} HP`);
    console.log(`${monster.name} здоров'я: ${monster.health} HP`);
}

// Запуск гри
console.log("Гра «Битва з монстром»");
console.log(`Інвентар гравця: ${inventory.join(", ")}`);

let round = 1;

// 7. Цикл битви
while (player.health > 0 && monster.health > 0) {
    showStatus(round);

    // Гравець атакує першим
    console.log(`${player.name} атакує монстра!`);
    attack(player, monster);
    console.log(`Здоров'я монстра: ${monster.health} HP`);

    // Перевірка, чи живий монстр
    if (monster.health <= 0) {
        break;
    }

    // Монстр контратакує
    console.log(`${monster.name} атакує героя!`);
    monsterAttack(monster, player);
    console.log(`Здоров'я героя: ${player.health} HP`);

    round++;
}

// 8. Визначення переможця
console.log("\n======================");
if (player.health > 0) {
    console.log("🏆 Перемога!");
    console.log(`${player.name} переміг монстра!`);
} else {
    console.log("💀 Поразка!");
    console.log(`${monster.name} переміг ${player.name}...`);
}
