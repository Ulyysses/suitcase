const openMaterialCard = (event, cardName) => {
  const cards = document.querySelectorAll(".materials-card");
  const buttons = document.querySelectorAll(".materials-list__button");
  const targetCard = document.querySelector(`#${cardName}`);

  for (const card of cards) {
    card.classList.remove("materials-card_active");
  }

  for (const button of buttons) {
    button.classList.remove("tab-button_active");
  }

  if (event.target.classList.contains("tab-button")) {
    event.target.classList.add("tab-button_active");
  } else {
    event.target.parentElement.classList.add("tab-button_active");
  }

  targetCard.classList.add("materials-card_active");
};
