// Download as PDF functionality using html2canvas and jsPDF
// You need to include html2canvas and jsPDF via CDN in your HTML for this to work

document.getElementById('download-pdf-btn').addEventListener('click', async function() {
    const btn = this;
    btn.disabled = true;
    btn.innerHTML = '...';
    // Hide the button while capturing
    btn.style.visibility = 'hidden';
    // Exclude the button from the PDF
    const elementsToHide = [btn];
    // Use html2canvas to capture the body
    const body = document.body;
    const originalScroll = window.scrollY;
    window.scrollTo(0, 0);
    const canvas = await html2canvas(body, {
        ignoreElements: (el) => elementsToHide.includes(el)
    });
    window.scrollTo(0, originalScroll);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'pt', 'a4');
    // Calculate width/height for A4
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    let position = 0;
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    // If content is longer than one page
    let heightLeft = imgHeight - pageHeight;
    while (heightLeft > 0) {
        position = position - pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
    }
    pdf.save('portfolio.pdf');
    btn.disabled = false;
    btn.innerHTML = '&#128190;';
    btn.style.visibility = 'visible';
}); 