const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('fileElem');
const imagePreview = document.getElementById('image-preview');

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, (e) => {
        preventDefaults(e);
        dropArea.classList.add('dragover');
    }, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, (e) => {
        preventDefaults(e);
        dropArea.classList.remove('dragover');
    }, false);
});

dropArea.addEventListener('drop', handleDrop, false);
fileInput.addEventListener('change', handleFiles, false);
dropArea.addEventListener('click', () => fileInput.click());

dropArea.querySelector('.file-label').addEventListener('click', (e) => {
    e.stopPropagation();
    fileInput.click();
});

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles({ target: { files } });
}

function handleFiles(e) {
    const files = e.target.files;
    if (files && files[0]) {
        const file = files[0];
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(ev) {
                imagePreview.innerHTML = `<img src="${ev.target.result}" alt="Uploaded Image">`;
            };
            reader.readAsDataURL(file);
        } else {
            imagePreview.innerHTML = '<p>Please upload a valid image file.</p>';
        }
    }
} 