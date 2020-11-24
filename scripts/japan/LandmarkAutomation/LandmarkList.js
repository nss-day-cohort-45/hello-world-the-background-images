import {useLandmark} from "./LandmarkDataprovider.js"

import {Landmark} from "./Landmark.js"

export const landmarkCollection = () => {
  const contentElement = document.querySelector(".landmark__list")

  const allTheLandmarks = useLandmark()

  for (const landmark of allTheLandmarks) {
    const landmarkhtml = Landmark(landmark)

    contentElement.innerHTML += landmarkhtml
  }
}