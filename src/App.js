import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

// Components
import Dashboard from "./Components/Dashboard";

// style
import "./app.css"

function App() {
    // if (window.performance) {
    //     if (performance.navigation.type === 1) {
    //         localStorage.clear();
    //     }
    // }
  return (
    <div>
        <Router>
            <Dashboard/>
        </Router>
    </div>
  );
}

export default App;
