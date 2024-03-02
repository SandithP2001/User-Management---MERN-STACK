

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserManagerAdmin from "./pages/UserManagerAdmin/UserManagerAdmin";// Import your UserManagerAdmin component
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1 className="app-title">SNAP'N RIDE</h1>
        </header>

        {/* Render the UserManagerAdmin component */}
        <UserManagerAdmin />
      </div>
    </Router>
  );
}

export default App;
