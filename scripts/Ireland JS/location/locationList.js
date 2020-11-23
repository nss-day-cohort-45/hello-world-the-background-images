import { Location } from './location.js'
import { useLocation} from './locationDataProvider.js'

export const LocationList = () => {
    const contentElement = document.querySelector(".location__list")
    const allTheLocations = useLocation ()

    for (const location of useLocation) {
        const locationHTML =Location(location)
        contentElement.innerHTML+= locationHTML
    }
}