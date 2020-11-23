import {useCitizen} from "./CitizenDataProvider.js"

import {Citizen} from "./Citizen.js"

export const CitizenList = () => {
  const contentElement = document.querySelector(".citizen__list")

  const allTheCitizens = useCitizen()

  for (const citizen of allTheCitizens) {
    const citizenhtml = Citizen(citizen)

    contentElement.innerHTML += citizenhtml
  }
}