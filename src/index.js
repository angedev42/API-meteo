import './style.css';
import { getWeatherData } from './api.js';
import { display7DayForecast } from './weather.js';
import { createMenu } from './menu';
import { renderActivity } from "./renderactivity.js";

createMenu(); // Ajoute le menu en haut de la page

getWeatherData().then(data => {
  if (data) {
    display7DayForecast(data);
  }
});

let cart = {};

const activityContainer = document.getElementById("activityContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function renderCart() {
  console.log("Cart updated:", cart);
}

searchInput.addEventListener("input", () => {
  renderActivity({ cart, activityContainer, searchInput, categoryFilter, renderCart });
});

categoryFilter.addEventListener("change", () => {
  renderActivity({ cart, activityContainer, searchInput, categoryFilter, renderCart });
});

// Premier affichage
renderActivity({ cart, activityContainer, searchInput, categoryFilter, renderCart });
