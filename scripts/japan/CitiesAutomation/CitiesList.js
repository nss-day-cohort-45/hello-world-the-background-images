import {useCity} from "./CitiesDataProvider.js"

import {City} from './City.js'

export const CityList = () => {
  const contentElement = document.querySelector(".city__list")

  const allTheCities = useCity()

  for (const city of allTheCities) {
    const cityhtml = City(city)

    contentElement.innerHTML += cityhtml
  }
}