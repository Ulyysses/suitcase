const modal=document.querySelector(".modal"),modalContent=document.querySelector(".modal__content"),buttons=document.querySelectorAll(".open-modal"),inputs=document.querySelectorAll(".form__input"),modalButton=document.querySelector(".modal__button"),postModal=document.querySelector(".post-modal"),closeButton=document.querySelector(".post-modal__button"),postModalContent=document.querySelector(".post-modal__content"),closeModal=o=>{o.target.classList.contains("modal")&&(modal.removeEventListener("click",closeModal),modal.classList.remove("modal_active"))};buttons.forEach((o=>{o.addEventListener("click",(o=>{modal.classList.add("modal_active"),modal.addEventListener("click",closeModal)}))})),modalButton.addEventListener("click",(()=>{const o=[...inputs].filter((o=>!o.checkValidity()));o.length?o.forEach((o=>{o.classList.add("form__input_invalid"),""===o.value&&(o.placeholder="Preencha os dados"),o.oninput=()=>{o.classList.remove("form__input_invalid")}})):(inputs.forEach((o=>{o.classList.remove("form__input_invalid"),o.placeholder="",o.value=""})),modal.classList.remove("modal_active"),postModal.classList.add("post-modal_active"))})),closeButton.addEventListener("click",(()=>{postModal.classList.remove("post-modal_active")})),window.addEventListener("keydown",(o=>{"Escape"===o.code&&postModal.classList.remove("post-modal_active")})),window.addEventListener("keydown",(o=>{"Escape"===o.code&&modal.classList.remove("modal_active")}));