// modal popup
function createPopupModal(title, content, subContent) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const overlay = document.createElement("div");
  overlay.classList.add("modal-overlay");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");

  const modalTitle = document.createElement("h2");
  modalTitle.textContent = title;

  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times";
  closeButton.classList.add("close-btn");

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");
  modalBody.innerHTML = content;
  subContent.style.color = "blue";

  modalBody.appendChild(subContent);

  // append elements :
  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);

  modal.appendChild(overlay);
  modal.appendChild(modalContent);

  document.body.appendChild(modal);

  // Show Modal :
  modal.style.display = "flex";

  // close modal logic :
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.removeChild(modal);
  });

  overlay.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

const subContent = document.createElement("p");

subContent.innerText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat nemo voluptates officia asperiores corporis ea, eos corrupti provident vel quo?";

document.getElementById("openModalBtn").onclick = () => {
  createPopupModal("Hello!", "This is a custom modal popup.", subContent);
};

// are u sure delete modal popup :
function createPopupModal(message, deleteText, cancelText, deletedMessage) {
  console.log(message, deleteText, cancelText);
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const overlay = document.createElement("div");
  overlay.classList.add("modal-overlay");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  const modalHeader = document.createElement("h2");
  modalHeader.classList.add("modal-header");
  modalHeader.innerText = message;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteBtn");
  deleteButton.innerText = deleteText;

  const cancelButton = document.createElement("button");
  cancelButton.classList.add("cancelBtn");
  cancelButton.innerText = cancelText;

  const deleted = document.createElement("div");
  deleted.classList.add("deleted");

  const deletedSpan = document.createElement("span");
  deletedSpan.innerText = deletedMessage;

  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times";
  closeButton.classList.add("close-btn");

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body");

  modal.appendChild(modalContent);
  modal.appendChild(overlay);

  modalContent.appendChild(modalHeader);

  buttons.appendChild(deleteButton);
  buttons.appendChild(cancelButton);

  modalContent.appendChild(buttons);

  deleted.appendChild(deletedSpan);

  document.body.appendChild(modal);

  modal.style.display = "flex";

  overlay.onclick = () => {
    modal.style.display = "none";
    document.body.removeChild(modal);
  };

  closeButton.onclick = () => {
    modal.style.display = "none";
    document.body.removeChild(modal);
  };

  cancelButton.onclick = () => {
    modal.style.display = "none";
    document.body.removeChild(modal);
  };

  deleteButton.onclick = () => {
    console.log("user deleted..");
    modal.style.display = "none";

    document.body.removeChild(modal);
    document.body.appendChild(deleted);
  };
}

document.getElementById("openModalBtn").onclick = () => {
  createPopupModal(
    "Are U Sure U Want To Delete ?",
    "Delete",
    "Cancel",
    "User Deleted"
  );
};
