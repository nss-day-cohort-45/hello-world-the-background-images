import { CityList } from "./city.js"
import { useCity } from "./cityDatatProvider"
const allTheCities = useCity()
    for (const city of allTheCities) {
        console.log(city)
    }
    CityList()