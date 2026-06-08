/**
 * Day-21.js - AI Business Assistant Logic Engine
 * Includes Chatbot, Resume Builder, Invoice Generator, and Caption Generator modules.
 */

// Global App Initialization
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initChatbot();
    initCaptions();
    // Scroll reveal animation initialization
    initScrollReveal();
});

// ==========================================
// 1. NAVBAR & NAVIGATION LOGIC
// ==========================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        highlightActiveSection();
    });

    // Mobile Menu Toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

function highlightActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = 'home';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
}

// Scroll Reveal
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.module-card, .glass-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        revealObserver.observe(card);
    });
}

// ==========================================
// 2. MODULE 1: AI CHATBOT LOGIC
// ==========================================
const CHATBOT_KNOWLEDGE = {
    greetings: {
        patterns: ['hello', 'hi', 'hey', 'greetings', 'hola'],
        responses: [
            "Hello there! How can I assist you with your business needs today? 💼",
            "Hi! Ready to optimize your workflow? Ask me anything about chatbot tech, resumes, or billing! 🚀",
            "Greetings! I am your AI Business Assistant. What can I help you build or calculate today?"
        ]
    },
    businessAI: {
        patterns: ['business', 'ai in business', 'automate', 'automation', 'productivity'],
        responses: [
            "AI can automate repetitive tasks, analyze customer sentiments, forecast financial trends, and generate content. Today we are demonstrating 4 core assistant features! 📈",
            "Automating invoice generation and resume creation saves hours of manual labor. Utilizing smart models lets you focus on strategic growth.",
            "Want to boost productivity? Try our automated Resume Builder or Caption Generator below to draft content instantly! ⚡"
        ]
    },
    resumeTips: {
        patterns: ['resume', 'cv', 'career', 'job', 'interview'],
        responses: [
            "A high-scoring ATS resume should contain crisp keywords, structured sections (Summary, Skills, Exp, Edu), and zero complicated multi-column layouts. Fill in our Resume Builder to see a classic clean structure! 📄",
            "Focus on active verbs: 'Developed AI model', 'Led engineering squad', 'Optimized SQL queries'. Quantify results wherever possible!"
        ]
    },
    invoiceTips: {
        patterns: ['invoice', 'billing', 'tax', 'gst', 'payment'],
        responses: [
            "Proper invoicing requires clear customer terms, unique INV sequence numbers, accurate tax rates, and a clean itemized breakdown. Our Invoice module calculates subtotal, tax amounts, and grand totals automatically! 🧾",
            "Always specify the invoice date, due date, and payment terms to get paid faster."
        ]
    },
    default: [
        "That is an interesting topic! As your business assistant, I can help you draft caption templates, build modern resumes, or calculate complex invoices. Type 'resume tips' or 'business' to learn more! 🤖",
        "Interesting query. Let's apply smart AI tools to solve it. Try using the Caption Generator or the automated Invoice builder below to accelerate your workflow!",
        "I'm here to streamline your operations. Ask me about automation, professional resumes, invoice formats, or marketing caption styles! 🎯"
    ]
};

function initChatbot() {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;

    appendMessage(text, 'user');
    input.value = '';

    // Simulate typing delay
    setTimeout(() => {
        const response = getChatResponse(text);
        appendMessage(response, 'bot');
    }, 600);
}

function sendSuggestion(text) {
    appendMessage(text, 'user');
    setTimeout(() => {
        const response = getChatResponse(text);
        appendMessage(response, 'bot');
    }, 600);
}

function appendMessage(text, sender) {
    const chatWindow = document.getElementById('chatWindow');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;

    const icon = sender === 'user' ? 'fa-user' : 'fa-robot';
    const avatar = `<div class="msg-avatar"><i class="fas ${icon}"></i></div>`;
    const bubble = `<div class="msg-bubble">${text}</div>`;

    messageDiv.innerHTML = sender === 'user' ? bubble + avatar : avatar + bubble;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getChatResponse(userText) {
    const cleanText = userText.toLowerCase();

    for (let category in CHATBOT_KNOWLEDGE) {
        if (category === 'default') continue;
        const info = CHATBOT_KNOWLEDGE[category];
        if (info.patterns.some(pattern => cleanText.includes(pattern))) {
            const index = Math.floor(Math.random() * info.responses.length);
            return info.responses[index];
        }
    }

    const defaultResponses = CHATBOT_KNOWLEDGE.default;
    const index = Math.floor(Math.random() * defaultResponses.length);
    return defaultResponses[index];
}

// ==========================================
// 3. MODULE 2: RESUME BUILDER LOGIC
// ==========================================
function generateResume() {
    const name = document.getElementById('r-name').value.trim();
    const title = document.getElementById('r-title').value.trim();
    const email = document.getElementById('r-email').value.trim();
    const phone = document.getElementById('r-phone').value.trim();
    const location = document.getElementById('r-location').value.trim();
    const summary = document.getElementById('r-summary').value.trim();
    const skills = document.getElementById('r-skills').value.trim();
    const experience = document.getElementById('r-experience').value.trim();
    const education = document.getElementById('r-education').value.trim();

    if (!name || !title) {
        alert('Please fill in at least Name and Job Title to generate.');
        return;
    }

    const skillsArray = skills.split(',').map(s => s.trim()).filter(s => s);
    const skillsHTML = skillsArray.map(s => `<span class="resume-skill-tag">${s}</span>`).join('');

    const formattedExperience = experience ? experience : '';

    const resumeHTML = `
        <div class="resume-paper">
            <div class="resume-header-block">
                <h2>${name}</h2>
                <div class="title">${title}</div>
                <div class="resume-meta">
                    ${email ? `<span><i class="fas fa-envelope"></i> ${email}</span>` : ''}
                    ${phone ? `<span><i class="fas fa-phone"></i> ${phone}</span>` : ''}
                    ${location ? `<span><i class="fas fa-map-marker-alt"></i> ${location}</span>` : ''}
                </div>
            </div>
            
            ${summary ? `
            <div class="resume-section-block">
                <h3>Professional Summary</h3>
                <p class="resume-summary-text">${summary}</p>
            </div>
            ` : ''}

            ${skillsHTML ? `
            <div class="resume-section-block">
                <h3>Key Skills</h3>
                <div class="resume-skills-list">${skillsHTML}</div>
            </div>
            ` : ''}

            ${formattedExperience ? `
            <div class="resume-section-block">
                <h3>Work Experience</h3>
                <div class="resume-exp-item">
                    <div class="resume-exp-details">${formattedExperience}</div>
                </div>
            </div>
            ` : ''}

            ${education ? `
            <div class="resume-section-block">
                <h3>Education</h3>
                <div class="resume-edu-item">
                    <p class="resume-exp-title">${education}</p>
                </div>
            </div>
            ` : ''}
        </div>
    `;

    document.getElementById('resumePlaceholder').style.display = 'none';
    const output = document.getElementById('resumeOutput');
    output.style.display = 'block';
    output.innerHTML = resumeHTML;
    document.getElementById('resumePrintBtn').style.display = 'flex';
}

function clearResume() {
    document.getElementById('r-name').value = '';
    document.getElementById('r-title').value = '';
    document.getElementById('r-email').value = '';
    document.getElementById('r-phone').value = '';
    document.getElementById('r-location').value = '';
    document.getElementById('r-summary').value = '';
    document.getElementById('r-skills').value = '';
    document.getElementById('r-experience').value = '';
    document.getElementById('r-education').value = '';
    
    document.getElementById('resumeOutput').style.display = 'none';
    document.getElementById('resumeOutput').innerHTML = '';
    document.getElementById('resumePrintBtn').style.display = 'none';
    document.getElementById('resumePlaceholder').style.display = 'flex';
}

function printResume() {
    window.print();
}

// ==========================================
// 4. MODULE 3: INVOICE GENERATOR LOGIC
// ==========================================
function addRow() {
    const tbody = document.getElementById('itemsBody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><input type="text" class="item-input item-desc" placeholder="Service / Product"></td>
        <td><input type="number" class="item-input item-qty" value="1" oninput="recalcInvoice()"></td>
        <td><input type="number" class="item-input item-rate" placeholder="0.00" oninput="recalcInvoice()"></td>
        <td class="item-amount">₹0.00</td>
        <td><button class="btn-remove-row" onclick="removeRow(this)"><i class="fas fa-times"></i></button></td>
    `;
    tbody.appendChild(row);
    recalcInvoice();
}

function removeRow(btn) {
    const row = btn.closest('tr');
    row.remove();
    recalcInvoice();
}

function recalcInvoice() {
    const rows = document.querySelectorAll('#itemsBody tr');
    let subtotal = 0;

    rows.forEach(row => {
        const qty = parseFloat(row.querySelector('.item-qty').value) || 0;
        const rate = parseFloat(row.querySelector('.item-rate').value) || 0;
        const amt = qty * rate;
        row.querySelector('.item-amount').textContent = `₹${amt.toFixed(2)}`;
        subtotal += amt;
    });

    const taxRate = parseFloat(document.getElementById('inv-tax').value) || 0;
    const taxAmount = (subtotal * taxRate) / 100;
    const total = subtotal + taxAmount;

    document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('taxLabel').textContent = taxRate;
    document.getElementById('taxAmount').textContent = `₹${taxAmount.toFixed(2)}`;
    document.getElementById('grandTotal').textContent = `₹${total.toFixed(2)}`;
}

function generateInvoice() {
    const biz = document.getElementById('inv-biz').value.trim() || 'My Business Ltd.';
    const num = document.getElementById('inv-num').value.trim() || 'INV-2026-001';
    const client = document.getElementById('inv-client').value.trim() || 'Valued Client';
    const invDate = document.getElementById('inv-date').value || '2026-06-07';
    const dueDate = document.getElementById('inv-due').value || '2026-06-21';
    const taxRate = parseFloat(document.getElementById('inv-tax').value) || 0;

    const rows = document.querySelectorAll('#itemsBody tr');
    let itemsHTML = '';
    let subtotal = 0;

    rows.forEach(row => {
        const desc = row.querySelector('.item-desc').value.trim() || 'Consulting Services';
        const qty = parseFloat(row.querySelector('.item-qty').value) || 0;
        const rate = parseFloat(row.querySelector('.item-rate').value) || 0;
        const amt = qty * rate;
        subtotal += amt;

        itemsHTML += `
            <tr>
                <td>${desc}</td>
                <td>${qty}</td>
                <td>₹${rate.toFixed(2)}</td>
                <td>₹${amt.toFixed(2)}</td>
            </tr>
        `;
    });

    const taxAmount = (subtotal * taxRate) / 100;
    const total = subtotal + taxAmount;

    const invoiceHTML = `
        <div class="invoice-paper">
            <div class="inv-header">
                <div class="inv-company">
                    <h2>${biz}</h2>
                    <p>Techno Guide Internship Partner</p>
                </div>
                <div class="inv-title-block">
                    <h1>INVOICE</h1>
                    <p># ${num}</p>
                </div>
            </div>

            <div class="inv-details-grid">
                <div class="inv-bill-to">
                    <h3>Bill To</h3>
                    <p>${client}</p>
                </div>
                <div class="inv-meta">
                    <div class="inv-meta-row"><span>Invoice Date:</span><span>${invDate}</span></div>
                    <div class="inv-meta-row"><span>Due Date:</span><span>${dueDate}</span></div>
                </div>
            </div>

            <table class="inv-table">
                <thead>
                    <tr>
                        <th style="text-align: left;">Description</th>
                        <th>Qty</th>
                        <th>Rate</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsHTML}
                </tbody>
            </table>

            <div class="inv-summary-section">
                <div class="inv-summary-box">
                    <div class="inv-summary-row"><span>Subtotal:</span><span>₹${subtotal.toFixed(2)}</span></div>
                    <div class="inv-summary-row"><span>Tax (${taxRate}%):</span><span>₹${taxAmount.toFixed(2)}</span></div>
                    <div class="inv-summary-row grand-total"><span>Grand Total:</span><span>₹${total.toFixed(2)}</span></div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('invoicePlaceholder').style.display = 'none';
    const output = document.getElementById('invoiceOutput');
    output.style.display = 'block';
    output.innerHTML = invoiceHTML;
    document.getElementById('invoicePrintBtn').style.display = 'flex';
}

function printInvoice() {
    window.print();
}

// ==========================================
// 5. MODULE 4: CAPTION GENERATOR LOGIC
// ==========================================
let selectedTone = 'energetic';

function initCaptions() {
    const chips = document.querySelectorAll('.tone-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            selectedTone = chip.getAttribute('data-tone');
        });
    });
}

function generateCaptions() {
    const product = document.getElementById('cap-product').value.trim() || 'AI Business Nexus';
    const usp = document.getElementById('cap-usp').value.trim() || 'Save 5 hours daily using smart widgets';
    const audience = document.getElementById('cap-audience').value.trim() || 'Founders & Freelancers';
    const platform = document.getElementById('cap-platform').value;

    const templates = {
        energetic: {
            instagram: `🔥 Say goodbye to manual busywork! Introducing ${product} — designed specifically for ${audience}! 🚀\n\n🎯 Benefit: ${usp}.\n\nIt is clean, lightning fast, and fully automated. Hit the link in bio to start right now! 👇`,
            twitter: `🚀 Boost your workflow with ${product}! Built for ${audience} to ensure you ${usp}. No fluff, pure power. Get started today! ⚡`,
            linkedin: `Struggling to scale your daily tasks? ${product} helps ${audience} streamline operations by letting you ${usp}.\n\nReady to transform your productivity? Let's connect! 📈`,
            facebook: `✨ Exciting news! If you are part of our ${audience} group, ${product} is here to solve your biggest productivity bottlenecks.\n\n👉 Core Advantage: ${usp}.\n\nClick below to try it today!`
        },
        professional: {
            instagram: `Elevate your output with ${product}. A bespoke solution designed to empower ${audience}.\n\nKey advantage: ${usp}.\n\nDiscover the next stage of smart business automation at the link in bio.`,
            twitter: `Optimize efficiency with ${product}. Specifically crafted for ${audience} to address workflow bottlenecks through: ${usp}.`,
            linkedin: `Professional excellence requires smart tooling. ${product} delivers a structured dashboard for ${audience} to ${usp}.\n\nHow is your organization automating daily logistics?`,
            facebook: `Introducing ${product}, the professional grade automation utility built for ${audience}.\n\nBenefit: ${usp}.\n\nContact us today for a full demonstration.`
        },
        funny: {
            instagram: `Status update: Replacing my 5th coffee cup with ${product} ☕🤖\n\nMade for ${audience} who just want to ${usp}.\n\nLink in bio before the robots take over completely!`,
            twitter: `Why work hard when you can let ${product} do it? Built for ${audience} so you can ${usp}. Highly recommended by 10/10 lazy geniuses. 😉`,
            linkedin: `Plot twist: You don't need a larger team. You just need ${product}. Built for ${audience} so you can finally ${usp}.\n\nLet's be honest, it is cooler than Excel.`,
            facebook: `Me: I will stay organized today.\nAlso me: Uses ${product} to instantly ${usp}. Great news for all ${audience} looking to save sanity.`
        },
        inspirational: {
            instagram: `Every milestone begins with a single step towards smart delegation. ${product} inspires ${audience} to reach higher by helping you ${usp}. ✨\n\nUnlock your real potential today. Link in bio.`,
            twitter: `Dream big. Scale faster. ${product} enables ${audience} to break boundaries and ${usp}. Your time is now. 🌟`,
            linkedin: `True innovation isn't about working harder; it is about building systems that scale. ${product} gives ${audience} the leverage to ${usp}.\n\nWhat is your vision for automation?`,
            facebook: `Empower your journey. ${product} is dedicated to helping ${audience} achieve exceptional results: ${usp}.\n\nJoin the automation revolution today.`
        },
        luxury: {
            instagram: `Sophistication meets pure utility. Presenting ${product} — an elite automation suite engineered for ${audience}.\n\nExperience the luxury of saving time: ${usp}.\n\nInquire via the bio link.`,
            twitter: `Redefining business elegance. ${product} offers ${audience} the ultimate convenience: ${usp}. 👑`,
            linkedin: `Time is the ultimate luxury. ${product} provides high-tier automation for ${audience}, allowing you to ${usp} with effortless grace.\n\nDiscover elite productivity.`,
            facebook: `Crafted for the discerning professional. ${product} brings premium workflows to ${audience}. Our technology allows you to ${usp}.\n\nInquire within.`
        }
    };

    const hashtags = {
        instagram: "#AI #BusinessAssistant #GrowthHacking #Productivity #Automate #MarketingTools",
        twitter: "#AI #Productivity #Workflow #Tech",
        linkedin: "#ArtificialIntelligence #BusinessAutomation #Productivity #Innovation #Leadership",
        facebook: "#AIBusiness #Automation #MarketingTips #Entrepreneurs"
    };

    let outputHTML = '<div class="generated-captions-list">';

    if (platform === 'all') {
        const platforms = ['instagram', 'twitter', 'linkedin', 'facebook'];
        platforms.forEach(p => {
            const cap = templates[selectedTone][p];
            const hash = hashtags[p];
            outputHTML += createCaptionCard(p, cap, hash);
        });
    } else {
        const cap = templates[selectedTone][platform];
        const hash = hashtags[platform];
        outputHTML += createCaptionCard(platform, cap, hash);
    }

    outputHTML += '</div>';

    document.getElementById('captionPlaceholder').style.display = 'none';
    const output = document.getElementById('captionOutput');
    output.style.display = 'block';
    output.innerHTML = outputHTML;
}

function createCaptionCard(platform, text, hash) {
    const icon = {
        instagram: 'fab fa-instagram',
        twitter: 'fab fa-twitter',
        linkedin: 'fab fa-linkedin-in',
        facebook: 'fab fa-facebook-f'
    }[platform];

    return `
        <div class="caption-result-card">
            <div class="cap-platform-header">
                <span class="platform-name"><i class="${icon}"></i> ${platform}</span>
                <button class="btn-copy" onclick="copyCaption(this)" title="Copy Caption"><i class="far fa-copy"></i></button>
            </div>
            <p class="cap-text">${text}</p>
            <p class="cap-hashtags">${hash}</p>
        </div>
    `;
}

function copyCaption(btn) {
    const card = btn.closest('.caption-result-card');
    const text = card.querySelector('.cap-text').innerText;
    const hash = card.querySelector('.cap-hashtags').innerText;
    const fullText = `${text}\n\n${hash}`;

    navigator.clipboard.writeText(fullText).then(() => {
        const icon = btn.querySelector('i');
        icon.className = 'fas fa-check';
        btn.style.background = 'var(--success)';
        btn.style.borderColor = 'var(--success)';
        btn.style.color = '#fff';

        setTimeout(() => {
            icon.className = 'far fa-copy';
            btn.style.background = 'rgba(255, 255, 255, 0.05)';
            btn.style.borderColor = 'var(--glass-border)';
            btn.style.color = 'var(--text-muted)';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
