let hero = {
    name: "Герой",
    health: 100,
    attack: 25
};

let monster = {
    name: "Монстр",
    health: 80,
    attack: 20
};

function battle(hero, monster) {
    while (hero.health  > 0 || monster.health > 0) {
        hero.health = hero.health - monster.attack
        monster.health = monster.health - hero.attack
        console.log(hero.health, monster.health)
    }
}
if (hero.health <= 0) {
    console.log("hero wins")
}
if (monster.health <= 0) {
    console.log("monster wins")
}