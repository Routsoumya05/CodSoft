// Add placeholder styling for empty contenteditable fields
function setPlaceholders() {
    const about = document.getElementById('editable-about');
    if (about.innerText.trim() === '') about.innerText = 'Click to edit about me...';
    document.querySelectorAll('.editable-project-title').forEach(el => {
        if (el.innerText.trim() === '') el.innerText = 'Click to edit project title...';
    });
    document.querySelectorAll('.editable-project-desc').forEach(el => {
        if (el.innerText.trim() === '') el.innerText = 'Click to edit project description...';
    });
    const footer = document.getElementById('editable-footer');
    if (footer.innerText.trim() === '') footer.innerText = 'Click to edit footer...';
}

document.addEventListener('DOMContentLoaded', () => {
    setPlaceholders();
    // Prevent contact form submission
    const form = document.querySelector('#contact form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
        });
    }
    // Remove placeholder text on focus
    document.querySelectorAll('[contenteditable]').forEach(el => {
        el.addEventListener('focus', () => {
            if (el.innerText.includes('Click to edit')) el.innerText = '';
        });
        el.addEventListener('blur', setPlaceholders);
    });
}); 