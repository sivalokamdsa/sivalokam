function downloadPdf() {
  const element = document.getElementById("resume_content");

  const options = {
    margin: 0.5,
    filename: "SivaLokam_Resume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(options).from(element).save();
}
