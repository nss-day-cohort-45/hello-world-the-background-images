import { useLandMark } from './landMarkDataProvider.js'
import { LandMarks } from './landMark.js'


export const famousLandMarks= () => {

    const contentElement = document.querySelector('.landMarkList')
    const allTheLandMarks = useLandMark()


    for (const landMark of allTheLandMarks) {
        const landMarkHTML = LandMarks(landMark)

        contentElement.innerHTML += landMarkHTML
    }
}