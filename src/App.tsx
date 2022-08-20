import React from 'react';
import './App.css';
import {Input} from "./atoms/Input/Input";

function App() {
  const [name, setName] = React.useState<string>("");
  return (
    <div className="App">
        <Input value={name} setValue={setName}/>
    </div>
  );
}

export default App;
