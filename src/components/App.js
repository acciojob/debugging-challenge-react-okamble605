import React from 'react';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" />
        
        <button onClick={handleClick}>Click Me</button>
        
        <div style={{ color: 'red', fontSize: '20px' }}>
          This is a styled div.
        </div>
      </header>
    </div>
  );
}

export default App;
