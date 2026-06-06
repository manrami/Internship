const resumeData = {
    name: "Alex Carter",
    contact: "alex.carter@example.com | (555) 987-6543 | LinkedIn: /in/alexcarter",
    objective: "Dynamic software engineer and AI enthusiast seeking to leverage advanced skills in full-stack development to build cutting-edge, user-centric solutions.",
    education: "B.S. in Computer Science - University of Technology (2020 - 2024)<br>GPA: 3.9/4.0",
    skills: "JavaScript, React, Node.js, HTML/CSS, Python, AI Integrations, SQL, UI/UX Design",
    projects: "<strong>AI Resume Builder:</strong> Built a dynamic e-resume platform using JS and CSS Glassmorphism.<br><br><strong>Advanced Chatbot:</strong> Developed a responsive AI chatbot with an advanced NLP-like logic engine.",
    certifications: "AWS Certified Developer - Associate<br>Google Cloud Fundamentals",
    languages: "English (Native), Spanish (Conversational)"
};

function selectTemplate(type) {
    const display = document.getElementById('resumeDisplay');
    const loading = document.getElementById('aiLoading');
    const downloadBtn = document.getElementById('downloadBtn');

    display.classList.add('hidden');
    downloadBtn.classList.add('hidden');
    loading.classList.remove('hidden');

    let html = '';

    if (type === 'fresher') {
        html = `
            <h1>${resumeData.name}</h1>
            <p><strong>Contact:</strong> ${resumeData.contact}</p>
            <h3>Career Objective</h3><p>${resumeData.objective}</p>
            <h3>Education</h3><p>${resumeData.education}</p>
            <h3>Skills</h3><p>${resumeData.skills}</p>
            <h3>Projects</h3><p>${resumeData.projects}</p>
            <h3>Certifications</h3><p>${resumeData.certifications}</p>
            <h3>Languages</h3><p>${resumeData.languages}</p>
        `;
    } else if (type === 'professional') {
        html = `
            <h1>${resumeData.name}</h1>
            <div class="contact">${resumeData.contact}</div>
            <h3>Career Objective</h3><p>${resumeData.objective}</p>
            <h3>Experience & Projects</h3><p>${resumeData.projects}</p>
            <h3>Education</h3><p>${resumeData.education}</p>
            <h3>Skills</h3><p>${resumeData.skills}</p>
            <h3>Certifications</h3><p>${resumeData.certifications}</p>
        `;
    } else if (type === 'modern') {
        html = `
            <div class="left-col">
                <h1>${resumeData.name}</h1>
                <p>${resumeData.contact.replace(/ \| /g, '<br><br>')}</p>
                <h3>Skills</h3><p>${resumeData.skills.replace(/, /g, '<br>')}</p>
                <h3>Languages</h3><p>${resumeData.languages.replace(/, /g, '<br>')}</p>
                <h3>Certifications</h3><p>${resumeData.certifications}</p>
            </div>
            <div class="right-col">
                <h3>Career Objective</h3><p>${resumeData.objective}</p>
                <h3>Education</h3><p>${resumeData.education}</p>
                <h3>Projects</h3><p>${resumeData.projects}</p>
            </div>
        `;
    }

    // Simulate AI loading the template
    setTimeout(() => {
        loading.classList.add('hidden');
        display.className = `resume-display tpl-${type}`; // Reset classes and add template class
        display.innerHTML = html;
        display.classList.remove('hidden');
        downloadBtn.classList.remove('hidden');
    }, 800);
}
