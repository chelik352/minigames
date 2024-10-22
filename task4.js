let hero = {
        name: "Герой",
        strength: 10,
        agility: 8,
        endurance: 12
    };
 
    function upgradeSkill(skill, points) {
        if (skill === "strength") {
        currentSkill = hero.strength;
        hero.strength = currentSkill + points
        changedSkill = hero.strength
        }
        if (skill === "agility") {
            currentSkill = hero.agility;
            hero.agility = currentSkill + points
            changedSkill = hero.agility
        }
        if (skill === "endurance") {
            currentSkill = hero.endurance;
            hero.endurance = currentSkill + points
            changedSkill = hero.endurance
        }
    }
 
    // Пример вызова функции
    upgradeSkill("strength", 5); // Увеличиваем силу на 5
    console.log(changedSkill)
    