import React from "react";

function App() {
  return (
    <div className="container">
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" onChange={() => console.log("Changed")} />
      <button onClick={() => alert("Clicked!")}>Click Me</button>
    </div>
  );
}

export default App;
