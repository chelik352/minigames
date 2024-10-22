let hero = {
        name: "Герой",
        strength: 10,
        agility: 8,
        endurance: 12
    };
 
    function upgradeSkill(skill, points) {
        if (skill === "strength") {
        currentSkill = hero.strength;
        hero = currentSkill + points
        }
        if (skill === "agility") {
            currentSkill = hero.agility;
            hero = currentSkill + points
        }
        if (skill === "endurance") {
            currentSkill = hero.endurance;
            hero = currentSkill + points
        }
    }
 
    // Пример вызова функции
    upgradeSkill("strength", 5); // Увеличиваем силу на 5
    console.log( "hero =" + " " + hero)
    