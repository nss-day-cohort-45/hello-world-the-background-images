import { useCitizen } from './citizensDataProvider.js'
import { Citizens } from './citizens.js'


export const famousCitizens = () => {

    const contentElement = document.querySelector('.citizensList')
    const allTheCitizens = useCitizen()


    for (const citizen of allTheCitizens) {
        const citizenHTML = Citizens(citizen)

        contentElement.innerHTML += citizenHTML
    }
}