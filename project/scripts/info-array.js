

const weapon = [
    {
        name: "AR-23 Liberator",
        description: 'A Standard Issue Assault rifle.',
        damage: "70",
        mag_size: "45"
    },

    {
        name: "AR-23C Liberator Concussive",
        description: 'A low damage, high ammo count, concussive weapon.',
        damage: "65",
        mag_size: "60"
    },

    {
        name: "AR-23P Liberator Penetrator",
        description: 'An armor-piercing variant of the basic liberator rifle, trading damage and fire rate for increased punch.',
        damage: "60",
        mag_size: "45"
    },

    {
        name: "JAR-5 Dominator",
        description: 'A heavy explosive weapon that fires jet-propelled rounds.',
        damage: "275",
        mag_size: "15"
    },

    {
        name: "LAS-16 Sickle",
        description: "An energy weapon that fires bursts of concentrated energy. Uses heat sinks instead of ammo. Don't let it overheat!",
        damage: "55",
        mag_size: "∞"
    },

    {
        name: "LAS-5 Scythe",
        description: "An energy weapon that fires a steady beam of energy. Uses heat sinks instead of ammo. Don't let it overheat!",
        damage: "350 per second",
        mag_size: "∞"
    },

    {
        name: "R-63 Diligence",
        description: "A high damage Marksman ridle with light armor penetration capabilities.",
        damage: "165",
        mag_size: "20"
    },

    {
        name: "R-63CS Diligence Counter Sniper",
        description: "A heavier variant of the R-63 Diligence, with high armor penetration capabilities, but less ammo and a slower fire rate.",
        damage: "200",
        mag_size: "15"
    },

    {
        name: "SG-225 Breaker",
        description: "An automatic, magazine fed shotgun.",
        damage: "330",
        mag_size: "16"
    },
    {
        name: "SG-8S Slugger",
        description: "A pump-action shotgun, offering higher damage than the Breaker, and heavy stagger. Rounds must be reloaded individually.",
        damage: "250",
        mag_size: "16"
    }

]

const enemy = [
    {
        name: "Scavenger",
        description: 'The Smallest of the Terminids. Weak alone, but usually travel in packs. ',
        armor: "None",
        faction: "Terminid",
        other_details: "Nothing of note."
    },
    {
        name: "Pouncer",
        description: 'A variant of the Scavenger capable of jumping long distances',
        armor: "None",
        faction: "Terminid",
        other_details: "It is often easiest to pick them off as they leap. Fall back as they do so to avoid being hit."
    },
    {
        name: "Bile Spitter",
        description: 'A variant of the Scavenger that can shoot small bile projectiles',
        armor: "None",
        faction: "Terminid",
        other_details: "While the projectiles may not do much damage, they slow you heavily. Clear them out quickly, or keep your distance during breaches."
    },
    {
        name: "Warrior",
        description: 'A larger and stronger terminid usually seen in patrols.',
        armor: "Light",
        faction: "Terminid",
        other_details: "Warriors can stay alive for a few moments even after their head is shot off. Don't let your guard down too quickly!"
    },
    {
        name: "Hive Guard",
        description: 'A slower, bulkier terminid that are usually seen guarding nests.',
        armor: "Medium (front legs, head)",
        faction: "Terminid",
        other_details: "If you have no medium armor penetration available, there are still gaps beneath their legs that can be damaged with light weaponry, and they are vulnerable to flanking, as they move slowly."
    },
    {
        name: "Hunter",
        description: 'A large variant of the Pouncer.',
        armor: "Light",
        faction: "Terminid",
        other_details: "One of the most deadly Terminids. A few of them can make quick work of a lone Helldiver, so stick together! In a pinch, meleeing them can interrupt their attacks to buy you time."
    },
    {
        name: "Stalker",
        description: 'An elite terminid that can turn invisible. ',
        armor: "Medium",
        faction: "Terminid",
        other_details: "Stalkers try to flank behind you before striking, and will heal themselves if they manage to flee combat. Prioritize destroying Stalker nests to limit how many of them you have to deal with."
    },
    {
        name: "Charger",
        description: 'A large, heavily armored terminid that deals heavy damage. ',
        armor: "Heavy (Legs, Head, Main Body)",
        faction: "Terminid",
        other_details: "While charging, Chargers cannot turn very sharply. Their rears are soft, but they are most efficiently dealt with using anti-tank weaponry to the head or back legs."
    },
    {
        name: "Bile Titan",
        description: 'The Largest of the Terminids, towering over buildings and spraying toxic bile long distances. ',
        armor: "Heavy",
        faction: "Terminid",
        other_details: "While they can be killed somewhat quickly using anti-tank weaponry to the face, they can be hard to hit. destroying their bile sac on their undersides can disable their ranged attacks, making them less dangerous."
    },
    {
        name: "Trooper",
        description: 'A standard Automaton troop, lightly armored and weak alone. ',
        armor: "Light",
        faction: "Automaton",
        other_details: "Troopers can call in reinforcements, so deal with them quickly, or stealthily!"
    },
    {
        name: "Commisar",
        description: 'An automaton troop with a melee weapon and grenades. ',
        armor: "Light",
        faction: "Automaton",
        other_details: "Commisars prioritize calling reinforcements as soon as possible, and strengthen the morale of nearby automaton forces. While weak, they are a high prioritty target."
    },
    {
        name: "Scout Strider",
        description: 'A trooper mounted on a mobile gunner platform.',
        armor: "Light",
        faction: "Automaton",
        other_details: "in lower difficulties, the sides and back of the strider are open, making it easy to shoot the pilot out. In high difficulties, the sides and back are closed, making the legs of the strider easier targets than the pilot."
    },
    {
        name: "Devastator",
        description: 'A more heavily armored troop, carrying a range of heavier weaponry: Rockets, Minigun and Riot Shield, or Heavy Rifles.',
        armor: "Medium (Torso and limbs) Tank (Shield)",
        faction: "Automaton",
        other_details: "While their armaments vary, they all share one key weak point: an unarmored head. most weapons can easily kill them with careful aim."
    },
    {
        name: "Gunship",
        description: 'A flying automaton ship with heavy laser weaponry and rockets.',
        armor: "medium",
        faction: "Automaton",
        other_details: "To quickly take out a gunship, target an engine with medium armor penetrating weapons."
    },
    {
        name: "Hulk",
        description: 'One of the Heaviest Automaton troops, sporting either a heavy laser cannon, or a flamethrower.',
        armor: "Light",
        faction: "Automaton",
        other_details: "with heavy armor penetration, Hulks can be killed by shooting their eye. their backs, however, are very exposed, and can be damaged with just about anything."
    },
    {
        name: "Factory Strider",
        description: 'A massive automaton vehicle with a mobile devastator factory, rotary cannon, and dual miniguns. ',
        armor: "Tank",
        faction: "Automaton",
        other_details: "Avoid standing in front of the Strider if possible- the miniguns are deceptively deadly compared to the large cannon. its faceplate can be cracked using anti-tank weaponry, and its belly has much less armor."
    }

]

const objective = [

    {
        name: "Radar Station",
        description: 'A radar dish used for scanning the map.',
        other_details: "Activating the radar station will not only reveal objectives and enemy nest locations, but also all Points of Interest on the map.",
    },
    {
        name: "SEAF artillery",
        description: 'An inactive Super Earth Armed Forces artillery cannon.',
        other_details: "When loading the cannon, first shell loaded is first shell fired. Even after the mission timer is over, it remains available, as it doesnt come from your Super Destroyer!",
    },
    {
        name: "SEAF SAM site.",
        description: 'An inactive Super Earth Armed Forces Surface-to-Air Missile site.',
        other_details: "Only available on Automaton missions, the SEAF SAM site will automatically shoot down any automaton reinforcement ships nearby!",
    }
]

const infoBlock = document.getElementById("infoBlock");

const weaponListMaker = (weaponList) => {
    infoBlock.innerHTML = "";

    weaponList.forEach(
        (weapon) => {
            const item = document.createElement("div");
            item.classname = "info-block";

            const name = document.createElement("h2");
            name.textContent = weapon.name;
            item.appendChild(name);

            const description = document.createElement("p");
            description.textContent = weapon.description;
            item.appendChild(description);

            const damage = document.createElement("p");
            damage.textContent = "Damage: " + weapon.damage;
            item.appendChild(damage);

            const mag_size = document.createElement("p");
            mag_size.textContent = "Magazine Size: " + weapon.mag_size;
            item.appendChild(mag_size);

            infoBlock.appendChild(item);

        }
    );
};

const enemyListMaker = (enemyList) => {
    infoBlock.innerHTML = "";

    enemyList.forEach(
        (enemy) => {
            const item = document.createElement("div");
            item.classname = "info-block";

            const name = document.createElement("h2");
            name.textContent = enemy.name;
            if (enemy.faction == "Terminid") {
                name.classList.add("terminid-keyword");
            }
            if (enemy.faction == "Automaton") {
                name.classList.add("automaton-keyword");
            }
            item.appendChild(name);

            const description = document.createElement("p");
            description.textContent = enemy.description;
            item.appendChild(description);

            const armor = document.createElement("p");
            armor.textContent = "Armor: " + enemy.armor;
            item.appendChild(armor);

            const faction = document.createElement("p");
            faction.textContent = "Faction: " + enemy.faction;

            item.appendChild(faction);

            const other_details = document.createElement("p");
            other_details.textContent = "Other Details: " + enemy.other_details;
            item.appendChild(other_details);

            infoBlock.appendChild(item);
        }
    );
};

const objectiveListMaker = (objectiveList) => {
    infoBlock.innerHTML = "";

    objectiveList.forEach(
        (objective) => {
            const item = document.createElement("div");
            item.classname = "info-block";

            const name = document.createElement("h2");
            name.classList.add("SU-keyword");
            name.textContent = objective.name;
            item.appendChild(name);

            const description = document.createElement("p");
            description.textContent = objective.description;
            item.appendChild(description);

            const other_details = document.createElement("p");
            other_details.textContent = "Other Details: " + objective.other_details;
            item.appendChild(other_details);

            infoBlock.appendChild(item);
        }
    );
};

const recentUpdates = () => {
    infoBlock.innerHTML = 'You can find recent updates to the game here: <li class = "updates"><a href="https://arrowhead.zendesk.com/hc/en-us/categories/12532454295708-Helldivers-2-Patch-notes">Helldivers 2 Official Patch notes</a></li>';

}

document.querySelector("nav").addEventListener("click", (event) => {
    event.preventDefault();

    const page = event.target.textContent.toLowerCase().trim();

    switch (page) {
        case "home":
            recentUpdates();
            break;
        case "your tools":
            weaponListMaker(weapon);
            break;
        case "enemies and strategy":
            objectiveListMaker(objective);
            break;

    }

    if (event.target.textContent.toLowerCase().trim() == "enemies and strategy") {
        document.getElementById("factions").style.display = "flex";
    } else {
        document.getElementById("factions").style.display = "none";
    }

    if (event.target.textContent.toLowerCase().trim() == "home") {
        document.getElementById("homepage").style.display = "inline-grid";
    } else {
        document.getElementById("homepage").style.display = "none";
    }

});

const terminidFilter = () => {
    const filteredList = enemy.filter(
        (enemy) => enemy.faction == "Terminid"
    )

    enemyListMaker(filteredList);
}

const automatonFilter = () => {
    const filteredList = enemy.filter(
        (enemy) => enemy.faction == "Automaton"
    )

    enemyListMaker(filteredList);
}

document.querySelector("#factions").addEventListener("click", (event) => {
    event.preventDefault();

    const faction = event.target.textContent.toLowerCase().trim();

    switch (faction) {
        case "terminids":
            terminidFilter();
            break;
        case "automatons":
            automatonFilter();
            break;
        case "objectives":
            objectiveListMaker(objective);
            break;
    }
})

recentUpdates();


