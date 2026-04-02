import { activity } from "./activities.js";

export function renderActivity({ card, activityContainer, searchInput, categoryFilter, renderCart }) {
  activityContainer.innerHTML = '';

  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filteredActivity = activity.filter(activity => {
    const matchCategory = selectedCategory === "all" || activity.category === selectedCategory;
    const matchSearch = activity.name.toLowerCase().includes(searchTerm);
    return matchCategory && matchSearch;
  });

  filteredActivity.forEach(activity => {
    const card = document.createElement("div");
    card.className = "card cardActivity";

    const img = document.createElement("img");
    img.src = activity.image;
    card.appendChild(img);

    const title = document.createElement("h5");
    title.textContent = activity.name;

    const description = document.createElement("p");
    description.textContent = activity.description;

    const info = document.createElement("div");
    info.className = "card-body";
    info.appendChild(title);
    info.appendChild(description);

    card.appendChild(info);
    activityContainer.appendChild(card);
  });
}
