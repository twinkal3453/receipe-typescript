import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('')
  const name: string = "Twinkal";

  const getValue = (data: string) => {
    console.log("Line 8", data)
    setUserName(name)
  } 

  useEffect(() => {
    getValue(name)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {userName}
        </p>
      </header>
    </div>
  );
}

export default App;
