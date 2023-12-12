document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded.");

    //Event listener for the "Class" dropdown
    document.getElementById("class").addEventListener("change", function () {
        updateSubclasses();
    });
});

function updateSubclasses() {
    let selectedClass = document.getElementById("class").value;
    let subclassDropdown = document.getElementById("subclass");

    // Check if the subclassDropdown is found
    if (!subclassDropdown) {
        console.error("Subclass dropdown not found.");
        return;
    }

    // Clears previous options
    subclassDropdown.innerHTML = '';

    //Options based on the selected class
    if (selectedClass === "fighter") {
        addOption(subclassDropdown, "eldritch_knight", "Eldritch Knight");
        addOption(subclassDropdown, "battle_master", "Battle Master");
        addOption(subclassDropdown, "champion", "Champion");
    } else if (selectedClass === "cleric") {
        addOption(subclassDropdown, "life_domain", "Life Domain");
        addOption(subclassDropdown, "light_domain", "Light Domain");
        addOption(subclassDropdown, "trickery_domain", "Trickery Domain");
        addOption(subclassDropdown, "knowledge_domain", "Knowledge Domain");
        addOption(subclassDropdown, "nature_domain", "Nature Domain");
        addOption(subclassDropdown, "tempest_domain", "Tempest Domain");
        addOption(subclassDropdown, "war_domain", "War Domain");
    } else if (selectedClass === "ranger") {
        addOption(subclassDropdown, "beast_master", "Beast Master");
        addOption(subclassDropdown, "hunter", "Hunter");
        addOption(subclassDropdown, "gloom_stalker", "Gloom Stalker");
    } else if (selectedClass === "rogue") {
        addOption(subclassDropdown, "thief", "Thief");
        addOption(subclassDropdown, "arcane_trickster", "Arcane Trickster");
        addOption(subclassDropdown, "assassin", "Assassin");
    } else if (selectedClass === "warlock") {
        addOption(subclassDropdown, "the_fiend", "The Fiend");
        addOption(subclassDropdown, "the_great_old_one", "The Great Old One");
        addOption(subclassDropdown, "archfey", "Archfey");
    } else if (selectedClass === "wizard") {
        addOption(subclassDropdown, "abjuration_school", "Abjuration School");
        addOption(subclassDropdown, "evocation_school", "Evocation School");
        addOption(subclassDropdown, "conjuration_school", "Conjuration School");
        addOption(subclassDropdown, "divination_school", "Divination School");
        addOption(subclassDropdown, "enchantment_school", "Enchantment School");
        addOption(subclassDropdown, "illusion_school", "Illusion School");
        addOption(subclassDropdown, "necromancy_school", "Necromancy School");
        addOption(subclassDropdown, "transmutation_school", "Transmutation School");
    } else if (selectedClass === "druid") {
        addOption(subclassDropdown, "circle_of_the_moon", "Circle of the Moon");
        addOption(subclassDropdown, "circle_of_the_land", "Circle of the Land");
        addOption(subclassDropdown, "circle_of_spores", "Circle of Spores");
    } else if (selectedClass === "sorcerer") {
        addOption(subclassDropdown, "draconic_bloodline", "Draconic Bloodline");
        addOption(subclassDropdown, "wild_magic", "Wild Magic");
        addOption(subclassDropdown, "storm_sorcery", "Storm Sorcery");
    } else if (selectedClass === "barbarian") {
        addOption(subclassDropdown, "berserker", "Berserker");
        addOption(subclassDropdown, "wildheart", "Wildheart");
        addOption(subclassDropdown, "wild_magic", "Wild Magic");
    } else if (selectedClass === "bard") {
        addOption(subclassDropdown, "college_of_lore", "College of Lore");
        addOption(subclassDropdown, "college_of_valor", "College of Valor");
        addOption(subclassDropdown, "college_of_swords", "College of Swords");
    } else if (selectedClass === "paladin") {
        addOption(subclassDropdown, "oath_of_the_ancients", "Oath of The Ancients");
        addOption(subclassDropdown, "oath_of_devotion", "Oath of Devotion");
        addOption(subclassDropdown, "oath_of_vengeance", "Oath of Vengeance");
        addOption(subclassDropdown, "oathbreaker", "Oathbreaker");
    } else if (selectedClass === "monk") {
        addOption(subclassDropdown, "way_of_the_open_hand", "Way of the Open Hand");
        addOption(subclassDropdown, "way_of_shadow", "Way of Shadow");
        addOption(subclassDropdown, "way_of_the_four_elements", "Way of the Four Elements");
    } 
  
}

function addOption(selectElement, value, text) {
    let option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.add(option);
}


// Subraces

document.getElementById("race").addEventListener("change", function () { console.log("Race changed");
    updateSubrace();
});

function updateSubrace() { console.log("Updating subrace");
    let selectedRace = document.getElementById("race").value;
    console.log("Selected Race:", selectedRace);
    let subraceDropdown = document.getElementById("subrace");


    
    // Check if the subraceDropdown is found
    if (!subraceDropdown) {
        console.error("Subrace dropdown not found.");
        return;
    }

    // Clears previous options
    subraceDropdown.innerHTML = '';

    //Options based on the selected race
    if (selectedRace === "elf") {
        addOption(subraceDropdown, "high_elf", "High Elf");
        addOption(subraceDropdown, "wood_elf", "Wood Elf");
    } else if (selectedRace === "dwarf") {
        addOption(subraceDropdown, "gold_dwarf", "Gold Dwarf");
        addOption(subraceDropdown, "shield_dwarf", "Shield Dwarf");
        addOption(subraceDropdown, "duergar", "Duergar");
    } else if (selectedRace === "drow") {
        addOption(subraceDropdown, "lolth-sworn_drow", "Lolth-Sworn Drow");
        addOption(subraceDropdown, "seldarine_drow", "Seldarine Drow");
    } else if (selectedRace === "dragonborn") {
        addOption(subraceDropdown, "black_dragonborn", "Black Dragonborn");
        addOption(subraceDropdown, "blue_dragonborn", "Blue Dragonborn");
        addOption(subraceDropdown, "brass_dragonborn", "Brass Dragonborn");
        addOption(subraceDropdown, "bronze_dragonborn", "Bronze Dragonborn");
        addOption(subraceDropdown, "copper_dragonborn", "Copper Dragonborn");
        addOption(subraceDropdown, "gold_dragonborn", "Gold Dragonborn");
        addOption(subraceDropdown, "green_dragonborn", "Green Dragonborn");
        addOption(subraceDropdown, "red_dragonborn", "Red Dragonborn");
        addOption(subraceDropdown, "silver_dragonborn", "Silver Dragonborn");
        addOption(subraceDropdown, "white_dragonborn", "White Dragonborn");
    } else if (selectedRace === "gnome") {
        addOption(subraceDropdown, "rock_gnome", "Rock Gnome");
        addOption(subraceDropdown, "forest_gnome", "Forest Gnome");
        addOption(subraceDropdown, "deep_gnome", "Deep Gnome");
    } else if (selectedRace === "half-elf") {
        addOption(subraceDropdown, "high_half-elf", "High Half-Elf");
        addOption(subraceDropdown, "wood_half-elf", "Wood Half-Elf");
        addOption(subraceDropdown, "drow_half-elf", "Drow Half-Elf");
    } else if (selectedRace === "halfling") {
        addOption(subraceDropdown, "lightfoot_halfling", "Lightfoot Halfling");
        addOption(subraceDropdown, "strongheart_halfling", "Strongheart Halfing");
    } else if (selectedRace === "tiefling") {
        addOption(subraceDropdown, "asmodeus_tiefling", "Asmodeus Tiefling");
        addOption(subraceDropdown, "mephistopheles_tiefling", "Mephistopheles Tiefling");
        addOption(subraceDropdown, "zariel_tiefling", "Zariel Tiefling");
    } else (addOption(subraceDropdown, "n/a", "No Subraces"))
}


//Dynamic abilities
function updatePointPool() {
    let totalPointsSpent = 0;

    // Array of ability score input IDs
    let abilityScores = ["strength", "dexterity", "constitution", "intelligence", "charisma", "wisdom"];

    // Calculate total points spent
    abilityScores.forEach(score => {
        const inputValue = parseInt(document.getElementById(score).value) || 8;
        totalPointsSpent += Math.abs(inputValue - 8);
    });

    // Calculate remaining points
    const remainingPoints = 27 - totalPointsSpent;

    if (remainingPoints < 0) {
        remainingPoints = 0;
    }

    // Update Point Pool and Dynamic Modifiers
    document.getElementById("pointPool").value = remainingPoints;

    updateModifier('strength', 'strModif');
    updateModifier('dexterity', 'dexModif');
    updateModifier('constitution', 'conModif');
    updateModifier('intelligence', 'intModif');
    updateModifier('charisma', 'chaModif');
    updateModifier('wisdom', 'wisModif');

    
}

function updateModifier(abilityId, modifierId) {
    // Get the ability score value
    let abilityScore = parseInt(document.getElementById(abilityId).value) || 8;

    // Calculate the modifier based on the ability score
    let modifier = Math.floor((abilityScore - 10) / 2);

    // Update the modifier input field
    document.getElementById(modifierId).value = modifier;
}

// Attach event listeners to each input field
document.querySelectorAll('.form-control').forEach(function(input) {
    input.addEventListener('input', function() {
        console.log('Input changed');
        updatePointPool();
    });
});

// Update all elements with class 'dexModif'
function updateDexModifier() {
    let dexterityValue = parseInt(document.getElementById('dexterity').value) || 8;
    let dexModifier = Math.floor((dexterityValue - 10) / 2);

    // Update all elements with class 'dexModif'
    document.querySelectorAll('.dexModif').forEach(element => {
        element.textContent = dexModifier;
    });
}

// Attach event listener to the Dexterity input field
document.getElementById('dexterity').addEventListener('input', function () {
    console.log('Dexterity input changed');
    updateDexModifier();
});

// Initial update of the Dexterity modifier when the page loads
updateDexModifier();

// Update Wisdom modifier
function updateWisModifier() {
    let wisdomValue = parseInt(document.getElementById('wisdom').value) || 8;
    let wisModifier = Math.floor((wisdomValue - 10) / 2);

    // Update all elements with class 'wisModif'
    document.querySelectorAll('.wisModif').forEach(element => {
        element.textContent = wisModifier;
    });
}

// Attach event listener to the Wisdom input field
document.getElementById('wisdom').addEventListener('input', function () {
    console.log('Wisdom input changed');
    updateWisModifier();
});

// Initial update of the Wisdom modifier when the page loads
updateWisModifier();

// Update Intelligence modifier
function updateIntModifier() {
    let intelligenceValue = parseInt(document.getElementById('intelligence').value) || 8;
    let intModifier = Math.floor((intelligenceValue - 10) / 2);

    // Updates all elements with class 'intModif'
    document.querySelectorAll('.intModif').forEach(element => {
        element.textContent = intModifier;
    });
}

// Attach event listener to the Intelligence input field
document.getElementById('intelligence').addEventListener('input', function () {
    console.log('Intelligence input changed');
    updateIntModifier();
});

// Initial update of the Intelligence modifier when the page loads
updateIntModifier();

// Update Charisma modifier
function updateChaModifier() {
    let charismaValue = parseInt(document.getElementById('charisma').value) || 8;
    let chaModifier = Math.floor((charismaValue - 10) / 2);

    // Update all elements with class 'chaModif'
    document.querySelectorAll('.chaModif').forEach(element => {
        element.textContent = chaModifier;
    });
}

// Attach event listener to the Charisma input field
document.getElementById('charisma').addEventListener('input', function () {
    console.log('Charisma input changed');
    updateChaModifier();
});

// Initial update of the Charisma modifier when the page loads
updateChaModifier();

// Update Strength modifier
function updateStrModifier() {
    let strengthValue = parseInt(document.getElementById('strength').value) || 8;
    let strModifier = Math.floor((strengthValue - 10) / 2);

    // Update all elements with class 'strModif'
    document.querySelectorAll('.strModif').forEach(element => {
        element.textContent = strModifier;
    });
}

// Attach event listener to the Strength input field
document.getElementById('strength').addEventListener('input', function () {
    console.log('Strength input changed');
    updateStrModifier();
});

// Initial update of the Strength modifier when the page loads
updateStrModifier();

//Save and Load

       // Function to save form data to local storage
       function saveFormData() {
        let formData = {
            charName: document.getElementById('charName').value,
            race: document.getElementById('race').value,
            subrace: getSelectedValue('subrace').value,
            class: document.getElementById('class').value,
            subclass: getSelectedValue('subclass').value,
            background: document.getElementById('background').value,
            backstory: document.getElementById('backstory').value,
            abilityScores: {
                strength: document.getElementById('strength').value,
                dexterity: document.getElementById('dexterity').value,
                constitution: document.getElementById('constitution').value,
                intelligence: document.getElementById('intelligence').value,
                charisma: document.getElementById('charisma').value,
                wisdom: document.getElementById('wisdom').value,
            },
            // Add other form fields as needed^
        };
            formData.subclassOptions = getDropdownOptions('subclass');
            formData.subraceOptions = getDropdownOptions('subrace');

        // Saves the form data to local storage
        localStorage.setItem('savedFormData', JSON.stringify(formData));
    }

    // Function to load saved form data from local storage
    function loadFormData() {
        // Get the saved form data from local storage
        let savedFormData = localStorage.getItem('savedFormData');

        if (savedFormData) {
            // Parse the JSON data
            let formData = JSON.parse(savedFormData);

            // Set form fields with the loaded data
            document.getElementById('charName').value = formData.charName;
            document.getElementById('race').value = formData.race;
            setSelectValue('subrace', formData.subrace);
            document.getElementById('class').value = formData.class;
            setSelectValue('subclass', formData.subclass);
            document.getElementById('background').value = formData.background;
            document.getElementById('backstory').value = formData.backstory;
            
            setAbilityScores(formData.abilityScores);

            // Set other form fields as needed
            setDropdownOptions('subclass', formData.subclassOptions);
            setDropdownOptions('subrace', formData.subraceOptions);
        } else {
            alert('No saved data found.');
        }
    }

    // Event listener for the "Save Character" button
    document.getElementById('saveCharacterBtn').addEventListener('click', function (event) {
        // Prevent the default button behavior
        event.preventDefault();

        // Save the form data to local storage when the button is clicked
        saveFormData();
    });

    // Event listener for the "Load Saved Character" button
    document.getElementById('loadCharacterBtn').addEventListener('click', function (event) {
        // Prevent the default button behavior
        event.preventDefault();

        // Load the saved form data when the button is clicked
        loadFormData();
    });

    // Helper function to get the selected value of a dropdown
function getSelectedValue(id) {
    let dropdown = document.getElementById(id);
    return dropdown.options[dropdown.selectedIndex].value;
}

// Helper function to set the selected value of a dropdown
function setSelectValue(id, value) {
    let dropdown = document.getElementById(id);
    for (let i = 0; i < dropdown.options.length; i++) {
        if (dropdown.options[i].value === value) {
            dropdown.selectedIndex = i;
            break;
        }
    }
}
// Helper function to get the options of a dropdown
function getDropdownOptions(id) {
    let dropdown = document.getElementById(id);
    return Array.from(dropdown.options).map(option => ({
        value: option.value,
        text: option.text,
        selected: option.selected, // Include the selected property
    }));
}

// Helper function to set the options of a dropdown
function setDropdownOptions(id, options) {
    let dropdown = document.getElementById(id);
    // Clear previous options
    dropdown.innerHTML = '';
    // Add new options
    options.forEach(option => addOption(dropdown, option.value, option.text, option.selected));
}

// Helper function to add an option to a dropdown
function addOption(selectElement, value, text, selected) {
    let option = document.createElement("option");
    option.value = value;
    option.text = text;
    if (selected) {
        option.setAttribute('selected', 'selected');
    }
    selectElement.add(option);
}
function setAbilityScores(abilityScores) {
    Object.keys(abilityScores).forEach(score => {
        document.getElementById(score).value = abilityScores[score];
    });
}