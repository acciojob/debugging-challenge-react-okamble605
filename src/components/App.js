import React from 'react';

function App() {
  return (
    <div>
      <h1 className="title">JSX Debugging Challenge</h1>
      <label htmlFor="username">Username:</label>
      <input id="username" type="text" />
      <button onClick={() => alert('Button Clicked!')}>Click Me</button>
    </div>
  );
}

export default App;
