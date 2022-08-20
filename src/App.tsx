import React from 'react';
import './App.css';
import {FormBody} from "./organisms/FormBody";
import {Form} from "./templates/Form";

function App() {
  const [name, setName] = React.useState<string>("");
  return (
    <div className="App">
        <Form
            header="Форма"
            fields={[{
                value:name,
                setter:setName,
                label:"Кто вы?:)"
            }]}
        />
    </div>
  );
}

export default App;
