import React, { useState } from 'react';
import { TextField, Button } from 'react-vaadin-components';
function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <h1>Hilla world!</h1>
      <TextField
        label="Name"
        clearButtonVisible
        onValueChanged={(e) => setName(e.detail.value)}></TextField>
      <Button
        theme="primary"
        disabled={!name}
        onClick={(e) => console.log(`Hello ${name}`)}>
        Say Hello
      </Button>
    </div>
  );
}

export default App;
