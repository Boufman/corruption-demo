// Strict mapping of the presentation flow[cite: 1]
const courseData = [
    {
        type: 'intro',
        title: 'UNDERSTANDING CORRUPTION IN MALAWI',
        content: 'This is a demo version of a 7-module course on Understanding Corruption in Malawi that every Malawian needs to attend. Both the content and the quizzes in this demo version are real and will test your knowledge of corruption. It is designed to help you appreciate how Empower-Online delivers this training.',
        audioFile: 'audio/01_intro.mp3' 
    },
    {
        type: 'list',
        title: 'WELCOME TO THE COURSE',
        content: 'After this Online course, you will be able to:',
        items: [
            'Explain what is corruption and what forms it takes.',
            'Recognize the signs of possible corruption.',
            'Explain the Causes and Effects of Corruption.',
            'Describe how to prevent corruption.'
        ],
        audioFile: 'audio/02_welcome.mp3'
    },
    {
        type: 'list',
        title: 'WHAT ARE THE COMMON FORMS?',
        content: 'Forms of corruption include:',
        items: ['Bribery', 'Embezzlement', 'Fraud', 'Nepotism', 'Abuse of Office', 'Procurement Fraud', 'Conflict of Interest', 'Extortion', 'Vote buying']
    },
    { type: 'diagnostic1' },
    { type: 'diagnostic2' },
    { type: 'dnd' },
    {
        type: 'list',
        title: 'PREVENTING CORRUPTION',
        content: 'Organizational Actions:',
        items: ['Internal audits', 'Whistleblower protection', 'Transparent procurement', 'Ethics training', 'Asset declaration', 'Conflict-of-interest']
    }
];

const quizData = [
    {
        question: '1. What is Corruption?',
        options: ['a. Making profits illegally', 'b. Abuse of entrusted power for private gain', 'c. Paying taxes', 'd. Managing public resources'],
        correctAnswer: 1
    },
    {
        question: '2. Nepotism involves',
        options: ['a. Paying taxes', 'b. Auditing finances', 'c. Community participation', 'd. Hiring family or friends unfairly'],
        correctAnswer: 3
    }
    // Remaining quiz questions follow this schema
];

let currentSlide = 0;
let currentQuizQuestion = 0;
let questionAttempts = 0;
let isQuizMode = false;

const appContainer = document.getElementById('app-container');
const audioPlayer = document.getElementById('narrator-audio');

function renderSlide() {
    appContainer.innerHTML = '';
    
    if (isQuizMode) {
        renderQuiz();
        return;
    }

    const slide = courseData[currentSlide];

    if (slide.type === 'diagnostic1') {
        renderDiagnosticOne();
        return;
    } else if (slide.type === 'diagnostic2') {
        renderDiagnosticTwo();
        return;
    } else if (slide.type === 'dnd') {
        renderDragAndDropExercise();
        return;
    }
    
    if (slide.audioFile) {
        audioPlayer.src = slide.audioFile;
        audioPlayer.play();
    }

    let htmlContent = `
        <div class="audio-active"></div><span style="color: var(--text-secondary); font-size: 0.9rem; text-transform: uppercase;">Audio Playing</span>
        <h1>${slide.title}</h1>
    `;

    if (slide.content) htmlContent += `<p>${slide.content}</p>`;

    if (slide.type === 'list' && slide.items) {
        htmlContent += '<ul>';
        slide.items.forEach(item => htmlContent += `<li>• ${item}</li>`);
        htmlContent += '</ul>';
    }

    htmlContent += `<button class="btn" onclick="nextSlide()">Continue</button>`;
    appContainer.innerHTML = htmlContent;
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= courseData.length) {
        isQuizMode = true;
    }
    renderSlide();
}

// --- Diagnostic Engine ---
function renderDiagnosticOne() {
    document.getElementById('alert-audio').play(); // System chime
    const modalHTML = `
        <div id="diagnostic-modal" class="modal-overlay active">
            <div class="modal-content">
                <div class="diagnostic-header">
                    <div style="width:8px; height:8px; background:var(--danger); border-radius:50%; animation: pulse 1s infinite;"></div>
                    SYSTEM ALERT: PRACTICAL EXERCISE 1
                </div>
                <p style="font-size: 1.1rem; color: #fff;">
                    You are working in a public institution. Your department is responsible for purchasing goods and services using public money. A supplier offers you money to ensure that their company wins a contract.
                </p>
                <h3 style="margin-top: 25px;">1. Is this corruption?</h3>
                <div class="btn-grid" id="step-1-btns">
                    <button class="btn" style="background: transparent; border: 1px solid var(--accent);" onclick="handleDiagnosticStepOne(true, 1)">Yes</button>
                    <button class="btn" style="background: transparent; border: 1px solid var(--accent);" onclick="handleDiagnosticStepOne(false, 1)">No</button>
                </div>
                <div id="diagnostic-step-2" class="diagnostic-step">
                    <h3>2. What form of corruption is involved?</h3>
                    <div class="btn-grid">
                        <button class="btn" style="background: transparent; border: 1px solid var(--text-secondary);" onclick="handleDiagnosticStepTwo('Bribery', 'Bribery')">Bribery</button>
                        <button class="btn" style="background: transparent; border: 1px solid var(--text-secondary);" onclick="handleDiagnosticStepTwo('Nepotism', 'Bribery')">Nepotism</button>
                        <button class="btn" style="background: transparent; border: 1px solid var(--text-secondary);" onclick="handleDiagnosticStepTwo('Procurement Fraud', 'Bribery')">Procurement Fraud</button>
                        <button class="btn" style="background: transparent; border: 1px solid var(--text-secondary);" onclick="handleDiagnosticStepTwo('Extortion', 'Bribery')">Extortion</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function renderDiagnosticTwo() {
    document.getElementById('alert-audio').play();
    const modalHTML = `
        <div id="diagnostic-modal" class="modal-overlay active">
            <div class="modal-content">
                <div class="diagnostic-header">
                    <div style="width:8px; height:8px; background:var(--danger); border-radius:50%; animation: pulse 1s infinite;"></div>
                    SYSTEM ALERT: PRACTICAL EXERCISE 2
                </div>
                <p style="font-size: 1.1rem; color: #fff;">
                    Your boss accepts a favour from a company that is currently doing business with your institution.
                </p>
                <h3 style="margin-top: 25px;">1. Is this corruption?</h3>
                <div class="btn-grid" id="step-1-btns">
                    <button class="btn" style="background: transparent; border: 1px solid var(--accent);" onclick="handleDiagnosticStepOne(true, 2)">Yes</button>
                    <button class="btn" style="background: transparent; border: 1px solid var(--accent);" onclick="handleDiagnosticStepOne(false, 2)">No</button>
                </div>
                <div id="diagnostic-step-2" class="diagnostic-step">
                    <h3>2. What form of corruption is involved?</h3>
                    <div class="btn-grid">
                        <button class="btn" style="background: transparent; border: 1px solid var(--text-secondary);" onclick="handleDiagnosticStepTwo('Bribery', 'Conflict of Interest')">Bribery</button>
                        <button class="btn" style="background: transparent; border: 1px solid var(--text-secondary);" onclick="handleDiagnosticStepTwo('Embezzlement', 'Conflict of Interest')">Embezzlement</button>
                        <button class="btn" style="background: transparent; border: 1px solid var(--text-secondary);" onclick="handleDiagnosticStepTwo('Procurement Fraud', 'Conflict of Interest')">Procurement Fraud</button>
                        <button class="btn" style="background: transparent; border: 1px solid var(--text-secondary);" onclick="handleDiagnosticStepTwo('Conflict of Interest', 'Conflict of Interest')">Conflict of Interest</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function handleDiagnosticStepOne(isCorruption, exerciseNumber) {
    if (isCorruption) {
        document.getElementById('step-1-btns').style.opacity = '0.5';
        document.getElementById('step-1-btns').style.pointerEvents = 'none';
        document.getElementById('diagnostic-step-2').style.display = 'block';
    } else {
        alert("Incorrect assessment. Review the definition of corruption.");
    }
}

function handleDiagnosticStepTwo(answer, correctAnswer) {
    if (answer === correctAnswer) {
        alert(`Diagnostic Complete: ${correctAnswer} identified.`);
        document.getElementById('diagnostic-modal').remove();
        nextSlide(); 
    } else {
        alert("Incorrect categorization. Re-analyze the scenario.");
    }
}

// --- Drag and Drop Engine ---
function renderDragAndDropExercise() {
    appContainer.innerHTML = `
        <h2 style="color: var(--accent); margin-bottom: 5px;">PRACTICAL EXERCISE 3</h2>
        <h1 style="font-size: 1.8rem; margin-top: 0;">The Health Centre Project</h1>
        <p style="font-size: 1rem; margin-bottom: 30px;">
            A district receives MK100 million to construct and equip a health centre. 
            When completed, construction materials are missing. Drag the correct prevention measures into the solution matrix.
        </p>
        <div class="dnd-container">
            <div id="source-zone" class="drop-zone">
                <div class="drop-zone-title">Available Prevention Measures</div>
                <div class="draggable-item" draggable="true" id="item1">Keep financial records</div>
                <div class="draggable-item" draggable="true" id="item2">Secret procurement</div>
                <div class="draggable-item" draggable="true" id="item3">Whistleblower protection</div>
                <div class="draggable-item" draggable="true" id="item4">Awarding contracts without competition</div>
                <div class="draggable-item" draggable="true" id="item5">Asset declaration</div>
            </div>
            <div id="target-zone" class="drop-zone">
                <div class="drop-zone-title">Required Solutions (Drag 3 Correct Measures Here)</div>
            </div>
        </div>
        <button id="verify-btn" class="btn" style="margin-top: 20px; display: none;" onclick="verifyDragAndDrop()">Verify Systems</button>
    `;
    initializeDragAndDrop();
}

function initializeDragAndDrop() {
    const draggables = document.querySelectorAll('.draggable-item');
    const dropZones = document.querySelectorAll('.drop-zone');
    const targetZone = document.getElementById('target-zone');
    const verifyBtn = document.getElementById('verify-btn');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (event) => {
            draggable.classList.add('dragging');
            event.dataTransfer.setData('text/plain', draggable.id); 
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
            if (targetZone.querySelectorAll('.draggable-item').length > 0) {
                verifyBtn.style.display = 'block';
            } else {
                verifyBtn.style.display = 'none';
            }
        });
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', e => {
            e.preventDefault(); 
            zone.classList.add('drag-over');
        });

        zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));

        zone.addEventListener('drop', event => {
            event.preventDefault();
            zone.classList.remove('drag-over');
            const draggingId = event.dataTransfer.getData('text/plain');
            const draggableElement = document.getElementById(draggingId);
            if (draggableElement) zone.appendChild(draggableElement);
        });
    });
}

function verifyDragAndDrop() {
    const targetZone = document.getElementById('target-zone');
    const droppedItems = Array.from(targetZone.querySelectorAll('.draggable-item')).map(item => item.id);
    const correctIds = ['item1', 'item3', 'item5']; 
    
    const isCorrect = droppedItems.length === correctIds.length && correctIds.every(id => droppedItems.includes(id));

    if (isCorrect) {
        alert("Systems Verified. Optimal solutions deployed.");
        nextSlide(); 
    } else {
        alert("System Warning: Sub-optimal measures detected. Re-evaluate your solutions.");
        renderDragAndDropExercise(); 
    }
}

// --- Quiz Engine ---
function renderQuiz() {
    const q = quizData[currentQuizQuestion];
    
    let htmlContent = `
        <h2 style="color: var(--accent);">END OF MODULE QUIZ</h2>
        <p>Attempt ${questionAttempts + 1} of 2 for this question.</p>
        <h1>${q.question}</h1>
        <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 20px;">
    `;

    q.options.forEach((opt, index) => {
        htmlContent += `<button class="btn" style="background: transparent; border: 1px solid var(--accent); color: var(--text-primary);" onclick="checkAnswer(${index})">${opt}</button>`;
    });

    htmlContent += `</div>`;
    appContainer.innerHTML = htmlContent;
}

function checkAnswer(selectedIndex) {
    const q = quizData[currentQuizQuestion];
    
    if (selectedIndex === q.correctAnswer) {
        questionAttempts = 0; 
        currentQuizQuestion++;
        
        if (currentQuizQuestion >= quizData.length) {
            appContainer.innerHTML = `
                <h1>UNDERSTANDING CORRUPTION IN MALAWI</h1>
                <p>The full course covers the following modules:<br>
                • Rethinking Corruption<br>
                • Values and Corruption<br>
                • Systems that encourage Corruption<br>
                • Personal Integrity under Pressure<br>
                • Culture versus Ethics in Corruption<br>
                • Justifying Corruption<br>
                • From Awareness to Action</p>
                <button class="btn">Click HERE to Access the Course</button>
            `;
        } else {
            renderQuiz();
        }
    } else {
        questionAttempts++;
        if (questionAttempts >= 2) {
            alert("Maximum attempts reached. Module restarting.");
            isQuizMode = false;
            currentSlide = 0;
            currentQuizQuestion = 0;
            questionAttempts = 0;
            renderSlide();
        } else {
            alert("Incorrect. You have one attempt remaining.");
            renderQuiz(); 
        }
    }
}

// Initialize application
renderSlide();