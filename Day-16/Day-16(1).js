function generateResume() {
    const fullName = document.getElementById('fullName').value || 'Alex Carter';
    const email = document.getElementById('email').value || 'alex.carter@ai-forge.com';
    const phone = document.getElementById('phone').value || '+1 (555) 987-6543';
    const education = document.getElementById('education').value.replace(/\n/g, '<br>');
    const skills = document.getElementById('skills').value;
    const projects = document.getElementById('projects').value.replace(/\n/g, '<br>');
    const experience = document.getElementById('experience').value.replace(/\n/g, '<br>');
    const certifications = document.getElementById('certifications').value.replace(/\n/g, '<br>');

    const skillsList = skills ? skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('') : '<li>Advanced AI Integration</li><li>Web Development</li>';

    const resumeHTML = `
        <h1>${fullName}</h1>
        <div class="contact-info">
            ${email} &nbsp;|&nbsp; ${phone}
        </div>
        
        <h3>Education</h3>
        <p>${education || 'B.S. in Computer Science - Tech University (2018 - 2022)'}</p>

        <h3>Skills</h3>
        <ul>${skillsList}</ul>

        <h3>Experience</h3>
        <p>${experience || 'Software Engineer at OpenAI (2022 - Present)<br>Developed scalable machine learning models and intuitive web applications.'}</p>

        <h3>Projects</h3>
        <p>${projects || '<strong>AI Resume Forge:</strong> Built a next-gen resume builder using HTML/CSS/JS with glassmorphism design.'}</p>

        <h3>Certifications</h3>
        <p>${certifications || 'AWS Certified Solutions Architect<br>Google Cloud Associate'}</p>
    `;

    const resumeOutput = document.getElementById('resumeOutput');
    const loadingAi = document.getElementById('loadingAi');
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Hide output and show spinner for AI effect
    resumeOutput.classList.add('hidden');
    downloadBtn.classList.add('hidden');
    loadingAi.classList.remove('hidden');

    // Simulate AI processing time
    setTimeout(() => {
        loadingAi.classList.add('hidden');
        resumeOutput.innerHTML = resumeHTML;
        resumeOutput.classList.remove('hidden');
        downloadBtn.classList.remove('hidden');
    }, 1500);
}

function downloadResume() {
    window.print();
}
