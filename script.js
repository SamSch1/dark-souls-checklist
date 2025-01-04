document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const resetButton = document.getElementById("reset-button");

    // Load saved state from localStorage
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id); // Get the saved state
        if (savedState === "true") {
            checkbox.checked = true; // Restore checked state
        }

        // Save state when a checkbox is clicked
        checkbox.addEventListener("change", () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });

    // Reset button functionality
    resetButton.addEventListener("click", () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false; // Uncheck all checkboxes
            localStorage.removeItem(checkbox.id); // Clear localStorage for the checkbox
        });
    });
});

 // Function to dynamically generate the checklist from the array
 function generateChecklist() {
    const section = document.getElementById('categories');
    const categories = {};

    // Group locations by category
    locations.forEach(location => {
        if (!categories[location.category]) {
            categories[location.category] = [];
        }
        categories[location.category].push(location.name);
    });

    // Build HTML for each category
    section.innerHTML = '';  // Clear previous content
    Object.keys(categories).forEach(category => {
        const div = document.createElement('div');
        div.classList.add('category');

        const h2 = document.createElement('h2');
        h2.textContent = category;
        div.appendChild(h2);

        const ul = document.createElement('ul');
        categories[category].forEach((item, index) => {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `${category.toLowerCase()}-${index}`;

            const label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.textContent = item;

            li.appendChild(checkbox);
            li.appendChild(label);
            ul.appendChild(li);
        });

        div.appendChild(ul);
        section.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    generateChecklist();
})

const locations = [
    { category: "CA", name: "Speckled Stoneplate Ring+1 - by miniboss: Speckled Stoneplate Ring+1" },
    { category: "CA", name: "Coiled Sword - boss drop: Dragon Head Stone" },
    { category: "FS", name: "Blue Tearstone Ring - Greirat: Cinders of a Lord - Yhorm the Giant" },
    { category: "FS", name: "Demon's Scar - Ludleth for Demon Prince: Demon's Scar" },
    { category: "FS", name: "Dried Finger - shop: Coiled Sword" },
    { category: "FS", name: "Farron Ring - Hawkwood: Dorhys' Gnawing" },
    { category: "FS", name: "Frayed Blade - Ludleth for Midir: Frayed Blade" },
    { category: "FS", name: "Friede's Great Scythe - Ludleth for Friede: Friede's Great Scythe" },
    { category: "FS", name: "Gael's Greatsword - Ludleth for Gael: Gael's Greatsword" },
    { category: "FS", name: "Grave Key - Mortician's Ashes: Cleric Trousers" },
    { category: "FS", name: "Havel's Ring - Ludleth for Stray Demon: Claw" },
    { category: "FS", name: "Life Ring - Dreamchaser's Ashes: Jailer's Key Ring" },
    { category: "FS", name: "Lift Chamber Key - Leonhard: Titanite Scale" },
    { category: "FS", name: "Lloyd's Shield Ring - Paladin's Ashes: Elite Knight Gauntlets" },
    { category: "FS", name: "Londor Braille Divine Tome - Yoel/Yuria: Large Soul of a Nameless Soldier" },
    { category: "FS", name: "Millwood Knight Armor - Captain's Ashes: Millwood Knight Armor" },
    { category: "FS", name: "Millwood Knight Gauntlets - Captain's Ashes: Millwood Knight Gauntlets" },
    { category: "FS", name: "Millwood Knight Helm - Captain's Ashes: Millwood Knight Helm" },
    { category: "FS", name: "Millwood Knight Leggings - Captain's Ashes: Millwood Knight Leggings" },
    { category: "FS", name: "Old Moonlight - Ludleth for Midir: Old Moonlight" },
    { category: "FS", name: "Pontiff's Left Eye - Ludleth for Vordt: Robe of Prayer" },
    { category: "FS", name: "Prisoner's Chain - Ludleth for Champion: Sellsword Armor" },
    { category: "FS", name: "Refined Gem - Captain's Ashes: Refined Gem" },
    { category: "FS", name: "Repeating Crossbow - Ludleth for Gael: Repeating Crossbow" },
    { category: "FS", name: "Ring of Sacrifice - Yuria shop: Siegbräu" },
    { category: "FS", name: "Rose of Ariandel - Ludleth for Friede: Rose of Ariandel" },
    { category: "FS", name: "Saint's Ring - Irina: Londor Braille Divine Tome" },
    { category: "FS", name: "Seething Chaos - Ludleth for Demon Prince: Seething Chaos" },
    { category: "FS", name: "Silvercat Ring - Sirris for killing Creighton: Soul of a Deserted Corpse" },
    { category: "FS", name: "Slumbering Dragoncrest Ring - Orbeck for buying four specific spells: Dancer's Leggings" },
    { category: "FS", name: "Tower Key - shop: Large Titanite Shard" },
    { category: "FS", name: "Untrue Dark Ring - Yoel/Yuria: Fallen Knight Gauntlets" },
    { category: "FS", name: "Untrue White Ring - Yoel/Yuria: Slumbering Dragoncrest Ring" },
    { category: "FS", name: "White Sign Soapstone - shop: Pyromancy Flame" },
    { category: "FS", name: "Wolf Ring+2 - left of boss room exit: Wolf Ring+2" },
    { category: "FS", name: "Wood Grain Ring - Easterner's Ashes: Large Titanite Shard" },
    { category: "FS", name: "Young Dragon Ring - Orbeck for one scroll and buying three spells: Ember" },
    { category: "FSBT", name: "Estus Ring - tower base: Soul of a Demon" },
    { category: "FSBT", name: "Estus Shard - rafters: Soul of Pontiff Sulyvahn" },
    { category: "FSBT", name: "Fire Keeper Soul - tower top: Carthus Pyromancy Tome" },
    { category: "FSBT", name: "Ring of Sacrifice - crow for Loretta's Bone: Hawkwood's Shield" },
    { category: "FSBT", name: "Very good! Carving - crow for Divine Blessing: Wolf Knight's Greatshield" },
    { category: "FSBT", name: "Thank you Carving - crow for Hidden Blessing: Soul of a Deserted Corpse" },
    { category: "FSBT", name: "I'm sorry Carving - crow for Shriving Stone: Soul of a Nameless Soldier" },
    { category: "FSBT", name: "Help me! Carving - crow for any sacred chime: Throwing Knife x8" },
    { category: "FSBT", name: "Hello Carving - crow for Alluring Skull: Yhorm's Great Machete" },
    { category: "FSBT", name: "Armor of the Sun - crow for Siegbräu: Human Pine Resin x4" },
    { category: "HWL", name: "Soul of Boreal Valley Vordt: Helm of Favor" },
    { category: "HWL", name: "Soul of the Dancer: Ember" },
    { category: "HWL", name: "Basin of Vows - Emma: Dragonslayer Helm" },
    { category: "HWL", name: "Small Lothric Banner - Emma: Lift Chamber Key" },
    { category: "HWL", name: "Cell Key - fort ground, down stairs: Cell Key" },
    { category: "HWL", name: "Estus Shard - fort ground, on anvil: Reinforced Club" },
    { category: "HWL", name: "Fleshbite Ring+1 - fort roof, jump to other roof: Fleshbite Ring+1" },
    { category: "HWL", name: "Ring of the Evil Eye+2 - fort ground, far wall: Ring of the Evil Eye+2" },
    { category: "HWL", name: "Way of Blue - Emma: Small Lothric Banner" },
    { category: "HWL", name: "Red Eye Orb - wall tower, miniboss: Transposing Kiln" },
    { category: "US", name: "Soul of the Rotted Greatwood: Mendicant's Staff" },
    { category: "US", name: "Transposing Kiln - boss drop: Sage's Scroll" },
    { category: "US", name: "Tower Key - kill Irina: Ember" },
    { category: "US", name: "Flynn's Ring - tower village, rooftop: Soul of an Unknown Traveler" },
    { category: "US", name: "Undead Bone Shard - by white tree: Homeward Bone x3" },
    { category: "US", name: "Mortician's Ashes - graveyard by white tree: Twinkling Dragon Torso Stone" },
    { category: "US", name: "Bloodbite Ring - miniboss in sewer: Great Swamp Pyromancy Tome" },
    { category: "US", name: "Fire Clutch Ring - wooden walkway past stable: Xanthous Crown" },
    { category: "US", name: "Estus Shard - under burning tree: Black Eye Orb" },
    { category: "US", name: "Loretta's Bone - first building, hanging corpse on balcony: Avelyn" },
    { category: "US", name: "Flame Stoneplate Ring - hanging corpse by Mound-Maker transport: Old Cell Key" },
    { category: "US", name: "Life Ring+1 - tower on the way to village: Life Ring+1" },
    { category: "US", name: "Poisonbite Ring+1 - graveyard by white tree, near well: Poisonbite Ring+1" },
    { category: "US", name: "Covetous Silver Serpent Ring+2 - tower village, drop down from roof: Covetous Silver Serpent Ring+2" },
    { category: "US", name: "Mound-makers - Hodrick: Drang Gauntlets" },
    { category: "US", name: "Siegbräu - Siegward: Lingering Dragoncrest Ring" },
    { category: "RS", name: "Soul of a Crystal Sage: Cinders of a Lord - Abyss Watcher" },
    { category: "RS", name: "Estus Shard - left of fire behind stronghold left room: Xanthous Ashes" },
    { category: "RS", name: "Great Swamp Pyromancy Tome - deep water: Prisoner Chief's Ashes" },
    { category: "RS", name: "Farron Coal - keep perimeter: Rotten Pine Resin x4" },
    { category: "RS", name: "Chloranthy Ring+2 - road, drop across from carriage: Chloranthy Ring+2" },
    { category: "RS", name: "Lingering Dragoncrest Ring+1 - water: Lingering Dragoncrest Ring+1" },
    { category: "RS", name: "Great Swamp Ring - miniboss drop, by Farron Keep: Crystal Scroll" },
    { category: "RS", name: "Blue Sentinels - Horace: Dancer's Armor" },
    { category: "CD", name: "Small Doll - boss drop: Grand Archives Key" },
    { category: "CD", name: "Soul of the Deacons of the Deep: Astora Straight Sword" },
    { category: "CD", name: "Black Eye Orb - Rosaria from Leonhard's quest: Gold Pine Bundle x6" },
    { category: "CD", name: "Undead Bone Shard - gravestone by white tree: Large Titanite Shard" },
    { category: "CD", name: "Paladin's Ashes - path, guarded by lower NPC: Green Blossom" },
    { category: "CD", name: "Poisonbite Ring - moat, hall past miniboss: Homeward Bone x2" },
    { category: "CD", name: "Estus Shard - monument outside Cleansing Chapel: Coiled Sword Fragment" },
    { category: "CD", name: "Lloyd's Sword Ring - ledge above main hall south: Path of the Dragon" },
    { category: "CD", name: "Ring of the Evil Eye+1 - by stairs to boss: Ring of the Evil Eye+1" },
    { category: "CD", name: "Ring of Favor+2 - upper roofs, on buttress: Ring of Favor+2" },
    { category: "CD", name: "Deep Braille Divine Tome - mimic by side chapel: Soul of the Lords" },
    { category: "CD", name: "Aldrich's Sapphire - side chapel, miniboss drop: Brigand Gauntlets" },
    { category: "CD", name: "Horsehoof Ring - Patches: Alva Armor" },
    { category: "FK", name: "Soul of the Blood of the Wolf: Force" },
    { category: "FK", name: "Cinders of a Lord - Abyss Watcher: Soul of the Twin Princes" },
    { category: "FK", name: "Undead Bone Shard - pavilion by keep ruins bonfire island: Soul of High Lord Wolnir" },
    { category: "FK", name: "Sage's Scroll - near wall by keep ruins bonfire island: Mortician's Ashes" },
    { category: "FK", name: "Estus Shard - between Farron Keep bonfire and left island: Firebomb x3" },
    { category: "FK", name: "Sage's Coal - pavilion by left island: Soul of Yhorm the Giant" },
    { category: "FK", name: "Dark Stoneplate Ring+2 - keep ruins ritual island, behind wall: Dark Stoneplate Ring+2" },
    { category: "FK", name: "Magic Stoneplate Ring+1 - between right island and wall: Magic Stoneplate Ring+1" },
    { category: "FK", name: "Wolf Ring+1 - keep ruins bonfire island, outside building: Wolf Ring+1" },
    { category: "FK", name: "Lingering Dragoncrest Ring - by white tree, miniboss drop: Soul of Boreal Valley Vordt" },
    { category: "FK", name: "Soul of a Stray Demon - upper keep, miniboss drop: Tower Key" },
    { category: "FK", name: "Watchdogs of Farron - Old Wolf: Deep Gem" },
    { category: "US", name: "Hawk Ring - Giant Archer: Jailbreaker's Key" },
    { category: "CC", name: "Soul of High Lord Wolnir: Soul of Dragonslayer Armour" },
    { category: "CC", name: "Carthus Milkring - crypt upper, among pots: Darkmoon Longbow" },
    { category: "CC", name: "Carthus Bloodring - crypt lower, end of side hall: Soul of Rosaria" },
    { category: "CC", name: "Grave Warden's Ashes - crypt across, corner: Rusted Gold Coin" },
    { category: "CC", name: "Witch's Ring - tomb, hall before bonfire: Soul of an Unknown Traveler" },
    { category: "CC", name: "Grave Warden Pyromancy Tome - boss arena: Pale Tongue" },
    { category: "CC", name: "Ring of Steel Protection+2 - atrium upper, drop onto pillar: Ring of Steel Protection+2" },
    { category: "CC", name: "Thunder Stoneplate Ring+1 - crypt upper, among pots: Thunder Stoneplate Ring+1" },
    { category: "CC", name: "Soul of a Demon - tomb, miniboss drop: Seed of a Giant Tree" },
    { category: "CC", name: "Pontiff's Right Eye - Irithyll bridge, miniboss drop: Small Doll" },
    { category: "SL", name: "Soul of the Old Demon King: Pale Tongue" },
    { category: "SL", name: "Izalith Pyromancy Tome - antechamber, room near bonfire: Soul of a Deserted Corpse" },
    { category: "SL", name: "Undead Bone Shard - ruins main lower, left after stairs: Twinkling Titanite" },
    { category: "SL", name: "Bloodbite Ring+1 - behind ballista: Bloodbite Ring+1" },
    { category: "SL", name: "Flame Stoneplate Ring+2 - ruins main lower, illusory wall in far hall: Flame Stoneplate Ring+2" },
    { category: "SL", name: "Undead Bone Shard - lake, miniboss drop: Dragon Chaser's Ashes" },
    { category: "SL", name: "Knight Slayer's Ring - ruins basement, NPC drop: Large Titanite Shard" },
    { category: "IBV", name: "Soul of Pontiff Sulyvahn: Pale Pine Resin x2" },
    { category: "IBV", name: "Ring of Sacrifice - lake, right of stairs from descent: Dreamchaser's Ashes" },
    { category: "IBV", name: "Excrement-covered Ashes - sewer, by stairs: Siegbräu" },
    { category: "IBV", name: "Chloranthy Ring+1 - plaza, behind altar: Chloranthy Ring+1" },
    { category: "IBV", name: "Covetous Gold Serpent Ring+1 - descent, drop after dark room: Covetous Gold Serpent Ring+1" },
    { category: "IBV", name: "Wood Grain Ring+2 - ascent, right after great hall: Wood Grain Ring+2" },
    { category: "IBV", name: "Leo Ring - great hall, chest: Grave Warden's Ashes" },
    { category: "IBV", name: "Roster of Knights - descent, first landing: Moaning Shield" },
    { category: "IBV", name: "Siegbräu - Siegward: Titanite Chunk x2" },
    { category: "IBV", name: "Ring of the Evil Eye - Anri: Refined Gem" },
    { category: "ID", name: "Jailbreaker's Key - B1 far, cell after gate: Golden Scroll" },
    { category: "ID", name: "Bellowing Dragoncrest Ring - drop from B1 towards pit: Xanthous Trousers" },
    { category: "ID", name: "Profaned Coal - B3 far, left cell: Soul of the Dancer" },
    { category: "ID", name: "Covetous Gold Serpent Ring - Siegward's cell: Flash Sweat" },
    { category: "ID", name: "Dusk Crown Ring - B3 far, right cell: Paladin's Ashes" },
    { category: "ID", name: "Xanthous Ashes - B3 far, right cell: Basin of Vows" },
    { category: "ID", name: "Old Cell Key - stairs between pit and B3: Large Soul of a Nameless Soldier" },
    { category: "ID", name: "Covetous Silver Serpent Ring+1 - pit lift, middle platform: Covetous Silver Serpent Ring+1" },
    { category: "ID", name: "Dragon Torso Stone - B3, outside lift: Izalith Pyromancy Tome" },
    { category: "ID", name: "Prisoner Chief's Ashes - B2 near, locked cell by stairs: Storm Ruler" },
    { category: "ID", name: "Dark Clutch Ring - stairs between pit and B3, mimic: Soul of the Old Demon King" },
    { category: "ID", name: "Estus Shard - mimic on path from B2 to pit: Lightning Bolt x12" },
    { category: "PC", name: "Soul of Yhorm the Giant: Siegbräu" },
    { category: "PC", name: "Cinders of a Lord - Yhorm the Giant: Quelana Pyromancy Tome" },
    { category: "PC", name: "Logan's Scroll - chapel roof, NPC drop: Dragonslayer Spear" },
    { category: "PC", name: "Cursebite Ring - swamp, below halls: Dung Pie x3" },
    { category: "PC", name: "Jailer's Key Ring - hall past chapel: Shriving Stone" },
    { category: "PC", name: "Flame Stoneplate Ring+1 - chapel, drop from roof towards entrance: Flame Stoneplate Ring+1" },
    { category: "PC", name: "Magic Stoneplate Ring+2 - tower base: Magic Stoneplate Ring+2" },
    { category: "PC", name: "Undead Bone Shard - by bonfire: Chameleon" },
    { category: "PC", name: "Siegbräu - Siegward after killing boss: Fading Soul" },
    { category: "AL", name: "Soul of Aldrich: Loretta's Bone" },
    { category: "AL", name: "Cinders of a Lord - Aldrich: Black Knight Glaive" },
    { category: "AL", name: "Estus Shard - dark cathedral, by left stairs: Soul of a Crystal Sage" },
    { category: "AL", name: "Dark Stoneplate Ring - by dark stairs up from plaza: Large Leather Shield" },
    { category: "AL", name: "Easterner's Ashes - below top of furthest buttress: Greataxe" },
    { category: "AL", name: "Giant's Coal - by giant near dark cathedral: Easterner's Ashes" },
    { category: "AL", name: "Havel's Ring+2 - prison tower, rafters: Havel's Ring+2" },
    { category: "AL", name: "Ring of Favor+1 - light cathedral, upstairs: Ring of Favor+1" },
    { category: "AL", name: "Sun Princess Ring - dark cathedral, after boss: Soul of the Blood of the Wolf" },
    { category: "AL", name: "Blade of the Darkmoon - Yorshka with Darkmoon Loyalty: Large Soul of a Weary Warrior" },
    { category: "AL", name: "Aldrich's Ruby - dark cathedral, miniboss: Ember" },
    { category: "AL", name: "Soul of Rosaria - Leonhard drop: Ancient Dragon Greatshield" },
    { category: "LC", name: "Soul of Dragonslayer Armour: Firestorm" },
    { category: "LC", name: "Undead Bone Shard - moat, far ledge: Soul of the Deacons of the Deep" },
    { category: "LC", name: "Knight's Ring - altar: Soul of Aldrich" },
    { category: "LC", name: "Red Tearstone Ring - chapel, drop onto roof: Duel Charm x3" },
    { category: "LC", name: "Life Ring+2 - dark room mid, out door opposite wyvern, drop down: Life Ring+2" },
    { category: "LC", name: "Dark Stoneplate Ring+1 - wyvern room, balcony: Dark Stoneplate Ring+1" },
    { category: "LC", name: "Thunder Stoneplate Ring+2 - chapel, drop onto roof: Thunder Stoneplate Ring+2" },
    { category: "LC", name: "Grand Archives Key - by Grand Archives door, after PC and AL bosses: Cinders of a Lord - Lothric Prince" },
    { category: "CKG", name: "Soul of Consumed Oceiros: Soul of Champion Gundyr" },
    { category: "CKG", name: "Estus Shard - balcony: Faraam Boots" },
    { category: "CKG", name: "Dragonscale Ring - shortcut, leave halfway down lift: Wolnir's Crown" },
    { category: "CKG", name: "Ring of Sacrifice - under balcony: Eleonora" },
    { category: "CKG", name: "Wood Grain Ring+1 - by first elevator bottom: Wood Grain Ring+1" },
    { category: "CKG", name: "Sage Ring+2 - balcony, drop onto rubble, jump back: Sage Ring+2" },
    { category: "GA", name: "Soul of the Twin Princes: Boulder Heave" },
    { category: "GA", name: "Cinders of a Lord - Lothric Prince: Titanite Scale" },
    { category: "GA", name: "Fleshbite Ring - up stairs from 4F: Rusted Coin x2" },
    { category: "GA", name: "Estus Shard - dome, far balcony: Soul of a Stray Demon" },
    { category: "GA", name: "Hunter's Ring - dome, very top: Soul of Consumed Oceiros" },
    { category: "GA", name: "Sage Ring+1 - rafters, second level down: Sage Ring+1" },
    { category: "GA", name: "Lingering Dragoncrest Ring+2 - dome, room behind spire: Lingering Dragoncrest Ring+2" },
    { category: "GA", name: "Scholar Ring - 2F, between late and early: Titanite Chunk" },
    { category: "GA", name: "Undead Bone Shard - 5F, by entrance: Painting Guardian Hood" },
    { category: "GA", name: "Crystal Scroll - 2F late, miniboss drop: Cinders of a Lord - Aldrich" },
    { category: "UG", name: "Soul of Champion Gundyr: Blacksmith Hammer" },
    { category: "UG", name: "Priestess Ring - shop: Pale Tongue" },
    { category: "UG", name: "Ashen Estus Ring - swamp, path opposite bonfire: Braille Divine Tome of Carim" },
    { category: "UG", name: "Hornet Ring - environs, right of main path after killing FK boss: Titanite Shard" },
    { category: "UG", name: "Coiled Sword Fragment - shrine, dead bonfire: Soul of the Nameless King" },
    { category: "UG", name: "Life Ring+3 - shrine, behind big throne: Life Ring+3" },
    { category: "UG", name: "Ring of Steel Protection+1 - environs, behind bell tower: Ring of Steel Protection+1" },
    { category: "AP", name: "Dragon Head Stone - fort, boss drop: Logan's Scroll" },
    { category: "AP", name: "Soul of the Nameless King: Grave Warden Pyromancy Tome" },
    { category: "AP", name: "Lightning Clutch Ring - intro, left of boss door: Twinkling Titanite x3" },
    { category: "AP", name: "Thunder Stoneplate Ring - walkway, up ladder: Braille Divine Tome of Lothric" },
    { category: "AP", name: "Dragon Chaser's Ashes - summit, side path: Soul of the Rotted Greatwood" },
    { category: "AP", name: "Ring of Steel Protection - fort overlook, beside stairs: Fire Gem" },
    { category: "AP", name: "Havel's Ring+1 - summit, after building: Havel's Ring+1" },
    { category: "AP", name: "Covetous Gold Serpent Ring+2 - plaza: Covetous Gold Serpent Ring+2" },
    { category: "FK", name: "Twinkling Dragon Head Stone - Hawkwood drop: Carthus Rouge" },
    { category: "KFF", name: "Soul of the Lords: Deep Braille Divine Tome" }
];

document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    
    // Load saved state from localStorage
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState === "true") {
            checkbox.checked = true;
        }

        // Save state when clicked
        checkbox.addEventListener("change", () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const resetButton = document.getElementById("reset-button");

    // Load saved state from localStorage
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState === "true") {
            checkbox.checked = true;
        }

        // Save state when clicked
        checkbox.addEventListener("change", () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });

    // Reset button functionality
    resetButton.addEventListener("click", () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false; // Uncheck all checkboxes
            localStorage.removeItem(checkbox.id); // Clear localStorage for the checkbox
        });
    });
});
