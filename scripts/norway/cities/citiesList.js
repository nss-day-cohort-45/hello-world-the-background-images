import { city } from "./cities.js";
import { citiesData } from "./citiesDataProvider.js";

export const citiesList = () => {
  // select element that html will be added after
  const contentElement = document.querySelector(".citiesList");
  
  // call the function for the data and save as a variable. 
  const allTheCities = citiesData()

  for (const cities of allTheCities) {
    const cityHTML = city(cities);
    contentElement.innerHTML += cityHTML;
  }
};
