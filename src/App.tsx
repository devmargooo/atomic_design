import React from 'react';
import './App.css';
import {FormBody} from "./organisms/FormBody";

function App() {
  const [name, setName] = React.useState<string>("");
  return (
    <div className="App">
        <FormBody fields={[{
            value:name,
            setter:setName,
            label:"Кто вы?:)"
        }]}/>
    </div>
  );
}

export default App;
