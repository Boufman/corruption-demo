// ============================================================
// UNDERSTANDING CORRUPTION IN MALAWI
// Full interactive course – every word from the source PowerPoint
// ============================================================

const courseData = [
    {
        type: 'intro',
        title: 'UNDERSTANDING CORRUPTION IN MALAWI',
        content: 'This is a demo version of a 7-module course on Understanding Corruption in Malawi that every Malawian needs to attend. Both the content and the quizzes in this demo version are real and will test your knowledge of corruption. It is designed to help you appreciate how Empower-Online delivers this training.',
        audioFile: 'audio/01_intro.mp3'
    },
    {
        type: 'list',
        title: 'WELCOME TO THE COURSE ON UNDERSTANDING CORRUPTION IN MALAWI',
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
        type: 'definition',
        title: 'WHAT IS CORRUPTION?',
        content: [
            'Corruption is the abuse of entrusted power for private gain.',
            'It occurs whenever an individual uses public or private authority to obtain benefits that are not legally or ethically deserved.'
        ],
        audioFile: 'audio/03_forms_of_corruption.mp3'
    },
    {
        type: 'list',
        title: 'WHAT ARE THE COMMON FORMS OF CORRUPTION?',
        content: 'Forms of corruption include:',
        items: [
            'Bribery',
            'Embezzlement',
            'Fraud',
            'Nepotism',
            'Abuse of Office',
            'Procurement Fraud',
            'Conflict of Interest',
            'Extortion',
            'Vote buying'
        ]
    },
    {
        type: 'list',
        title: 'WHAT ARE THE COMMON CAUSES OF CORRUPTION?',
        content: 'Common causes include:',
        items: [
            'Weak accountability',
            'Low salaries',
            'Political patronage',
            'Weak law enforcement',
            'Poverty',
            'Lack of transparency',
            'Poor procurement systems',
            'Cultural acceptance of gift-giving',
            'Limited citizen oversight'
        ]
    },
    { type: 'diagnostic1' },
    { type: 'diagnostic2' },
    {
        type: 'effects',
        title: 'EFFECTS OF CORRUPTION',
        content: 'Corruption can lead to:',
        sections: [
            {
                heading: 'SOCIAL EFFECTS',
                items: [
                    'Poor healthcare',
                    'Poor education',
                    'Increased inequality',
                    'Loss of public trust'
                ]
            },
            {
                heading: 'ECONOMIC EFFECTS',
                items: [
                    'Reduced investment',
                    'Increased public debt',
                    'Misuse of taxpayer money',
                    'Poor infrastructure'
                ]
            },
            {
                heading: 'POLITICAL EFFECTS',
                items: [
                    'Weak democracy',
                    'Electoral fraud',
                    'Reduced confidence in government',
                    'Poor governance'
                ]
            }
        ]
    },
    {
        type: 'prevention',
        title: 'PREVENTING CORRUPTION',
        content: 'To prevent corruption:',
        sections: [
            {
                heading: 'Individual Actions',
                items: [
                    'Refusal to pay bribes',
                    'Report suspected corruption',
                    'Keep financial records',
                    'Demand receipts',
                    'Follow procurement rules'
                ]
            },
            {
                heading: 'Organizational Actions',
                items: [
                    'Internal audits',
                    'Whistleblower protection',
                    'Transparent procurement',
                    'Ethics training',
                    'Asset declaration',
                    'Conflict-of-interest'
                ]
            }
        ]
    },
    { type: 'dnd' },
    { type: 'exercise4' },
    {
        type: 'modules',
        title: 'UNDERSTANDING CORRUPTION IN MALAWI',
        content: 'The full course covers the following modules:',
        items: [
            'Rethinking Corruption',
            'Values and Corruption',
            'Systems that encourage Corruption',
            'Personal Integrity under Pressure',
            'Culture versus Ethics in Corruption',
            'Justifying Corruption',
            'From Awareness to Action'
        ]
    }
];

const quizData = [
    {
        question: '1. What is Corruption?',
        options: [
            'a. Making profits illegally',
            'b. Abuse of entrusted power for private gain',
            'c. Paying taxes',
            'd. Managing public resources'
        ],
        correctAnswer: 1
    },
    {
        question: '2. Nepotism involves',
        options: [
            'a. Paying taxes',
            'b. Auditing finances',
            'c. Community participation',
            'd. Hiring family or friends unfairly'
        ],
        correctAnswer: 3
    },
    {
        question: '3. What is an example of bribery?',
        options: [
            'a. Winning a contract fairly',
            'b. Paying money to influence a public official',
            'c. Attending a meeting',
            'd. Declaring assets'
        ],
        correctAnswer: 1
    },
    {
        question: '4. Which is a consequence of corruption?',
        options: [
            'a. Improved investor confidence',
            'b. Better governance',
            'c. Misuse of public resources',
            'd. Lower inequality'
        ],
        correctAnswer: 2
    },
    {
        question: '5. Which of the following best demonstrates transparency?',
        options: [
            'a. Secret procurement',
            'b. Public disclosure of procurement process',
            'c. Destroying financial records',
            'd. Awarding contracts without competition'
        ],
        correctAnswer: 1
    },
    {
        question: '6. Which institution is responsible for investigating corruption in Malawi?',
        options: [
            'a. Ministry of Tourism',
            'b. Parliament only',
            'c. Anti-corruption Bureau',
            'd. Immigration Department'
        ],
        correctAnswer: 2
    },
    {
        question: '7. Which practice helps prevent corruption?',
        options: [
            'a. Keeping accurate financial records',
            'b. Ignoring procurement procedures',
            'c. Hiding information',
            'd. Accepting gifts from bidders'
        ],
        correctAnswer: 0
    },
    {
        question: '8. Which is NOT considered corruption?',
        options: [
            'a. Extortion',
            'b. Fraud',
            'c. Merit-based recruitment through a fair process',
            'd. Embezzlement'
        ],
        correctAnswer: 2
    },
    {
        question: '9. Why is accountability important?',
        options: [
            'a. It increased opportunities for bribery',
            'b. It prevents audits',
            'c. It reduces transparency',
            'd. It helps ensure people are answerable for their actions'
        ],
        correctAnswer: 3
    },
    {
        question: '10. What is the most effective long-term strategy against corruption?',
        options: [
            'a. Building a culture of integrity supported by strong institutions and active citizens',
            'b. Ignoring complaints',
            'c. Reducing financial oversight',
            'd. Keeping government decisions secret'
        ],
        correctAnswer: 0
    }
];

// ============================================================
// STATE
// ============================================================
let currentSlide = 0;
let currentQuizQuestion = 0;
let questionAttempts = 0;
let isQuizMode = false;

const appContainer = document.getElementById('app-container');
const audioPlayer = document.getElementById('narrator-audio');

// ============================================================
// CORE RENDER
// ============================================================
function renderSlide() {
    appContainer.innerHTML = '';
    appContainer.className = ''; // reset any previous classes

    if (isQuizMode) {
        renderQuiz();
        return;
    }

    const slide = courseData[currentSlide];
    if (!slide) return;

    // Special interactive types
    if (slide.type === 'diagnostic1') {
        renderDiagnosticOne();
        return;
    }
    if (slide.type === 'diagnostic2') {
        renderDiagnosticTwo();
        return;
    }
    if (slide.type === 'dnd') {
        renderDragAndDropExercise();
        return;
    }
    if (slide.type === 'exercise4') {
        renderExerciseFour();
        return;
    }

    // Audio
    if (slide.audioFile) {
        audioPlayer.src = slide.audioFile;
        audioPlayer.play().catch(() => {}); // silent fail if no file
    }

    let html = `
        <div class="slide-header">
            <div class="audio-active"></div>
            <span class="audio-label">Audio Playing</span>
        </div>
        <h1>${slide.title}</h1>
    `;

    if (slide.type === 'definition' && Array.isArray(slide.content)) {
        slide.content.forEach(para => {
            html += `<p>${para}</p>`;
        });
    } else if (slide.content && typeof slide.content === 'string') {
        html += `<p>${slide.content}</p>`;
    }

    // Simple list
    if (slide.type === 'list' && slide.items) {
        html += '<ul class="content-list">';
        slide.items.forEach(item => {
            html += `<li>• ${item}</li>`;
        });
        html += '</ul>';
    }

    // Effects / Prevention multi-section
    if ((slide.type === 'effects' || slide.type === 'prevention') && slide.sections) {
        html += '<div class="sections-grid">';
        slide.sections.forEach(sec => {
            html += `
                <div class="section-card">
                    <h3 class="section-heading">${sec.heading}</h3>
                    <ul class="content-list">
                        ${sec.items.map(i => `<li>• ${i}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
        html += '</div>';
    }

    // Modules list
    if (slide.type === 'modules' && slide.items) {
        html += '<ol class="modules-list">';
        slide.items.forEach((item, idx) => {
            html += `<li><span class="module-num">${idx + 1}</span> ${item}</li>`;
        });
        html += '</ol>';
        html += `
            <div class="cta-box">
                <button class="btn btn-primary" onclick="startQuiz()">Start End-of-Module Quiz</button>
            </div>
        `;
    } else {
        html += `<button class="btn" onclick="nextSlide()">Continue</button>`;
    }

    appContainer.innerHTML = html;
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= courseData.length) {
        // Should not normally reach here – modules slide starts quiz
        isQuizMode = true;
        currentQuizQuestion = 0;
        questionAttempts = 0;
    }
    renderSlide();
}

function startQuiz() {
    isQuizMode = true;
    currentQuizQuestion = 0;
    questionAttempts = 0;
    renderSlide();
}

// ============================================================
// DIAGNOSTIC ENGINE – Practical Exercise 1 & 2
// ============================================================
function renderDiagnosticOne() {
    // Play system alert
    const alertAudio = document.getElementById('alert-audio');
    if (alertAudio) alertAudio.play().catch(() => {});

    const modalHTML = `
        <div id="diagnostic-modal" class="modal-overlay active">
            <div class="modal-content">
                <div class="diagnostic-header">
                    <div class="pulse-dot"></div>
                    SYSTEM ALERT: PRACTICAL EXERCISE 1 — Corruption in Practice
                </div>
                <p class="scenario">
                    You are working in a public institution. Your department is responsible for purchasing goods and services using public money. A supplier offers you money to ensure that their company wins a contract.
                </p>
                <h3>1. Is this corruption?</h3>
                <div class="btn-grid" id="step-1-btns">
                    <button class="btn btn-outline" onclick="handleDiagnosticStepOne(true, 1)">Yes</button>
                    <button class="btn btn-outline" onclick="handleDiagnosticStepOne(false, 1)">No</button>
                </div>
                <div id="diagnostic-step-2" class="diagnostic-step">
                    <h3>2. What form of corruption is involved?</h3>
                    <div class="btn-grid">
                        <button class="btn btn-outline-secondary" onclick="handleDiagnosticStepTwo('Bribery', 'Bribery')">Bribery</button>
                        <button class="btn btn-outline-secondary" onclick="handleDiagnosticStepTwo('Nepotism', 'Bribery')">Nepotism</button>
                        <button class="btn btn-outline-secondary" onclick="handleDiagnosticStepTwo('Procurement Fraud', 'Bribery')">Procurement Fraud</button>
                        <button class="btn btn-outline-secondary" onclick="handleDiagnosticStepTwo('Extortion', 'Bribery')">Extortion</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function renderDiagnosticTwo() {
    const alertAudio = document.getElementById('alert-audio');
    if (alertAudio) alertAudio.play().catch(() => {});

    const modalHTML = `
        <div id="diagnostic-modal" class="modal-overlay active">
            <div class="modal-content">
                <div class="diagnostic-header">
                    <div class="pulse-dot"></div>
                    SYSTEM ALERT: PRACTICAL EXERCISE 2 — Corruption in Practice
                </div>
                <p class="scenario">
                    Your boss accepts a favour from a company that is currently doing business with your institution.
                </p>
                <h3>1. Is this corruption?</h3>
                <div class="btn-grid" id="step-1-btns">
                    <button class="btn btn-outline" onclick="handleDiagnosticStepOne(true, 2)">Yes</button>
                    <button class="btn btn-outline" onclick="handleDiagnosticStepOne(false, 2)">No</button>
                </div>
                <div id="diagnostic-step-2" class="diagnostic-step">
                    <h3>2. What form of corruption is involved?</h3>
                    <div class="btn-grid">
                        <button class="btn btn-outline-secondary" onclick="handleDiagnosticStepTwo('Bribery', 'Conflict of Interest')">Bribery</button>
                        <button class="btn btn-outline-secondary" onclick="handleDiagnosticStepTwo('Embezzlement', 'Conflict of Interest')">Embezzlement</button>
                        <button class="btn btn-outline-secondary" onclick="handleDiagnosticStepTwo('Procurement Fraud', 'Conflict of Interest')">Procurement Fraud</button>
                        <button class="btn btn-outline-secondary" onclick="handleDiagnosticStepTwo('Conflict of Interest', 'Conflict of Interest')">Conflict of Interest</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function handleDiagnosticStepOne(isCorruption, exerciseNumber) {
    if (isCorruption) {
        const btns = document.getElementById('step-1-btns');
        btns.style.opacity = '0.45';
        btns.style.pointerEvents = 'none';
        document.getElementById('diagnostic-step-2').style.display = 'block';
    } else {
        showFeedback("Incorrect assessment. Review the definition of corruption: it is the abuse of entrusted power for private gain.", false);
    }
}

function handleDiagnosticStepTwo(answer, correctAnswer) {
    if (answer === correctAnswer) {
        showFeedback(`Diagnostic Complete: ${correctAnswer} identified.`, true);
        setTimeout(() => {
            const modal = document.getElementById('diagnostic-modal');
            if (modal) modal.remove();
            nextSlide();
        }, 1200);
    } else {
        showFeedback("Incorrect categorization. Re-analyze the scenario.", false);
    }
}

// ============================================================
// DRAG AND DROP – Practical Exercise 3 (Health Centre Project)
// ============================================================
function renderDragAndDropExercise() {
    appContainer.innerHTML = `
        <div class="exercise-badge">PRACTICAL EXERCISE 3</div>
        <h1 class="exercise-title">The Health Centre Project</h1>
        <p class="scenario-text">
            A district receives MK100 million to construct and equip a health centre. The approved expenditure includes construction materials and medical equipment. When the project is completed, however, the community discovers that some construction materials are missing and some medical equipment has not been delivered.
        </p>

        <div class="exercise-steps">
            <div class="step-card">
                <h3>Step 1 — Identify likely effects</h3>
                <p>What are the likely effects of this form of corruption?</p>
                <div class="chip-group">
                    <span class="chip">Reduced investment</span>
                    <span class="chip">Poor healthcare</span>
                    <span class="chip">Poor education</span>
                    <span class="chip">Weak democracy</span>
                </div>
            </div>

            <div class="step-card">
                <h3>Step 2 — Identify the consequences</h3>
                <p>Explain three ways this situation could affect ordinary citizens. Think about:</p>
                <ul class="content-list compact">
                    <li>• Public money</li>
                    <li>• Healthcare</li>
                    <li>• Infrastructure</li>
                    <li>• Trust in government</li>
                </ul>
            </div>
        </div>

        <h3 class="solution-heading">Step 3 — Design the solution</h3>
        <p class="scenario-text">
            You have been asked to prevent this from happening again. Drag the correct prevention measures into the solution matrix. Your recommendations should include measures relating to Transparency, Procurement, Financial control, Accountability and Reporting suspected corruption.
        </p>

        <div class="dnd-container">
            <div id="source-zone" class="drop-zone">
                <div class="drop-zone-title">Available Prevention Measures</div>
                <div class="draggable-item" draggable="true" id="item1">Keep financial records</div>
                <div class="draggable-item" draggable="true" id="item2">Secret procurement</div>
                <div class="draggable-item" draggable="true" id="item3">Whistleblower protection</div>
                <div class="draggable-item" draggable="true" id="item4">Awarding contracts without competition</div>
                <div class="draggable-item" draggable="true" id="item5">Asset declaration</div>
                <div class="draggable-item" draggable="true" id="item6">Demand receipts</div>
                <div class="draggable-item" draggable="true" id="item7">Transparent procurement</div>
            </div>
            <div id="target-zone" class="drop-zone">
                <div class="drop-zone-title">Required Solutions (Drag the correct measures here)</div>
            </div>
        </div>
        <button id="verify-btn" class="btn" style="margin-top: 24px; display: none;" onclick="verifyDragAndDrop()">Verify Systems</button>
    `;
    initializeDragAndDrop();
}

function initializeDragAndDrop() {
    const draggables = document.querySelectorAll('.draggable-item');
    const dropZones = document.querySelectorAll('.drop-zone');
    const targetZone = document.getElementById('target-zone');
    const verifyBtn = document.getElementById('verify-btn');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            draggable.classList.add('dragging');
            e.dataTransfer.setData('text/plain', draggable.id);
        });
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
            const count = targetZone.querySelectorAll('.draggable-item').length;
            verifyBtn.style.display = count > 0 ? 'block' : 'none';
        });
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', e => {
            e.preventDefault();
            zone.classList.add('drag-over');
        });
        zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
        zone.addEventListener('drop', e => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            const id = e.dataTransfer.getData('text/plain');
            const el = document.getElementById(id);
            if (el) zone.appendChild(el);
        });
    });
}

function verifyDragAndDrop() {
    const targetZone = document.getElementById('target-zone');
    const dropped = Array.from(targetZone.querySelectorAll('.draggable-item')).map(i => i.id);

    // Correct measures from the PowerPoint context
    const correctIds = ['item1', 'item3', 'item5', 'item6', 'item7'];

    const allCorrect = correctIds.every(id => dropped.includes(id)) &&
                       !dropped.includes('item2') &&
                       !dropped.includes('item4');

    if (allCorrect && dropped.length >= 3) {
        showFeedback("Systems Verified. Optimal solutions deployed.", true);
        setTimeout(() => nextSlide(), 1100);
    } else {
        showFeedback("System Warning: Sub-optimal measures detected. Re-evaluate your solutions. Focus on transparency, financial control, accountability and reporting.", false);
        setTimeout(() => renderDragAndDropExercise(), 1600);
    }
}

// ============================================================
// PRACTICAL EXERCISE 4
// ============================================================
function renderExerciseFour() {
    appContainer.innerHTML = `
        <div class="exercise-badge">PRACTICAL EXERCISE 4</div>
        <h1 class="exercise-title">The Health Centre Project — Prevention</h1>
        <p class="scenario-text">
            How could this kind of corruption be prevented?
        </p>
        <p class="scenario-text" style="margin-bottom: 28px;">
            Select all the measures that should be introduced:
        </p>

        <div class="checkbox-grid" id="ex4-options">
            <label class="check-item">
                <input type="checkbox" value="Asset declaration">
                <span>Asset declaration</span>
            </label>
            <label class="check-item">
                <input type="checkbox" value="Keep financial records">
                <span>Keep financial records</span>
            </label>
            <label class="check-item">
                <input type="checkbox" value="Demand receipts">
                <span>Demand receipts</span>
            </label>
            <label class="check-item">
                <input type="checkbox" value="Whistleblower protection">
                <span>Whistleblower protection</span>
            </label>
            <label class="check-item">
                <input type="checkbox" value="Secret procurement">
                <span>Secret procurement</span>
            </label>
            <label class="check-item">
                <input type="checkbox" value="Awarding contracts without competition">
                <span>Awarding contracts without competition</span>
            </label>
        </div>

        <button class="btn" style="margin-top: 28px;" onclick="verifyExerciseFour()">Verify Prevention Measures</button>
    `;
}

function verifyExerciseFour() {
    const checked = Array.from(document.querySelectorAll('#ex4-options input:checked')).map(i => i.value);
    const correct = [
        'Asset declaration',
        'Keep financial records',
        'Demand receipts',
        'Whistleblower protection'
    ];

    const isCorrect = correct.every(c => checked.includes(c)) &&
                      !checked.includes('Secret procurement') &&
                      !checked.includes('Awarding contracts without competition');

    if (isCorrect) {
        showFeedback("Correct. These measures strengthen transparency, financial control and accountability.", true);
        setTimeout(() => nextSlide(), 1200);
    } else {
        showFeedback("Not quite. Review the individual and organizational actions that prevent corruption.", false);
    }
}

// ============================================================
// QUIZ ENGINE
// ============================================================
function renderQuiz() {
    if (currentQuizQuestion >= quizData.length) {
        // Finished
        appContainer.innerHTML = `
            <h1>UNDERSTANDING CORRUPTION IN MALAWI</h1>
            <p>Congratulations. You have completed the demo module.</p>
            <p>The full course covers the following modules:</p>
            <ol class="modules-list">
                <li><span class="module-num">1</span> Rethinking Corruption</li>
                <li><span class="module-num">2</span> Values and Corruption</li>
                <li><span class="module-num">3</span> Systems that encourage Corruption</li>
                <li><span class="module-num">4</span> Personal Integrity under Pressure</li>
                <li><span class="module-num">5</span> Culture versus Ethics in Corruption</li>
                <li><span class="module-num">6</span> Justifying Corruption</li>
                <li><span class="module-num">7</span> From Awareness to Action</li>
            </ol>
            <div class="cta-box">
                <button class="btn btn-primary">Click HERE to Access the Course</button>
            </div>
        `;
        return;
    }

    const q = quizData[currentQuizQuestion];

    let html = `
        <div class="quiz-header">
            <span class="quiz-badge">END OF MODULE QUIZ</span>
            <span class="attempt-label">Attempt ${questionAttempts + 1} of 2 for this question</span>
        </div>
        <h1 class="quiz-question">${q.question}</h1>
        <div class="options-list">
    `;

    q.options.forEach((opt, index) => {
        html += `
            <button class="btn btn-option" onclick="checkAnswer(${index})">
                ${opt}
            </button>
        `;
    });

    html += `</div>
        <p class="quiz-note">
            You are expected to get all questions right. Should you get any question wrong, you will be given one more opportunity to answer it correctly. Should you get it wrong after the second attempt, you will be required to learn the entire module all over again.
        </p>
    `;

    appContainer.innerHTML = html;
}

function checkAnswer(selectedIndex) {
    const q = quizData[currentQuizQuestion];

    if (selectedIndex === q.correctAnswer) {
        questionAttempts = 0;
        currentQuizQuestion++;
        showFeedback("Correct.", true);
        setTimeout(() => renderQuiz(), 900);
    } else {
        questionAttempts++;
        if (questionAttempts >= 2) {
            showFeedback("Maximum attempts reached. Module restarting.", false);
            setTimeout(() => {
                isQuizMode = false;
                currentSlide = 0;
                currentQuizQuestion = 0;
                questionAttempts = 0;
                renderSlide();
            }, 1400);
        } else {
            showFeedback("Incorrect. You have one attempt remaining.", false);
            setTimeout(() => renderQuiz(), 1100);
        }
    }
}

// ============================================================
// FEEDBACK TOAST
// ============================================================
function showFeedback(message, isSuccess) {
    // Remove any existing toast
    const old = document.querySelector('.feedback-toast');
    if (old) old.remove();

    const toast = document.createElement('div');
    toast.className = `feedback-toast ${isSuccess ? 'success' : 'error'}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2200);
}

// ============================================================
// INIT
// ============================================================
renderSlide();
