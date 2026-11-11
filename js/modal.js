// Open and close all project dialogs from their corresponding project cards.
const projectCards = document.querySelectorAll("[data-modal-target]");

projectCards.forEach((card) => {
  const modalSelector = card.dataset.modalTarget;
  const modal = document.querySelector(modalSelector);

  if (!modal) {
    console.warn(`No project modal found for selector: ${modalSelector}`);
    return;
  }

  const closeButton = modal.querySelector(".modal-close");

  // Open the matching dialog.
  card.addEventListener("click", (event) => {
    event.preventDefault();
    modal.showModal();
  });

  // Close from the close button.
  closeButton?.addEventListener("click", () => {
    modal.close();
  });

  // Close when the user clicks the backdrop.
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
});

// Native <dialog> already closes on Escape. The browser also restores focus
// to the element that opened the dialog.
