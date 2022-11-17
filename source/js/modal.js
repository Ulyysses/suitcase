const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content");
const buttons = document.querySelectorAll(".open-modal");

const closeModal = e => {
  if (e.target.classList.contains("modal")) {
    modal.removeEventListener("click", closeModal)
    modal.classList.remove("modal_active")
  }
}

buttons.forEach((btn) => {
  btn.addEventListener("click", e => {
    modal.classList.add("modal_active")

    modal.addEventListener("click", closeModal)
  });
});



const submitModal = document.querySelector(".modal__button")

submitModal.addEventListener("click", () => {
  alert("Entraremos em contato com você em breve para esclarecer o pedido :)")
})
