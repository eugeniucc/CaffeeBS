const tabs = document.querySelectorAll(".menu_tabs-list--item");
const cards = document.querySelectorAll(".menu_card");

function filterCards(category) {
  cards.forEach((card) => {
    if (category === "All" || card.getAttribute("data-category") === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.getAttribute("data-category");
    filterCards(category);
    tabs.forEach((el) => {
      el.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

filterCards("All");
