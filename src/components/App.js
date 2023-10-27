// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImageUrl, setDogImageUrl] = useState(null);

  useEffect(() => {
    // Send a fetch request to get a random dog image
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        setDogImageUrl(data.message);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {dogImageUrl ? (
        <img src={dogImageUrl} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
