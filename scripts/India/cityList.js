import { useCity } from './cityDataProvider.js'
import { Cities } from './city.js'


export const CitiesToVisit = () => {

    const contentElement = document.querySelector('.citiesList')
    const allTheCities = useCity()


    for (const city of allTheCities) {
        const cityHTML = Cities(city)

        contentElement.innerHTML += cityHTML
    }
}