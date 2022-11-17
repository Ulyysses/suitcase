const openEcologyCard = (event, cardName) => {
  const cards = document.querySelectorAll(".ecology-card");
  const buttons = document.querySelectorAll(".ecology-list__button");
  const targetCard = document.querySelector(`#${cardName}`);

  for (const card of cards) {
    card.classList.remove("ecology-card_active");
  }

  for (const button of buttons) {
    button.classList.remove("tab-button_active");
  }

  if (event.target.classList.contains("tab-button")) {
    event.target.classList.add("tab-button_active");
  } else {
    event.target.parentElement.classList.add("tab-button_active");
  }

  targetCard.classList.add("ecology-card_active");
};
