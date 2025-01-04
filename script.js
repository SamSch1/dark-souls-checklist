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
    { category: "FS (Firelink Shrine)", name: "Blue Tearstone Ring - Greirat" },
    { category: "FS (Firelink Shrine)", name: "Dried Finger - shop" },
    { category: "FS (Firelink Shrine)", name: "Farron Ring - Hawkwood" },
    { category: "FS (Firelink Shrine)", name: "Grave Key - Mortician's Ashes" },
    { category: "FS (Firelink Shrine)", name: "Havel's Ring - Ludleth for Stray Demon" },
    { category: "FS (Firelink Shrine)", name: "Life Ring - Dreamchaser's Ashes" },
    { category: "FS (Firelink Shrine)", name: "Lift Chamber Key - Leonhard" },
    { category: "FS (Firelink Shrine)", name: "Lloyd's Shield Ring - Paladin's Ashes" },
    { category: "FS (Firelink Shrine)", name: "Londor Braille Divine Tome - Yoel/Yuria" },
    { category: "FS (Firelink Shrine)", name: "Pontiff's Left Eye - Ludleth for Vordt" },
    { category: "FS (Firelink Shrine)", name: "Prisoner's Chain - Ludleth for Champion" },
    { category: "FS (Firelink Shrine)", name: "Saint's Ring - Irina" },
    { category: "FS (Firelink Shrine)", name: "Silvercat Ring - Sirris for killing Creighton" },
    { category: "FS (Firelink Shrine)", name: "Slumbering Dragoncrest Ring - Orbeck for buying four specific spells" },
    { category: "FS (Firelink Shrine)", name: "Tower Key - shop" },
    { category: "FS (Firelink Shrine)", name: "Untrue Dark Ring - Yoel/Yuria" },
    { category: "FS (Firelink Shrine)", name: "Untrue White Ring - Yoel/Yuria" },
    { category: "FS (Firelink Shrine)", name: "White Sign Soapstone - shop" },
    { category: "FS (Firelink Shrine)", name: "Wolf Ring+2 - left of boss room exit" },
    { category: "FS (Firelink Shrine)", name: "Wood Grain Ring - Easterner's Ashes" },
    { category: "FS (Firelink Shrine)", name: "Young Dragon Ring - Orbeck for one scroll and buying three spells" },
    { category: "FSBT (Firelink Shrine)", name: "Estus Ring - tower base" },
    { category: "FSBT (Firelink Shrine)", name: "Estus Shard - rafters" },
    { category: "FSBT (Firelink Shrine)", name: "Fire Keeper Soul - tower top" },
    { category: "FSBT (Firelink Shrine)", name: "Ring of Sacrifice - crow for Loretta's Bone" },
    { category: "FSBT (Firelink Shrine)", name: "Very good! Carving - crow for Divine Blessing" },
    { category: "FSBT (Firelink Shrine)", name: "Thank you Carving - crow for Hidden Blessing" },
    { category: "FSBT (Firelink Shrine)", name: "I'm sorry Carving - crow for Shriving Stone" },
    { category: "FSBT (Firelink Shrine)", name: "Help me! Carving - crow for any sacred chime" },
    { category: "FSBT (Firelink Shrine)", name: "Hello Carving - crow for Alluring Skull" },
    { category: "FSBT (Firelink Shrine)", name: "Armor of the Sun - crow for Siegbräu" },
    { category: "HWL (High Wall of Lothric)", name: "Soul of Boreal Valley Vordt" },
    { category: "HWL (High Wall of Lothric)", name: "Soul of the Dancer" },
    { category: "HWL (High Wall of Lothric)", name: "Basin of Vows - Emma" },
    { category: "HWL (High Wall of Lothric)", name: "Small Lothric Banner - Emma" },
    { category: "HWL (High Wall of Lothric)", name: "Cell Key - fort ground, down stairs" },
    { category: "HWL (High Wall of Lothric)", name: "Estus Shard - fort ground, on anvil" },
    { category: "HWL (High Wall of Lothric)", name: "Fleshbite Ring+1 - fort roof, jump to other roof" },
    { category: "HWL (High Wall of Lothric)", name: "Ring of the Evil Eye+2 - fort ground, far wall" },
    { category: "HWL (High Wall of Lothric)", name: "Way of Blue - Emma" },
    { category: "HWL (High Wall of Lothric)", name: "Red Eye Orb - wall tower, miniboss" },
    { category: "US (Undead Settlement)", name: "Soul of the Rotted Greatwood" },
    { category: "US (Undead Settlement)", name: "Transposing Kiln - boss drop" },
    { category: "US (Undead Settlement)", name: "Tower Key - kill Irina" },
    { category: "US (Undead Settlement)", name: "Flynn's Ring - tower village, rooftop" },
    { category: "US (Undead Settlement)", name: "Undead Bone Shard - by white tree" },
    { category: "US (Undead Settlement)", name: "Mortician's Ashes - graveyard by white tree" },
    { category: "US (Undead Settlement)", name: "Bloodbite Ring - miniboss in sewer" },
    { category: "US (Undead Settlement)", name: "Fire Clutch Ring - wooden walkway past stable" },
    { category: "US (Undead Settlement)", name: "Estus Shard - under burning tree" },
    { category: "US (Undead Settlement)", name: "Loretta's Bone - first building, hanging corpse on balcony" },
    { category: "US (Undead Settlement)", name: "Flame Stoneplate Ring - hanging corpse by Mound-Maker transport" },
    { category: "US (Undead Settlement)", name: "Life Ring+1 - tower on the way to village" },
    { category: "US (Undead Settlement)", name: "Poisonbite Ring+1 - graveyard by white tree, near well" },
    { category: "US (Undead Settlement)", name: "Covetous Silver Serpent Ring+2 - tower village, drop down from roof" },
    { category: "US (Undead Settlement)", name: "Mound-makers - Hodrick" },
    { category: "US (Undead Settlement)", name: "Siegbräu - Siegward" },
    { category: "US (Undead Settlement)", name: "Hawk Ring - Giant Archer" },
    { category: "RS (Road of Sacrifice)", name: "Soul of a Crystal Sage" },
    { category: "RS (Road of Sacrifice)", name: "Estus Shard - left of fire behind stronghold left room" },
    { category: "RS (Road of Sacrifice)", name: "Great Swamp Pyromancy Tome - deep water" },
    { category: "RS (Road of Sacrifice)", name: "Farron Coal - keep perimeter" },
    { category: "RS (Road of Sacrifice)", name: "Chloranthy Ring+2 - road, drop across from carriage" },
    { category: "RS (Road of Sacrifice)", name: "Lingering Dragoncrest Ring+1 - water" },
    { category: "RS (Road of Sacrifice)", name: "Great Swamp Ring - miniboss drop, by Farron Keep" },
    { category: "RS (Road of Sacrifice)", name: "Blue Sentinels - Horace" },
    { category: "CD (Cathedral of the Deep)", name: "Small Doll - boss drop" },
    { category: "CD (Cathedral of the Deep)", name: "Soul of the Deacons of the Deep" },
    { category: "CD (Cathedral of the Deep)", name: "Black Eye Orb - Rosaria from Leonhard's quest" },
    { category: "CD (Cathedral of the Deep)", name: "Undead Bone Shard - gravestone by white tree" },
    { category: "CD (Cathedral of the Deep)", name: "Paladin's Ashes - path, guarded by lower NPC" },
    { category: "CD (Cathedral of the Deep)", name: "Poisonbite Ring - moat, hall past miniboss" },
    { category: "CD (Cathedral of the Deep)", name: "Estus Shard - monument outside Cleansing Chapel" },
    { category: "CD (Cathedral of the Deep)", name: "Lloyd's Sword Ring - ledge above main hall south" },
    { category: "CD (Cathedral of the Deep)", name: "Ring of the Evil Eye+1 - by stairs to boss" },
    { category: "CD (Cathedral of the Deep)", name: "Ring of Favor+2 - upper roofs, on buttress" },
    { category: "CD (Cathedral of the Deep)", name: "Deep Braille Divine Tome - mimic by side chapel" },
    { category: "CD (Cathedral of the Deep)", name: "Aldrich's Sapphire - side chapel, miniboss drop" },
    { category: "CD (Cathedral of the Deep)", name: "Horsehoof Ring - Patches" },
    { category: "FK (Farron Keep)", name: "Soul of the Blood of the Wolf" },
    { category: "FK (Farron Keep)", name: "Cinders of a Lord - Abyss Watcher" },
    { category: "FK (Farron Keep)", name: "Undead Bone Shard - pavilion by keep ruins bonfire island" },
    { category: "FK (Farron Keep)", name: "Sage's Scroll - near wall by keep ruins bonfire island" },
    { category: "FK (Farron Keep)", name: "Estus Shard - between Farron Keep bonfire and left island" },
    { category: "FK (Farron Keep)", name: "Sage's Coal - pavilion by left island" },
    { category: "FK (Farron Keep)", name: "Dark Stoneplate Ring+2 - keep ruins ritual island, behind wall" },
    { category: "FK (Farron Keep)", name: "Magic Stoneplate Ring+1 - between right island and wall" },
    { category: "FK (Farron Keep)", name: "Wolf Ring+1 - keep ruins bonfire island, outside building" },
    { category: "FK (Farron Keep)", name: "Lingering Dragoncrest Ring - by white tree, miniboss drop" },
    { category: "FK (Farron Keep)", name: "Soul of a Stray Demon - upper keep, miniboss drop" },
    { category: "FK (Farron Keep)", name: "Watchdogs of Farron - Old Wolf" },
    { category: "CC (Catacombs of Carthus)", name: "Soul of High Lord Wolnir" },
    { category: "CC (Catacombs of Carthus)", name: "Carthus Milkring - crypt upper, among pots" },
    { category: "CC (Catacombs of Carthus)", name: "Carthus Bloodring - crypt lower, end of side hall" },
    { category: "CC (Catacombs of Carthus)", name: "Grave Warden's Ashes - crypt across, corner" },
    { category: "CC (Catacombs of Carthus)", name: "Witch's Ring - tomb, hall before bonfire" },
    { category: "CC (Catacombs of Carthus)", name: "Grave Warden Pyromancy Tome - boss arena" },
    { category: "CC (Catacombs of Carthus)", name: "Ring of Steel Protection+2 - atrium upper, drop onto pillar" },
    { category: "CC (Catacombs of Carthus)", name: "Thunder Stoneplate Ring+1 - crypt upper, among pots" },
    { category: "CC (Catacombs of Carthus)", name: "Soul of a Demon - tomb, miniboss drop" },
    { category: "CC (Catacombs of Carthus)", name: "Pontiff's Right Eye - Irithyll bridge, miniboss drop" },
    { category: "SL (Smouldering Lake)", name: "Bloodbite Ring+1 - behind ballista" },
    { category: "SL (Smouldering Lake)", name: "Flame Stoneplate Ring+2 - ruins main lower, illusory wall in far hall" },
    { category: "IBV (Irithyll of the Boreal Valley)", name: "Soul of Pontiff Sulyvahn" },
    { category: "IBV (Irithyll of the Boreal Valley)", name: "Ring of Sacrifice - lake, right of stairs from descent" },
    { category: "IBV (Irithyll of the Boreal Valley)", name: "Excrement-covered Ashes - sewer, by stairs" },
    { category: "IBV (Irithyll of the Boreal Valley)", name: "Chloranthy Ring+1 - plaza, behind altar" },
    { category: "IBV (Irithyll of the Boreal Valley)", name: "Covetous Gold Serpent Ring+1 - descent, drop after dark room" },
    { category: "IBV (Irithyll of the Boreal Valley)", name: "Wood Grain Ring+2 - ascent, right after great hall" },
    { category: "IBV (Irithyll of the Boreal Valley)", name: "Leo Ring - great hall, chest" },
    { category: "IBV (Irithyll of the Boreal Valley)", name: "Roster of Knights - descent, first landing" },
    { category: "IBV (Irithyll of the Boreal Valley)", name: "Siegbräu - Siegward" },
    { category: "IBV (Irithyll of the Boreal Valley)", name: "Ring of the Evil Eye - Anri" },
    { category: "ID (Irithyll Dungeon)", name: "Jailbreaker's Key - B1 far, cell after gate" },
    { category: "ID (Irithyll Dungeon)", name: "Bellowing Dragoncrest Ring - drop from B1 towards pit" },
    { category: "ID (Irithyll Dungeon)", name: "Profaned Coal - B3 far, left cell" },
    { category: "ID (Irithyll Dungeon)", name: "Covetous Gold Serpent Ring - Siegward's cell" },
    { category: "ID (Irithyll Dungeon)", name: "Dusk Crown Ring - B3 far, right cell" },
    { category: "ID (Irithyll Dungeon)", name: "Xanthous Ashes - B3 far, right cell" },
    { category: "ID (Irithyll Dungeon)", name: "Old Cell Key - stairs between pit and B3" },
    { category: "ID (Irithyll Dungeon)", name: "Covetous Silver Serpent Ring+1 - pit lift, middle platform" },
    { category: "ID (Irithyll Dungeon)", name: "Dragon Torso Stone - B3, outside lift" },
    { category: "ID (Irithyll Dungeon)", name: "Prisoner Chief's Ashes - B2 near, locked cell by stairs" },
    { category: "ID (Irithyll Dungeon)", name: "Dark Clutch Ring - stairs between pit and B3, mimic" },
    { category: "ID (Irithyll Dungeon)", name: "Estus Shard - mimic on path from B2 to pit" },
    { category: "PC (Profaned Capital)", name: "Soul of Yhorm the Giant" },
    { category: "PC (Profaned Capital)", name: "Cinders of a Lord - Yhorm the Giant" },
    { category: "PC (Profaned Capital)", name: "Logan's Scroll - chapel roof, NPC drop" },
    { category: "PC (Profaned Capital)", name: "Cursebite Ring - swamp, below halls" },
    { category: "PC (Profaned Capital)", name: "Jailer's Key Ring - hall past chapel" },
    { category: "PC (Profaned Capital)", name: "Flame Stoneplate Ring+1 - chapel, drop from roof towards entrance" },
    { category: "PC (Profaned Capital)", name: "Magic Stoneplate Ring+2 - tower base" },
    { category: "PC (Profaned Capital)", name: "Undead Bone Shard - by bonfire" },
    { category: "PC (Profaned Capital)", name: "Siegbräu - Siegward after killing boss" },
    { category: "AL (Anor Londo)", name: "Soul of Aldrich" },
    { category: "AL (Anor Londo)", name: "Cinders of a Lord - Aldrich" },
    { category: "AL (Anor Londo)", name: "Estus Shard - dark cathedral, by left stairs" },
    { category: "AL (Anor Londo)", name: "Dark Stoneplate Ring - by dark stairs up from plaza" },
    { category: "AL (Anor Londo)", name: "Easterner's Ashes - below top of furthest buttress" },
    { category: "AL (Anor Londo)", name: "Giant's Coal - by giant near dark cathedral" },
    { category: "AL (Anor Londo)", name: "Havel's Ring+2 - prison tower, rafters" },
    { category: "AL (Anor Londo)", name: "Ring of Favor+1 - light cathedral, upstairs" },
    { category: "AL (Anor Londo)", name: "Sun Princess Ring - dark cathedral, after boss" },
    { category: "AL (Anor Londo)", name: "Blade of the Darkmoon - Yorshka with Darkmoon Loyalty" },
    { category: "AL (Anor Londo)", name: "Aldrich's Ruby - dark cathedral, miniboss" },
    { category: "AL (Anor Londo)", name: "Soul of Rosaria - Leonhard drop" },
    { category: "LC (Lothric Castle)", name: "Soul of Dragonslayer Armour" },
    { category: "LC (Lothric Castle)", name: "Undead Bone Shard - moat, far ledge" },
    { category: "LC (Lothric Castle)", name: "Knight's Ring - altar" },
    { category: "LC (Lothric Castle)", name: "Red Tearstone Ring - chapel, drop onto roof" },
    { category: "LC (Lothric Castle)", name: "Life Ring+2 - dark room mid, out door opposite wyvern, drop down" },
    { category: "LC (Lothric Castle)", name: "Dark Stoneplate Ring+1 - wyvern room, balcony" },
    { category: "LC (Lothric Castle)", name: "Thunder Stoneplate Ring+2 - chapel, drop onto roof" },
    { category: "LC (Lothric Castle)", name: "Grand Archives Key - by Grand Archives door, after PC and AL bosses" },
    { category: "CKG (Consumed King's Garden)", name: "Wood Grain Ring+1 - by first elevator bottom" },
    { category: "CKG (Consumed King's Garden)", name: "Sage Ring+2 - balcony, drop onto rubble, jump back" },
    { category: "GA (Grand Archives)", name: "Soul of the Twin Princes" },
    { category: "GA (Grand Archives)", name: "Cinders of a Lord - Lothric Prince" },
    { category: "GA (Grand Archives)", name: "Fleshbite Ring - up stairs from 4F" },
    { category: "GA (Grand Archives)", name: "Estus Shard - dome, far balcony" },
    { category: "GA (Grand Archives)", name: "Hunter's Ring - dome, very top" },
    { category: "GA (Grand Archives)", name: "Sage Ring+1 - rafters, second level down" },
    { category: "GA (Grand Archives)", name: "Lingering Dragoncrest Ring+2 - dome, room behind spire" },
    { category: "GA (Grand Archives)", name: "Scholar Ring - 2F, between late and early" },
    { category: "GA (Grand Archives)", name: "Undead Bone Shard - 5F, by entrance" },
    { category: "GA (Grand Archives)", name: "Crystal Scroll - 2F late, miniboss drop" },
    { category: "UG (Untended Graves)", name: "Life Ring+3 - shrine, behind big throne" },
    { category: "UG (Untended Graves)", name: "Ring of Steel Protection+1 - environs, behind bell tower" },
    { category: "AP (Archdragon Peak)", name: "Havel's Ring+1 - summit, after building" },
    { category: "AP (Archdragon Peak)", name: "Covetous Gold Serpent Ring+2 - plaza" },
    { category: "KFF (Kiln of the First Flame)", name: "Soul of the Lords" },
    { category: "DH (Dreg Heap)", name: "Siegbräu - Lapp" },
    { category: "DH (Dreg Heap)", name: "Ring of Steel Protection+3 - ledge before church" },
    { category: "DH (Dreg Heap)", name: "Covetous Silver Serpent Ring+3 - pantry upstairs, drop down" },
    { category: "DH (Dreg Heap)", name: "Ring of Favor+3 - swamp right, up root" },
    { category: "RC (Ringed City)", name: "Wolf Ring+3 - street gardens, NPC drop" },
    { category: "RC (Ringed City)", name: "Covetous Gold Serpent Ring+3 - streets, by Lapp" },
    { category: "RC (Ringed City)", name: "Havel's Ring+3 - streets high, drop from building opposite" },
    { category: "RC (Ringed City)", name: "Chloranthy Ring+3 - wall hidden, drop onto statue" },
    { category: "RC (Ringed City)", name: "Ring of the Evil Eye+3 - grave, mimic" },
    { category: "RC (Ringed City)", name: "Siegbräu - Lapp" }
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