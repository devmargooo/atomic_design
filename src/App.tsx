import React from 'react';
import './App.css';
import {LabelledInput} from "./molecules/LabelledInput";

function App() {
  const [name, setName] = React.useState<string>("");
  return (
    <div className="App">
        <LabelledInput value={name} setValue={setName} label="Кто вы?:)"/>
    </div>
  );
}

export default App;
