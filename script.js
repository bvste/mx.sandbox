// Database of possible identities
// I also added the descriptions of each M and X which is shown on the very first page
const metalIdentities = [
    { name: "Nickel", description: "lustrous, silvery-white with a slight golden or brownish tinge.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Pale green/ bluish green flame", mass: 58.69},
    { name: "CopperTwo", description: "lustrous and reddish-orange.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Bluish green flame", mass: 63.55},
    { name: "CopperThree", description: "lustrous and reddish-orange.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Bluish green flame", mass: 63.55},
    { name: "Silver", description: "lusterous and brilliant white.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "No Data", mass: 107.87},
    { name: "Aluminum", description: "shiny, silver.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "White/silvery white flame", mass: 26.98},
    { name: "IronTwo", description: "silvery-gray.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Red flame", mass: 55.85},
    { name: "IronThree", description: "silvery-gray.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Red flame", mass: 55.85},
    { name: "Magnesium", description: "lursterous, silvery-gray.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Very blinding white light, white powder formed after", mass: 24.31}
];

const nonMetalIdentities = [
    { name: "Sulfur", description: "a distinctively bright lemon-yellow, pale yellow, or greenish-yellow solid.", heat: "Melts into a yellow liquid. Turns into red vapor when heated further", solubility: "Sinks to the bottom of the beaker.", solvent: "Does not dissolve in water.", mass: 32.07},
    { name: "Chlorine", description: "a dense, yellow-green gas.", heat: "Pale green gas fills the tube.", solubility: "Creates a pale, acidic bleach-like solution.", solvent: "Dissolves into a light yellow liquid.", mass: 70.91},
    { name: "Bromine", description: "a reddish-brown liquid.", heat: "Deep red-orange vapors fill the tube.", solubility: "Heavy orange-red liquid at the bottom.", solvent: "Orange-brown solution forms.", mass: 159.81},
    { name: "Phosphorus", description: "a white, red, or black solid.", heat: "Ignites into a bright white light/smoke.", solubility: "Does not dissolve; stays as a waxy solid.", solvent: "Partially dissolves in organic liquids.", mass: 30.97}
];

// Logic to pick M and X for this session
let activeM = metalIdentities[Math.floor(Math.random() * metalIdentities.length)];
let activeX = nonMetalIdentities[Math.floor(Math.random() * nonMetalIdentities.length)];

// List of available experiment types
const experimentsM = [
    { id: 'hammer', name: "Hammer Test" },
    { id: 'activity', name: "Activity Testing" },
    { id: 'melting', name: "Crucible + Matches" },
    { id: 'conduct', name: "Conductivity Test", static: "Red and Green lights shine brightly" },
    { id: 'water', name: "Water Submerging", static: "Sample sinks in water and does not react." },
    { id: 'flame', name: "Flame Test"}
];

const experimentsX = [
    { id: 'heat', name: "Bunsen Burner" },
    { id: 'solubility', name: "Water Solubility" },
    { id: 'solvent', name: "Organic Solvent" },
    { id: 'brittle', name: "Brittleness", static: "Sample shatters into a fine powder." },
    { id: 'starch', name: "Starch Indicator", static: "No reaction (Starch stays white)." },
    { id: 'conductX', name: "Thermal Probe", static: "Material acts as a thermal insulator." }
];

// --- STATE MANAGEMENT ---
let currentPhase = 'M'; 
let completedM = [];    
let completedX = [];    
let activeTest = null;

// Database for Comparison Feature
const referenceMetals = [
    { name: "Nickel", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Pale green/ bluish green flame" },
    { name: "CopperTwo", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Bluish green flame" },
    { name: "Silver", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "No Data" },
    { name: "Aluminum", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "White/silvery white flame" },
    { name: "IronTwo", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Red flame" },
    { name: "Magnesium", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Blinding white light" }
];

const referenceNonMetals = [
    { name: "Sulfur", heat: "Melts into a yellow liquid. Turns into red vapor when heated further", solubility: "Sinks to the bottom of the beaker.", solvent: "Does not dissolve in water." },
    { name: "Chlorine", heat: "Pale green gas fills the tube.", solubility: "Creates a pale, acidic bleach-like solution.", solvent: "Dissolves into a light yellow liquid." },
    { name: "Bromine", heat: "Deep red-orange vapors fill the tube.", solubility: "Heavy orange-red liquid at the bottom.", solvent: "Orange-brown solution forms." },
    { name: "Phosphorus", heat: "Ignites into a bright white light/smoke.", solubility: "Does not dissolve; stays as a waxy solid.", solvent: "Partially dissolves in organic liquids." }
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
    const currentRefList = (currentPhase === 'M') ? referenceMetals : referenceNonMetals;

    dropdowns.forEach(id => {
        const select = document.getElementById(id);
        select.innerHTML = currentRefList.map(m => `<option value="${m.name}">${m.name}</option>`).join('');
    });
}

function runComparisonTest() {
    document.getElementById('station-setup').classList.add('hidden');
    document.getElementById('station-active').classList.remove('hidden');
    
    const exp = (currentPhase === 'M') ? experimentsM.find(e => e.id === activeTest) : experimentsX.find(e => e.id === activeTest);
    const zone = document.getElementById('comparison-zone');
    
    // Use static result if it exists, otherwise pull from the active identity
    const userResult = exp.static || (currentPhase === 'M' ? activeM[activeTest] : activeX[activeTest]);
    
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

    const currentRefList = (currentPhase === 'M') ? referenceMetals : referenceNonMetals;

    selections.forEach(name => {
        const refObj = currentRefList.find(r => r.name === name);
        
        // LOGIC FIX: If the experiment is static for the unknown, 
        // it should probably be static for the reference too (e.g., all metals conduct).
        const refResult = exp.static || refObj[activeTest] || "No comparative data";
        
        html += `
            <div class="p-4 bg-gray-800 border border-gray-700 rounded-xl">
                <p class="text-[10px] text-gray-500 uppercase font-black tracking-widest">${refObj.name}</p>
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
        const menu = document.getElementById('experiment-menu');
        if(menu) menu.classList.add('hidden');
        
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
    document.getElementById('phase-title').innerText = "Phase 3: Molecular Analysis";
    document.getElementById('phase-title').className = "text-2xl font-bold text-purple-400";
    
    const zone = document.getElementById('comparison-zone');
    
    // Retrieve the secret masses
    const massM = activeM.mass;
    const massX = activeX.mass;
    const totalMass = (massM + massX).toFixed(2);

    zone.innerHTML = `
        <div class="col-span-1 md:col-span-2 flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
            <div class="flex-1 p-6 bg-blue-900/20 border border-blue-500/30 rounded-2xl text-center shadow-lg w-full">
                <p class="text-blue-400 text-[10px] uppercase font-bold tracking-widest mb-1 italic">Molar Mass of M</p>
                <h3 class="text-4xl font-black text-white">${massM} <span class="text-xs font-light text-gray-500">g/mol</span></h3>
            </div>

            <div class="text-4xl text-gray-700 font-bold">+</div>

            <div class="flex-1 p-6 bg-emerald-900/20 border border-emerald-500/30 rounded-2xl text-center shadow-lg w-full">
                <p class="text-emerald-400 text-[10px] uppercase font-bold tracking-widest mb-1 italic">Molar Mass of X</p>
                <h3 class="text-4xl font-black text-white">${massX} <span class="text-xs font-light text-gray-500">g/mol</span></h3>
            </div>
        </div>

        <div class="col-span-1 md:col-span-2 bg-slate-900 p-10 rounded-3xl border-2 border-purple-500/50 text-center shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <p class="text-purple-400 text-xs uppercase font-black tracking-[0.2em] mb-4">Final Experimental Analysis (MX)</p>
            <h2 class="text-7xl font-black text-white tracking-tighter">${totalMass} <span class="text-2xl font-light text-purple-300/50">g/mol</span></h2>
            <div class="h-1 w-24 bg-purple-500 mx-auto my-6 rounded-full opacity-50"></div>
            <p class="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
                Identity verification confirmed. Use these values to justify your claim in the Final Lab Report.
            </p>
        </div>
    `;

    // Ensure the button is present and ready
    const actionBtn = document.querySelector('#station-active button');
    if (actionBtn) {
        actionBtn.innerText = "Proceed to Final CER Report";
        actionBtn.className = "w-full bg-purple-600 hover:bg-purple-500 py-4 rounded-2xl font-bold text-white transition-all shadow-lg mt-6 uppercase tracking-widest text-xs";
        actionBtn.onclick = showCER;
    }
}

function calculateAttempt() {
    const selM = document.getElementById('calc-m');
    const selX = document.getElementById('calc-x');
    
    const mName = selM.options[selM.selectedIndex].text;
    const xName = selX.options[selX.selectedIndex].text;
    const mMass = parseFloat(selM.value);
    const xMass = parseFloat(selX.value);
    
    const calculated = (mMass + xMass).toFixed(2);
    const actual = (activeM.mass + activeX.mass).toFixed(2);
    
    // Log this attempt for the CER page
    phase3Attempts.push({ combo: `${mName}${xName}`, mass: calculated });

    const output = document.getElementById('calc-output');
    const resultText = document.getElementById('calc-result-text');
    const feedback = document.getElementById('calc-feedback');

    output.classList.remove('hidden');
    resultText.innerText = `${calculated} g/mol`;

    if (calculated === actual) {
        feedback.innerText = "MATCH DETECTED: Mass aligns with experimental data.";
        feedback.className = "text-emerald-400 font-bold text-sm mt-1";
    } else {
        feedback.innerText = "NO MATCH: Mass does not align with experimental data.";
        feedback.className = "text-red-400 text-sm mt-1";
    }
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

        <div class="col-span-1 md:col-span-2 mt-8">
            <h4 class="text-purple-400 font-bold mb-4 text-center">Molar Mass Comparison Log</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                ${phase3Attempts.map(attempt => `
                    <div class="cer-result-card p-3 rounded-lg border-l-4 ${attempt.mass === (activeM.mass + activeX.mass).toFixed(2) ? 'border-l-emerald-500' : 'border-l-red-500'}">
                        <p class="text-[10px] text-gray-500 uppercase font-bold">${attempt.combo}</p>
                        <p class="text-white font-mono">${attempt.mass} g/mol</p>
                    </div>
                `).join('')}
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
