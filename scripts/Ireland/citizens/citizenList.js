import { Citizen } from './citizens.js'
import { useCitizen } from './citizenDataProvider.js'

export const CitizenList = () => {
    const contentElement = document.querySelector(".citizens__list")
    const allTheCitizens =useCitizen ()

    for (const citizens of allTheCitizens) {
        const citizensHTML = Citizen(citizens)
        contentElement.innerHTML += citizensHTML
    }
}