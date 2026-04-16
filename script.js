// Database of possible identities
// I also added the descriptions of each M and X which is shown on the very first page
const metalIdentities = [
    { name: "Nickel", reactivity: 4, description: "lustrous, silvery-white with a slight golden or brownish tinge.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 4 minutes", flame: "Pale green/ bluish green flame", mass: 58.69},
    { name: "CopperOne", reactivity: 2, description: "lustrous and reddish-orange.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 3 minutes", flame: "Bluish green flame", mass: 63.55},
    { name: "CopperTwo", reactivity: 3, description: "lustrous and reddish-orange.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 3 minutes", flame: "Bluish green flame", mass: 63.55},
    { name: "Silver", reactivity: 1, description: "lusterous and brilliant white.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 6 minutes", flame: "No Data", mass: 107.87},
    { name: "Aluminum", reactivity: 7, description: "shiny, silver.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 7 minute", flame: "White/silvery white flame", mass: 26.98},
    { name: "IronTwo", reactivity: 5, description: "silvery-gray.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Red flame", mass: 55.85},
    { name: "IronThree", reactivity: 6, description: "silvery-gray.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Red flame", mass: 55.85},
    { name: "Magnesium", reactivity: 8, description: "lursterous, silvery-gray.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 1 minute", flame: "Very blinding white light, white powder formed after", mass: 24.31}
];

const nonMetalIdentities = [
    { name: "Sulfur", description: "a distinctively bright lemon-yellow, pale yellow, or greenish-yellow solid.", heat: "Melts into a yellow liquid. Turns into red vapor when heated further", solubility: "Sinks to the bottom of the beaker.", solvent: "Does not dissolve in water.", brittle: "Shatters or crumbles into powder", starch: "Remains the same", mass: 32.07},
    { name: "Chlorine", description: "a dense, yellow-green gas.", heat: "Pale green gas fills the tube.", solubility: "Creates a pale, acidic bleach-like solution.", solvent: "Dissolves into a light yellow liquid.", brittle: "No Data Available", starch: "No Data Available", mass: 70.91},
    { name: "Bromine", description: "a reddish-brown liquid.", heat: "Deep red-orange vapors fill the tube.", solubility: "Heavy orange-red liquid at the bottom.", solvent: "Orange-brown solution forms.", brittle: "No Data Available", starch: "No Data Available", mass: 159.81},
    { name: "Phosphorus", description: "a white solid.", heat: "Ignites into a bright white light/smoke.", solubility: "Does not dissolve; stays as a waxy solid.", solvent: "Partially dissolves in organic liquids.", brittle: "Shatters or crumbles into powder", starch: "Remains the same", mass: 30.97}
];

const compoundDatabase = {
    "CopperOneChlorine": { appearance: "White powder, slightly green from oxidized impurities.", solubility: "insoluble", molarMass: 98.999 },
    "CopperTwoChlorine": { appearance: "Dark brown solid.", solubility: "soluble", molarMass: 134.45 },
    "NickelChlorine": { appearance: "Yellow-brown crystals", solubility: "soluble", molarMass: 129.5994 },
    "IronTwoChlorine": { appearance: "Tan Solid", solubility: "soluble", molarMass: 126.751 },
    "IronThreeChlorine": { appearance: "Green-black by reflected light; purple-red by transmitted light; yellow solid as hexahydrate; brown as aqueous solution.", solubility: "soluble", molarMass: 162.204 },
    "SilverChlorine": { appearance: "White solid.", solubility: "insoluble", molarMass: 143.32 },
    "AluminumChlorine": { appearance: "White to gray powder.", solubility: "soluble", molarMass: 133.341 },
    "MagnesiumChlorine": { appearance: "White or colorless crystals", solubility: "soluble", molarMass: 95.211 },

    // Bromine Groups
    "CopperOneBromine": { appearance: "White powder.", solubility: "insoluble", molarMass: 143.45 },
    "CopperTwoBromine": { appearance: "Grayish black crystals.", solubility: "soluble", molarMass: 223.37 },
    "NickelBromine": { appearance: "Yellow-brown crystals.", solubility: "soluble", molarMass: 218.53 },
    "IronTwoBromine": { appearance: "yellow-brown solid.", solubility: "soluble", molarMass: 215.65 },
    "IronThreeBromine": { appearance: "Brown solid.", solubility: "soluble", molarMass: 295.56 },
    "SilverBromine": { appearance: "Pale yellow solid.", solubility: "insoluble", molarMass: 187.77 },
    "AluminumBromine": { appearance: "White to yellowish-red, lumpy solid", solubility: "soluble", molarMass: 266.694 },
    "MagnesiumBromine": { appearance: "White crystals.", solubility: "soluble", molarMass: 184.113 },

    //Sulfur Groups
    "CopperOneSulfur": { appearance: "Black crystals.", solubility: "insoluble", molarMass: 159.16 },
    "IronTwoSulfur": { appearance: "Gray, sometimes in lumps or powder.", solubility: "insoluble", molarMass: 87.91 },
    "SilverSulfur": { appearance: "Gray-blackish crystals.", solubility: "insoluble", molarMass: 247.8 },
    "AluminumSulfur": { appearance: "Gray solid.", solubility: "soluble", molarMass: 150.162 },
    "MagnesiumSulfur": { appearance: "White to reddish brown powder.", solubility: "soluble", molarMass: 56.371 },

    // Phosphorus Groups
    "CopperOnePhosphorus": { appearance: "Yellowish gray crystals.", solubility: "insoluble", molarMass: 221.6127 },
    "IronThreePhosphorus": { appearance: "Gray needles.", solubility: "insoluble", molarMass: 86.819 },
    "AluminumPhosphorus": { appearance: "Yellow or gray crystals.", solubility: "insoluble", molarMass: 57.955 },
    "MagnesiumPhosphorus": { appearance: "White crystalline solid", solubility: "insoluble", molarMass: 134.861 },    
    };


function initializeIdentities() {
    let validPair = false;
    let selectedM, selectedX;

    while (!validPair) {
        selectedM = metalIdentities[Math.floor(Math.random() * metalIdentities.length)];
        selectedX = nonMetalIdentities[Math.floor(Math.random() * nonMetalIdentities.length)];
        
        const lookupKey = selectedM.name + selectedX.name;
        
        if (compoundDatabase[lookupKey]) {
            validPair = true;
        }
    }
    return { selectedM, selectedX };
}

const { selectedM, selectedX } = initializeIdentities();
let activeM = selectedM;
let activeX = selectedX;

// List of available experiment types, make sure to not to have the same id if adding experiments
const experimentsM = [
    { id: 'hammer', name: "Hammer Test" },
    { id: 'activity', name: "Activity Testing" },
    { id: 'melting', name: "Crucible + Matches" },
    { id: 'conduct', name: "Conductivity Test", static: "Red and Green lights shine brightly." },
    { id: 'water', name: "Water Submerging", static: "Sample sinks in water and does not react." },
    { id: 'flame', name: "Flame Test"},
];

const experimentsX = [
    { id: 'heat', name: "Bunsen Burner" },
    { id: 'solubility', name: "Water Solubility" },
    { id: 'solvent', name: "Organic Solvent" },
    { id: 'brittle', name: "Brittleness"},
    { id: 'starch', name: "Starch Test"},
    { id: 'conductX', name: "Conductivity Test", static: "Red and Green lights remain off." }
];

//Reactivity series data

const reactivitySeries = [
    "Calcium",
    "Magnesium",
    "Aluminum",
    "Manganese",
    "Zinc",
    "Chromium",
    "Iron (II)",
    "Iron (III)",
    "Cobalt",
    "Nickel",
    "Tin",
    "Copper (I)",
    "Copper (II)",
    "Silver"
];

const reactionMatrix = {

    "Zn": {
        "HCl": "Bubbles, metal dissolves",
        "Ca(NO3)2": "Reddish-brown metal coat",
        "ZnCl2": "yellowish-white metal coat",
        "Cu(NO3)2": "metal coat",
        "NiSO4": "Gray solid forms",
        "AgNO3": "Silver crystals form; solution clears"
    },

    "Cu (I)": {
        "AgNO3": "Silver crystals form"
    },

    "Cu (II)": {
        "AgNO3": "Silver crystals form"
    },

    "Ni": {
        "HCl": "Slow bubbles",
        "Cu(NO3)2": "Reddish-brown metal coat",
        "AgNO3": "silver metal coat"
    },

    "Co": {
        "HCl": "Slow bubbles",
        "Cu(NO3)2": "Reddish-brown metal coat",
        "ZnCl2": "yellowish-white metal coat",
        "AgNO3": "silver metal coat"
    },

    "Fe (II)": {
        "HCl": "Bubbles; solution turns pale green",
        "Cu(NO3)2": "Reddish-brown metal coat",
        "ZnCl2": "yellowish-white metal coat",
        "NiSO4": "silver metal coat",
        "AgNO3": "silver metal coat"
    },

    "Fe (III)": {
        "Cu(NO3)2": "Reddish-brown metal coat",
        "ZnCl2": "yellowish-white metal coat",
        "NiSO4": "silver metal coat",
        "AgNO3": "silver metal coat"
    },

    "Ag": {
        // no reactions listed
    },

    "Cr": {
        "HCl": "Slow bubbles",
        "Cu(NO3)2": "Reddish-brown metal coat",
        "ZnCl2": "yellowish-white metal coat",
        "NiSO4": "silver metal coat",
        "AgNO3": "silver metal coat",
        "FeSO4": "metal coat"
    },

    "Mn": {
        "HCl": "Bubbles",
        "Ca(NO3)2": "Metal coat",
        "Cu(NO3)2": "Reddish-brown metal coat",
        "ZnCl2": "yellowish-white metal coat",
        "NiSO4": "silver metal coat",
        "CoSO4": "silver metal coat",
        "FeSO4": "color change",
        "AgNO3": "silver metal coat",
        "CrCl3": "silver metal coat"
    },

    "Mg": {
        "HCl": "Vigorous bubbling",
        "Ca(NO3)2": "silver metal coat",
        "Cu(NO3)2": "Reddish-brown metal coat",
        "ZnCl2": "yellowish-white metal coat",
        "NiSO4": "silver metal coat",
        "CoSO4": "silver metal coat",
        "FeSO4": "color change",
        "AgNO3": "silver metal coat",
        "CrCl3": "silver metal coat",
        "MnCO3": "silver metal coat"
    },

    "Ca": {
        "HCl": "Very vigorous bubbling",
        "Ca(NO3)2": "vigrous bubbling",
        "ZnCl2": "silver metal coat",
        "Cu(NO3)2": "Reddish-brown metal coat",
        "NiSO4": "yellowish-white metal coat",
        "CoSO4": "silver metal coat",
        "FeSO4": "silver metal coat",
        "AgNO3": "color change",
        "CrCl3": "silver metal coat",
        "MnCO3": "silver metal coat",
        "Mg(NO3)2": "metal coat"
    },

    "Sn": {
        "HCl": "Slow bubbles",
        "Cu(NO3)2": "Reddish-brown metal coat"
    },

    "Al": {
        "HCl": "Bubbles after oxide layer removed",
        "Ca(NO3)2": "silver metal coat",
        "Cu(NO3)2": "Reddish-brown metal coat",
        "ZnCl2": "yellowish-white metal coat",
        "NiSO4": "silver metal coat",
        "CoSO4": "silver metal coat",
        "FeSO4": "color change",
        "AgNO3": "silver metal coat",
        "CrCl3": "silver metal coat",
        "MnCO3": "silver metal coat"
    }

};

// --- STATE MANAGEMENT ---
let currentPhase = 'M'; 
let completedM = [];    
let completedX = [];    
let activeTest = null;

// Database for Comparison Feature
const referenceMetals = [
    { name: "Nickel", reactivity: 3, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 4 minutes", flame: "Pale green/ bluish green flame" },
    { name: "Copper", reactivity : 2, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 3 minutes", flame: "Bluish green flame" },
    { name: "Silver", reactivity: 1, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 6 minutes", flame: "No Data" },
    { name: "Aluminum", reactivity: 5, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 7 minutes", flame: "White/silvery white flame" },
    { name: "Iron", reactivity: 4, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Red flame" },
    { name: "Magnesium", reactivity: 6, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 1 minute", flame: "Blinding white light" }
];

const referenceNonMetals = [
    { name: "Sulfur", heat: "Melts into a yellow liquid. Turns into red vapor when heated further", solubility: "Sinks to the bottom of the beaker.", solvent: "Does not dissolve in water.", brittle: "Shatters or crumbles into powder.", starch: "Remains the same" },
    { name: "Chlorine", heat: "Pale green gas fills the tube.", solubility: "Creates a pale, acidic bleach-like solution.", solvent: "Dissolves into a light yellow liquid.", brittle: "No Data Available.", starch: "No Data Available." },
    { name: "Bromine", heat: "Deep red-orange vapors fill the tube.", solubility: "Heavy orange-red liquid at the bottom.", solvent: "Orange-brown solution forms.", brittle: "No Data Available.", starch: "No Data Available." },
    { name: "Phosphorus", heat: "Ignites into a bright white light/smoke.", solubility: "Does not dissolve; stays as a waxy solid.", solvent: "Partially dissolves in organic liquids.", brittle: "Shatters or crumbles into powder", starch: "Remains the same" },
    { name: "Iodine", heat: "Deep purple vapors fill the tube.", solubility: "Does not dissolve.", solvent: "Partially dissolves in organic liquids.", brittle: "Shatters or crumbles into powder", starch: "Turns into Blue-Black solution"}
];

const solutionDatabase = [
    {name: "HCl", type: "acid", metal: "H", charge: 1, anion: "Cl", display: "Hydrochloric Acid", color: "colorless"},
    {name: "Ca(NO3)2", type: "ionic", metal: "Ca", charge: 2, anion: "NO3", display: "Calcium Nitrate", color: "colorless"},
    {name: "ZnCl2", type: "ionic", metal: "Zn", charge: 2, anion: "Cl", display: "Zinc Chloride", color: "colorless"},
    {name: "Cu(NO3)2", type: "ionic", metal: "Cu (II)", charge: 2, anion: "NO3", display: "Copper(II) Nitrate", color: "blue"},
    {name: "NiSO4", type: "ionic", metal: "Ni", charge: 2, anion: "SO4", display: "Nickel(II) Sulfate", color: "green"},
    {name: "CoSO4", type: "ionic", metal: "Co", charge: 2, anion: "SO4", display: "Cobalt(II) Sulfate", color: "pink"},
    {name: "FeSO4", type: "ionic", metal: "Fe (II)", charge: 2, anion: "SO4", display: "Iron(II) Sulfate", color: "pale green"},
    {name: "FeCl3", type: "ionic", metal: "Fe (III)", charge: 3, anion: "Cl", display: "Iron(III) Chloride", color: "yellow"},
    {name: "AgNO3", type: "ionic", metal: "Ag", charge: 1, anion: "NO3", display: "Silver Nitrate", color: "colorless"},
    {name: "CrCl3", type: "ionic", metal: "Cr (III)", charge: 3, anion: "Cl", display: "Chromium(III) Chloride", color: "green"},
    {name: "MnCO3", type: "ionic", metal: "Mn (II)", charge: 2, anion: "CO3", display: "Manganese(II) Carbonate", color: "pale pink"},
    {name: "Mg(NO3)2", type: "ionic", metal: "Mg", charge: 2, anion: "NO3", display: "Magnesium Nitrate", color: "colorless"}
];

window.onload = () => {
    if(!sessionStorage.getItem('activeStudent')) window.location.href = 'index.html';
    
    // Set initial modal text
    const modalText = document.querySelector('#mx-modal p');
    if (modalText) {
        modalText.innerHTML = `<strong>Element M</strong> is ${activeM.description} <br><br> <strong>Element X</strong> is ${activeX.description}`;
    }
    
    openModal('mx-modal');
    loadMenu(); 
};

// --- CORE LAB LOGIC ---

function loadMenu() {
    // 1. Exit if in Synthesis
    if (currentPhase === 'Synthesis' || currentPhase === 'P') {
        const workspace = document.getElementById('lab-workspace');
        if (workspace) workspace.classList.add('hidden');
        return;
    }

    const menu = document.getElementById('exp-list') || document.getElementById('experiment-menu');
    if (!menu) return; 

    const experiments = (currentPhase === 'M') ? experimentsM : experimentsX;
    const completed = (currentPhase === 'M') ? completedM : completedX;
    
    document.getElementById('phase-title').innerText = `Phase: Identify Unknown ${currentPhase}`;
    document.getElementById('exp-count').innerText = `${completed.length} / 3`;

    let menuHTML = experiments.map(exp => {
        const isDone = completed.find(c => c.id === exp.id);
        const limitReached = completed.length >= 3;
        const isDisabled = limitReached && !isDone;

        return `
            <button 
                onclick="${isDisabled ? '' : `startTest('${exp.id}')`}" 
                ${isDisabled ? 'disabled' : ''} 
                class="w-full text-left p-4 rounded-xl border transition-all flex justify-between items-center mb-2
                ${isDone 
                    ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' 
                    : isDisabled 
                        ? 'opacity-30 bg-gray-900 border-gray-800 cursor-not-allowed text-gray-600' 
                        : 'hover:bg-gray-700 bg-gray-800 border-gray-700 text-white shadow-sm'}">
                <span class="font-medium text-[11px] tracking-widest">${exp.name}</span>
                <div class="flex items-center gap-2">
                    ${isDone ? '<span>✅</span>' : ''}
                    ${isDisabled ? '<span class="text-[8px] bg-black/40 px-2 py-1 rounded">LOCKED</span>' : '<span class="text-blue-500">→</span>'}
                </div>
            </button>`;
    }).join('');

    if (completed.length >= 3) {
        const nextLabel = (currentPhase === 'M') ? "Proceed to Non-Metal X" : "Begin Synthesis Phase";
        
        menuHTML += `
            <div class="mt-8 pt-6 border-t border-gray-800">
                <button onclick="checkPhaseTransition()" 
                    class="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl shadow-lg transition-all uppercase tracking-widest text-xs">
                    ${nextLabel}
                </button>
                <p class="text-[9px] text-center text-gray-500 mt-3 uppercase font-bold tracking-widest">
                    Phase ${currentPhase} Complete
                </p>
            </div>
        `;
    }

    menu.innerHTML = menuHTML;
}

function startTest(testId) {
    const completed = (currentPhase === 'M') ? completedM : completedX;
    
    if (completed.length >= 3 && !completed.find(c => c.id === testId)) {
        // Optional: you can add a toast notification or alert here
        console.log("Test limit reached for this phase.");
        return; 
    }

    activeTest = testId;
    
    document.getElementById('station-empty').classList.add('hidden');
    document.getElementById('station-active').classList.add('hidden');
    document.getElementById('station-setup').classList.remove('hidden');
    
    const expList = (currentPhase === 'M') ? experimentsM : experimentsX;
    const exp = expList.find(e => e.id === testId);
    
    if (exp) {
        document.getElementById('setup-test-name').innerText = "Setup: " + exp.name;
    }

    let currentRefList;
    if (activeTest === "activity") {
        currentRefList = solutionDatabase; // Use chemical solutions for activity series
    } else {
        currentRefList = (currentPhase === 'M') ? referenceMetals : referenceNonMetals;
    }

    const dropdowns = ['ref-1', 'ref-2', 'ref-3'];
    dropdowns.forEach(id => {
        const select = document.getElementById(id);
        if (select) {
            select.innerHTML = currentRefList.map(item => {
                // Use .display for solutions (HCl, etc), otherwise use .name (Nickel, etc)
                const label = (activeTest === "activity") ? item.display : item.name;
                return `<option value="${item.name}">${label}</option>`;
            }).join('');
        }
    });
}

function getSolutionData(solutionName) {
    return solutionDatabase.find(sol => sol.name === solutionName);
}

function convertMetalName(name) {
    const map = {
        "Magnesium": "Mg",
        "Nickel": "Ni",
        "Silver": "Ag",
        "Aluminum": "Al",
        "IronTwo": "Fe (II)",
        "IronThree": "Fe (III)",
        "CopperTwo": "Cu (II)",
        "CopperThree": "Cu (I)", // Assuming this is Copper (I)
        "Iron": "Fe (II)",      // Added for reference list compatibility
        "Copper": "Cu (II)"     // Added for reference list compatibility
    };
    return map[name] || name;
}

function getReaction(metal, solutionName) {
    const solution = getSolutionData(solutionName);
    if (!solution) return "Solution not found.";
    return reactionMatrix[metal]?.[solution.name] || "No reaction observed";
}

function runComparisonTest() {
    // 1. Standard Setup
    document.getElementById('station-setup').classList.add('hidden');
    document.getElementById('station-active').classList.remove('hidden');
    
    const exp = (currentPhase === 'M') ? experimentsM.find(e => e.id === activeTest) : experimentsX.find(e => e.id === activeTest);
    const zone = document.getElementById('comparison-zone');
    
    // 2. Calculate Result
    let userResult = exp.static || (currentPhase === 'M' ? activeM[activeTest] : activeX[activeTest]);
    if (activeTest === "activity") userResult = "Results of activity test";

    // 3. Build the Results HTML
    let html = `
        <div class="p-4 bg-blue-900/30 border border-blue-500 rounded-xl md:col-span-2 text-center shadow-lg mb-4">
            <p class="text-[10px] text-blue-400 uppercase font-black tracking-widest">Unknown Sample ${currentPhase}</p>
            <p class="text-xl text-white font-bold">${userResult || "Testing..."}</p>
        </div>`;

    const selections = [
        document.getElementById('ref-1').value,
        document.getElementById('ref-2').value,
        document.getElementById('ref-3').value
    ];

    let currentRefList = (activeTest === "activity") ? solutionDatabase : ((currentPhase === 'M') ? referenceMetals : referenceNonMetals);

    selections.forEach(name => {
        const refObj = currentRefList.find(r => r.name === name);
        if (!refObj) return;

        let refResult;
        if (activeTest === "activity") {
            refResult = getReaction(convertMetalName(activeM.name), name);
        } else {
            refResult = exp.static || refObj[activeTest] || "No comparative data";
        }
        
        const displayLabel = activeTest === "activity" ? refObj.display : refObj.name;
        html += `
            <div class="p-4 bg-gray-800 border border-gray-700 rounded-xl">
                <p class="text-[10px] text-gray-500 uppercase font-black tracking-widest">${displayLabel}</p>
                <p class="text-gray-300 text-sm">${refResult}</p>
            </div>`;
    });

    zone.innerHTML = html;

    // 4. Log the data and refresh the menu
    const completed = (currentPhase === 'M') ? completedM : completedX;
    
    if (!completed.find(c => c.id === activeTest)) {
        const referenceCards = Array.from(document.querySelectorAll('#comparison-zone div.p-4.bg-gray-800'));
        const comparisonData = referenceCards.map(card => ({
            label: card.querySelector('p.text-\\[10px\\]').innerText,
            value: card.querySelector('p.text-gray-300').innerText
        }));

        const logEntry = { 
            name: exp.name, 
            result: userResult, 
            id: exp.id,
            comparisons: comparisonData 
        };
        
        if (currentPhase === 'M') {
            completedM.push(logEntry);
        } else {
            completedX.push(logEntry);
        }
        loadMenu(); 
    }
}

function showPhaseCompleteButton() {
    const zone = document.getElementById('comparison-zone');
    // Add a big "Proceed" button at the bottom of the results
    zone.innerHTML += `
        <div class="mt-8 flex justify-center w-full md:col-span-2 border-t border-gray-800 pt-6">
            <button onclick="checkPhaseTransition()" class="px-12 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-full shadow-2xl transition-all animate-bounce uppercase tracking-widest">
                All Tests Complete - Proceed
            </button>
        </div>
    `;
}

function checkPhaseTransition() {
    if (currentPhase === 'M') {
        currentPhase = 'X';
        activeTest = null;
        
        // Reset UI for Phase X
        const setup = document.getElementById('station-setup');
        const active = document.getElementById('station-active');
        const empty = document.getElementById('station-empty');
        
        if (setup) setup.classList.add('hidden');
        if (active) active.classList.add('hidden');
        if (empty) empty.classList.remove('hidden');
        
        loadMenu(); 
    } else if (currentPhase === 'X') {
        // Transition to Synthesis
        currentPhase = 'Synthesis';
        
        // 1. Hide the Phase 1/2 identification layout
        const labWorkspace = document.getElementById('lab-workspace');
        if (labWorkspace) labWorkspace.classList.add('hidden');
        
        // 2. Prepare the Phase 3 workspace
        const phase3 = document.getElementById('phase-3-workspace');
        if (phase3) {
            phase3.classList.remove('hidden');
            // Call the function that builds the Molar Mass UI
            runMolarMassPhase();
        } else {
            // Fallback: If you haven't added the phase-3-workspace div yet, 
            // we jump straight to the Summary
            showCER();
        }
    }
}

let phase3Attempts = []; 

function runMolarMassPhase() {
    currentPhase = 'P';
    const phaseTitle = document.getElementById('phase-title');
    if(phaseTitle) {
        phaseTitle.innerText = "Phase 3: Molar Mass Analysis";
        phaseTitle.className = "text-2xl font-bold text-purple-400";
    }

    const expCountContainer = document.getElementById('exp-count')?.parentElement;
    if (expCountContainer) expCountContainer.style.display = 'none';
    
    const sidebar = document.getElementById('experiment-menu')?.parentElement;
    if (sidebar) sidebar.remove();
    
    const oldLogBtn = document.querySelector('#station-active button');
    if (oldLogBtn) oldLogBtn.style.display = 'none'; 

    const workspace = document.getElementById('lab-workspace');
    if (workspace) workspace.className = "max-w-4xl mx-auto block";

    const zone = document.getElementById('comparison-zone');
    zone.className = "w-full space-y-8";

    zone.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="p-4 bg-gray-800 border border-blue-500/30 rounded-2xl">
            <label class="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Grams of Metal (M)</label>
            <input type="number" id="input-m" placeholder="0.00" oninput="syncMasses()" class="w-full bg-gray-900 border border-gray-700 p-3 rounded-xl text-white mt-2 text-xl outline-none focus:border-blue-500 transition-colors">
            </div>

            <div class="p-4 bg-gray-900/50 border border-gray-800 rounded-2xl opacity-80">
            <label class="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">Grams of Non-Metal (X)</label>
            <input type="number" id="input-x" placeholder="0.00" readonly class="w-full bg-transparent p-3 rounded-xl text-emerald-500/70 mt-2 text-xl outline-none cursor-not-allowed">
            </div>
            
            <div class="p-4 bg-gray-800 border border-purple-500/30 rounded-2xl flex flex-col justify-center text-center">
                <label class="text-purple-400 text-[10px] font-bold uppercase tracking-widest">Yield of MX</label>
                <p id="inline-yield-display" class="text-2xl font-black text-white mt-2">0.00</p>
            </div>
            <div class="p-4 bg-gray-800 border border-red-500/30 rounded-2xl flex flex-col justify-center text-center">
                <label class="text-red-400 text-[10px] font-bold uppercase tracking-widest">Excess Leftover</label>
                <p id="inline-excess-display" class="text-xl font-bold text-gray-500 mt-2">0.00g</p>
            </div>
        </div>

        <div class="flex justify-center mt-4">
            <button onclick="synthesizeCompound()" class="px-12 py-4 bg-purple-600 rounded-xl font-black text-white hover:bg-purple-500 transition-all shadow-lg uppercase tracking-widest">
                Save Calculations
            </button>
        </div>

        <div id="p3-data-table" class="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
            <table class="w-full text-left border-collapse">
                <thead class="bg-gray-800/30 text-[10px] text-gray-500 uppercase font-bold">
                    <tr>
                        <th class="p-4">Trial</th>
                        <th class="p-4 text-blue-300">Reactants Used</th>
                        <th class="p-4">Yield</th>
                        <th class="p-4">Excess Leftover</th>
                        <th class="p-4">Appearance</th>
                        <th class="p-4">Solubility</th>
                    </tr>
                </thead>
                <tbody id="p3-log-body" class="text-gray-300 divide-y divide-gray-800">
                    <tr><td colspan="6" class="p-8 text-center text-gray-600 italic">No calculations logged yet...</td></tr>
                </tbody>
            </table>
        </div>

        <div id="p3-nav-container" class="mt-8 flex justify-center">
            <button id="p3-proceed-btn" disabled 
                class="px-12 py-4 rounded-xl font-black uppercase tracking-widest transition-all opacity-30 cursor-not-allowed bg-gray-700 text-gray-400">
                Proceed to CER
            </button>
        </div>
    `;
}

function syncMasses() {
    const mInput = document.getElementById('input-m');
    const xInput = document.getElementById('input-x');
    
    if (mInput && xInput) {
        xInput.value = mInput.value;
    }
        updateYieldInline();
}

function updateYieldInline() {
    const mVal = parseFloat(document.getElementById('input-m').value) || 0;
    const xVal = parseFloat(document.getElementById('input-x').value) || 0;
    const display = document.getElementById('inline-yield-display');
    const excessDisplay = document.getElementById('inline-excess-display');

    if (mVal <= 0 || xVal <= 0) {
        if(display) display.innerText = "0.00";
        if(excessDisplay) excessDisplay.innerHTML = "0.00g";
        return;
    }

    // 1. Map Charges for subscripts
    const metalCharges = {
        "Nickel": 2, "CopperOne": 1, "CopperTwo": 2, "Silver": 1, 
        "Aluminum": 3, "IronTwo": 2, "IronThree": 3, "Magnesium": 2
    };
    const nonmetalCharges = {
        "Chlorine": 1, "Bromine": 1, "Sulfur": 2, "Phosphorus": 3
    };

    const mCharge = metalCharges[activeM.name] || 2;
    const xCharge = nonmetalCharges[activeX.name] || 1;

    // 2. Cross charges for subscripts (Formula: MaXb)
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const div = gcd(mCharge, xCharge);
    const mSub = xCharge / div; 
    const xSub = mCharge / div; 

    // 3. Calculate how many grams of X are needed for 1 gram of M
    // Ratio = (Mass of X in formula) / (Mass of M in formula)
    const ratioXtoM = (xSub * activeX.mass) / (mSub * activeM.mass);

    // 4. Determine Limiting Reactant
    let reactedM, reactedX, excessMass, excessType;

    if (xVal >= mVal * ratioXtoM) {
        // Metal (M) is limiting
        reactedM = mVal;
        reactedX = mVal * ratioXtoM;
        excessMass = xVal - reactedX;
        excessType = "X";
    } else {
        // Non-Metal (X) is limiting
        reactedX = xVal;
        reactedM = xVal / ratioXtoM;
        excessMass = mVal - reactedM;
        excessType = "M";
    }

    const totalYield = reactedM + reactedX;

    // 5. Update UI
    // The Yield + Excess will now always equal the total mass added
    if(display) display.innerText = totalYield.toFixed(2);
    
    if(excessDisplay) {
        if (excessMass > 0.01) {
            const color = excessType === "M" ? "text-blue-400" : "text-emerald-400";
            excessDisplay.innerHTML = `<span class="${color}">${excessMass.toFixed(2)}g ${excessType}</span>`;
        } else {
            excessDisplay.innerHTML = `<span class="text-gray-500">None</span>`;
        }
    }
}

// Keep this to ensure the 1:1 input as requested
function syncMasses() {
    const mInput = document.getElementById('input-m');
    const xInput = document.getElementById('input-x');
    if (mInput && xInput) {
        xInput.value = mInput.value;
    }
    updateYieldInline();
}

function synthesizeCompound() {
    const mInput = document.getElementById('input-m');
    const xInput = document.getElementById('input-x');
    const yieldDisplay = document.getElementById('inline-yield-display');
    const excessDisplay = document.getElementById('inline-excess-display');
    
    const mVal = parseFloat(mInput.value) || 0;
    const xVal = parseFloat(xInput.value) || 0;
    const totalProduced = yieldDisplay ? yieldDisplay.innerText : "0.00";
    const excessLeftover = excessDisplay ? excessDisplay.innerText : "0.00g";

    if (mVal <= 0 || xVal <= 0) return alert("Please enter masses for both elements.");

    const lookupKey = activeM.name + activeX.name; 
    const info = compoundDatabase[lookupKey];

    if (!info) return alert("Error: Compound data not found in database.");

    phase3Attempts.push({
        combo: `${mVal}g M + ${xVal}g X`,
        rawTotal: totalProduced,
        excess: excessLeftover,
        appearance: info.appearance, 
        solubility: info.solubility   
    });

    const logBody = document.getElementById('p3-log-body');
    if (logBody) {
        logBody.innerHTML = phase3Attempts.map((att, index) => `
            <tr class="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                <td class="p-4 font-bold text-purple-400">#${index + 1}</td>
                <td class="p-4 text-blue-300 font-mono text-sm">${att.combo}</td>
                <td class="p-4 text-white font-mono">${att.rawTotal} g</td>
                <td class="p-4 text-red-400 font-mono">${att.excess}</td>
                <td class="p-4 text-gray-400 text-xs">${att.appearance}</td>
                <td class="p-4 text-gray-400 text-xs">${att.solubility}</td>
            </tr>
        `).join('');
    }

    const proceedBtn = document.getElementById('p3-proceed-btn');
    if (proceedBtn) {
        proceedBtn.disabled = false;
        proceedBtn.classList.remove('opacity-30', 'cursor-not-allowed', 'bg-gray-700', 'text-gray-400');
        proceedBtn.classList.add('bg-emerald-600', 'hover:bg-emerald-500', 'text-white', 'opacity-100');
        proceedBtn.onclick = showCER; 
    }

    mInput.value = ""; xInput.value = ""; 
    if(yieldDisplay) yieldDisplay.innerText = "0.00";
    if(excessDisplay) excessDisplay.innerHTML = "<span class='text-gray-500'>0.00g</span>";
}

function showCER() {
    // Target the main header (Title + Counter)
    const mainHeader = document.querySelector('div.max-w-6xl.mx-auto.flex.justify-between.items-center.mb-8');
    if (mainHeader) {
        mainHeader.style.display = 'none';
    }

    // Target the sidebar menu (if it's still taking up space)
    const sidebar = document.querySelector('aside') || document.querySelector('.w-1\\/3');
    if (sidebar) {
        sidebar.style.display = 'none';
    }

    // Target the lab workspace (Identification Phases)
    const labWorkspace = document.getElementById('lab-workspace');
    if (labWorkspace) {
        labWorkspace.style.display = 'none';
        labWorkspace.classList.add('hidden');
    }

    // Target the Synthesis Phase workspace
    const phase3 = document.getElementById('phase-3-workspace');
    if (phase3) {
        phase3.style.display = 'none';
        phase3.classList.add('hidden');
    }

    // 2. RESET PAGE ALIGNMENT
    // We remove centering so the summary starts at the absolute top of the page
    document.body.classList.remove('flex', 'items-center', 'justify-center', 'min-h-screen');
    document.body.classList.add('block', 'pt-4'); 
    
    // Force scroll to top in case they were scrolled down in Phase 3
    window.scrollTo(0, 0);

    // 3. SETUP CER CONTAINER
    const cerScreen = document.getElementById('cer-screen');
    if (cerScreen) {
        cerScreen.classList.remove('hidden');
        cerScreen.style.display = 'block';
        cerScreen.className = "max-w-6xl mx-auto block mt-0 pt-0";
    }

    const log = document.getElementById('summary-log');
    if (!log) return;
    
    log.className = "w-full space-y-10 mt-0"; 
    
    // 4. RENDER HTML (Maintaining your exact style)
    log.innerHTML = `
        <div class="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            
            <div class="bg-gray-800 p-8 rounded-3xl border border-gray-700 shadow-2xl mb-12 text-center">
                <h2 class="text-3xl font-black text-sky-400 uppercase tracking-tighter">Phase 4: Final Evidence Log</h2>
            </div>

            <section class="mb-12">
                <div class="flex items-center gap-4 mb-6">
                    <h4 class="text-blue-400 font-bold uppercase text-[10px] tracking-[0.3em] px-3 border-l-4 border-blue-600">Metal M: Identification Data</h4>
                    <div class="h-[1px] flex-grow bg-gradient-to-r from-blue-600/50 to-transparent"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${completedM.map(e => `
                        <div class="p-6 bg-gray-900/50 border border-gray-800 rounded-3xl shadow-xl hover:border-blue-500/30 transition-colors">
                            <b class="text-blue-400 block mb-3 uppercase text-[10px] tracking-widest">${e.name}</b>
                            <div class="bg-black/60 p-3 rounded-xl border border-blue-500/20 mb-4">
                                <p class="text-[9px] text-gray-500 uppercase font-black mb-1">Result</p>
                                <p class="text-sm font-bold text-white tracking-tight">${e.result}</p>
                            </div>
                            <div class="space-y-1.5">
                                <p class="text-[9px] text-gray-600 uppercase font-bold mb-2">Reference Comparisons</p>
                                ${e.comparisons ? e.comparisons.map(c => `
                                    <div class="flex justify-between text-[11px] py-1.5 border-b border-gray-800/50">
                                        <span class="text-gray-500">${c.label}:</span>
                                        <span class="text-gray-300 font-semibold">${c.value}</span>
                                    </div>
                                `).join('') : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="mb-12">
                <div class="flex items-center gap-4 mb-6">
                    <h4 class="text-emerald-400 font-bold uppercase text-[10px] tracking-[0.3em] px-3 border-l-4 border-emerald-600">Non-Metal X: Identification Data</h4>
                    <div class="h-[1px] flex-grow bg-gradient-to-r from-emerald-600/50 to-transparent"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${completedX.map(e => `
                        <div class="p-6 bg-gray-900/50 border border-gray-800 rounded-3xl shadow-xl hover:border-emerald-500/30 transition-colors">
                            <b class="text-emerald-400 block mb-3 uppercase text-[10px] tracking-widest">${e.name}</b>
                            <div class="bg-black/60 p-3 rounded-xl border border-emerald-500/20 mb-4">
                                <p class="text-[9px] text-gray-500 uppercase font-black mb-1">Result</p>
                                <p class="text-sm font-bold text-white tracking-tight">${e.result}</p>
                            </div>
                            <div class="space-y-1.5">
                                <p class="text-[9px] text-gray-600 uppercase font-bold mb-2">Reference Comparisons</p>
                                ${e.comparisons ? e.comparisons.map(c => `
                                    <div class="flex justify-between text-[11px] py-1.5 border-b border-gray-800/50">
                                        <span class="text-gray-500">${c.label}:</span>
                                        <span class="text-gray-300 font-semibold">${c.value}</span>
                                    </div>
                                `).join('') : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="mb-16">
                <div class="flex items-center gap-4 mb-6">
                    <h4 class="text-purple-400 font-bold uppercase text-[10px] tracking-[0.3em] px-3 border-l-4 border-purple-600">MX Synthesis Results</h4>
                    <div class="h-[1px] flex-grow bg-gradient-to-r from-purple-600/50 to-transparent"></div>
                </div>
                <div class="space-y-4">
                    ${phase3Attempts.map(attempt => `
                        <div class="p-5 bg-gray-900/80 border border-purple-500/20 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
                            <div>
                                <p class="text-[9px] text-gray-500 uppercase font-black">Combination</p>
                                <p class="text-sm font-black text-blue-400">${attempt.combo}</p>
                            </div>
                            <div>
                                <p class="text-[9px] text-gray-500 uppercase font-black">Mass Yield</p>
                                <p class="text-sm font-bold text-white">${attempt.rawTotal} g</p>
                            </div>
                            <div>
                                <p class="text-[9px] text-gray-500 uppercase font-black">Excess</p>
                                <p class="text-sm font-bold text-emerald-400">${attempt.excess} g</p>
                            </div>
                            <div class="flex-grow">
                                <p class="text-[9px] text-gray-500 uppercase font-black">Observations</p>
                                <p class="text-[11px] text-gray-400 italic">"${attempt.appearance}"</p>
                            </div>
                            <div class="text-right">
                                <p class="text-[9px] text-gray-500 uppercase font-black">Solubility</p>
                                <p class="text-xs text-gray-300 font-bold">${attempt.solubility}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <div class="p-12 bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-[3rem] text-center shadow-inner mb-20">
                <h3 class="text-2xl font-black text-white uppercase tracking-tighter mb-4 italic">All Experiments Finished!</h3>
                <p class="text-gray-500 max-w-md mx-auto text-sm mb-10 leading-relaxed">
                    You finished all experiments! Make sure to take a screenshot before submitting and move onto the CER on Schoology. Remember that all of your data disappears if you submit!
                </p>
                <button onclick="finalizeLab()" class="px-20 py-5 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-2xl transition-all uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(2,132,199,0.3)] hover:scale-105 active:scale-95">
                    Submit Lab Data
                </button>
            </div>
        </div>`;
}

// --- SYSTEM UTILITIES ---

function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

function closeWarning() {
    const modal = document.getElementById('warning-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
}

async function finalizeLab() {
    const student = JSON.parse(sessionStorage.getItem('activeStudent'));
    // Removed the check for "assumption" textbox since we removed it from HTML
    
    const entry = {
        fName: student?.fName || "Unknown", 
        lName: student?.lName || "Student", 
        period: student?.period || "N/A",
        actualIdentityM: activeM.name, 
        actualIdentityX: activeX.name, 
        mExps: completedM.map(e => e.id), 
        xExps: completedX.map(e => e.id),
        assumption: "See Physical Lab Notebook" // Default text
    };
    
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzKHQd1vrdU7taJzdUtm2AwQB4fGVqg8DY9TPjPCf_h40gtvgukOuKj0xoIlfDweLaNPQ/exec';

    try {
        const btn = document.querySelector('button[onclick="finalizeLab()"]');
        if (btn) {
            btn.innerText = "Submitting...";
            btn.disabled = true;
        }

        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(entry)
        });

        alert("Lab Submitted Successfully!");
        window.location.href = 'index.html';
    } catch (error) {
        console.error(error);
        alert("Submission failed.");
        const btn = document.querySelector('button[onclick="finalizeLab()"]');
        if (btn) {
            btn.innerText = "Submit Experiment Results";
            btn.disabled = false;
        }
    }
}
