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
   { category: "CA", name: "Speckled Stoneplate Ring+1 - by miniboss" },
    { category: "CA", name: "Coiled Sword - boss drop" },
    { category: "FS", name: "Blue Tearstone Ring - Greirat" },
    { category: "FS", name: "Demon's Scar - Ludleth for Demon Prince" },
    { category: "FS", name: "Dried Finger - shop" },
    { category: "FS", name: "Farron Ring - Hawkwood" },
    { category: "FS", name: "Frayed Blade - Ludleth for Midir" },
    { category: "FS", name: "Friede's Great Scythe - Ludleth for Friede" },
    { category: "FS", name: "Gael's Greatsword - Ludleth for Gael" },
    { category: "FS", name: "Grave Key - Mortician's Ashes" },
    { category: "FS", name: "Havel's Ring - Ludleth for Stray Demon" },
    { category: "FS", name: "Life Ring - Dreamchaser's Ashes" },
    { category: "FS", name: "Lift Chamber Key - Leonhard" },
    { category: "FS", name: "Lloyd's Shield Ring - Paladin's Ashes" },
    { category: "FS", name: "Londor Braille Divine Tome - Yoel/Yuria" },
    { category: "FS", name: "Millwood Knight Armor - Captain's Ashes" },
    { category: "FS", name: "Millwood Knight Gauntlets - Captain's Ashes" },
    { category: "FS", name: "Millwood Knight Helm - Captain's Ashes" },
    { category: "FS", name: "Millwood Knight Leggings - Captain's Ashes" },
    { category: "FS", name: "Old Moonlight - Ludleth for Midir" },
    { category: "FS", name: "Pontiff's Left Eye - Ludleth for Vordt" },
    { category: "FS", name: "Prisoner's Chain - Ludleth for Champion" },
    { category: "FS", name: "Refined Gem - Captain's Ashes" },
    { category: "FS", name: "Repeating Crossbow - Ludleth for Gael" },
    { category: "FS", name: "Ring of Sacrifice - Yuria shop" },
    { category: "FS", name: "Rose of Ariandel - Ludleth for Friede" },
    { category: "FS", name: "Saint's Ring - Irina" },
    { category: "FS", name: "Seething Chaos - Ludleth for Demon Prince" },
    { category: "FS", name: "Silvercat Ring - Sirris for killing Creighton" },
    { category: "FS", name: "Slumbering Dragoncrest Ring - Orbeck for buying four specific spells" },
    { category: "FS", name: "Tower Key - shop" },
    { category: "FS", name: "Untrue Dark Ring - Yoel/Yuria" },
    { category: "FS", name: "Untrue White Ring - Yoel/Yuria" },
    { category: "FS", name: "White Sign Soapstone - shop" },
    { category: "FS", name: "Wolf Ring+2 - left of boss room exit" },
    { category: "FS", name: "Wood Grain Ring - Easterner's Ashes" },
    { category: "FS", name: "Young Dragon Ring - Orbeck for one scroll and buying three spells" },
    { category: "FSBT", name: "Estus Ring - tower base" },
    { category: "FSBT", name: "Estus Shard - rafters" },
    { category: "FSBT", name: "Fire Keeper Soul - tower top" },
    { category: "FSBT", name: "Ring of Sacrifice - crow for Loretta's Bone" },
    { category: "FSBT", name: "Very good! Carving - crow for Divine Blessing" },
    { category: "FSBT", name: "Thank you Carving - crow for Hidden Blessing" },
    { category: "FSBT", name: "I'm sorry Carving - crow for Shriving Stone" },
    { category: "FSBT", name: "Help me! Carving - crow for any sacred chime" },
    { category: "FSBT", name: "Hello Carving - crow for Alluring Skull" },
    { category: "FSBT", name: "Armor of the Sun - crow for Siegbräu" },
    { category: "HWL", name: "Soul of Boreal Valley Vordt" },
    { category: "HWL", name: "Soul of the Dancer" },
    { category: "HWL", name: "Basin of Vows - Emma" },
    { category: "HWL", name: "Small Lothric Banner - Emma" },
    { category: "HWL", name: "Cell Key - fort ground, down stairs" },
    { category: "HWL", name: "Estus Shard - fort ground, on anvil" },
    { category: "HWL", name: "Fleshbite Ring+1 - fort roof, jump to other roof" },
    { category: "HWL", name: "Ring of the Evil Eye+2 - fort ground, far wall" },
    { category: "HWL", name: "Way of Blue - Emma" },
    { category: "HWL", name: "Red Eye Orb - wall tower, miniboss" },
    { category: "US", name: "Soul of the Rotted Greatwood" },
    { category: "US", name: "Transposing Kiln - boss drop" },
    { category: "US", name: "Tower Key - kill Irina" },
    { category: "US", name: "Flynn's Ring - tower village, rooftop" },
    { category: "US", name: "Undead Bone Shard - by white tree" },
    { category: "US", name: "Mortician's Ashes - graveyard by white tree" },
    { category: "US", name: "Bloodbite Ring - miniboss in sewer" },
    { category: "US", name: "Fire Clutch Ring - wooden walkway past stable" },
    { category: "US", name: "Estus Shard - under burning tree" },
    { category: "US", name: "Loretta's Bone - first building, hanging corpse on balcony" },
    { category: "US", name: "Flame Stoneplate Ring - hanging corpse by Mound-Maker transport" },
    { category: "US", name: "Life Ring+1 - tower on the way to village" },
    { category: "US", name: "Poisonbite Ring+1 - graveyard by white tree, near well" },
    { category: "US", name: "Covetous Silver Serpent Ring+2 - tower village, drop down from roof" },
    { category: "US", name: "Mound-makers - Hodrick" },
    { category: "US", name: "Siegbräu - Siegward" },
    { category: "RS", name: "Estus Shard - left of fire behind stronghold left room" },
    { category: "RS", name: "Great Swamp Pyromancy Tome - deep water" },
    { category: "RS", name: "Farron Coal - keep perimeter" },
    { category: "RS", name: "Chloranthy Ring+2 - road, drop across from carriage" },
    { category: "RS", name: "Lingering Dragoncrest Ring+1 - water" },
    { category: "RS", name: "Great Swamp Ring - miniboss drop, by Farron Keep" },
    { category: "RS", name: "Blue Sentinels - Horace" },
    { category: "CD", name: "Small Doll - boss drop" },
    { category: "CD", name: "Soul of the Deacons of the Deep" },
    { category: "CD", name: "Black Eye Orb - Rosaria from Leonhard's quest" },
    { category: "CD", name: "Undead Bone Shard - gravestone by white tree" },
    { category: "CD", name: "Paladin's Ashes - path, guarded by lower NPC" },
    { category: "CD", name: "Poisonbite Ring - moat, hall past miniboss" },
    { category: "CD", name: "Estus Shard - monument outside Cleansing Chapel" },
    { category: "CD", name: "Lloyd's Sword Ring - ledge above main hall south" },
    { category: "CD", name: "Ring of the Evil Eye+1 - by stairs to boss" },
    { category: "CD", name: "Ring of Favor+2 - upper roofs, on buttress" },
    { category: "CD", name: "Deep Braille Divine Tome - mimic by side chapel" },
    { category: "CD", name: "Aldrich's Sapphire - side chapel, miniboss drop" },
    { category: "CD", name: "Horsehoof Ring - Patches" },
    { category: "FK", name: "Soul of the Blood of the Wolf" },
    { category: "FK", name: "Cinders of a Lord - Abyss Watcher" },
    { category: "FK", name: "Undead Bone Shard - pavilion by keep ruins bonfire island" },
    { category: "FK", name: "Sage's Scroll - near wall by keep ruins bonfire island" },
    { category: "FK", name: "Estus Shard - between Farron Keep bonfire and left island" },
    { category: "FK", name: "Sage's Coal - pavilion by left island" },
    { category: "FK", name: "Dark Stoneplate Ring+2 - keep ruins ritual island, behind wall" },
    { category: "FK", name: "Magic Stoneplate Ring+1 - between right island and wall" },
    { category: "FK", name: "Wolf Ring+1 - keep ruins bonfire island, outside building" },
    { category: "FK", name: "Lingering Dragoncrest Ring - by white tree, miniboss drop" },
    { category: "FK", name: "Soul of a Stray Demon - upper keep, miniboss drop" },
    { category: "FK", name: "Watchdogs of Farron - Old Wolf" },
    { category: "US", name: "Hawk Ring - Giant Archer" },
    { category: "CC", name: "Soul of High Lord Wolnir" },
    { category: "CC", name: "Carthus Milkring - crypt upper, among pots" },
    { category: "CC", name: "Carthus Bloodring - crypt lower, end of side hall" },
    { category: "CC", name: "Grave Warden's Ashes - crypt across, corner" },
    { category: "CC", name: "Witch's Ring - tomb, hall before bonfire" },
    { category: "CC", name: "Grave Warden Pyromancy Tome - boss arena" },
    { category: "CC", name: "Ring of Steel Protection+2 - atrium upper, drop onto pillar" },
    { category: "CC", name: "Thunder Stoneplate Ring+1 - crypt upper, among pots" },
    { category: "CC", name: "Soul of a Demon - tomb, miniboss drop" },
    { category: "CC", name: "Pontiff's Right Eye - Irithyll bridge, miniboss drop" },
    { category: "SL", name: "Soul of the Old Demon King" },
    { category: "SL", name: "Izalith Pyromancy Tome - antechamber, room near bonfire" },
    { category: "SL", name: "Undead Bone Shard - ruins main lower, left after stairs" },
    { category: "SL", name: "Bloodbite Ring+1 - behind ballista" },
    { category: "SL", name: "Flame Stoneplate Ring+2 - ruins main lower, illusory wall in far hall" },
    { category: "SL", name: "Undead Bone Shard - lake, miniboss drop" },
    { category: "SL", name: "Knight Slayer's Ring - ruins basement, NPC drop" },
    { category: "IBV", name: "Soul of Pontiff Sulyvahn" },
    { category: "IBV", name: "Ring of Sacrifice - lake, right of stairs from descent" },
    { category: "IBV", name: "Excrement-covered Ashes - sewer, by stairs" },
    { category: "IBV", name: "Chloranthy Ring+1 - plaza, behind altar" },
    { category: "IBV", name: "Covetous Gold Serpent Ring+1 - descent, drop after dark room" },
    { category: "IBV", name: "Wood Grain Ring+2 - ascent, right after great hall" },
    { category: "IBV", name: "Leo Ring - great hall, chest" },
    { category: "IBV", name: "Roster of Knights - descent, first landing" },
    { category: "IBV", name: "Siegbräu - Siegward" },
    { category: "ID", name: "Jailbreaker's Key - B1 far, cell after gate" },
    { category: "ID", name: "Bellowing Dragoncrest Ring - drop from B1 towards pit" },
    { category: "ID", name: "Profaned Coal - B3 far, left cell" },
    { category: "ID", name: "Covetous Gold Serpent Ring - Siegward's cell" },
    { category: "ID", name: "Dusk Crown Ring - B3 far, right cell" },
    { category: "ID", name: "Xanthous Ashes - B3 far, right cell" },
    { category: "ID", name: "Old Cell Key - stairs between pit and B3" },
    { category: "ID", name: "Covetous Silver Serpent Ring+1 - pit lift, middle platform" },
    { category: "ID", name: "Dragon Torso Stone - B3, outside lift" },
    { category: "ID", name: "Prisoner Chief's Ashes - B2 near, locked cell by stairs" },
    { category: "ID", name: "Dark Clutch Ring - stairs between pit and B3, mimic" },
    { category: "ID", name: "Estus Shard - mimic on path from B2 to pit" },
    { category: "PC", name: "Soul of Yhorm the Giant" },
    { category: "PC", name: "Cinders of a Lord - Yhorm the Giant" },
    { category: "PC", name: "Logan's Scroll - chapel roof, NPC drop" },
    { category: "PC", name: "Cursebite Ring - swamp, below halls" },
    { category: "PC", name: "Jailer's Key Ring - hall past chapel" },
    { category: "PC", name: "Flame Stoneplate Ring+1 - chapel, drop from roof towards entrance" },
    { category: "PC", name: "Magic Stoneplate Ring+2 - tower base" },
    { category: "PC", name: "Undead Bone Shard - by bonfire" },
    { category: "PC", name: "Siegbräu - Siegward after killing boss" },
    { category: "AL", name: "Soul of Aldrich" },
    { category: "AL", name: "Cinders of a Lord - Aldrich" },
    { category: "AL", name: "Estus Shard - dark cathedral, by left stairs" },
    { category: "AL", name: "Dark Stoneplate Ring - by dark stairs up from plaza" },
    { category: "AL", name: "Easterner's Ashes - below top of furthest buttress" },
    { category: "AL", name: "Giant's Coal - by giant near dark cathedral" },
    { category: "AL", name: "Havel's Ring+2 - prison tower, rafters" },
    { category: "AL", name: "Ring of Favor+1 - light cathedral, upstairs" },
    { category: "AL", name: "Sun Princess Ring - dark cathedral, after boss" },
    { category: "AL", name: "Blade of the Darkmoon - Yorshka with Darkmoon Loyalty" },
    { category: "AL", name: "Aldrich's Ruby - dark cathedral, miniboss" },
    { category: "AL", name: "Soul of Rosaria - Leonhard drop" },
    { category: "LC", name: "Soul of Dragonslayer Armour" },
    { category: "LC", name: "Undead Bone Shard - moat, far ledge" },
    { category: "LC", name: "Knight's Ring - altar" },
    { category: "LC", name: "Red Tearstone Ring - chapel, drop onto roof" },
    { category: "LC", name: "Life Ring+2 - dark room mid, out door opposite wyvern, drop down" },
    { category: "LC", name: "Dark Stoneplate Ring+1 - wyvern room, balcony" },
    { category: "LC", name: "Thunder Stoneplate Ring+2 - chapel, drop onto roof" },
    { category: "LC", name: "Grand Archives Key - by Grand Archives door, after PC and AL bosses" },
    { category: "CKG", name: "Soul of Consumed Oceiros" },
    { category: "CKG", name: "Estus Shard - balcony" },
    { category: "CKG", name: "Dragonscale Ring - shortcut, leave halfway down lift" },
    { category: "CKG", name: "Ring of Sacrifice - under balcony" },
    { category: "CKG", name: "Wood Grain Ring+1 - by first elevator bottom" },
    { category: "CKG", name: "Sage Ring+2 - balcony, drop onto rubble, jump back" },
    { category: "GA", name: "Soul of the Twin Princes" },
    { category: "GA", name: "Cinders of a Lord - Lothric Prince" },
    { category: "GA", name: "Fleshbite Ring - up stairs from 4F" },
    { category: "GA", name: "Estus Shard - dome, far balcony" },
    { category: "GA", name: "Hunter's Ring - dome, very top" },
    { category: "GA", name: "Sage Ring+1 - rafters, second level down" },
    { category: "GA", name: "Lingering Dragoncrest Ring+2 - dome, room behind spire" },
    { category: "GA", name: "Scholar Ring - 2F, between late and early" },
    { category: "GA", name: "Undead Bone Shard - 5F, by entrance" },
    { category: "GA", name: "Crystal Scroll - 2F late, miniboss drop" },
    { category: "UG", name: "Soul of Champion Gundyr" },
    { category: "UG", name: "Priestess Ring - shop" },
    { category: "UG", name: "Ashen Estus Ring - swamp, path opposite bonfire" },
    { category: "UG", name: "Hornet Ring - environs, right of main path after killing FK boss" },
    { category: "UG", name: "Coiled Sword Fragment - shrine, dead bonfire" },
    { category: "UG", name: "Life Ring+3 - shrine, behind big throne" },
    { category: "UG", name: "Ring of Steel Protection+1 - environs, behind bell tower" },
    { category: "AP", name: "Dragon Head Stone - fort, boss drop" },
    { category: "AP", name: "Soul of the Nameless King" },
    { category: "AP", name: "Lightning Clutch Ring - intro, left of boss door" },
    { category: "AP", name: "Thunder Stoneplate Ring - walkway, up ladder" },
    { category: "AP", name: "Dragon Chaser's Ashes - summit, side path" },
    { category: "AP", name: "Ring of Steel Protection - fort overlook, beside stairs" },
    { category: "AP", name: "Havel's Ring+1 - summit, after building" },
    { category: "AP", name: "Covetous Gold Serpent Ring+2 - plaza" },
    { category: "FK", name: "Twinkling Dragon Head Stone - Hawkwood drop" },
    { category: "KFF", name: "Soul of the Lords" }
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
