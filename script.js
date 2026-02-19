// Database of possible identities
// I also added the descriptions of each M and X which is shown on the very first page
const metalIdentities = [
    { name: "Nickel", reactivity: 4, description: "lustrous, silvery-white with a slight golden or brownish tinge.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Pale green/ bluish green flame", mass: 58.69},
    { name: "CopperTwo", reactivity: 2, description: "lustrous and reddish-orange.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Bluish green flame", mass: 63.55},
    { name: "CopperThree", reactivity: 3, description: "lustrous and reddish-orange.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Bluish green flame", mass: 63.55},
    { name: "Silver", reactivity: 1, description: "lusterous and brilliant white.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "No Data", mass: 107.87},
    { name: "Aluminum", reactivity: 7, description: "shiny, silver.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "White/silvery white flame", mass: 26.98},
    { name: "IronTwo", reactivity: 5, description: "silvery-gray.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Red flame", mass: 55.85},
    { name: "IronThree", reactivity: 6, description: "silvery-gray.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Red flame", mass: 55.85},
    { name: "Magnesium", reactivity: 8, description: "lursterous, silvery-gray.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Very blinding white light, white powder formed after", mass: 24.31}
];

const nonMetalIdentities = [
    { name: "Sulfur", description: "a distinctively bright lemon-yellow, pale yellow, or greenish-yellow solid.", heat: "Melts into a yellow liquid. Turns into red vapor when heated further", solubility: "Sinks to the bottom of the beaker.", solvent: "Does not dissolve in water.", crucible: "Melts then burns.", mass: 32.07},
    { name: "Chlorine", description: "a dense, yellow-green gas.", heat: "Pale green gas fills the tube.", solubility: "Creates a pale, acidic bleach-like solution.", solvent: "Dissolves into a light yellow liquid.", crucible: "No Data Available.", mass: 70.91},
    { name: "Bromine", description: "a reddish-brown liquid.", heat: "Deep red-orange vapors fill the tube.", solubility: "Heavy orange-red liquid at the bottom.", solvent: "Orange-brown solution forms.", crucible: "Element evaporates.", mass: 159.81},
    { name: "Phosphorus", description: "a white, red, or black solid.", heat: "Ignites into a bright white light/smoke.", solubility: "Does not dissolve; stays as a waxy solid.", solvent: "Partially dissolves in organic liquids.", crucible: "Element ignites easily.", mass: 30.97}
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
    "CopperTwoSulfur": { appearance: "N/A, super rare mineral", solubility: "N/A", molarMass: 95.62 },
    "NickelSulfur": { appearance: "N/A, rare mineral", solubility: "N/A", molarMass: 90.76 },
    "IronTwoSulfur": { appearance: "Gray, sometimes in lumps or powder.", solubility: "insoluble", molarMass: 87.91 },
    "IronThreeSulfur": { appearance: "N/A, highly unstable.", solubility: "N/A", molarMass: 207.9 },
    "SilverSulfur": { appearance: "Gray-blackish crystals.", solubility: "insoluble", molarMass: 247.8 },
    "AluminumSulfur": { appearance: "Gray solid.", solubility: "soluble", molarMass: 150.162 },
    "MagnesiumSulfur": { appearance: "White to reddish brown powder.", solubility: "soluble", molarMass: 56.371 },

    // Phosphorus Groups
    "CopperOnePhosphorus": { appearance: "Yellowish gray crystals.", solubility: "insoluble", molarMass: 221.6127 },
    "CopperTwoPhosphorus": { appearance: "N/A, rare mineral.", solubility: "N/A", molarMass: 252.5855 },
    "NickelPhosphorus": { appearance: "N/A, rare mineral.", solubility: "N/A", molarMass: 238.0277 },
    "IronTwoPhosphorus": { appearance: "N/A, rare mineral.", solubility: "N/A", molarMass: 229.4825 },
    "IronThreePhosphorus": { appearance: "Gray needles.", solubility: "insoluble", molarMass: 86.819 },
    "SilverPhosphorus": { appearance: "N/A, rare mineral.", solubility: "N/A", molarMass: 354.57836 },
    "AluminumPhosphorus": { appearance: "Yellow or gray crystals.", solubility: "insoluble", molarMass: 57.955 },
    "MagnesiumPhosphorus": { appearance: "White crystalline solid", solubility: "insoluble", molarMass: 134.861 },    
    };

// Logic to pick M and X for this session
let activeM = metalIdentities[Math.floor(Math.random() * metalIdentities.length)];
let activeX = nonMetalIdentities[Math.floor(Math.random() * nonMetalIdentities.length)];

// List of available experiment types, make sure to not to have the same id if adding experiments
const experimentsM = [
    { id: 'hammer', name: "Hammer Test" },
    { id: 'activity', name: "Activity Testing" },
    { id: 'melting', name: "Crucible + Matches" },
    { id: 'conduct', name: "Conductivity Test", static: "Red and Green lights shine brightly" },
    { id: 'water', name: "Water Submerging", static: "Sample sinks in water and does not react." },
    { id: 'flame', name: "Flame Test"},
];

const experimentsX = [
    { id: 'heat', name: "Bunsen Burner" },
    { id: 'solubility', name: "Water Solubility" },
    { id: 'solvent', name: "Organic Solvent" },
    { id: 'brittle', name: "Brittleness", static: "Sample shatters into a fine powder." },
    { id: 'crucible', name: "Crucible + Matches"},
    { id: 'conductX', name: "Thermal Probe", static: "Material acts as a thermal insulator." }
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
    { name: "Nickel", reactivity: 3, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Pale green/ bluish green flame" },
    { name: "Copper", reactivity : 2, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Bluish green flame" },
    { name: "Silver", reactivity: 1, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "No Data" },
    { name: "Aluminum", reactivity: 5, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "White/silvery white flame" },
    { name: "Iron", reactivity: 4, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Red flame" },
    { name: "Magnesium", reactivity: 6, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Blinding white light" }
];

const referenceNonMetals = [
    { name: "Sulfur", heat: "Melts into a yellow liquid. Turns into red vapor when heated further", solubility: "Sinks to the bottom of the beaker.", solvent: "Does not dissolve in water.", crucible: "Melts then burns." },
    { name: "Chlorine", heat: "Pale green gas fills the tube.", solubility: "Creates a pale, acidic bleach-like solution.", solvent: "Dissolves into a light yellow liquid.", crucible: "No Data Available." },
    { name: "Bromine", heat: "Deep red-orange vapors fill the tube.", solubility: "Heavy orange-red liquid at the bottom.", solvent: "Orange-brown solution forms.", crucible: "Element evaporates." },
    { name: "Phosphorus", heat: "Ignites into a bright white light/smoke.", solubility: "Does not dissolve; stays as a waxy solid.", solvent: "Partially dissolves in organic liquids.",  crucible: "Element ignites easily." }
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
    const menu = document.getElementById('experiment-menu');
    menu.innerHTML = '';
    const list = (currentPhase === 'M') ? experimentsM : experimentsX;
    const completed = (currentPhase === 'M') ? completedM : completedX;

    list.forEach(exp => {
        const isDone = completed.find(c => c.id === exp.id);
        menu.innerHTML += `
            <button onclick="startTest('${exp.id}')" ${isDone ? 'disabled' : ''} 
                class="w-full text-left p-4 rounded-xl border transition-all flex justify-between items-center
                ${isDone ? 'opacity-40 bg-gray-900 border-gray-800 cursor-not-allowed' : 'hover:bg-gray-700 bg-gray-800 border-gray-700 shadow-sm'}">
                <span class="font-medium text-white">${exp.name}</span>
                ${isDone ? '<span>✅</span>' : '<span class="text-blue-500">→</span>'}
            </button>`;
    });
}

function startTest(testId) {
    activeTest = testId;
    
    document.getElementById('station-empty').classList.add('hidden');
    document.getElementById('station-active').classList.add('hidden');
    document.getElementById('station-setup').classList.remove('hidden');
    
    const exp = (currentPhase === 'M') ? experimentsM.find(e => e.id === testId) : experimentsX.find(e => e.id === testId);
    document.getElementById('setup-test-name').innerText = "Setup: " + exp.name;

    // Fill dropdowns based on Phase
    const dropdowns = ['ref-1', 'ref-2', 'ref-3'];
    let currentRefList;
        if (activeTest === "activity") {
            currentRefList = solutionDatabase;  // <-- USE SOLUTIONS
        } else {
            currentRefList = (currentPhase === 'M') ? referenceMetals : referenceNonMetals;
        }
    dropdowns.forEach(id => {
        const select = document.getElementById(id);
        select.innerHTML = currentRefList.map(item => {
            const label = activeTest === "activity" ? item.display : item.name;
            return `<option value="${item.name}">${label}</option>`;
        }).join('');
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
    document.getElementById('station-setup').classList.add('hidden');
    document.getElementById('station-active').classList.remove('hidden');
    
    const exp = (currentPhase === 'M') ? experimentsM.find(e => e.id === activeTest) : experimentsX.find(e => e.id === activeTest);
    const zone = document.getElementById('comparison-zone');
    
    // FIX 1: Define userResult properly for the unknown sample
    let userResult;
    if (activeTest === "activity") {
        // React Unknown M with the first chosen solution
        userResult = getReaction(convertMetalName(activeM.name), document.getElementById('ref-1').value);
    } else {
        userResult = exp.static || (currentPhase === 'M' ? activeM[activeTest] : activeX[activeTest]);
    }
    
    let html = `
        <div class="p-4 bg-blue-900/30 border border-blue-500 rounded-xl md:col-span-2 text-center shadow-lg">
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
        // FIX 2: Use getReaction for activity series instead of the missing getActivityResult
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
}

function logExperiment() {
    const list = (currentPhase === 'M') ? experimentsM : experimentsX;
    const exp = list.find(e => e.id === activeTest);
    const result = exp.static || (currentPhase === 'M' ? activeM[activeTest] : activeX[activeTest]);

    if(currentPhase === 'M') {
        completedM.push({name: exp.name, result: result, id: exp.id});
        document.getElementById('exp-count').innerText = `${completedM.length} / 3`;
    } else {
        completedX.push({name: exp.name, result: result, id: exp.id});
        document.getElementById('exp-count').innerText = `${completedX.length} / 3`;
    }

    checkPhaseTransition();
    loadMenu();
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
        
        // Ensure the active station is cleared before building Phase 3
        document.getElementById('station-empty').classList.add('hidden');
        document.getElementById('station-setup').classList.add('hidden');
        document.getElementById('station-active').classList.remove('hidden');

        runMolarMassPhase(); 
        return;
    }
    
    // Reset the station view for the next test in the current phase
    activeTest = null;
    document.getElementById('station-empty').classList.remove('hidden');
    document.getElementById('station-active').classList.add('hidden');
    document.getElementById('station-setup').classList.add('hidden');
}

let phase3Attempts = []; 

function runMolarMassPhase() {
    currentPhase = 'P';
    document.getElementById('phase-title').innerText = "Phase 3: Molecular Synthesis";
    document.getElementById('phase-title').className = "text-2xl font-bold text-purple-400";
    
    // Cleanly remove the sidebar to give the synthesis UI more room
    const sidebar = document.getElementById('experiment-menu')?.parentElement;
    if (sidebar) sidebar.remove();
    
    const workspace = document.getElementById('lab-workspace');
    if (workspace) workspace.className = "max-w-4xl mx-auto block";

    const zone = document.getElementById('comparison-zone');
    // We clear the zone and inject the new Stoichiometry-based UI
    zone.className = "w-full space-y-8";
    zone.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-6 bg-gray-800 border border-blue-500/30 rounded-2xl">
                <label class="text-blue-400 text-xs font-bold uppercase tracking-widest">Grams of M to React</label>
                <input type="number" id="input-m" placeholder="0.00" class="w-full bg-gray-900 border border-gray-700 p-4 rounded-xl text-white mt-2 text-2xl outline-none">
            </div>
            <div class="p-6 bg-gray-800 border border-emerald-500/30 rounded-2xl">
                <label class="text-emerald-400 text-xs font-bold uppercase tracking-widest">Grams of X (Read-only)</label>
                <input type="number" id="input-x" placeholder="Consumed X" readonly class="w-full bg-gray-900 border border-gray-700 p-4 rounded-xl text-gray-500 mt-2 text-2xl outline-none">
            </div>
        </div>

        <button onclick="synthesizeCompound()" class="w-full bg-purple-600 py-6 rounded-2xl font-black text-white hover:bg-purple-500 transition-all shadow-lg uppercase tracking-widest">
            Perform Synthesis Reaction
        </button>

        <div id="mx-result-box" class="hidden bg-slate-900 p-8 rounded-3xl border-2 border-purple-500/50 shadow-2xl">
            <h3 class="text-purple-400 font-bold uppercase tracking-widest mb-6 text-center">Experimental Results: Unknown Compound MX</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-4 border border-gray-700 rounded-xl text-center">
                    <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">Total Mass Produced</p>
                    <p id="res-mass" class="text-3xl font-black text-white"></p>
                </div>
                <div class="p-4 border border-purple-500/30 bg-purple-900/10 rounded-xl text-center">
                    <p class="text-[10px] text-purple-400 uppercase font-bold mb-1">Molar Mass of Product</p>
                    <p id="res-molar" class="text-3xl font-black text-white"></p>
                </div>
                <div class="p-4 border border-gray-700 rounded-xl text-center">
                    <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">Appearance</p>
                    <p id="res-app" class="text-sm text-gray-300"></p>
                </div>
                <div class="p-4 border border-gray-700 rounded-xl text-center">
                    <p class="text-[10px] text-gray-500 uppercase font-bold mb-1">Solubility</p>
                    <p id="res-sol" class="text-sm text-gray-300"></p>
                </div>
            </div>
        </div>
    `;

    // Ensure the main action button now leads to the CER report
    const actionBtn = document.querySelector('#station-active button');
    if (actionBtn) {
        actionBtn.innerText = "Proceed to Final CER Report";
        actionBtn.onclick = showCER;
    }
}

function synthesizeCompound() {
    const mInput = document.getElementById('input-m');
    const xInput = document.getElementById('input-x');
    
    const mVal = parseFloat(mInput.value) || 0;
    const xVal = parseFloat(xInput.value) || 0;

    if (mVal <= 0 || xVal <= 0) return alert("Please enter valid amounts.");

    const totalProduced = (mVal + xVal).toFixed(2);
    
    // LOOKUP: Ensure this matches the keys in your Database
    const lookupKey = activeM.name + activeX.name; 
    const info = compoundDatabase[lookupKey];

    if (!info) {
        console.error("Missing Database Key:", lookupKey);
        return alert("Error: Compound data not found for " + lookupKey);
    }

    // Populate UI
    document.getElementById('res-mass').innerText = `${totalProduced} g`;
    document.getElementById('res-molar').innerText = `${info.molarMass} g/mol`;
    document.getElementById('res-app').innerText = info.appearance;
    document.getElementById('res-sol').innerText = info.solubility;

    document.getElementById('mx-result-box').classList.remove('hidden');
    
    // Log for the final CER screen - Ensure these keys match showCER()
    phase3Attempts.push({
        combo: `Reaction: ${mVal}g M + ${xVal}g X`,
        mass: info.molarMass, // We store the molar mass for the "Evidence" check
        rawTotal: totalProduced
    });
}

function showCER() {
    document.getElementById('lab-workspace').classList.add('hidden');
    document.getElementById('cer-screen').classList.remove('hidden');
    
    const log = document.getElementById('summary-log');
    
    // Header and M/X Results (Using the new .cer-result-card class)
    let html = `
        <div class="space-y-4">
            <h4 class="text-blue-400 font-bold">Element M Tests</h4>
            ${completedM.map(e => `
                <div class="cer-result-card p-4 rounded-xl">
                    <b class="text-gray-400 text-xs uppercase">${e.name}:</b>
                    <p class="text-white">${e.result}</p>
                </div>
            `).join('')}
        </div>
        
        <div class="space-y-4">
            <h4 class="text-emerald-400 font-bold">Element X Tests</h4>
            ${completedX.map(e => `
                <div class="cer-result-card p-4 rounded-xl">
                    <b class="text-gray-400 text-xs uppercase">${e.name}:</b>
                    <p class="text-white">${e.result}</p>
                </div>
            `).join('')}
        </div>

        // Replace the third section (Molar Mass Comparison Log) in showCER with this:
        <div class="col-span-1 md:col-span-2 mt-8">
            <h4 class="text-purple-400 font-bold mb-4 text-center">Synthesis Log (Theoretical Molar Mass)</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                ${phase3Attempts.map(attempt => {
                    // Check if the result matches the correct compound's molar mass
                    const correctKey = activeM.name + activeX.name;
                    const correctMass = compoundDatabase[correctKey].molarMass;
                    const isCorrect = attempt.mass === correctMass;
        
                    return `
                        <div class="cer-result-card p-3 rounded-lg border-l-4 ${isCorrect ? 'border-l-emerald-500' : 'border-l-red-500'} bg-gray-900">
                            <p class="text-[10px] text-gray-500 uppercase font-bold">${attempt.combo}</p>
                            <p class="text-white font-mono">${attempt.mass} g/mol</p>
                            <p class="text-[10px] text-gray-400">Total Yield: ${attempt.rawTotal}g</p>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
    
    log.innerHTML = html;
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
