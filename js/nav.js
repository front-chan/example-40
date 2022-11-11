const sideBtn = document.querySelector(".side-btn");
const closeBtn = document.querySelector(".close-btn");
const modalBox = document.getElementById("modal-box");

sideBtn.addEventListener("click", () => {
  modalBox.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  modalBox.style.display = "none";
});
