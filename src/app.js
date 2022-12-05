import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (city) {
      setLoading(true);
      fetch(`https://api.example.com/city-info?city=${encodeURIComponent(city)}`)
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLoading(false);
        });
    }
  }, [city]);

  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          setCity(event.target.city.value);
        }}
      >
        <input type="text" name="city" placeholder="Enter city name" />
        <button type="submit">Search</button>
      </form>
      {loading && <div class="loading">Loading...</div>}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <p>Population: {data.population}</p>
          <p>Weather: {data.weather}</p>
        </div>
      )}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
