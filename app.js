const modules = [
  {id:1,title:"Course introduction",type:"intro"},
  {id:2,title:"Course outcomes",type:"outcomes"},
  {id:3,title:"What is corruption?",type:"definition"},
  {id:4,title:"Forms and causes",type:"forms_causes"},
  {id:5,title:"Effects and prevention",type:"effects_prevention"},
  {id:6,title:"Practical Exercises 1 & 2",type:"scenario1"},
  {id:7,title:"Practical Exercises 3 & 4",type:"scenario2"},
  {id:8,title:"End-of-module quiz",type:"quiz"}
];

const quizData = [
  {q:"What is Corruption?", options:["a. Making profits illegally","b. Abuse of entrusted power for private gain","c. Paying taxes","d. Managing public resources"], correct:1, feedback:"Answer: B"},
  {q:"2. Nepotism involves", options:["a. Paying taxes","b. Auditing finances","c. Community participation","d. Hiring family or friends unfairly"], correct:3, feedback:"Answer: D"},
  {q:"3. What is an example of bribery?", options:["a. Winning a contract fairly","b. Paying money to influence a public official","c. Attending a meeting","d. Declaring assets"], correct:1, feedback:"Answer: B"},
  {q:"4. Which is a consequence of corruption?", options:["a. Improved investor confidence","b. Better governance","c. Misuse of public resources","d. Lower inequality"], correct:2, feedback:"Answer: C"},
  {q:"5. Which of the following best demonstrates transparency?", options:["a. Secret procurement","b. Public disclosure of procurement process","c. Destroying financial records","d. Awarding contracts without competition"], correct:1, feedback:"Answer: B"},
  {q:"6. Which institution is responsible for investigating corruption in Malawi?", options:["a. Ministry of Tourism","b. Parliament only","c. Anti-corruption Bureau","d. Immigration Department"], correct:2, feedback:"Answer: C"},
  {q:"7. Which practice helps prevent corruption?", options:["a. Keeping accurate finding records","b. Ignoring procurement procedures","c. Hiding information","d. Accepting gifts from bidders"], correct:0, feedback:"Answer: A"},
  {q:"8. Which is NOT considered corruption?", options:["a. Extortion","b. Fraud","c. Merit-based recruitment through a fair process","d. Embezzlement"], correct:2, feedback:"Answer: C"},
  {q:"9. Why is accountability important?", options:["a. It increased opportunities for bribery","b. It prevents audits","c. It reduces transparency","d. It helps ensure people are answerable for their people"], correct:3, feedback:"Answer: D"},
  {q:"10. What is the most effective long-term strategy against corruption?", options:["a. Building a culture of integrity supported by strong institutions and active citizens","b. Ignoring complaints","c. Reducing financial oversight","d. Keeping government decisions secret"], correct:0, feedback:"Answer: A"}
];

let currentModule = 1;
let completed = new Set();
let quizIndex = 0;
let quizScore = 0;

const view = document.getElementById("courseView");
const nav = document.getElementById("moduleNav");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const audio = document.getElementById("narratorAudio");

function renderNav(){
  nav.innerHTML = modules.map(m => `
    <button class="module-item ${m.id===currentModule?"active":""} ${completed.has(m.id)?"complete":""}" onclick="goTo(${m.id})">
      <span class="module-number">${completed.has(m.id)?"✓":m.id}</span>
      <span class="module-label">${m.title}</span>
    </button>`).join("");
  const pct = Math.round((completed.size / modules.length) * 100);
  progressBar.style.width = pct + "%";
  progressText.textContent = pct + "%";
}
function markComplete(id){
  completed.add(id);
  renderNav();
}
function goTo(id){
  currentModule=id;
  renderNav();
  renderCurrent();
  window.scrollTo({top:0,behavior:"smooth"});
}
function next(){
  markComplete(currentModule);
  if(currentModule < modules.length) goTo(currentModule+1);
  else renderCurrent();
}
function audioPanel(file){
  return `<div class="audio-panel">
    <span class="audio-badge">COURSE AUDIO</span>
    <audio controls autoplay src="${file}"></audio>
  </div>`;
}
function pageHead(eyebrow,title,lead,meta=""){
  return `<div class="page-head">
    <div class="eyebrow">${eyebrow}</div>
    <h1>${title}</h1>
    <p class="lead">${lead}</p>
    ${meta ? `<div class="meta-row">${meta}</div>`:""}
  </div>`;
}
function renderCurrent(){
  const m=modules[currentModule-1];
  if(m.type==="intro") renderIntro();
  if(m.type==="outcomes") renderOutcomes();
  if(m.type==="definition") renderDefinition();
  if(m.type==="forms_causes") renderFormsCauses();
  if(m.type==="effects_prevention") renderEffectsPrevention();
  if(m.type==="scenario1") renderScenario1();
  if(m.type==="scenario2") renderScenario2();
  if(m.type==="quiz") renderQuiz();
}

function renderIntro(){
  view.innerHTML = pageHead("COURSE OVERVIEW","UNDERSTANDING CORRUPTION IN MALAWI",
    "This is a demo version of a 7-module course on Understanding Corruption in Malawi that every Malawian needs to attend.",
    `<span><strong>Format:</strong> Online self-paced</span><span><strong>Modules:</strong> 8</span><span><strong>Activities:</strong> Scenarios + assessment</span>`) + `
    <div class="card">
      <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop" style="width: 100%; height: 250px; object-fit: cover; border-radius: 6px; margin-bottom: 20px;" alt="Course Introduction Image" />
      <h2>WELCOME TO THE COURSE ON UNDERSTANDING CORRUPTION IN MALAWI</h2>
      <p style="font-size:13px;line-height:1.7;color:#596b76;margin-bottom:20px;">Both the content and the quizzes in this demo version are real and will test your knowledge of corruption. It is designed to help you appreciate how Empower-Online delivers this training.</p>
      ${audioPanel("audio/01_intro.mp3")}
    </div>
    <div class="action-row"><span class="section-note">Estimated study time: self-paced</span><button class="btn" onclick="next()">Start</button></div>`;
}

function renderOutcomes(){
  view.innerHTML = pageHead("MODULE 2 · OUTCOMES","Course Outcomes",
    "Review the key learning objectives for this course.") + `
    <div class="card">
      <div style="background-color: #f6d258; padding: 14px 20px; border: 1px solid #486a32; margin-bottom: 20px; border-radius: 4px;">
        <h2 style="color: #638c41; margin: 0; font-size: 22px; font-weight: bold; letter-spacing: 1px;">After this Online course, you will be able to:</h2>
      </div>
      <ul class="clean-list" style="color: #4f802a; font-size: 18px; margin-bottom: 30px; border: none; padding-left: 20px;">
        <li style="border: none; padding: 6px 0;">1. Explain what is corruption and what forms it takes.</li>
        <li style="border: none; padding: 6px 0;">2. Recognize the signs of possible corruption.</li>
        <li style="border: none; padding: 6px 0;">3. Explain the Causes and Effects of Corruption.</li>
        <li style="border: none; padding: 6px 0;">4. Describe how to prevent corruption.</li>
      </ul>
      ${audioPanel("audio/02_welcome.mp3")}
    </div>
    <div class="action-row"><span class="section-note">Module 2 of 8</span><button class="btn" onclick="next()">Continue</button></div>`;
}

function renderDefinition(){
  view.innerHTML = pageHead("MODULE 3 · FOUNDATIONS","WHAT IS CORRUPTION?",
    "Before examining specific forms, establish a clear working definition.") + `
    <div class="card">
      <ul class="clean-list">
        <li>1. Corruption is the abuse of entrusted power for private gain.</li>
        <li>2. It occurs whenever an individual uses public or private authority to obtain benefits that are not legally or ethically deserved.</li>
      </ul>
    </div>
    <div class="action-row"><span class="section-note">Module 3 of 8</span><button class="btn" onclick="next()">Continue</button></div>`;
}

function renderFormsCauses(){
  window.mod4FormsClicked = false;
  window.mod4CausesClicked = false;

  const forms=["1. Bribery","2. Embezzlement","3. Fraud","4. Nepotism","5. Abuse of Office","6. Procurement Fraud","7. Conflict of Interest","8. Extortion","9. Vote buying"];
  const causes=["1. Weak accountability","2. Low salaries","3. Political patronage","4. Weak law enforcement","5. Poverty","6. Lack of transparency","7. Poor procurement systems","8. Cultural acceptance of gift-giving","9. Limited citizen oversight"];
  
  view.innerHTML = pageHead("MODULE 4 · RECOGNITION","Forms and Causes", "") + `
    <div class="card-grid" style="overflow-x: hidden; padding: 5px;">
      <div id="formsCard" class="card" style="cursor: pointer; transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1); transform: translateX(30px);" onclick="toggleMod4('forms')">
        <h2 style="display:flex; justify-content:space-between; align-items:center; font-size: 16px; margin:0; pointer-events:none;">
          <span>WHAT ARE THE COMMON FORMS OF CORRUPTION?</span>
          <span id="formsIcon" style="transition: transform 0.4s; font-size: 24px; color: var(--blue);">+</span>
        </h2>
        <div id="formsContent" style="max-height: 0; overflow: hidden; opacity: 0; transition: all 0.5s ease;">
          <ul class="clean-list" style="margin-left: 0; margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px;">
            ${forms.map(x=>`<li style="padding:4px 0; border:none; font-size:13px;">${x}</li>`).join("")}
          </ul>
        </div>
      </div>
      <div id="causesCard" class="card" style="cursor: pointer; transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1); transform: translateX(-30px);" onclick="toggleMod4('causes')">
        <h2 style="display:flex; justify-content:space-between; align-items:center; font-size: 16px; margin:0; pointer-events:none;">
          <span>WHAT ARE THE COMMON CAUSES OF CORRUPTION?</span>
          <span id="causesIcon" style="transition: transform 0.4s; font-size: 24px; color: var(--blue);">+</span>
        </h2>
        <div id="causesContent" style="max-height: 0; overflow: hidden; opacity: 0; transition: all 0.5s ease;">
          <ul class="clean-list" style="margin-left: 0; margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px;">
            ${causes.map(x=>`<li style="padding:4px 0; border:none; font-size:13px;">${x}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
    <div class="action-row">
      <span class="section-note">Click both panels to expand them and unlock the next module.</span>
      <button id="mod4Next" class="btn" disabled style="opacity:0.5; cursor:not-allowed;" onclick="next()">Continue</button>
    </div>`;
}

window.toggleMod4 = function(type) {
  const content = document.getElementById(type + 'Content');
  const card = document.getElementById(type + 'Card');
  const icon = document.getElementById(type + 'Icon');

  const isExpanded = content.style.maxHeight !== '0px' && content.style.maxHeight !== '';

  if (type === 'forms') window.mod4FormsClicked = true;
  if (type === 'causes') window.mod4CausesClicked = true;

  if (!isExpanded) {
    content.style.maxHeight = content.scrollHeight + 50 + "px";
    content.style.opacity = "1";
    card.style.transform = "translateX(0)"; 
    icon.style.transform = "rotate(45deg)";
  } else {
    content.style.maxHeight = "0px";
    content.style.opacity = "0";
    card.style.transform = type === 'forms' ? "translateX(30px)" : "translateX(-30px)";
    icon.style.transform = "rotate(0deg)";
  }

  if (window.mod4FormsClicked && window.mod4CausesClicked) {
    const btn = document.getElementById('mod4Next');
    if (btn) {
      btn.disabled = false;
      btn.style.opacity = "1";
      btn.style.cursor = "pointer";
    }
  }
};

function renderEffectsPrevention(){
  window.mod5Views = { social: false, economic: false, political: false };
  
  view.innerHTML = pageHead("MODULE 5 · IMPACT","Effects and Prevention", "Select the buttons to learn how corruption impacts society.") + `
    <div id="effectsSection" class="card" style="background: var(--blue); text-align: center;">
      <h2 style="color: #fff; margin-bottom: 10px;">EFFECTS OF CORRUPTION</h2>
      <p style="color: #fff; font-size: 13px; margin-bottom: 20px;">Click each category below to view the effects.</p>
      
      <div class="icon-triangle">
        <div class="icon-btn-large" onclick="openMod5Modal('social')">
          <div class="icon-circle-large" id="icon-social">🏥</div>
          <div class="icon-label-large">Social Effects</div>
        </div>
        <div class="icon-btn-large" onclick="openMod5Modal('economic')">
          <div class="icon-circle-large" id="icon-economic">📉</div>
          <div class="icon-label-large">Economic Effects</div>
        </div>
        <div class="icon-btn-large" onclick="openMod5Modal('political')">
          <div class="icon-circle-large" id="icon-political">⚖️</div>
          <div class="icon-label-large">Political Effects</div>
        </div>
      </div>
      
      <div style="margin-top:30px; min-height: 40px;">
        <button id="btnToPrevention" class="btn success" style="display:none; font-size: 14px;" onclick="showPrevention()">Move to Preventing Corruption</button>
      </div>
    </div>

    <div id="preventionSection" style="display:none;">
      <div class="card">
        <h2>PREVENTING CORRUPTION</h2>
        <p style="font-size:13px; color:#596b76;">To prevent corruption:</p>
        <div class="card-grid">
          <div class="objective"><strong>Individual Actions</strong>❖ Refusal to pay bribes<br>❖ Report suspected corruption<br>❖ Keep financial records<br>❖ Demand receipts<br>❖ Follow procurement rules</div>
          <div class="objective"><strong>Organizational Actions</strong>❖ Internal audits<br>❖ Whistleblower protection<br>❖ Transparent procurement<br>❖ Ethics training<br>❖ Asset declaration<br>❖ Conflict-of-interest</div>
        </div>
      </div>
      <div class="action-row"><span class="section-note">Module 5 of 8</span><button class="btn" onclick="next()">Continue</button></div>
    </div>

    <!-- Interactive Graphic Overlay/Modal -->
    <div id="mod5Modal" class="modal-overlay">
      <div class="modal-content">
        <h2 id="mod5ModalTitle" style="color: var(--navy); margin-bottom: 15px;"></h2>
        <div id="mod5ModalBody" style="font-size: 14px; color: var(--ink);"></div>
        <button class="btn" style="margin-top:25px; width:100%;" onclick="closeMod5Modal()">Close</button>
      </div>
    </div>
  `;
}

window.openMod5Modal = function(type) {
  const title = document.getElementById('mod5ModalTitle');
  const body = document.getElementById('mod5ModalBody');
  
  if(type === 'social') {
    title.textContent = "SOCIAL EFFECTS";
    body.innerHTML = '<ul class="clean-list" style="text-align:left;"><li>❖ Poor healthcare</li><li>❖ Poor education</li><li>❖ Increased inequality</li><li>❖ Loss of public trust</li></ul>';
  } else if(type === 'economic') {
    title.textContent = "ECONOMIC EFFECTS";
    body.innerHTML = '<ul class="clean-list" style="text-align:left;"><li>❖ Reduced investment</li><li>❖ Increased public debt</li><li>❖ Misuse of taxpayer money</li><li>❖ Poor infrastructure</li></ul>';
  } else if(type === 'political') {
    title.textContent = "POLITICAL EFFECTS";
    body.innerHTML = '<ul class="clean-list" style="text-align:left;"><li>❖ Weak democracy</li><li>❖ Electoral fraud</li><li>❖ Reduced confidence in government</li><li>❖ Poor governance</li></ul>';
  }
  
  document.getElementById('mod5Modal').classList.add('show');
  window.mod5Views[type] = true;
  
  const icon = document.getElementById('icon-' + type);
  icon.classList.add('viewed');
  
  if(window.mod5Views.social && window.mod5Views.economic && window.mod5Views.political) {
    document.getElementById('btnToPrevention').style.display = 'inline-block';
  }
};

window.closeMod5Modal = function() {
  document.getElementById('mod5Modal').classList.remove('show');
};

window.showPrevention = function() {
  document.getElementById('effectsSection').style.display = 'none';
  document.getElementById('preventionSection').style.display = 'block';
};

function renderScenario1(){
  view.innerHTML = pageHead("MODULE 6 · PRACTICAL ACTIVITY","Practical Exercises 1 & 2", "") + `
    <div class="card">
      <div class="scenario"><div class="scenario-label">Practical Exercise 1 — Corruption in Practice</div>
      <p>You are working in a public institution. Your department is responsible for purchasing goods and services using public money. A supplier offers you money to ensure that their company wins a contract.</p></div>
      <div class="question" style="font-size:14px; margin-top:10px;">1. Is this corruption?</div>
      <div class="choice-grid" style="margin-bottom:15px;">
        <button class="choice" onclick="this.style.background='var(--green-soft)'">Yes</button>
        <button class="choice" onclick="this.style.background='#fbf0f0'">No</button>
      </div>
      <div class="question" style="font-size:14px;">2. What form of corruption is involved?</div>
      <div class="choice-grid">
        <button class="choice" onclick="this.style.background='var(--green-soft)'">Bribery</button>
        <button class="choice" onclick="this.style.background='#fbf0f0'">Nepotism</button>
        <button class="choice" onclick="this.style.background='#fbf0f0'">Procurement Fraud</button>
        <button class="choice" onclick="this.style.background='#fbf0f0'">Extortion</button>
      </div>
    </div>
    <div class="card">
      <div class="scenario"><div class="scenario-label">Practical Exercise 2 — Corruption in Practice</div>
      <p>Your boss accepts a favour from a company that is currently doing business with your institution.</p></div>
      <div class="question" style="font-size:14px; margin-top:10px;">1. Is this corruption?</div>
      <div class="choice-grid" style="margin-bottom:15px;">
        <button class="choice" onclick="this.style.background='var(--green-soft)'">Yes</button>
        <button class="choice" onclick="this.style.background='#fbf0f0'">No</button>
      </div>
      <div class="question" style="font-size:14px;">2. What form of corruption is involved?</div>
      <div class="choice-grid">
        <button class="choice" onclick="this.style.background='#fbf0f0'">Bribery</button>
        <button class="choice" onclick="this.style.background='#fbf0f0'">Embezzlement</button>
        <button class="choice" onclick="this.style.background='#fbf0f0'">Procurement Fraud</button>
        <button class="choice" onclick="this.style.background='var(--green-soft)'">Conflict of Interest</button>
      </div>
    </div>
    <div class="action-row"><span class="section-note">Module 6 of 8</span><button class="btn" onclick="next()">Continue</button></div>`;
}

function renderScenario2(){
  view.innerHTML = pageHead("MODULE 7 · PRACTICAL ACTIVITY","Practical Exercises 3 & 4", "") + `
    <div class="card">
      <div class="scenario"><div class="scenario-label">Practical Exercise 3 — The Health Centre Project</div>
      <p>A district receives MK100 million to construct and equip a health centre. The approved expenditure includes construction materials and medical equipment. When the project is completed, however, the community discovers that some construction materials are missing and some medical equipment has not been delivered.</p></div>
      <div class="question" style="font-size:14px; margin-top:10px;">What are the likely effects of this form of corruption?</div>
      <div class="choice-grid" style="margin-bottom:15px;">
        <button class="choice" onclick="this.style.background='var(--green-soft)'">Reduced investment</button>
        <button class="choice" onclick="this.style.background='var(--green-soft)'">Poor healthcare</button>
        <button class="choice" onclick="this.style.background='var(--green-soft)'">Poor education</button>
        <button class="choice" onclick="this.style.background='var(--green-soft)'">Weak democracy</button>
      </div>
      <div class="question" style="font-size:14px;">Step 2 — Identify the consequences</div>
      <p style="font-size:13px; color:#596b76;">Explain three ways this situation could affect ordinary citizens.</p>
    </div>
    <div class="card">
      <div class="scenario"><div class="scenario-label">Practical Exercise 4 — The Health Centre Project</div>
      <div class="question" style="font-size:14px; margin-top:10px;">How could this kind of corruption be prevented?</div>
      <div class="choice-grid">
        <button class="choice" onclick="this.style.background='var(--green-soft)'">Asset declaration</button>
        <button class="choice" onclick="this.style.background='var(--green-soft)'">Keep financial records</button>
        <button class="choice" onclick="this.style.background='var(--green-soft)'">Demand receipts</button>
        <button class="choice" onclick="this.style.background='var(--green-soft)'">Whistleblower protection</button>
      </div>
      </div>
    </div>
    <div class="action-row"><span class="section-note">Module 7 of 8</span><button class="btn" onclick="next()">Continue</button></div>`;
}

function renderQuiz(){
  if(quizIndex === 0) {
    view.innerHTML = pageHead("MODULE 8 · ASSESSMENT", "END OF MODULE QUIZ", "") + `
      <div class="card">
        <h2>END OF MODULE QUIZ</h2>
        <p style="font-size:14px;line-height:1.7;color:#596b76;">Please answer the ten questions that follow. You are expected to get all questions right. Should you get any question wrong, you will be given one more opportunity to answer it correctly. Should you get it wrong after the second attempt, you will be required to learn the entire module all over again.</p>
      </div>
      <div class="action-row"><button class="btn" onclick="startQuiz()">Begin Quiz</button></div>`;
    return;
  }

  if(quizIndex > quizData.length) {
    markComplete(8);
    const score = Math.round((quizScore/quizData.length)*100);
    view.innerHTML = `<div class="quiz-shell">${pageHead("COURSE COMPLETE","UNDERSTANDING CORRUPTION IN MALAWI","The full course covers the following modules")}
      <div class="card result">
        <div class="score-circle">${score}%</div>
        <ul class="clean-list" style="text-align:left; display:inline-block; margin-bottom:20px;">
          <li style="border:none; padding:4px 0;">1. Rethinking Corruption</li>
          <li style="border:none; padding:4px 0;">2. Values and Corruption</li>
          <li style="border:none; padding:4px 0;">3. Systems that encourage Corruption</li>
          <li style="border:none; padding:4px 0;">4. Personal Integrity under Pressure</li>
          <li style="border:none; padding:4px 0;">5. Culture versus Ethics in Corruption</li>
          <li style="border:none; padding:4px 0;">6. Justifying Corruption</li>
          <li style="border:none; padding:4px 0;">7. From Awareness to Action</li>
        </ul>
        <h2>UNDERSTANDING CORRUPTION IN MALAWI</h2>
        <a href="#" class="btn" style="text-decoration:none; display:inline-block; margin-top:10px;">Click HERE to Access the Course</a>
      </div>
      </div>`;
    return;
  }

  const q = quizData[quizIndex - 1];
  const pct = Math.round(((quizIndex - 1)/quizData.length)*100);
  view.innerHTML=`<div class="quiz-shell">
    ${pageHead("MODULE 8 · ASSESSMENT","END OF MODULE QUIZ","")}
    <div class="card">
      <div class="quiz-progress"><span>Question ${quizIndex} of ${quizData.length}</span><strong>${pct}% complete</strong></div>
      <div class="quiz-track"><div class="quiz-fill" style="width:${pct}%"></div></div>
      <div class="question">${q.q}</div>
      <div id="quizOptions">${q.options.map((o,i)=>`<button class="quiz-option" onclick="answerQuiz(${i})">${o}</button>`).join("")}</div>
      <div id="quizFeedback" class="feedback"></div>
      <div class="action-row"><span class="section-note">Select one answer.</span><button id="quizNext" class="btn" style="display:none" onclick="nextQuiz()">Next question</button></div>
    </div>
  </div>`;
}

function startQuiz() {
  quizIndex = 1;
  quizScore = 0;
  renderQuiz();
}

function answerQuiz(i){
  const q = quizData[quizIndex - 1];
  const opts = [...document.querySelectorAll(".quiz-option")];
  opts.forEach(x=>x.disabled=true);
  
  const fb = document.getElementById("quizFeedback");
  if(i === q.correct){
    quizScore++;
    opts[i].classList.add("correct");
    fb.className = "feedback show good";
    fb.textContent = "Correct. " + q.feedback;
  }else{
    opts[i].classList.add("wrong");
    opts[q.correct].classList.add("correct");
    fb.className = "feedback show bad";
    fb.textContent = "Incorrect. " + q.feedback;
  }
  document.getElementById("quizNext").style.display="inline-block";
}

function nextQuiz(){
  quizIndex++;
  renderQuiz();
}

renderNav();
renderCurrent();