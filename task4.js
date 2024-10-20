let hero = {
        name: "Герой",
        strength: 10,
        agility: 8,
        endurance: 12
    };
 
    function upgradeSkill(skill, points) {
        skill = hero.strength;
        hero.strength = skill + points
        
    }
 
    // Пример вызова функции
    upgradeSkill("strength", 5); // Увеличиваем силу на 5
    console.log( "hero strength =" + " " + hero.strength)
    