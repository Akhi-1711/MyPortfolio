
function openCertificate(certLink) {
  window.open(certLink, "_blank");
}

function downloadResume() {
  window.open("resume.pdf", "_blank");
}
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "Toggle Dark Mode";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
const style = document.createElement("style");
style.innerHTML = `
  .dark-mode {
    background: #121212;
    color: #f1f1f1;
  }
  .dark-mode .card {
    background: #1e1e1e;
    border-color: #333;
  }
  .dark-mode .header {
    background: #000;
  }
`;
document.head.appendChild(style);
