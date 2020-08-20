import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [serverStatus, setServerStatus] = useState("loading...");

  useEffect(() => {
    fetch('http://localhost:4000/')
      .then((response: Response) => response.text())
      .then((text: string) => {
        setServerStatus(text);
      })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <dl>
          <dt>Response from Server</dt>
          <dd>{serverStatus}</dd>
        </dl>
      </header>
    </div>
  );
}

export default App;
