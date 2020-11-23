import { City} from './city.js' 
import { useCity } from './cityDatatProvider.js'

export const CityList = () => {
    const contentElemnt = document.querySelector(".city__list")
    const allTheCities = useCity ()

    for (const city of useCity) {
        const fishHTML = City(city)
        contentElemnt.innerHTML+= cityHTML
    }
}