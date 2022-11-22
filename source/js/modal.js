const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content");
const buttons = document.querySelectorAll(".open-modal");
const inputs = document.querySelectorAll(".form__input");
const modalButton = document.querySelector(".modal__button");
const postModal = document.querySelector(".post-modal");
const closeButton = document.querySelector(".post-modal__button");
const postModalContent = document.querySelector(".post-modal__content");

const closeModal = (e) => {
  if (e.target.classList.contains("modal")) {
    modal.removeEventListener("click", closeModal);
    modal.classList.remove("modal_active");
  }
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    modal.classList.add("modal_active");

    modal.addEventListener("click", closeModal);
  });
});

modalButton.addEventListener("click", () => {
  const invalidInputs = [...inputs].filter((input) => {
    return !input.checkValidity();
  });

  if (invalidInputs.length) {
    invalidInputs.forEach((input) => {
      input.classList.add("form__input_invalid");
      if (input.value === "") {
        input.placeholder = "Preencha os dados";
      }
      input.oninput = () => {
        input.classList.remove("form__input_invalid");
      }
    });
  } else {
    inputs.forEach((input) => {
      input.classList.remove("form__input_invalid");
      input.placeholder = "";
      input.value = "";
    });
    modal.classList.remove("modal_active");
    postModal.classList.add("post-modal_active");
  }
});

closeButton.addEventListener("click", () => {
  postModal.classList.remove("post-modal_active");
});

window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    postModal.classList.remove("post-modal_active");
  }
})

window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    modal.classList.remove("modal_active");
  }
})
