const modal = document.querySelector("#ucla-research-modal");
const openButton = document.querySelector("#ucla-research");
const closeButton = modal.querySelector(".modal-close");

// Open modal
openButton.addEventListener("click", (event) => {
  event.preventDefault();
  modal.showModal();
});

// Close modal
closeButton.addEventListener("click", () => {
  modal.close();
});

// Close when clicking outside the modal content
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
