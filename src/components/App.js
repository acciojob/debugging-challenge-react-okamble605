import React from 'react';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="container">
      <h1>Welcome to My App</h1>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" />
      <button onClick={handleClick}>Click Me</button>
      <img src="logo.png" alt="Logo" />
    </div>
  );
}

export default App;
