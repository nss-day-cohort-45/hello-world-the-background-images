import { City } from './city.js'
import { useCity } from './cityDataProvider.js'

export const CityList = () => {
    const contentElement = document.querySelector(".city__list")
    const allTheCities =useCity ()

    for (const city of allTheCities) {
        const cityHTML =City(city)
        contentElement.innerHTML+= cityHTML
    }
}
