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
    {name: "HCl", type: "acid", metal: "H", charge: 1, anion: "Cl", display: "Hydrochloric Acid"},
    {name: "Ca(NO3)2", type: "ionic", metal: "Ca", charge: 2, anion: "NO3", display: "Calcium Nitrate"},
    {name: "ZnCl2", type: "ionic", metal: "Zn", charge: 2, anion: "Cl", display: "Zinc Chloride"},
    {name: "Cu(NO3)2", type: "ionic", metal: "Cu (II)", charge: 2, anion: "NO3", display: "Copper(II) Nitrate"},
    {name: "NiSO4", type: "ionic", metal: "Ni", charge: 2, anion: "SO4", display: "Nickel(II) Sulfate"},
    {name: "CoSO4", type: "ionic", metal: "Co", charge: 2, anion: "SO4", display: "Cobalt(II) Sulfate"},
    {name: "FeSO4", type: "ionic", metal: "Fe (II)", charge: 2, anion: "SO4", display: "Iron(II) Sulfate"},
    {name: "FeCl3", type: "ionic", metal: "Fe (III)", charge: 3, anion: "Cl", display: "Iron(III) Chloride"},
    {name: "AgNO3", type: "ionic", metal: "Ag", charge: 1, anion: "NO3", display: "Silver Nitrate"},
    {name: "CrCl3", type: "ionic", metal: "Cr (III)", charge: 3, anion: "Cl", display: "Chromium(III) Chloride"},
    {name: "MnCO3", type: "ionic", metal: "Mn (II)", charge: 2, anion: "CO3", display: "Manganese(II) Carbonate"},
    {name: "Mg(NO3)2", type: "ionic", metal: "Mg", charge: 2, anion: "NO3", display: "Magnesium Nitrate"}
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
    // 1. Force the layout to the top and hide Phase 1-3 components
    const topHeader = document.querySelector('div.max-w-6xl.mx-auto.flex.justify-between');
    if (topHeader) topHeader.style.display = 'none';

    const sidebar = document.querySelector('aside') || document.querySelector('.w-1\\/3');
    if (sidebar) sidebar.style.display = 'none';

    const labWorkspace = document.getElementById('lab-workspace');
    if (labWorkspace) labWorkspace.style.display = 'none';

    // 2. Reset alignment
    document.body.classList.remove('flex', 'items-center', 'justify-center');
    document.body.classList.add('block', 'pt-8');
    window.scrollTo(0, 0);

    const cerScreen = document.getElementById('cer-screen');
    cerScreen.classList.remove('hidden');
    cerScreen.className = "max-w-6xl mx-auto block";

    const log = document.getElementById('summary-log');
    log.className = "w-full space-y-12 pb-24";
    
    log.innerHTML = `
        <div class="animate-in fade-in duration-1000">
            <h2 class="text-3xl font-black text-sky-400 mb-2 uppercase tracking-tighter">Final Laboratory Record</h2>
            <p class="text-gray-500 text-xs font-bold uppercase tracking-[0.3em] mb-10">Verification of M and X Identities</p>

            <section class="mb-12">
                <h4 class="text-blue-400 font-bold uppercase text-[10px] tracking-widest mb-6 px-3 border-l-4 border-blue-600">Metal M Evidence</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${completedM.map(e => `
                        <div class="p-6 bg-gray-900/50 border border-gray-800 rounded-3xl shadow-xl">
                            <b class="text-blue-400 block mb-2 uppercase text-[10px] tracking-widest">${e.name}</b>
                            <p class="text-[9px] text-gray-600 uppercase font-black mb-1 italic">Initial Observation: "${e.initialDesc || 'No data recorded'}"</p>
                            <div class="bg-black/60 p-3 rounded-xl border border-blue-500/20 my-4">
                                <p class="text-[8px] text-gray-500 uppercase font-black mb-1">Test Result</p>
                                <p class="text-sm font-bold text-white">${e.result}</p>
                            </div>
                            <div class="space-y-1">
                                ${e.comparisons ? e.comparisons.map(c => `
                                    <div class="flex justify-between text-[11px] py-1 border-b border-gray-800/30">
                                        <span class="text-gray-500">${c.label}:</span>
                                        <span class="text-gray-300 font-medium">${c.value}</span>
                                    </div>
                                `).join('') : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="mb-12">
                <h4 class="text-emerald-400 font-bold uppercase text-[10px] tracking-widest mb-6 px-3 border-l-4 border-emerald-600">Non-Metal X Evidence</h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    ${completedX.map(e => `
                        <div class="p-6 bg-gray-900/50 border border-gray-800 rounded-3xl shadow-xl">
                            <b class="text-emerald-400 block mb-2 uppercase text-[10px] tracking-widest">${e.name}</b>
                            <p class="text-[9px] text-gray-600 uppercase font-black mb-1 italic">Initial Observation: "${e.initialDesc || 'No data recorded'}"</p>
                            <div class="bg-black/60 p-3 rounded-xl border border-emerald-500/20 my-4">
                                <p class="text-[8px] text-gray-500 uppercase font-black mb-1">Test Result</p>
                                <p class="text-sm font-bold text-white">${e.result}</p>
                            </div>
                            <div class="space-y-1">
                                ${e.comparisons ? e.comparisons.map(c => `
                                    <div class="flex justify-between text-[11px] py-1 border-b border-gray-800/30">
                                        <span class="text-gray-500">${c.label}:</span>
                                        <span class="text-gray-300 font-medium">${c.value}</span>
                                    </div>
                                `).join('') : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <section class="mb-12">
                <h4 class="text-purple-400 font-bold uppercase text-[10px] tracking-widest mb-6 px-3 border-l-4 border-purple-600">Stoichiometry Records</h4>
                <div class="space-y-4">
                    ${phase3Attempts.map(attempt => `
                        <div class="p-5 bg-gray-900/80 border border-purple-500/20 rounded-2xl flex justify-between items-center shadow-2xl">
                            <div class="grid grid-cols-4 w-full gap-8">
                                <div>
                                    <p class="text-[8px] text-gray-500 uppercase font-black">Reactants</p>
                                    <p class="text-sm font-black text-blue-400">${attempt.combo}</p>
                                </div>
                                <div>
                                    <p class="text-[8px] text-gray-500 uppercase font-black">Final Yield</p>
                                    <p class="text-sm font-bold text-white">${attempt.rawTotal} g</p>
                                </div>
                                <div>
                                    <p class="text-[8px] text-gray-500 uppercase font-black">Observations</p>
                                    <p class="text-[10px] text-gray-400 italic">"${attempt.appearance}"</p>
                                </div>
                                <div class="text-right">
                                    <p class="text-[8px] text-gray-500 uppercase font-black">Solubility</p>
                                    <p class="text-xs text-gray-300 font-bold">${attempt.solubility}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>

            <div class="p-12 bg-gray-900 border border-gray-800 rounded-[3rem] text-center shadow-inner">
                <button onclick="finalizeLab()" class="px-20 py-5 bg-sky-600 hover:bg-sky-500 text-white font-black rounded-2xl transition-all uppercase tracking-[0.2em] shadow-xl hover:scale-105 active:scale-95">
                    Submit Final Report
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
