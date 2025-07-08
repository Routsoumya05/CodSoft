const headerImg = document.getElementById('header-profile-img');
const headerInput = document.getElementById('header-img-input');

headerImg.addEventListener('click', () => {
    headerInput.click();
});

headerInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(ev) {
            headerImg.src = ev.target.result;
        };
        reader.readAsDataURL(file);
    }
}); 