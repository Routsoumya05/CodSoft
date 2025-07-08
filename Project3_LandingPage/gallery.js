document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close');
    const galleryLinks = document.querySelectorAll('.gallery-link img');

    galleryLinks.forEach(img => {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'flex';
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        modalImg.src = '';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalImg.src = '';
        }
    });
}); 