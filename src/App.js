import React, { useEffect, useState } from 'react';
        import './App.css';
import ImageCarousel from "./Carousel";

        function App() {
          const [data, setData] = useState(null);
          const codigo = data;

          useEffect(() => {
            fetch('https://cripto-portal-backend-279316993848.us-central1.run.app/getCode')
              .then(response => response.json())
              .then(data => setData(data))
              .catch(error => console.error('Error fetching data:', error));
          }, []);

          return (
              <div className="App">
                  <ImageCarousel />
                  <div className="code-container">
                      <h1>WiFi Connection Code</h1>
                <h1>{data ? ` ${codigo.OTP}` : 'Cargando...'}</h1>
                  </div>
              </div>

          );
        }

        export default App;