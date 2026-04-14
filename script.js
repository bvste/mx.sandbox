// Database of possible identities
const metalIdentities = [
    { name: "Nickel", reactivity: 4, description: "lustrous, silvery-white with a slight golden or brownish tinge.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 4 minutes", flame: "Pale green/ bluish green flame", mass: 58.69},
    { name: "CopperOne", reactivity: 2, description: "lustrous and reddish-orange.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 3 minutes", flame: "Bluish green flame", mass: 63.55},
    { name: "CopperTwo", reactivity: 3, description: "lustrous and reddish-orange.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 3 minutes", flame: "Bluish green flame", mass: 63.55},
    { name: "Silver", reactivity: 1, description: "lusterous and brilliant white.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 6 minutes", flame: "No Data", mass: 107.87},
    { name: "Aluminum", reactivity: 7, description: "shiny, silver.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 7 minute", flame: "White/silvery white flame", mass: 26.98},
    { name: "IronTwo", reactivity: 5, description: "silvery-gray.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 9 minutes", flame: "Red flame", mass: 55.85},
    { name: "IronThree", reactivity: 6, description: "silvery-gray.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 9 minutes", flame: "Red flame", mass: 55.85},
    { name: "Magnesium", reactivity: 8, description: "lursterous, silvery-gray.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 6 minutes", flame: "Very blinding white light, white powder formed after", mass: 24.31}
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

    "CopperOneBromine": { appearance: "White powder.", solubility: "insoluble", molarMass: 143.45 },
    "CopperTwoBromine": { appearance: "Grayish black crystals.", solubility: "soluble", molarMass: 223.37 },
    "NickelBromine": { appearance: "Yellow-brown crystals.", solubility: "soluble", molarMass: 218.53 },
    "IronTwoBromine": { appearance: "yellow-brown solid.", solubility: "soluble", molarMass: 215.65 },
    "IronThreeBromine": { appearance: "Brown solid.", solubility: "soluble", molarMass: 295.56 },
    "SilverBromine": { appearance: "Pale yellow solid.", solubility: "insoluble", molarMass: 187.77 },
    "AluminumBromine": { appearance: "White to yellowish-red, lumpy solid", solubility: "soluble", molarMass: 266.694 },
    "MagnesiumBromine": { appearance: "White crystals.", solubility: "soluble", molarMass: 184.113 },

    "CopperOneSulfur": { appearance: "Black crystals.", solubility: "insoluble", molarMass: 159.16 },
    "CopperTwoSulfur": { appearance: "N/A, super rare mineral", solubility: "N/A", molarMass: 95.62 },
    "NickelSulfur": { appearance: "N/A, rare mineral", solubility: "N/A", molarMass: 90.76 },
    "IronTwoSulfur": { appearance: "Gray, sometimes in lumps or powder.", solubility: "insoluble", molarMass: 87.91 },
    "IronThreeSulfur": { appearance: "N/A, highly unstable.", solubility: "N/A", molarMass: 207.9 },
    "SilverSulfur": { appearance: "Gray-blackish crystals.", solubility: "insoluble", molarMass: 247.8 },
    "AluminumSulfur": { appearance: "Gray solid.", solubility: "soluble", molarMass: 150.162 },
    "MagnesiumSulfur": { appearance: "White to reddish brown powder.", solubility: "soluble", molarMass: 56.371 },

    "CopperOnePhosphorus": { appearance: "Yellowish gray crystals.", solubility: "insoluble", molarMass: 221.6127 },
    "CopperTwoPhosphorus": { appearance: "N/A, rare mineral.", solubility: "N/A", molarMass: 252.5855 },
    "NickelPhosphorus": { appearance: "N/A, rare mineral.", solubility: "N/A", molarMass: 238.0277 },
    "IronTwoPhosphorus": { appearance: "N/A, rare mineral.", solubility: "N/A", molarMass: 229.4825 },
    "IronThreePhosphorus": { appearance: "Gray needles.", solubility: "insoluble", molarMass: 86.819 },
    "SilverPhosphorus": { appearance: "N/A, rare mineral.", solubility: "N/A", molarMass: 354.57836 },
    "AluminumPhosphorus": { appearance: "Yellow or gray crystals.", solubility: "insoluble", molarMass: 57.955 },
    "MagnesiumPhosphorus": { appearance: "White crystalline solid", solubility: "insoluble", molarMass: 134.861 }    
};

let activeM = metalIdentities[Math.floor(Math.random() * metalIdentities.length)];
let activeX = nonMetalIdentities[Math.floor(Math.random() * nonMetalIdentities.length)];

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

const reactivitySeries = ["Calcium", "Magnesium", "Aluminum", "Manganese", "Zinc", "Chromium", "Iron (II)", "Iron (III)", "Cobalt", "Nickel", "Tin", "Copper (I)", "Copper (II)", "Silver"];

// --- NEW EXACT REACTIVITY OBSERVATIONS ---
const reactionMatrix = {
    "Zn": { 
        "HCl": "Bubbles, metal dissolves", 
        "Cu(NO3)2": "Reddish-brown metal coat", 
        "ZnCl2": "yellowish-white metal coat", 
        "NiSO4": "Gray solid forms", 
        "FeSO4": "metal coat", 
        "AgNO3": "Silver crystals form; solution clears" 
    },
    "Cu (I)": { "AgNO3": "Silver crystals form" },
    "Cu (II)": { "AgNO3": "Silver crystals form" },
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
    "Ag": {},
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
        "CoSO4": "silver metal coat color change", 
        "FeSO4": "metal coat", 
        "AgNO3": "silver metal coat", 
        "CrCl3": "silver metal coat" 
    },
    "Mg": { 
        "HCl": "Vigorous bubbling", 
        "Cu(NO3)2": "silver metal coat, reddish-brown metal coat", 
        "ZnCl2": "yellowish-white metal coat", 
        "NiSO4": "silver metal coat", 
        "CoSO4": "silver metal coat color change", 
        "AgNO3": "silver metal coat" 
    },
    "Ca": { 
        "HCl": "Very vigorous bubbling", 
        "Ca(NO3)2": "vigorous bubbling", 
        "Cu(NO3)2": "silver metal coat, reddish-brown metal coat", 
        "ZnCl2": "yellowish-white metal coat", 
        "NiSO4": "silver metal coat", 
        "CoSO4": "silver metal coat color change", 
        "FeSO4": "silver metal coat metal coat", 
        "AgNO3": "silver metal coat" 
    },
    "Sn": { 
        "HCl": "Slow bubbles", 
        "Cu(NO3)2": "Reddish-brown metal coat",
        "NiSO4": "yellowish-white metal coat", 
        "AgNO3": "silver metal coat" 
    },
    "Al": { 
        "HCl": "Bubbles after oxide layer removed", 
        "Cu(NO3)2": "silver metal coat, reddish-brown metal coat", 
        "ZnCl2": "yellowish-white metal coat", 
        "NiSO4": "silver metal coat", 
        "CoSO4": "silver metal coat color change", 
        "AgNO3": "silver metal coat" 
    }
};

let currentPhase = 'M'; 
let completedM = [];    
let completedX = [];    
let activeTest = null;

const referenceMetals = [
    { name: "Nickel", reactivity: 3, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 4 minutes", flame: "Pale green/ bluish green flame" },
    { name: "Copper (I)", reactivity : 2, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 3 minutes", flame: "Bluish green flame" },
    { name: "Copper (II)", reactivity : 2, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 3 minutes", flame: "Bluish green flame" },
    { name: "Silver", reactivity: 1, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 6 minutes", flame: "No Data" },
    { name: "Aluminum", reactivity: 5, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 7 minute", flame: "White/silvery white flame" },
    { name: "Iron (II)", reactivity: 4, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 9 minutes", flame: "Red flame" },
    { name: "Iron (III)", reactivity: 4, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 9 minutes", flame: "Red flame" },
    { name: "Magnesium", reactivity: 6, hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 6 minutes", flame: "Blinding white light" }
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
    
    const modalText = document.querySelector('#mx-modal p');
    if (modalText) {
        modalText.innerHTML = `<strong>Element M</strong> is ${activeM.description} <br><br> <strong>Element X</strong> is ${activeX.description}`;
    }
    
    if(typeof openModal === "function") openModal('mx-modal');
    loadMenu(); 
};

function loadMenu() {
    const menu = document.getElementById('experiment-menu');
    if(!menu) return;
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
    
    document.getElementById('station-empty')?.classList.add('hidden');
    document.getElementById('station-active')?.classList.add('hidden');
    document.getElementById('station-setup')?.classList.remove('hidden');
    
    const exp = (currentPhase === 'M') ? experimentsM.find(e => e.id === testId) : experimentsX.find(e => e.id === testId);
    if(document.getElementById('setup-test-name')) {
        document.getElementById('setup-test-name').innerText = "Setup: " + exp.name;
    }

    const dropdowns = ['ref-1', 'ref-2', 'ref-3'];
    let currentRefList;
        if (activeTest === "activity") {
            currentRefList = solutionDatabase;  
        } else {
            currentRefList = (currentPhase === 'M') ? referenceMetals : referenceNonMetals;
        }
    dropdowns.forEach(id => {
        const select = document.getElementById(id);
        if(select) {
            select.innerHTML = currentRefList.map(item => {
                const label = activeTest === "activity" ? item.display : item.name;
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
        "Magnesium": "Mg", "Nickel": "Ni", "Silver": "Ag", "Aluminum": "Al",
        "IronTwo": "Fe (II)", "IronThree": "Fe (III)", "CopperTwo": "Cu (II)", "CopperOne": "Cu (I)", 
        "Iron (II)": "Fe (II)", "Iron (III)": "Fe (III)", 
        "Copper (I)": "Cu (I)", "Copper (II)": "Cu (II)", 
        //just in case
        "Iron": "Fe (II)", "Copper": "Cu (II)"
    };
    return map[name] || name;
}

function getReaction(metalName, solutionName) {
    const cleanMetal = convertMetalName(metalName);
    const solution = getSolutionData(solutionName);
    if (!solution) return "Solution not found.";
    
    // Pull from our exact observation matrix, fallback to No Reaction
    return reactionMatrix[cleanMetal]?.[solution.name] || "No visible reaction";
}

function runComparisonTest() {
    document.getElementById('station-setup')?.classList.add('hidden');
    document.getElementById('station-active')?.classList.remove('hidden');
    
    const exp = (currentPhase === 'M') ? experimentsM.find(e => e.id === activeTest) : experimentsX.find(e => e.id === activeTest);
    const zone = document.getElementById('comparison-zone');
    if(!zone) return;
    
    let userResult;
    if (activeTest === "activity") {
        userResult = "Results of activity test";
    } else {
        userResult = exp.static || (currentPhase === 'M' ? activeM[activeTest] : activeX[activeTest]);
    }
    
    let html = `
        <div class="p-4 bg-blue-900/30 border border-blue-500 rounded-xl md:col-span-2 text-center shadow-lg">
            <p class="text-[10px] text-blue-400 uppercase font-black tracking-widest">Unknown Sample ${currentPhase}</p>
            <p class="text-xl text-white font-bold">${userResult || "Testing..."}</p>
        </div>`;

    const selections = [
        document.getElementById('ref-1')?.value,
        document.getElementById('ref-2')?.value,
        document.getElementById('ref-3')?.value
    ].filter(Boolean);

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

    // --- AUTO-LOG THE RESULT IMMEDIATELY ---
    const resultText = exp.static || (currentPhase === 'M' ? activeM[activeTest] : activeX[activeTest]);
    let completedList = currentPhase === 'M' ? completedM : completedX;
    
    if (!completedList.find(e => e.id === activeTest)) {
        completedList.push({name: exp.name, result: resultText, id: exp.id});
        if(document.getElementById('exp-count')) {
            document.getElementById('exp-count').innerText = `${completedList.length} / 3`;
        }
        
        if (typeof autoSaveProgress === "function") autoSaveProgress();
    }

    // OVERRIDE THE BUTTON - Forces it to close and load the menu
    const actionBtn = document.querySelector('#station-active button');
    if (actionBtn) {
        actionBtn.innerText = "Experiment Saved! Return to Menu";
        actionBtn.setAttribute("onclick", "logExperiment()"); 
    }
}

function logExperiment() {
    // 1. Hide the active results screen
    document.getElementById('station-active')?.classList.add('hidden');
    
    // 2. Hide the setup screen
    document.getElementById('station-setup')?.classList.add('hidden');
    
    // 3. UNHIDE the actual menu container
    document.getElementById('experiment-menu')?.classList.remove('hidden');
    if(document.getElementById('experiment-menu')) {
        document.getElementById('experiment-menu').parentElement.classList.remove('hidden');
    }
    
    // 4. Check progress and reload the available tests
    checkPhaseTransition();
    loadMenu();
}

function checkPhaseTransition() {
    if (currentPhase === 'M' && completedM.length === 3) {
        alert("Phase 1 Complete! Transitioning to Element X.");
        currentPhase = 'X';
        if(document.getElementById('phase-title')) {
            document.getElementById('phase-title').innerText = "Phase 2: Testing Unknown X";
            document.getElementById('phase-title').className = "text-2xl font-bold text-emerald-400";
        }
        if(document.getElementById('exp-count')) document.getElementById('exp-count').innerText = "0 / 3";
        loadMenu(); 
    } 
    else if (currentPhase === 'X' && completedX.length === 3) {
        alert("Phase 2 Complete! Beginning Molecular Mass Analysis...");
        
        document.getElementById('station-empty')?.classList.add('hidden');
        document.getElementById('station-setup')?.classList.add('hidden');
        document.getElementById('station-active')?.classList.remove('hidden');

        runMolarMassPhase(); 
        return;
    }
    
    activeTest = null;
    document.getElementById('station-empty')?.classList.remove('hidden');
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
    if(!zone) return;
    zone.className = "w-full space-y-8";

    zone.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="p-4 bg-gray-800 border border-blue-500/30 rounded-2xl">
                <label class="text-blue-400 text-[10px] font-bold uppercase tracking-widest">Grams of Metal (M)</label>
                <input type="number" id="input-m" placeholder="0.00" class="w-full bg-gray-900 border border-gray-700 p-3 rounded-xl text-white mt-2 text-xl outline-none">
            </div>
            <div class="p-4 bg-gray-800 border border-emerald-500/30 rounded-2xl">
                <label class="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">Grams of Non-Metal (X)</label>
                <input type="number" id="input-x" placeholder="0.00" class="w-full bg
