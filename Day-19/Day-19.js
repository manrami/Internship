function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const target = document.getElementById(sectionId + '-section');
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
}
