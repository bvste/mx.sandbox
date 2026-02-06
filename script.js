// Database of possible identities
// I also added the descriptions of each M and X which is shown on the very first page
const metalIdentities = [
    { name: "Nickel", description: "lustrous, silvery-white with a slight golden or brownish tinge.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Pale green/ bluish green flame" },
    { name: "CopperTwo", description: "lustrous and reddish-orange.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Bluish green flame" },
    { name: "CopperThree", description: "lustrous and reddish-orange.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Bluish green flame" },
    { name: "Silver", description: "lusterous and brilliant white.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "No Data" },
    { name: "Aluminum", description: "shiny, silver.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "White/silvery white flame" },
    { name: "IronTwo", description: "silvery-gray.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Red flame" },
    { name: "IronThree", description: "silvery-gray.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Red flame" },
    { name: "Magnesium", description: "lursterous, silvery-gray.", hammer: "Sample flattens, bends slightly", activity: "Activity Series", melting: "Sample melts in 5 minutes", flame: "Very blinding white light, white powder formed after" }
];

const nonMetalIdentities = [
    { name: "Sulfur", description: "a distinctively bright lemon-yellow, pale yellow, or greenish-yellow solid.", heat: "Melts into a yellow liquid. Turns into red vapor when heated further", water: "Sinks to the bottom of the beaker.", solvent: "Does not dissolve in water." },
    { name: "Chlorine", description: "a dense, yellow-green gas.", heat: "Pale green gas fills the tube.", water: "Creates a pale, acidic bleach-like solution.", solvent: "Dissolves into a light yellow liquid." },
    { name: "Bromine", description: "a reddish-brown liquid.", heat: "Deep red-orange vapors fill the tube.", water: "Heavy orange-red liquid at the bottom.", solvent: "Orange-brown solution forms." },
    { name: "Phosphorus", description: "a white, red, or black solid.", heat: "Ignites into a bright white light/smoke.", water: "Does not dissolve; stays as a waxy solid.", solvent: "Partially dissolves in organic liquids." }
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
    { id: 'water', name: "Water Solubility" },
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
    
    // Reset view states
    document.getElementById('station-empty').classList.add('hidden');
    document.getElementById('station-active').classList.add('hidden');
    
    const exp = (currentPhase === 'M') ? experimentsM.find(e => e.id === testId) : experimentsX.find(e => e.id === testId);
    
    if (currentPhase === 'M') {
        // Show Setup Screen for Metals
        document.getElementById('station-setup').classList.remove('hidden');
        document.getElementById('setup-test-name').innerText = "Setup: " + exp.name;

        // Fill dropdowns
        const dropdowns = ['ref-1', 'ref-2', 'ref-3'];
        dropdowns.forEach(id => {
            const select = document.getElementById(id);
            select.innerHTML = referenceMetals.map(m => `<option value="${m.name}">${m.name}</option>`).join('');
        });
    } else {
        // Skip setup for Non-Metals (Phase X)
        runComparisonTest();
    }
}

function runComparisonTest() {
    document.getElementById('station-setup').classList.add('hidden');
    document.getElementById('station-active').classList.remove('hidden');
    
    const exp = (currentPhase === 'M') ? experimentsM.find(e => e.id === activeTest) : experimentsX.find(e => e.id === activeTest);
    const zone = document.getElementById('comparison-zone');
    const userResult = exp.static || (currentPhase === 'M' ? activeM[activeTest] : activeX[activeTest]);
    
    // Unknown Sample Header
    let html = `
        <div class="p-4 bg-blue-900/30 border border-blue-500 rounded-xl md:col-span-2 text-center shadow-lg">
            <p class="text-[10px] text-blue-400 uppercase font-black tracking-widest">Unknown Sample Result</p>
            <p class="text-xl text-white font-bold">${userResult}</p>
        </div>`;

    // Add Reference Results (Phase M only)
    if (currentPhase === 'M') {
        const selections = [
            document.getElementById('ref-1').value,
            document.getElementById('ref-2').value,
            document.getElementById('ref-3').value
        ];

        selections.forEach(name => {
            const metal = referenceMetals.find(m => m.name === name);
            html += `
                <div class="p-4 bg-gray-800 border border-gray-700 rounded-xl">
                    <p class="text-[10px] text-gray-500 uppercase font-black tracking-widest">${metal.name}</p>
                    <p class="text-gray-300 text-sm">${metal[activeTest] || "No Data"}</p>
                </div>`;
        });
    } else {
        // For Phase X, just add a placeholder if no comparisons
        html += `<div class="md:col-span-2 text-center text-gray-500 italic p-4 text-sm">No comparison needed for non-metal phase.</div>`;
    }
    
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
}

function checkPhaseTransition() {
    if (currentPhase === 'M' && completedM.length === 3) {
        alert("Phase 1 Complete! Transitioning to Element X.");
        currentPhase = 'X';
        document.getElementById('phase-title').innerText = "Phase 2: Testing Unknown X";
        document.getElementById('phase-title').className = "text-2xl font-bold text-emerald-400";
        document.getElementById('exp-count').innerText = "0 / 3";
    } else if (currentPhase === 'X' && completedX.length === 3) {
        showCER();
    }
    
    // Reset station view
    document.getElementById('station-empty').classList.remove('hidden');
    document.getElementById('station-active').classList.add('hidden');
    document.getElementById('station-setup').classList.add('hidden');
    loadMenu();
}

function showCER() {
    document.getElementById('lab-workspace').classList.add('hidden');
    document.getElementById('cer-screen').classList.remove('hidden');
    
    const log = document.getElementById('summary-log');
    let html = "<div class='space-y-2'><h4 class='text-blue-400 font-bold'>M Results</h4>";
    completedM.forEach(e => html += `<div class='text-sm bg-gray-900 p-2 rounded'><b>${e.name}:</b> ${e.result}</div>`);
    html += "</div><div class='space-y-2'><h4 class='text-emerald-400 font-bold'>X Results</h4>";
    completedX.forEach(e => html += `<div class='text-sm bg-gray-900 p-2 rounded'><b>${e.name}:</b> ${e.result}</div>`);
    log.innerHTML = html + "</div>";
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
