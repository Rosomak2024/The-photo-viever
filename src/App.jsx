import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://api.pexels.com/v1/curated?page=2&per_page=10", {
      headers: {
        Authorization:
          "N2Wa10zVQIclQiHpwbqdrNc5NypUMX9z9YYiv9alEcr8yuUKmhRwylJx", // Authorization header with the API key
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos); // 'photos' key from the API response contains the array of photos
        console.log("data", data);
      })
      .catch((error) => console.error("Error fetching the photos:", error));
  }, []);

  return (
    <div>
      {photos.length > 0 ? (
        photos.map((photo) => (
          <div className="photo_container" key={photo.id}>
            <img
              className="photo"
              src={photo.src.medium}
              // alt={photo.photographer}
            ></img>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default App;
