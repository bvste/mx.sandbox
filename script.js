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
    { name: "Sulfur", description: "a distinctively bright lemon-yellow, pale yellow, or greenish-yellow solid.", heat: "Melts into a yellow liquid. Turns into red vapor when heated further", solubility: "Sinks to the bottom of the beaker.", solvent: "Does not dissolve in water.", brittle: "Shatters or crumbles into powder", mass: 32.07},
    { name: "Chlorine", description: "a dense, yellow-green gas.", heat: "Pale green gas fills the tube.", solubility: "Creates a pale, acidic bleach-like solution.", solvent: "Dissolves into a light yellow liquid.", brittle: "No Data Available", mass: 70.91},
    { name: "Bromine", description: "a reddish-brown liquid.", heat: "Deep red-orange vapors fill the tube.", solubility: "Heavy orange-red liquid at the bottom.", solvent: "Orange-brown solution forms.", brittle: "No Data Available", mass: 159.81},
    { name: "Phosphorus", description: "a white solid.", heat: "Ignites into a bright white light/smoke.", solubility: "Does not dissolve; stays as a waxy solid.", solvent: "Partially dissolves in organic liquids.", brittle: "Shatters or crumbles into powder", mass: 30.97}
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
    { id: 'startch', name: "Starch Test", static: "The mixture remains brownish-yellow."},
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
        "Cu(NO3)2": "Silver crystals form"
        "Cu(NO3)": "Silver crystals form"
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
    { name: "Sulfur", heat: "Melts into a yellow liquid. Turns into red vapor when heated further", solubility: "Sinks to the bottom of the beaker.", solvent: "Does not dissolve in water.", brittle: "Shatters or crumbles into powder." },
    { name: "Chlorine", heat: "Pale green gas fills the tube.", solubility: "Creates a pale, acidic bleach-like solution.", solvent: "Dissolves into a light yellow liquid.", brittle: "No Data Available." },
    { name: "Bromine", heat: "Deep red-orange vapors fill the tube.", solubility: "Heavy orange-red liquid at the bottom.", solvent: "Orange-brown solution forms.", brittle: "No Data Available." },
    { name: "Phosphorus", heat: "Ignites into a bright white light/smoke.", solubility: "Does not dissolve; stays as a waxy solid.", solvent: "Partially dissolves in organic liquids.", brittle: "Shatters or crumbles into powder" }
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
    // 1. Check if we are in Synthesis Phase; if so, stop loading ID tests
    if (currentPhase === 'Synthesis' || currentPhase === 'P') {
        const sidebar = document.getElementById('experiment-menu')?.parentElement;
        if (sidebar) sidebar.classList.add('hidden');
        return;
    }

    // 2. Try to find the menu container (Checking both possible IDs)
    const menu = document.getElementById('exp-list') || document.getElementById('experiment-menu');
    if (!menu) return; // Exit if the HTML element is missing

    const title = document.getElementById('phase-title');
    const countDisplay = document.getElementById('exp-count');
    
    // 3. Select correct data based on phase
    const experiments = (currentPhase === 'M') ? experimentsM : experimentsX;
    const completed = (currentPhase === 'M') ? completedM : completedX;
    
    // 4. Update UI Headers
    if (title) title.innerText = `Phase: Identify Unknown ${currentPhase}`;
    if (countDisplay) countDisplay.innerText = `${completed.length} / 3`;

    // 5. Build the list
    menu.innerHTML = experiments.map(exp => {
        const isDone = completed.find(c => c.id === exp.id);
        const limitReached = completed.length >= 3;
        
        // Disable if 3 tests are done AND this isn't one of them
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
                
                <span class="font-medium uppercase text-[10px] tracking-widest">${exp.name}</span>
                
                <div class="flex items-center gap-2">
                    ${isDone ? '<span>✅</span>' : ''}
                    ${isDisabled ? '<span class="text-[8px] bg-black/40 px-2 py-1 rounded">LOCKED</span>' : '<span class="text-blue-500">→</span>'}
                </div>
            </button>`;
    }).join('');
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

    // Add Comparison References
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

    setTimeout(() => {
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
                comparisons: comparisonData // <--- New field
            };
            
            if (currentPhase === 'M') {
                completedM.push(logEntry);
                document.getElementById('exp-count').innerText = `${completedM.length} / 3`;
            } else {
                completedX.push(logEntry);
                document.getElementById('exp-count').innerText = `${completedX.length} / 3`;
            }
    
            loadMenu();
    
            if (completed.length === 3) {
                const proceedWrapper = document.createElement('div');
                proceedWrapper.className = "mt-8 flex justify-center w-full md:col-span-2 border-t border-gray-800 pt-6";
                proceedWrapper.innerHTML = `
                    <button onclick="checkPhaseTransition()" class="px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-full shadow-2xl transition-all uppercase tracking-widest">
                        All Tests Recorded - Proceed
                    </button>
                `;
                zone.appendChild(proceedWrapper);
            }
        }
    }, 100); 
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
    if (currentPhase === 'M' && completedM.length === 3) {
        alert("Phase 1 Complete! Transitioning to Element X.");
        currentPhase = 'X';
        document.getElementById('phase-title').innerText = "Phase 2: Testing Unknown X";
        document.getElementById('phase-title').className = "text-2xl font-bold text-emerald-400";
        document.getElementById('exp-count').innerText = "0 / 3";
        loadMenu(); 
    } 
    else if (currentPhase === 'X' && completedX.length === 3) {
        alert("Phase 2 Complete! Beginning Molecular Mass Analysis...");
        
        document.getElementById('station-empty').classList.add('hidden');
        document.getElementById('station-setup').classList.add('hidden');
        document.getElementById('station-active').classList.remove('hidden');

        runMolarMassPhase(); 
        return;
    }
    
    activeTest = null;
    document.getElementById('station-empty').classList.remove('hidden');
    document.getElementById('station-active').classList.add('hidden');
    document.getElementById('station-setup').classList.add('hidden');
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

    // 4-column layout for M, X, Yield, and Excess
    zone.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="p-4 bg-gray-800 border border-blue-500/30 rounded-2xl">
                <label class="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Grams of Metal (M)</label>
                <input type="number" id="input-m" placeholder="0.00" oninput="updateYieldInline()" class="w-full bg-gray-900 border border-gray-700 p-3 rounded-xl text-white mt-2 text-xl outline-none">
            </div>
            <div class="p-4 bg-gray-800 border border-emerald-500/30 rounded-2xl">
                <label class="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">Grams of Non-Metal (X)</label>
                <input type="number" id="input-x" placeholder="0.00" oninput="updateYieldInline()" class="w-full bg-gray-900 border border-gray-700 p-3 rounded-xl text-white mt-2 text-xl outline-none">
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

function updateYieldInline() {
    const mVal = parseFloat(document.getElementById('input-m').value) || 0;
    const xVal = parseFloat(document.getElementById('input-x').value) || 0;
    const display = document.getElementById('inline-yield-display');
    const excessDisplay = document.getElementById('inline-excess-display');

    if (mVal <= 0 || xVal <= 0) {
        if(display) display.innerText = "0.00";
        if(excessDisplay) excessDisplay.innerHTML = "<span class='text-gray-500'>0.00g</span>";
        return;
    }

    // 1. Oxidation states to determine empirical formula
    const metalCharges = {
        "Nickel": 2, "CopperOne": 1, "CopperTwo": 2, "Silver": 1, 
        "Aluminum": 3, "IronTwo": 2, "IronThree": 3, "Magnesium": 2
    };
    const nonmetalCharges = {
        "Chlorine": 1, "Bromine": 1, "Sulfur": 2, "Phosphorus": 3
    };

    const mCharge = metalCharges[activeM.name];
    const xCharge = nonmetalCharges[activeX.name];

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const divisor = gcd(mCharge, xCharge);
    
    const mCount = xCharge / divisor; 
    const xCount = mCharge / divisor; 

    // 2. Calculate true mass fractions dynamically
    const trueMassM = mCount * activeM.mass;
    const trueMassX = xCount * activeX.mass;
    const trueMolarMass = trueMassM + trueMassX;

    const fractionM = trueMassM / trueMolarMass;
    const fractionX = trueMassX / trueMolarMass;

    // 3. Limiting Reactant Logic
    const yieldFromM = mVal / fractionM;
    const yieldFromX = xVal / fractionX;
    const actualYield = Math.min(yieldFromM, yieldFromX);

    if(display) display.innerText = actualYield.toFixed(2);

    // 4. Excess Reactant Logic
    if(excessDisplay) {
        const massMUsed = actualYield * fractionM;
        const massXUsed = actualYield * fractionX;

        const excessM = mVal - massMUsed;
        const excessX = xVal - massXUsed;

        if (excessM > 0.01) {
            excessDisplay.innerHTML = `<span class="text-blue-400">${excessM.toFixed(2)}g M</span>`;
        } else if (excessX > 0.01) {
            excessDisplay.innerHTML = `<span class="text-emerald-400">${excessX.toFixed(2)}g X</span>`;
        } else {
            excessDisplay.innerHTML = `<span class="text-gray-500">None</span>`;
        }
    }
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
    // 1. Header Cleanup (Phase 4 + New Color)
    const phaseTitle = document.getElementById('phase-title');
    if (phaseTitle) {
        phaseTitle.innerText = "Phase 4: Final CER Report";
        phaseTitle.className = "text-2xl font-bold text-sky-400"; 
    }

    // 2. Hide Counter and Workspace
    const counter = document.getElementById('exp-count');
    if (counter?.parentElement) counter.parentElement.style.display = 'none';
    document.getElementById('lab-workspace').classList.add('hidden');
    document.getElementById('cer-screen').classList.remove('hidden');

    // 3. Render Logs with Physical Properties
    const log = document.getElementById('summary-log');
    log.className = "w-full space-y-8 mt-8"; 
    
    log.innerHTML = `
        <div class="w-full">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div class="lg:col-span-3 space-y-4">
                    <h4 class="text-blue-400 font-bold uppercase text-xs tracking-widest px-1">Metal M Evidence</h4>
                    ${completedM.map(e => `
                        <div class="p-4 bg-gray-900 border-l-4 border-blue-500 rounded-xl shadow-md text-sm text-gray-300">
                            <b class="text-blue-400 block mb-1 uppercase text-[10px] tracking-tight">${e.name}</b>
                            <p class="font-bold text-white mb-2 underline decoration-blue-500/30">Unknown: ${e.result}</p>
                            
                            <div class="space-y-2 mt-2 border-t border-gray-800 pt-2">
                                ${e.comparisons && e.comparisons.length > 0 ? e.comparisons.map(c => `
                                    <div class="flex justify-between text-[11px]">
                                        <span class="text-gray-500 font-bold">${c.label}:</span>
                                        <span class="text-gray-400 text-right">${c.value}</span>
                                    </div>
                                `).join('') : '<p class="text-[10px] text-gray-600 italic">No comparison data recorded.</p>'}
                            </div>
                        </div>
                    `).join('')}
                </div>
    
                <div class="lg:col-span-3 space-y-4">
                    <h4 class="text-emerald-400 font-bold uppercase text-xs tracking-widest px-1">Non-Metal X Evidence</h4>
                    ${completedX.map(e => `
                        <div class="p-4 bg-gray-900 border-l-4 border-emerald-500 rounded-xl shadow-md text-sm text-gray-300">
                            <b class="text-emerald-400 block mb-1 uppercase text-[10px] tracking-tight">${e.name}</b>
                            <p class="font-bold text-white mb-2 underline decoration-emerald-500/30">Unknown: ${e.result}</p>
                            
                            <div class="space-y-2 mt-2 border-t border-gray-800 pt-2">
                                ${e.comparisons && e.comparisons.length > 0 ? e.comparisons.map(c => `
                                    <div class="flex justify-between text-[11px]">
                                        <span class="text-gray-500 font-bold">${c.label}:</span>
                                        <span class="text-gray-400 text-right">${c.value}</span>
                                    </div>
                                `).join('') : '<p class="text-[10px] text-gray-600 italic">No comparison data recorded.</p>'}
                            </div>
                        </div>
                    `).join('')}
                </div>
    
                <div class="lg:col-span-6">
                    <h4 class="text-purple-400 font-bold mb-4 text-center uppercase text-xs tracking-widest">Synthesis & Physical Properties of MX</h4>
                    <div class="space-y-4">
                        ${phase3Attempts.map(attempt => `
                            <div class="p-6 bg-gray-900 border-l-4 border-purple-500 rounded-xl shadow-xl">
                                <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                                    <div>
                                        <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">Reactants Used</p>
                                        <p class="text-sm font-black text-blue-400">${attempt.combo}</p>
                                    </div>
                                    <div>
                                        <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">Measured Yield</p>
                                        <p class="text-sm font-black text-white">${attempt.rawTotal} g</p>
                                    </div>
                                    <div>
                                        <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">Excess Reactant</p>
                                        <p class="text-sm font-black text-red-400">${attempt.excess} g</p>
                                    </div>
                                    <div>
                                        <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">Appearance</p>
                                        <p class="text-xs text-gray-300 leading-tight">${attempt.appearance}</p>
                                    </div>
                                    <div>
                                        <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">Solubility</p>
                                        <p class="text-xs text-gray-300 leading-tight">${attempt.solubility}</p>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>`;
}

// --- SYSTEM UTILITIES ---

function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

async function finalizeLab() {
    const student = JSON.parse(sessionStorage.getItem('activeStudent'));
    const assumptionText = document.getElementById('assumption').value;
    if(!assumptionText) return alert("Please enter your assumptions.");

    const entry = {
        fName: student.fName, lName: student.lName, period: student.period,
        actualIdentityM: activeM.name, actualIdentityX: activeX.name, 
        mExps: completedM.map(e => e.id), xExps: completedX.map(e => e.id),
        assumption: assumptionText
    };
    
// When you ever update the code of the google script make sure to always update it to the latest doc
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzKHQd1vrdU7taJzdUtm2AwQB4fGVqg8DY9TPjPCf_h40gtvgukOuKj0xoIlfDweLaNPQ/exec';

    try {
        const btn = document.querySelector('button[onclick="finalizeLab()"]');
        btn.innerText = "Submitting...";
        btn.disabled = true;

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
        alert("Submission failed.");
        btn.innerText = "Submit Lab Report";
        btn.disabled = false;
    }
}
