import { citizen } from "./citizens.js";
import { citizensData } from "./citizensDataProvider.js";

export const citizensList = () => {
  // select element that html will be added after
  const contentElement = document.querySelector(".citizensList");

  // call the function for the data and save as a variable.
  const allThecitizens = citizensData();

  for (const citizens of allThecitizens) {
    const citizenHTML = citizen(citizens);
    contentElement.innerHTML += citizenHTML;
  }
};
