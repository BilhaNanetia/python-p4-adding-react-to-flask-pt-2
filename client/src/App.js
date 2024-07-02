import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/movies")
      .then((response) => response.json())
      .then((movies) => console.log(movies))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  return <h1>Check the console for a list of movies!</h1>;
}

export default App;
