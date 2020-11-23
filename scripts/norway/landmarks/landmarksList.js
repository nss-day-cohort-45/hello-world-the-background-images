import { landmark } from "./landmarks.js";
import { landmarksData } from "./landmarksDataProvider.js";

export const landmarksList = () => {
  const contentElement = document.querySelector(".landmarksList");

  const allTheLandmarks = landmarksData();

  for (const landmarks of allTheLandmarks) {
    const landmarkHTML = landmark(landmarks);
    contentElement.innerHTML += landmarkHTML;
  }
};
