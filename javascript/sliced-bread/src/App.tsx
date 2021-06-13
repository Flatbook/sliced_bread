import "./App.css";
import React, {useEffect, useState} from "react";

function App () {
  const [message, setMessage] = useState<string>("");

    const fetchMessage = async () => {
        const message = await fetch('/api');
        setMessage(await message.text());
    }

    useEffect( () => {
        fetchMessage().then(r => console.log(r));
    },[])

  return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{message}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
  )
}
export default App
