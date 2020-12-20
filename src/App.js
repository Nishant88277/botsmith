import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

// Components
import Dashboard from "./Components/Dashboard";

// style
import "./app.css"

function App() {
  return (
    <div>
        <Router>
            <Dashboard/>
        </Router>
    </div>
  );
}

export default App;
